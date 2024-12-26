const nav = document.querySelector(".nav");
const call = document.querySelector(".call");

function handleResize() {
  const headerContent = document.querySelector(".header__content");
  const menu = document.querySelector(".menu");

  if (window.innerWidth < 1130) {
    headerContent.removeChild(nav);
    headerContent.removeChild(call);

    headerContent.insertAdjacentHTML(
      "beforeend",
      `<button type="submit" class="btn-burger">
         <span id="first"></span>
         <span id="second"></span>
         <span id="third"></span>
       </button>`
    );

    menu.appendChild(nav);
    menu.appendChild(call);
  } else {
    headerContent.appendChild(nav);
    headerContent.appendChild(call);

    const button = headerContent.querySelector(".btn-burger");

    headerContent.appendChild(button);
  }
}

window.addEventListener("resize", handleResize);

handleResize();

const menu = document.querySelector(".menu");
const button = document.querySelector(".btn-burger");

button?.addEventListener("click", (event) => {
  menu.classList.contains("active")
    ? menu.classList.remove("active")
    : menu.classList.add("active");

  event.target.closest(".btn-burger").classList.contains("close")
    ? event.target.closest(".btn-burger").classList.remove("close")
    : event.target.closest(".btn-burger").classList.add("close");
});
