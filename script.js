
const h4Element = document.querySelector('h4');

h4Element.addEventListener('click', function () {

    let redNotElements = document.querySelectorAll('.red-not');
    let numberSpan = document.querySelector(".number");
    numberSpan.style.display = "none";
    redNotElements.forEach(function (redNotElement) {
        redNotElement.style.display = 'none';
    });

    var cardElements = document.querySelectorAll('.card');

    cardElements.forEach(function (card) {
        card.classList.remove('active');
    });
});
