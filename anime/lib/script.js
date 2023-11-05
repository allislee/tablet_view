if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Reduced motion preference is enabled, so disable the animation
    anime({
      targets: 'h1',
      translateY: 0,
      translateX: 0,
      duration: 0, // Set duration to 0 to instantly go to the final state
      loop: false
    });
  } else {
    // Reduced motion preference is not enabled, so enable the animation
    anime({
      targets: 'h1',
      keyframes: [
        { translateY: -10 },
        { translateX: 250 },
        { translateY: 50 },
        { translateX: 0 },
        { translateY: 0 }
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  }
console.log("JavaScript code is running");