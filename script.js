// 漢堡選單
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// 捲動變色
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 平滑捲動
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    menu.classList.remove("active");
  });
});

// 動態更新頁尾年份
const copyright = document.getElementById("copyright");
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} 昶寅企業有限公司 All Rights Reserved.`;
