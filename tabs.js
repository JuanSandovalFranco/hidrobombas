const tabs = document.querySelectorAll(".tab");
const bodyTab = document.querySelector(".tabs-content");
const activeTab = document.querySelector(".tabs-select .active");

document.querySelector(".tabs-select").addEventListener("click", (e) => {
  if (
    e.target.className.includes("tab") &&
    !e.target.className.includes("select")
  ) {
    tabs.forEach((el, i) => {
      if (el.className.includes("active")) {
        el.classList.remove("active");
        bodyTab.children[i].classList.remove("active");
      }
    });

    e.target.classList.add("active");

    tabs.forEach((el, i) => {
      if (el.className.includes("active")) {
        e.target.classList.add("active");
        bodyTab.children[i].classList.add("active");
      }
    });
  }
});
