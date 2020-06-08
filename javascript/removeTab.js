//const btnDTab = document.getElementById("tab-delete");



for(let i = 0; i < localStorage.length; i++){
    const btnDTab = document.getElementById(`d${i}`);
    
    btnDTab.onclick = function() {
    const key = localStorage.key(i);
    localStorage.removeItem(key);
    location.reload();
    };
}