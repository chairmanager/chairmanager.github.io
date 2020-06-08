//THIS RUNS LIKE THE MAIN FUNCTION IN C++ AND WILL LOAD WEBPAGE
/*
document.body.onload = function() {
    var titleOfBoard = "Task Manager";
    board = new Board(titleOfBoard);

    board.render();
    document.getElementById("Board").appendChild(board);
}
/*
//called outside main because it is supposed to run after webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-tab").addEventListener("click", addTab)
});
/*
const addTab = (ev) => {
    ev.preventDefault(); //stops form from submitting

    tabTitle = document.getElementById("tab-title").value;
    tabToBeAdded = new tab(tabTitle);

    document.getElementsByID("new-tab-title").value = tabTitle;
}*/