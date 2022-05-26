const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

if (getDeviceType() == "mobile") {
  var front = document.getElementById('front');
  var back = document.getElementById('back');

  front.addEventListener('click', event => {
    front.style.transform = "perspective(600px) rotateY(-180deg)";
    back.style.transform = "perspective(600px) rotateY(0deg)"
  });

  back.addEventListener('click', event => {
    back.style.transform = "perspective(600px) rotateY(180deg)"
    front.style.transform = "perspective(600px) rotateY(0deg)"
  });
}