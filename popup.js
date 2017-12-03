
function hello() {
  chrome.tabs.executeScript({
    file: 'toggle.js'
  }); 
}

window.onload = function(){
    var button = document.getElementById('button');
    button.style.fill = "red";
    button.onmousedown = handleClick;
};

function handleClick(evt){
    evt.preventDefault();
    hello();
    toggleColor();
}

function toggleColor(){
    if(button.style.fill == "red"){
        button.style.fill = "green";
    }else{
        button.style.fill = "red";
    }
}