function init() {
    console.log("Banner Initiated");
    gsap.set([viewport, border, bg1, clickable, ], { autoAlpha: 1 });

    frameOne();




}

function frameOne() {
    var d = 3.5;
    gsap.from([bg1], 3.5, { scale: 0.85, z: 0.1, rotationZ: 0.01, force3D: true });

    gsap.to([text1], 0.5, { autoAlpha: 1, delay: 0.35 });


    gsap.delayedCall(d, frameTwo);
}

function frameTwo() {
    var d = 3.5;
    gsap.set([bg2], { scale: 0.5, y: -20 });
    gsap.to([bg1, text1], 0.25, { autoAlpha: 0 });
    gsap.to([bg2], 0.5, { autoAlpha: 1, delay: 0.2 });
    gsap.to([text2], 0.5, { autoAlpha: 1, delay: 0.37 });
    gsap.to([bg2], 5, { scale: 0.6, x: -15, delay: 0.2, z: 0.1, rotationZ: 0.01, force3D: true });

    gsap.delayedCall(d, frameThree);
}

function frameThree() {
    gsap.set([ctaShine], { autoAlpha: 1 });

    gsap.set([bg3], { scale: 0.5 });


    gsap.to([bg2, text2], 0.25, { autoAlpha: 0 });
    gsap.to([bg3], 0.5, { autoAlpha: 1, delay: 0.2 });
    TweenMax.to([logo, cta], 0.5, { autoAlpha: 1, delay: 0.2 });
    gsap.from([bg3], 2, {
        scale: 0.45,
        y: 20,
        delay: 0.2,
        z: 0.1,
        rotationZ: 0.01,
        force3D: true,
        onComplete: addEventListenersCta()
    });
    TweenMax.staggerTo([text3, text3_2], 0.5, {
        autoAlpha: 1,
        delay: 0.37


    }, 0.85);


}






function addEventListenersCta() {
    clickable.addEventListener('mouseover', mouseover)
    clickable.addEventListener('mouseout', mouseout)


}

function mouseover() {
    gsap.to(ctaOver, 0.3, { autoAlpha: 1 })
}

function mouseout() {
    gsap.to(ctaOver, 0.3, { autoAlpha: 0 })
}