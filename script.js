if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    anime({
      targets: 'h1',
      translateY: 0,
      translateX: 0,
      duration: 0,
      loop: false
    });
  } else {
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

// const imageElements = document.querySelectorAll('.hover-effect');

//     imageElements.forEach(image => {
//       image.addEventListener('mouseenter', () => {
//         image.style.opacity = '0.2'; 
//       });

//       image.addEventListener('mouseleave', () => {
//         image.style.opacity = '1';
//       });
//     });