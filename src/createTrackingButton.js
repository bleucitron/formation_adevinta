export default function createTrackingButton() {
  let isTracking = false; // state

  const trackingButton = document.createElement("button");
  trackingButton.textContent = "Track !";

  function track(event) {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
  }

  trackingButton.addEventListener("click", () => {
    isTracking = !isTracking;

    if (isTracking) {
      document.addEventListener("mousemove", track);
    } else {
      document.removeEventListener("mousemove", track);
    }

    trackingButton.textContent = isTracking ? "Stop tracking" : "Track !";

    console.log(isTracking);
  });

  return trackingButton;
}
