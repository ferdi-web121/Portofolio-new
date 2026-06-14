function toggleMenu() {
  const navbar = document.getElementById("navigasi");
  navbar.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 120,
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const selectTyped = document.querySelector(".typed");

  if (selectTyped) {
    let typedStrings = selectTyped.getAttribute("data-typed-items");

    if (typedStrings && typedStrings.trim() !== "") {
      typedStrings = typedStrings.split(",").map((item) => item.trim());

      new Typed(".typed", {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    } else {
      console.warn("No typed strings found in data-typed-items attribute.");
    }
  } else {
    console.warn('No element with class "typed" found.');
  }
});

document.getElementById("formPesan").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();


    if (nama === "" || email === "" || pesan === "") {
        alert("Harap isi semua field sebelum mengirim pesan.");
        return;
    }

    alert("Pesan dari " + nama + " berhasil dikirim:\n\n" + pesan);

    this.reset();
});
