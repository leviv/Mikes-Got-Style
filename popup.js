function toggle() {
    chrome.storage.sync.get('isPretty', function(data){
        if(data.isPretty == true){
            chrome.storage.sync.set({'isPretty': false}, function(){
                button.style.fill = "red";
                chrome.tabs.executeScript({
                    code: "var body = document.getElementsByTagName(\"body\")[0]; body.className = \"\""
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
    
}

window.onload = function(){
    var button = document.getElementById('button');
    init();
    button.onmousedown = handleClick;
};

function handleClick(evt){
    evt.preventDefault();
    toggle();
}

function init(){
    chrome.storage.sync.get('isPretty', function(data){
        if(data.isPretty == true){
            button.style.fill = "green";
        }else{
            button.style.fill = "red";
        }
    });
}
