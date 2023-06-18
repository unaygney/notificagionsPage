
const h4Element = document.querySelector('h4');

h4Element.addEventListener('click', function () {

    let redNotElements = document.querySelectorAll('.red-not');

    redNotElements.forEach(function (redNotElement) {
        redNotElement.style.display = 'none';
    });

    var cardElements = document.querySelectorAll('.card');

    cardElements.forEach(function (card) {
        card.classList.remove('active');
    });
});
