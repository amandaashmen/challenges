
function add(index) {
    var newTask = document.getElementById('task').value;
    document.getElementById(`list${index+1}`).innerHTML = newTask;
}

function remove(clear, length) {
    document.getElementById(`list${clear}`).innerHTML = ""
    for (let i = clear; i<length; i++){
        document.getElementById(`list${i}`).innerHTML = document.getElementById(`list${i+1}`).innerHTML
    }
    document.getElementById(`list${length}`).innerHTML = "" 

    //should fix remove(3) magic numbers
    // can i use get html of last child of ul to get length
    
    // use git tag to release update
}

