export default function swDev() {
  //   const divInstall = document.getElementById("installContainer");

  if ("serviceWorker" in navigator) {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((reg) => {
          //   console.log("Registered", reg);
        })
        .catch((err) => {
          //   console.log("registeration failed", err);
        });
    });
    //navigator.serviceWorker.register('./sw').then((resp) =>)
  }

  function getPWADisplayMode() {
    const isStandalone = window.matchMedia("(display-mode: standalone)")
      .matches;
    if (document.referrer.startsWith("android-app://")) {
      return "twa";
    } else if (navigator.standalone || isStandalone) {
      return "standalone";
    }
    return "browser";
  }
  //app install check
  window.addEventListener("appinstalled", (event) => {
    // console.log("👍", "appinstalled", event);
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
  });

  // Initialize deferredPrompt for use later to show browser install prompt.
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (event) => {
    // console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button container
    // divInstall.classList.toggle("hidden", false);
  });
}
