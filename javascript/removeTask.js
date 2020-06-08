for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const tasks = localStorage.getItem(key);

    const storedTasks = JSON.parse(tasks);
    
    const b1 = document.getElementById(`r1${i}`);
    
    b1.onclick = function() {
        storedTasks.push(storedTasks.splice(1,1)[0]);
        
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }

    const b2 = document.getElementById(`r2${i}`);
    
    b2.onclick = function() {
        storedTasks.push(storedTasks.splice(2,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }

    const b3 = document.getElementById(`r3${i}`);
    
    b3.onclick = function() {
        storedTasks.push(storedTasks.splice(3,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }
    
    const b4 = document.getElementById(`r4${i}`);
    
    b4.onclick = function() {
        storedTasks.push(storedTasks.splice(4,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }

    const b5 = document.getElementById(`r5${i}`);
    
    b5.onclick = function() {
        storedTasks.push(storedTasks.splice(5,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }

    const b6 = document.getElementById(`r6${i}`);
    
    b6.onclick = function() {
        storedTasks.push(storedTasks.splice(6,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }

    const b7 = document.getElementById(`r7${i}`);
    
    b7.onclick = function() {
        storedTasks.push(storedTasks.splice(7,1)[0]);
        storedTasks.pop();

        const taskArray = JSON.stringify(storedTasks);

        localStorage.setItem(key, taskArray);
        location.reload();
    }
    
}