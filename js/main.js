var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closeBtn");
var overlay = document.getElementById("overlay")



function deleteTodo() {
    for (let span of spans) {
        let img = document.createElement('img');
        img.addEventListener("click", function() {
            img.parentElement.remove();
        });
    }
}


function loadTodo() {
    const locaArray = JSON.parse(localStorage.getItem('todoList') || '[]');
    locaArray.forEach(str => {
        const li = document.createElement('li');
        li.textContent = str;
        ul.appendChild(li);
    });
}

const saveLocalStorage = (string) => {
    const current = localStorage.getItem('todoList') || '[]';
    const localArray = JSON.parse(current);
    localArray.push(string);
    localStorage.setItem('todoList', JSON.stringify(localArray));
}

const addItemHandler = (event) => {
    if (event.keyCode !== 13 && event.type !== "click") {
        return
    }
    let input = document.querySelector('input');
    console.log(input);
    let img = document.createElement('img');
    img.className = "close";
    img.src = './assets/backet.svg';
    let li = document.createElement("li");
    let text = document.createTextNode(input);
    li.appendChild(img);
    li.appendChild(text);
    if (input.value === '') {
        alert("Noone enter");
    } else {
        var spanElement = document.createElement("span");
        // var icon = document.createElement("i");
        console.log(this)
        var newTodoadd = input.value;
        saveLocalStorage(input.value)
        input.value = "";
        //icon.classList.add('fas', 'fa-trash-alt');
        // spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodoadd);
        deleteTodo();
    }
}

input.addEventListener("keypress", addItemHandler);
document.querySelector('.button').addEventListener('click', addItemHandler);


ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


pencil.addEventListener('click', function() {
    input.classList.toggle('display');
});



saveBtn.addEventListener('click', function() {
    localStorage.setItem('todoList', ul.innerHTML);
});

clearBtn.addEventListener('click', function() {
    localStorage.removeItem('todoList', ul.innerHTML);
});


tipsBtn.addEventListener("click", function() {
    overlay.style.height = "100%";
});


closeBtn.addEventListener("click", function(e) {
    e.preventDefault;
    overlay.style.height = "0";

})


deleteTodo();


loadTodo();


/*const cowsayjs = require ("cowsayjs");
console.log(cowsayjs.moo("can you see me?"));*/
const CC = require('currency-converter-lt');
let currencyConverter = new CC({from:"USD", to:"EUR", amount:100});
currencyConverter.convert().then((response)=>{
    console.log(response)
})