const card = document.getElementById('card');
var counter = 0;

button.addEventListener('click', event => {
    if (counter % 2 == 1) {
        card.style.transform = "perspective(600px) rotateY(180deg)";
        console.log("flipping 180")
    } else {
        card.style.transform = "perspective(600px) rotateY(-180deg)";
        console.log("flipping -180")
    } 
});
