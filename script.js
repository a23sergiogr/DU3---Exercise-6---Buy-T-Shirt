function buy(){
    let prize = document.getElementById("prize");
    let quantity = document.getElementById("quantity");

    prize.innerText = 12.25*quantity.value + "€"
}