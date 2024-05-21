let Button = document.getElementById("Mybutton");
Button.addEventListener("click" , function() {
    console.log("Вы нажали на кнопку");
});
let Change = document.getElementById("Mybutton");
let Color = document.getElementById("color");
Change.addEventListener("dblclick" , function() {
    Color.style.backgroundColor = "green";
});

addEventListener("dblclick" , function() {
    console.log("Вы дважды нажали на Страницу");
});


const table = document.getElementsByTagName("table")[0];
const cells = table.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener("dblclick", function() {
        this.innerText = "Double clicked!";
    });
}


 let Description = document.getElementsByTagName("figcaption");
 let images = document.getElementById("images");
 images.addEventListener("dblclick" , function() {
   for (let i = 0; i < Description.length; i++) {
       Description[i].style.display = "block";
   }
    
 });
 let TitleChange = document.getElementById("Title");
 TitleChange.addEventListener("dblclick" , function() {
   TitleChange.innerText = "Double Clicked!";
 });

 document.addEventListener("keydown" , function(key) {
    console.log("Последняя нажатая клавиша "  + key.key)
 })

let SurName = document.getElementById("Surname");
let Name = document.getElementById("name");
let Form = document.getElementById("form");
Form.addEventListener("submit" , function(event) {
    event.preventDefault();
    console.log("Login " + Name.value); 
    console.log("Password " + SurName.value);
})

document.addEventListener("keyup" , function(key) {
    console.log("Последняя отпущенная клавиша "  + key.key)
 })

 let Password = document.getElementById("Surname");
 let revealPassword = document.getElementById("RevealPassword");
 revealPassword.addEventListener("click" , function() {
    if (Password.type == "password") {
        Password.type = "text";
    } else {
        Password.type = "password";
    }
 })

