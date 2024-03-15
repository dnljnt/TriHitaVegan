const paths = document.querySelectorAll("#svg path");
paths.forEach((path, index) => {
  path.style.strokeDashoffset = path.getTotalLength();
  path.style.strokeDasharray = path.getTotalLength();
  path.style.animation = `dash .6s linear ${index * 1}s forwards`;
});

const orderButtons = document.querySelectorAll(".btn-pesan");
orderButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const menu = card.querySelector(".menu");
    const price = card.querySelector(".price");
    const time = new Date().getTime();
    let greetings;
    if (time < 12) {
      greetings = "Selamat pagi";
    } else if (time < 18) {
      greetings = "Selamat siang";
    } else {
      greetings = "Selamat malam";
    }

    let message = `Halo ${greetings}, saya ingin memesan ${menu.innerText}, dengan harga ${price.innerText}.`;
    message = encodeURIComponent(message);

    window.location.href = "https://wa.me/081337369380?text=" + message;
  });
});

// SCROLL REVEAL
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true;
});
scrollReveal.reveal("header, #title, #btn-transform");
scrollReveal.reveal("#content-right", { origin: "left", delay: 2000 });
scrollReveal.reveal("#content-left", { origin: "right", delay: 2000 });
scrollReveal.reveal("#grid", { origin: "top", delay: 1000 });
scrollReveal.reveal("#content-up", { origin: "bottom", delay: 1000 });
scrollReveal.reveal("#scaleUp", {
  scale: 0.5,
  duration: 900,
  delay: 1000,
  easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
});
scrollReveal.reveal("#scale", { scale: 0.5, interval: 500, delay: 1100 });
scrollReveal.reveal("#card", {
  distance: "0px",
  opacity: 0,
  delay: 1500,
  easing: "cubic-bezier(0.165, 0.84, 0.44, 1)",
});
scrollReveal.reveal("#paragraph, .card", {
  opacity: 0,
  distance: "0px",
  interval: 500,
  delay: 800,
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
});
scrollReveal.reveal("#popup", {
  distance: "0px",
  scale: 0.5,
  opacity: 0,
  interval: 200,
  duration: 300,
  easing: "cubic-bezier(0.25, 0.5, 0.25, 1.3)",
});

ScrollReveal().reveal("#logo, li, .link, #btn-cta", { delay: 1000 });
scrollReveal().reveal(".link, .btn-cta", { interval: 200 });
