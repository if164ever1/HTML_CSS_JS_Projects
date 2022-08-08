const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;


function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })

    localStorage.setItem(selectedSeats, JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
     
}

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

movieSelect.addEventListener('change', function(e){
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')){
        //console.log(e.target);
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});


