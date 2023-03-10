let bDay = new Date("May 13, 2001 13:05:00");
let now = new Date();
let age = (now - bDay) / (60 * 60 * 24 * 1000 * 365);
let ageP = document.getElementById("age");

if (~~age%10 == 1){
    ageP.innerHTML= ~~age + " год";
}
else if (~~age%10 > 1 && ~~age%10 < 5){
    ageP.innerHTML= ~~age + " года";
}
else{
    ageP.innerHTML= ~~age + " лет";
}