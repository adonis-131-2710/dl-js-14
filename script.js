const keyEl = document.getElementById("eventKey");
const keyCodeEl = document.getElementById("eventKeyCode");
const codeEl = document.getElementById("eventCode");

document.addEventListener("keydown", (e) => {
  keyEl.innerText = e.key === " " ? "Space" : e.key;
  keyCodeEl.innerText = e.keyCode;
  codeEl.innerText = e.code;
});
