document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const call = document.querySelector(".call");
  const headerContent = document.querySelector(".header__content");
  const menu = document.querySelector(".menu");

  function handleResize() {
    if (window.innerWidth < 1171) {
      if (!headerContent.querySelector(".btn-burger")) {
        headerContent.insertAdjacentHTML(
          "beforeend",
          `<button type="submit" class="btn-burger">
             <span id="first"></span>
             <span id="second"></span>
             <span id="third"></span>
           </button>`
        );

        const button = headerContent.querySelector(".btn-burger");
        button.addEventListener("click", () => {
          menu.classList.toggle("active");
          button.classList.toggle("close");
        });
      }

      menu.append(nav, call);
    } else {
      headerContent.append(nav, call);

      const button = headerContent.querySelector(".btn-burger");
      if (button) button.remove();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});
