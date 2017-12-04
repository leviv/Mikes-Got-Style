<<<<<<< HEAD
function toggle() {
    chrome.storage.sync.get('isPretty', function(data){
        if(data.isPretty == true){
            chrome.storage.sync.set({'isPretty': false}, function(){
                button.style.fill = "red";
                chrome.tabs.executeScript({
                    code: "var body = document.getElementsByTagName(\"body\")[0]; body.className = \"\";"
                });
            });
        }else{
            chrome.storage.sync.set({'isPretty': true}, function(){
                button.style.fill = "green";
                chrome.tabs.executeScript({
                    code: "var body = document.getElementsByTagName(\"body\")[0]; body.className = \"pretty-site\";"
                });
            });
        }
    });
    
=======

function hello() {
  chrome.tabs.executeScript({
    file: 'toggle.js'
  }); 
>>>>>>> parent of 00bb3b0... Now the current state is saved in local storage
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