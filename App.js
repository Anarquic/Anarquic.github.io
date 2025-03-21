// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('SW Registrado'))
        .catch(err => console.log('SW Error:', err));
}

// Lógica de animación principal...
