export function initializeLogoSwap(logoId) {
  const menuLogo = document.getElementById(logoId);

  if (!menuLogo) {
    return;
  }

  menuLogo.addEventListener("click", function () {
    if (menuLogo.classList.contains("spin-swap")) {
      return;
    }

    menuLogo.classList.add("spin-swap");

    menuLogo.addEventListener("animationend", function handleSpinEnd() {
      const showingCLogo = menuLogo.src.toLowerCase().includes("clogo.");
      const nextIsCLogo = !showingCLogo;
      menuLogo.src = nextIsCLogo ? "clogo.PNG" : "blogo.PNG";
      menuLogo.classList.remove("spin-swap");
      menuLogo.removeEventListener("animationend", handleSpinEnd);

      if (nextIsCLogo) {
        window.location.href = "menu.html";
      } else {
        window.location.href = "desserts.html";
      }
    });
  });
}
