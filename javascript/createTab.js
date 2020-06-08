
    
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

            var storedTasks = JSON.parse(tasks);
            console.log(storedTasks[0]);

          
            tabOutput.innerHTML += `${titleKey}: 
            <input type= "text" id="t${i}" placeholder="Enter Task..">
            <button id=a${i} type=button>Create Task</button><br /> 
            -------Create More Tasks Here--------<br />
            *${storedTasks[1]}<br />
            *${storedTasks[2]}<br />
            *${storedTasks[3]}<br />
            *${storedTasks[4]}<br />
            *${storedTasks[5]}<br />
            *${storedTasks[6]}<br />
            *${storedTasks[7]}<br />
            <button id=d${i} type=button>Delete Tab</button><br />`;
        
    }
    
    console.log(document.getElementById("t1"));
    console.log(localStorage);