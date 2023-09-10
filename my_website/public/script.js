const wrapper = document.querySelector(".wrap");
const login = document.querySelector(".loginlink");
const register = document.querySelector(".registerlink");
const btn = document.querySelector(".btnlogin");
const icon = document.querySelector(".iconclose");

register.addEventListener("click", () => {
  wrapper.classList.add("active");
});
login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
btn.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
icon.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
