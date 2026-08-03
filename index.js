function imgFlip() {
  const logo = document.querySelector(".logo-photo, .logo-swap");

  if (!logo || logo.classList.contains("spin-swap")) {
    return;
  }

  logo.classList.add("spin-swap");

  logo.addEventListener(
    "animationend",
    function handleSpinEnd() {
      const showingCLogo = logo.src.includes("clogo.png");
      const nextIsCLogo = !showingCLogo;
      logo.src = nextIsCLogo ? "clogo.png" : "blogo.png";
      logo.classList.remove("spin-swap");
      logo.removeEventListener("animationend", handleSpinEnd);

      if (nextIsCLogo) {
        window.location.href = "menu.html";
      } else {
        window.location.href = "desserts.html";
      }
    },
    { once: true },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-photo, .logo-swap");

  if (logo) {
    logo.addEventListener("click", imgFlip);
  }
});
