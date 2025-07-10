window.onload = function () {
  const targetFrame = document.querySelector('frame[src="http://www7.servehttp.com/KHgKKjl_popupgoogle.html"][name="ad_frame"]');
  if (targetFrame) targetFrame.remove();
  const framesets = document.getElementsByTagName('frameset');
  for (let fs of framesets) {
    if (fs.getAttribute('rows') === '*,29') {
      fs.setAttribute('rows', '');
    }
  }
};
