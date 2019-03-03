const parallaxImage = document.getElementById('heroImage');
const parallaxTitle = document.getElementById('heroTitle');
let defaultPosition = 50;
window.addEventListener('scroll', ()=> {
  let imageScrollAmount = defaultPosition + window.pageYOffset * -0.4 + "%";
  let textScrollAmount = defaultPosition + window.pageYOffset * -0.05 + "%";
  if(textScrollAmount < 0 + "%") {
    imageScrollAmount = 0 + "%";
    textScrollAmount = 0 + "%";
  }
  parallaxImage.style.backgroundPositionY = imageScrollAmount;
  parallaxTitle.style.top = textScrollAmount;
  console.log(imageScrollAmount);
});