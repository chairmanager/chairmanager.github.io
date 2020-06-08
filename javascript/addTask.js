

for(let i =0; i < localStorage.length; i++){
    const btnATask = document.getElementById(`a${i}`);
    const newTask = document.getElementById(`t${i}`);

    const key = localStorage.key(i);
    const storedArrayString = localStorage.getItem(key)//gets array
    const storedArray = JSON.parse(storedArrayString);
    

    btnATask.onclick = function() {
        const addedTask = newTask.value;
        

        //console.log(storedArray);
        if(addedTask){
            storedArray.push(addedTask);

            if(storedArray.length > 8){
                storedArray.pop();
            }

            storedArray.sort();
            
            const storingArray = JSON.stringify(storedArray);

            localStorage.setItem(key, storingArray);
            location.reload();
        }
    };
}