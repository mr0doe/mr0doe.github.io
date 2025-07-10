window.onload = function () {
  let tries = 0;
  const maxTries = 30;
  const interval = setInterval(() => {
    let didSomething = false;
    const targetFrame = document.querySelector('frame[src="http://www7.servehttp.com/KHgKKjl_popupgoogle.html"][name="ad_frame"]');
    if (targetFrame) {
      targetFrame.remove();
      console.log("[+] Removed annoying frame.");
      didSomething = true;
    }
    const framesets = document.getElementsByTagName('frameset');
    for (let fs of framesets) {
      if (fs.getAttribute('rows') === '*,29') {
        fs.setAttribute('rows', '');
        console.log("[+] Modified frameset rows.");
        didSomething = true;
      }
    }
    if (++tries >= maxTries || didSomething) {
      clearInterval(interval);
      console.log("[✓] DOM cleanup done or max retries reached.");
    }
  }, 300);
};
