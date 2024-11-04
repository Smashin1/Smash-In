const Yes = document.getElementById("Yes");
const NO = document.getElementById("NO");
const message = document.getElementById("message");
const Burger = document.getElementById("Burger");
Yes.addEventListener("click", function () {
  Burger.src = "./images/Heart.png";
  Burger.classList.add("stop");
  message.textContent = "    We Love You Too 😘";
  Yes.style = `display:none;`;
  NO.style = `display:none;`;
});

NO.addEventListener("mouseover", function () {
  let rundomnum1 = Math.ceil(Math.random() * 500);
  let rundomnum2 = Math.ceil(Math.random() * 200);
  NO.style = ` top:${rundomnum1}px; left:${rundomnum2}px`;
});
NO.addEventListener("click", function () {
  let rundomnum1 = Math.ceil(Math.random() * 500);
  let rundomnum2 = Math.ceil(Math.random() * 200);
  NO.style = ` top:${rundomnum1}px; left:${rundomnum2}px`;
});

var typed = new Typed(".auto-type",{
  strings : ["Programmer", "Designer", "YouTuber"],
  typeSpeed : 150,
  backSpeed : 150,
  looped : true
})