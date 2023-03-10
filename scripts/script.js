function show(id){
  document.getElementById(id).style.display = 'block';
}

function hide(id){
  document.getElementById(id).style.display = 'none';
}

function toggle(id){
  if(document.getElementById(id).style.display == 'block'){
      document.getElementById(id).style.display = 'none';
  } else {
      document.getElementById(id).style.display = 'block';
  }
}

window.addEventListener('resize', block);

function block(){
  if(document.documentElement.clientWidth > 800 ){
      document.getElementById('navbar').style.display = 'block';
  }   
  else{
      document.getElementById('navbar').style.display = 'none';
  }
}

let schet = 0;
let discription = [
  "Платформер на java c использованием библиотеки swing. Имеет несколько уровней и таблицу рекордов.",
  "Сетевой теннис на 2 игроков с возможностью подключения неограниченого числа зрителей. Разработан на java c использованием библиотеки swing."
]

function setProject(num) {
  schet = num;             
  let photo = document.getElementById("photoM");
  photo.src = "img/projects/" + (schet) + "0.jpg";
  photo.title = discription[schet];
}

function leftbut() {
  if (schet > 0) {
      schet--;
      
      let photo = document.getElementById("photoM");
      photo.src = "img/projects/" + (schet) + "0.jpg";
      photo.title = discription[schet];
  }
}

function rightbut() {
  if (schet < 1) {
      schet++;
      
      let photo = document.getElementById("photoM");
      photo.src = "img/projects/" + (schet) + "0.jpg";
      photo.title = discription[schet];
  }
}

function formAction(){
  let email = document.getElementById('emailfield').value;
  let text = document.getElementById('textfield').value;
  hide('form');
  alert("your email: " + email + "\n your message: " + text + "\n was successfully send.")
}