var fan = document.querySelector(".fan");
var btn = document.getElementById("click");
var btn2 = document.getElementById("click2");
var onoff = document.getElementById("onoff");
btn.addEventListener("click", () => {
    fan.classList.add('active');
    btn2.style.display = "block";
    btn.style.display = "none";
    onoff.textContent = "Fan Is On...";
    onoff.style.color = "darkgreen";

})
btn2.addEventListener("click", () => {
    fan.classList.remove('active');
    btn.style.display = "block";
    btn2.style.display = "none";
})