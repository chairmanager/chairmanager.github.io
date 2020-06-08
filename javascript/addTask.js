

for(let i =0; i < localStorage.length; i++){
    const btnATask = document.getElementById(`a${i}`);
    const newTask = document.getElementById(`t${i}`);

    const key = localStorage.key(i);
    const storedArrayString = localStorage.getItem(key)//gets array
    var storedArray = JSON.parse(storedArrayString);
    

    btnATask.onclick = function() {
        var addedTask = newTask.value;
        

        //console.log(storedArray);
        if(addedTask){
            storedArray.push(addedTask);
            const storingArray = JSON.stringify(storedArray);

            localStorage.setItem(key, storingArray);
            location.reload();
        }
    };
}