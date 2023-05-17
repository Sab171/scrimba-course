let homeScore = document.getElementById("score-home")
let homeGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

function reset(){
    homeScore.textContent = 0
    homeGuest.textContent = 0
    countHome = 0
    countGuest = 0
}

function inc1(player){
    if(player=="home"){
        countHome += 1
        homeScore.textContent = countHome }
    else{
        countGuest += 1
        homeGuest.textContent = countGuest }
}

function inc2(player){
    if(player=="home"){
        countHome += 2
        homeScore.textContent = countHome }
    else{
        countGuest += 2
        homeGuest.textContent = countGuest }
}

function inc3(player){
    if(player=="home"){
        countHome += 3
        homeScore.textContent = countHome }
    else{
        countGuest += 3
        homeGuest.textContent = countGuest }
}