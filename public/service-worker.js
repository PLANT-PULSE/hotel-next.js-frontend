/**
 * LuxeStay Hotel - Service Worker
 * Offline-first caching strategy for the hotel website
 * 
 * This service worker implements:
 * - Cache-first strategy for static assets (CSS)
, JS, Images * - Network-first strategy for HTML pages
 * - Background sync for booking requests
 * - Offline fallback pages
 */

// Cache configuration
const CACHE_NAME = 'luxestay-v1';
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/offline.html',
    '/styles.css',
    '/booking.css',
    '/script.js',
    '/booking.js',
    '/rooms.css',
    '/events.css',
    '/contact.css',
    '/loyalty.css',
    '/rooms.js',
    '/events.js',
    '/contact.js',
    '/loyalty.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Precaching core assets');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] Skip waiting on install');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[Service Worker] Precaching failed:', err);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[Service Worker] Deleting old cache:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                console.log('[Service Worker] Claiming clients');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests (CDN resources)
    if (url.origin !== location.origin) {
        // For external resources, try network first
        event.respondWith(networkFirst(request));
        return;
    }

    // Determine caching strategy based on resource type
    if (isStaticAsset(url.pathname)) {
        // Cache-first for static assets (CSS, JS, Images, Fonts)
        event.respondWith(cacheFirst(request));
    } else if (isHTMLPage(url.pathname)) {
        // Network-first for HTML pages (try network, fallback to cache)
        event.respondWith(networkFirst(request));
    } else {
        // Default: try cache, then network
        event.respondWith(cacheFirst(request));
    }
});

/**
 * Cache-first strategy
 * Check cache first, if not found, fetch from network and cache
 */
async function cacheFirst(request) {
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
        // Return cached version and update cache in background
        updateCache(request);
        return cachedResponse;
    }
    
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.error('[Service Worker] Cache-first fetch failed:', error);
        return new Response('Offline - Resource not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

/**
 * Network-first strategy
 * Try network first, if fails, fallback to cache
 */
async function networkFirst(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse.clone());
        }
        
        return networkResponse;
    } catch (error) {
        console.log('[Service Worker] Network failed, trying cache:', request.url);
        
        const cachedResponse = await caches.match(request);
        
        if (cachedResponse) {
            return cachedResponse;
        }
        
        // If it's an HTML page and no cache, show offline page
        if (isHTMLPage(request.url)) {
            const offlineResponse = await caches.match(OFFLINE_URL);
            if (offlineResponse) {
                return offlineResponse;
            }
        }
        
        // Return offline error
        return new Response('Offline - Content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
                'Content-Type': 'text/html'
            })
        });
    }
}

/**
 * Update cache in background
 */
async function updateCache(request) {
    try {
        const networkResponse = await fetch(request);
        
        if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, networkResponse);
        }
    } catch (error) {
        // Silently fail - background update
    }
}

/**
 * Check if request is for static asset
 */
function isStaticAsset(pathname) {
    const staticExtensions = [
        '.css', '.js', '.json',
        '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp',
        '.woff', '.woff2', '.ttf', '.eot', '.otf',
        '.mp3', '.mp4', '.webm', '.ogg', '.wav',
        '.pdf', '.doc', '.docx'
    ];
    
    return staticExtensions.some(ext => pathname.endsWith(ext));
}

/**
 * Check if request is for HTML page
 */
function isHTMLPage(url) {
    return url.endsWith('.html') || 
           url.endsWith('/') || 
           !url.includes('.');
}

/**
 * Handle background sync for booking requests
 */
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-booking') {
        event.waitUntil(syncBookings());
    }
});

/**
 * Sync pending booking requests when back online
 */
async function syncBookings() {
    console.log('[Service Worker] Syncing pending bookings...');
    
    try {
        const cache = await caches.open(CACHE_NAME);
        const requests = await cache.match('/api/pending-bookings');
        
        if (requests) {
            const pendingBookings = await requests.json();
            
            for (const booking of pendingBookings) {
                try {
                    // In production, this would send to actual backend
                    console.log('[Service Worker] Syncing booking:', booking);
                    
                    // Remove from pending after successful sync
                    await cache.delete('/api/pending-bookings');
                } catch (error) {
                    console.error('[Service Worker] Failed to sync booking:', error);
                }
            }
        }
    } catch (error) {
        console.error('[Service Worker] Sync failed:', error);
    }
}

/**
 * Handle push notifications (for future use)
 */
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        
        const options = {
            body: data.body,
            icon: '/images/logo.jpeg',
            badge: '/images/logo.jpeg',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: data.id
            },
            actions: [
                { action: 'view', title: 'View' },
                { action: 'close', title: 'Close' }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

/**
 * Handle notification click
 */
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

console.log('[Service Worker] Script loaded');
