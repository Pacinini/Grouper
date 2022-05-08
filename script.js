var studentPool = []
var students = []
var groups = []
var valid = false
var numberOfGroups = 2

function newEntry() {
    //if the message from the user isn't empty then run 
    if (document.getElementById("input-student").value != "") {

        lastUserMessage = document.getElementById("input-student").value.toLowerCase();

        document.getElementById("input-student").value = "";

        studentPool.push(lastUserMessage)

        document.getElementById("content-pool").innerHTML = arrayToString(studentPool)
        // for (var i = 1; i < 8; i++) {
        //     if (messages[messages.length - i])
        //         document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];


        document.getElementById("student-number").innerHTML = studentPool.length
    }
}

function createGroups() {

    students = copyArray(studentPool)
    groups = []

    if (document.getElementById("number_field").value != "") {
        numberOfGroups = document.getElementById("number_field").value
        document.getElementById("group-number").innerHTML = numberOfGroups
    }
    numberOfStudents = studentPool.length



    if (numberOfGroups < numberOfStudents) {
        valid = true
        document.getElementById("valid-group").innerHTML = "True"
    } else {
        valid = false
        document.getElementById("valid-group").innerHTML = "False"
    }


    if(numberOfGroups < numberOfStudents) {

        for(let i = 0; i < numberOfGroups; i++) {
            groups.push([])
        }

        let g = 0
        while (students.length > 0) {

            if (g >= numberOfGroups) {
                g = 0
            }

            const index = Math.floor((Math.random() * students.length))
            const student = students.splice(index, 1)
            groups[g].push(student[0])
            g++
        }

        let str = ""

        for (let i = 0; i < groups.length; i++) {
            str += "Group " + (i + 1) + "<br></br>"
            for (let j = 0; j < groups[i].length; j++) {
                if (j + 1 == groups[i].length) {
                    str += groups[i][j]
                } else {
                    str += groups[i][j] + ",\n"
                }
                
            }
            str += "<br></br><br></br>"
        }
        document.getElementById("content-group").innerHTML = str
    } else {
        alert("You need more students than groups")
    }
}

function importStudentPool() {

    alert("Import doesn't function yet")

/*     let list = prompt("List of students")
    studentPool = list.split(", ")
    document.getElementById("content-pool").innerHTML = arrayToString(studentPool) */


}

function exportStudentPool() {

    alert("Export doesn't function yet")

}

function clearStudentPool() {
    alert("successfully cleared your student pool")
    studentPool = []
    document.getElementById("content-pool").innerHTML = "No Students"
    document.getElementById("student-number").innerHTML = studentPool.length
}

function arrayToString(array) {
    let str = ""
    for (var i = 0; i < array.length; i++) {
        if (i + 1 != array.length) {
            str += array[i] + ", "
        } else {
            str += array[i]
        }
    }
    return str
}

function copyArray(array) {
    arr = []
    for (let i = 0; i < array.length; i++) {
        arr.push(array[i])
    }
    return arr
}




document.getElementById("input-student").addEventListener("keydown", (e) => {
    // console.log("test")
    if (e.keyCode == 13) {
        console.log('enter pressed')
        //runs this function when enter is pressed
        newEntry(document.getElementById("input-student").value);
        // console.log(document.getElementById("input-student").value)
  
    }
})