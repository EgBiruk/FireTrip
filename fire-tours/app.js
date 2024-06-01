let heard = document.querySelectorAll('.fav__fa');
const hotels = document.querySelectorAll(".hotel__img");

for (let i = 0; i < heard.length; i++) {
    heard[i].addEventListener('click', (event) => {

        if (event.target.style.color == '') {
            event.target.style.color = '#fb1857';
        } else {
            event.target.style.color = '';

        }
    })
}

hotels.forEach(hotel => {
    hotel.addEventListener("click", (e) => {
        if (e.target.classList.contains("hotel1")) {
            window.location.href = "../../hotel/hotel1/hotel.html";
        } else if(e.target.classList.contains("hotel2")) {
            window.location.href = "../../hotel/hotel2/hotel2.html";
        } else if (e.target.classList.contains("hotel3")) {
            window.location.href = "../../hotel/hotel3/hotel3.html";
        } else if (e.target.classList.contains("hotel4")) {
            window.location.href = "../../hotel/hotel4/hotel4.html";
        }
    });
});
