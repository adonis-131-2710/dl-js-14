const keyEl = document.getElementById("key");
const keyCodeEl = document.getElementById("keyCode");
const codeEl = document.getElementById("code");

document.addEventListener("keydown", (e) => {
  keyEl.innerText = e.key === " " ? "Space" : e.key;
  keyCodeEl.innerText = e.keyCode;
  codeEl.innerText = e.code;
});
