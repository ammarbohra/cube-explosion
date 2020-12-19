gsap.to(".cube", {duration: 1.5, rotationY: -360, ease:Linear.easeNone});
gsap.to(".cube", {duration: 20, delay: 1.5, rotationY: -720, repeat: -1, ease:Linear.easeNone});
gsap.to(":root", {duration: 0.5, "--cube-center": "300px", "--cube-size": "100px", "--text-scale": "1", delay: 1.5 });
