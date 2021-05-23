function init() {
  // INTERODUCTION
  const intro = document.querySelector(".intro");
  const video = intro.querySelector("video");
  const text = intro.querySelector("header");
  // INFO SECTION
  const infoBlock = document.querySelector(".info-block");

  //SCROLLMAGIC
  const controller = new ScrollMagic.Controller();

  /****** Scenes ******/

  // intro logo video
  let accelamount = 0.1;
  let scrollpos = 0;
  let delay = 0;

  let companyVideoScene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
  })
    .setPin(intro)
    .addTo(controller);

  companyVideoScene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
  });

  const companyLogoVideoWatcher = setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
  }, 33.3);

  // intro author
  const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });

  let companyLogoAnimation = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
  })
    .setTween(textAnim)
    .addTo(controller);

  // info block
  const infoContentAnimation = TweenMax.fromTo(infoBlock, 1, { opacity: 0, left: -400 }, { opacity: 1, left: 0 });
  const infoScene = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: infoBlock,
    triggerHook: 0
  })
    .setTween(infoContentAnimation)
    .addTo(controller);
}

window.addEventListener('load', function () {
  init();
});

