document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-photo");

  if (logo) {
    logo.addEventListener("click", () => {
      logo.classList.add("spin-swap");

      logo.addEventListener(
        "animationend",
        () => {
          logo.classList.remove("spin-swap");
        },
        { once: true },
      );
    });
  }
});
