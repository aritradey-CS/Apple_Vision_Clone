function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#page-bottom",
        start: "5% top",
        end: "bottom top",
        scroller: "#main",
      },
    })
    .to("#page-bottom", {
      opacity: 0,
      duration: 1, // Adjust the duration as needed for the desired fade effect
    });
}

loco();

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#page>video",
      start: "5% top",
      end: "bottom top",
      // markers: true,
      scroller: "#main",
    },
    onStart: () => {
      document.querySelector("#page>video").play();
    },
  })
  .to("#page>video", {
    opacity: 1, // You can add any desired animations here
    duration: 1,
  })
  .to(
    "#page-bottom",
    {
      opacity: 0, // Hide the image when scrolling
      duration: 0.1,
    },
    0
  ); // The "0" means it happens at the same time as the video animation

gsap.to("#page", {
  scrollTrigger: {
    trigger: `#page`,
    start: `top top`,
    end: `bottom top`,
    scroller: `#main`,
    pin: true,
  },
});

// gsap.to("#page-bottom",{
//   scrollTrigger:{
//     trigger:`#page-bottom`,
//     start:`30% top`,
//     end:`bottom top`,
//     scroller:`#main`,
//   },
//   opacity:0
// })

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers:true,
    pin: true,
  },
});

tl.to("#page1>h1", {
  top: `-50%`,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers:true,
    pin: true,
  },
});

tl1.to("#page2>h1", {
  top: `-50%`,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    // markers:true,
    pin: true,
  },
});

tl2.to("#page4>#center-page4", {
  top: `-50%`,
});




function canvas() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = ` 
    ./source/canvas/0000.jpg
    ./source/canvas/0001.jpg
    ./source/canvas/0002.jpg
    ./source/canvas/0003.jpg
    ./source/canvas/0004.jpg
    ./source/canvas/0005.jpg
    ./source/canvas/0006.jpg
    ./source/canvas/0007.jpg
    ./source/canvas/0008.jpg
    ./source/canvas/0009.jpg
    ./source/canvas/0010.jpg
    ./source/canvas/0011.jpg
    ./source/canvas/0012.jpg
    ./source/canvas/0013.jpg
    ./source/canvas/0014.jpg
    ./source/canvas/0015.jpg
    ./source/canvas/0016.jpg
    ./source/canvas/0017.jpg
    ./source/canvas/0018.jpg
    ./source/canvas/0019.jpg
    ./source/canvas/0020.jpg
    ./source/canvas/0021.jpg
    ./source/canvas/0022.jpg
    ./source/canvas/0023.jpg
    ./source/canvas/0024.jpg
    ./source/canvas/0025.jpg
    ./source/canvas/0026.jpg
    ./source/canvas/0027.jpg
    ./source/canvas/0028.jpg
    ./source/canvas/0029.jpg
    ./source/canvas/0030.jpg
    ./source/canvas/0031.jpg
    ./source/canvas/0032.jpg
    ./source/canvas/0033.jpg
    ./source/canvas/0034.jpg
    ./source/canvas/0035.jpg
    ./source/canvas/0036.jpg
    ./source/canvas/0037.jpg
    ./source/canvas/0038.jpg
    ./source/canvas/0039.jpg
    ./source/canvas/0040.jpg
    ./source/canvas/0041.jpg
    ./source/canvas/0042.jpg
    ./source/canvas/0043.jpg
    ./source/canvas/0044.jpg
    ./source/canvas/0045.jpg
    ./source/canvas/0046.jpg
    ./source/canvas/0047.jpg
    ./source/canvas/0048.jpg
    ./source/canvas/0049.jpg
    ./source/canvas/0050.jpg
    ./source/canvas/0051.jpg
    ./source/canvas/0052.jpg
    ./source/canvas/0053.jpg
    ./source/canvas/0054.jpg
    ./source/canvas/0055.jpg
    ./source/canvas/0056.jpg
    ./source/canvas/0057.jpg
    ./source/canvas/0058.jpg
    ./source/canvas/0059.jpg
    ./source/canvas/0060.jpg
    ./source/canvas/0061.jpg
    ./source/canvas/0062.jpg
    ./source/canvas/0063.jpg
    ./source/canvas/0064.jpg
    ./source/canvas/0065.jpg
    ./source/canvas/0066.jpg
    ./source/canvas/0067.jpg
    ./source/canvas/0068.jpg
    ./source/canvas/0069.jpg
    ./source/canvas/0070.jpg
    ./source/canvas/0071.jpg
    ./source/canvas/0072.jpg
    ./source/canvas/0073.jpg
    ./source/canvas/0074.jpg
    ./source/canvas/0075.jpg
    ./source/canvas/0076.jpg
    ./source/canvas/0077.jpg
    ./source/canvas/0078.jpg
    ./source/canvas/0079.jpg
    ./source/canvas/0080.jpg
    ./source/canvas/0081.jpg
    ./source/canvas/0082.jpg
    ./source/canvas/0083.jpg
    ./source/canvas/0084.jpg
    ./source/canvas/0085.jpg
    ./source/canvas/0086.jpg
    ./source/canvas/0087.jpg
    ./source/canvas/0088.jpg
    ./source/canvas/0089.jpg
    ./source/canvas/0090.jpg
    ./source/canvas/0091.jpg
    ./source/canvas/0092.jpg
    ./source/canvas/0093.jpg
    ./source/canvas/0094.jpg
    ./source/canvas/0095.jpg
    ./source/canvas/0096.jpg
    ./source/canvas/0097.jpg
    ./source/canvas/0098.jpg
    ./source/canvas/0099.jpg
    ./source/canvas/0100.jpg
    ./source/canvas/0101.jpg
    ./source/canvas/0102.jpg
    ./source/canvas/0103.jpg
    ./source/canvas/0104.jpg
    ./source/canvas/0105.jpg
    ./source/canvas/0106.jpg
    ./source/canvas/0107.jpg
    ./source/canvas/0108.jpg
    ./source/canvas/0109.jpg
    ./source/canvas/0110.jpg
    ./source/canvas/0111.jpg
    ./source/canvas/0112.jpg
    ./source/canvas/0113.jpg
    ./source/canvas/0114.jpg
    ./source/canvas/0115.jpg
    ./source/canvas/0116.jpg
    ./source/canvas/0117.jpg
    ./source/canvas/0118.jpg
    ./source/canvas/0119.jpg
    ./source/canvas/0120.jpg
    ./source/canvas/0121.jpg
    ./source/canvas/0122.jpg
    ./source/canvas/0123.jpg
    ./source/canvas/0124.jpg
    ./source/canvas/0125.jpg
    ./source/canvas/0126.jpg
    ./source/canvas/0127.jpg
    ./source/canvas/0128.jpg
    ./source/canvas/0129.jpg
    ./source/canvas/0130.jpg
    ./source/canvas/0131.jpg
    ./source/canvas/0132.jpg
    ./source/canvas/0133.jpg
    ./source/canvas/0134.jpg
    ./source/canvas/0135.jpg
    ./source/canvas/0136.jpg
    ./source/canvas/0137.jpg
    ./source/canvas/0138.jpg
    ./source/canvas/0139.jpg
    ./source/canvas/0140.jpg
    ./source/canvas/0141.jpg
    ./source/canvas/0142.jpg
    ./source/canvas/0143.jpg
    ./source/canvas/0144.jpg
    ./source/canvas/0145.jpg
    ./source/canvas/0146.jpg
    ./source/canvas/0147.jpg
    ./source/canvas/0148.jpg
    ./source/canvas/0149.jpg
    ./source/canvas/0150.jpg
    ./source/canvas/0151.jpg
    ./source/canvas/0152.jpg
    ./source/canvas/0153.jpg
    ./source/canvas/0154.jpg
    ./source/canvas/0155.jpg
    ./source/canvas/0156.jpg
    ./source/canvas/0157.jpg
    ./source/canvas/0158.jpg
    ./source/canvas/0159.jpg
    ./source/canvas/0160.jpg
    ./source/canvas/0161.jpg
    ./source/canvas/0162.jpg
    ./source/canvas/0163.jpg
    ./source/canvas/0164.jpg
    ./source/canvas/0165.jpg
    ./source/canvas/0166.jpg
    ./source/canvas/0167.jpg
    ./source/canvas/0168.jpg
    ./source/canvas/0169.jpg
    ./source/canvas/0170.jpg
    ./source/canvas/0171.jpg
    ./source/canvas/0172.jpg
    ./source/canvas/0173.jpg
    ./source/canvas/0174.jpg
    ./source/canvas/0175.jpg
    ./source/canvas/0176.jpg
    ./source/canvas/0177.jpg
    ./source/canvas/0178.jpg
    ./source/canvas/0179.jpg
    ./source/canvas/0180.jpg
    ./source/canvas/0181.jpg
    ./source/canvas/0182.jpg
    ./source/canvas/0183.jpg
    ./source/canvas/0184.jpg
    ./source/canvas/0185.jpg
    ./source/canvas/0186.jpg
    ./source/canvas/0187.jpg
    ./source/canvas/0188.jpg
    ./source/canvas/0189.jpg
    ./source/canvas/0190.jpg
    ./source/canvas/0191.jpg
    ./source/canvas/0192.jpg
    ./source/canvas/0193.jpg
    ./source/canvas/0194.jpg
    ./source/canvas/0195.jpg
    ./source/canvas/0196.jpg
    ./source/canvas/0197.jpg
    ./source/canvas/0198.jpg
    ./source/canvas/0199.jpg `;
    return data.split("\n")[index];
  }

  const frameCount = 199;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page7>canvas`,
      //   set start end according to preference
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  // Scroll-triggered pinning
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    start: "top top",
    end: "200% top",
    scroller: "#main",
  });
}
canvas();
