
    
    //var tasks = ["*Create more task*", 
    //                "hi" , 
    //                "Test"];

    var taskss = [""];

    const tabName = document.getElementById("tabName");
    const btnCTab = document.getElementById("btnCTab");
    const tabOutput = document.getElementById("tabOutput");
    

    btnCTab.onclick = function() {
        var title = tabName.value;
        var taskArray = JSON.stringify(taskss);

        console.log(taskArray);
        
        if(title){
            localStorage.setItem(title, taskArray);
            location.reload();
        }
    };

    for(let i =0; i < localStorage.length; i++){
            const titleKey = localStorage.key(i);
            const tasks = localStorage.getItem(titleKey);

            tabOutputTemp = document.createElement("div");

            var storedTasks = JSON.parse(tasks);
            console.log(storedTasks[0]);
            console.log(storedTasks);

            tabOutputTemp.innerHTML = `<div id="tabColumns">${titleKey}: 
            <input type= "text" id="t${i}" placeholder="Enter Task..">
            <button id=a${i} type=button>Create Task</button><br />
            -------Create More Tasks Here--------<br />
            *${storedTasks[1]}
            <button id=r1${i} type=button>🗑️</button><br />
            *${storedTasks[2]}
            <button id=r2${i} type=button>🗑️</button><br />
            *${storedTasks[3]}
            <button id=r3${i} type=button>🗑️</button><br />
            *${storedTasks[4]}
            <button id=r4${i} type=button>🗑️</button><br />
            *${storedTasks[5]}
            <button id=r5${i} type=button>🗑️</button><br />
            *${storedTasks[6]}
            <button id=r6${i} type=button>🗑️</button><br />
            *${storedTasks[7]}
            <button id=r7${i} type=button>🗑️</button><br />
            <button id=d${i} type=button>Delete Tab🗑️</button><br /> <br></div>`;

            tabOutput.appendChild(tabOutputTemp); //so it can appear sideways
        
    }
    
    console.log(localStorage);