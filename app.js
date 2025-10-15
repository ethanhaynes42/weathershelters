// Called when user taps “Use My Location” or whatever your UI trigger is
function locateShelters() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      // Modify this search URL if you want a different default map or provider
      window.location.href = `https://www.google.com/maps/search/storm+shelter/@${lat},${lon},14z`;
    },
    (err) => {
      console.error("Geolocation error:", err);
      alert("Unable to retrieve your location. Please allow location access or try again.");
    }
  );
}

// Register the service worker for PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/weathershelters/service-worker.js")
      .then((reg) => {
        console.log("✅ Service Worker registered: ", reg);
      })
      .catch((err) => {
        console.error("Service Worker registration failed:", err);
      });
  });
}
