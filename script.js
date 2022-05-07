var studentPool = []
var groups = []
var valid = false
var numberOfGroups = 2

function newEntry() {
    //if the message from the user isn't empty then run 
    if (document.getElementById("input-student").value != "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = document.getElementById("input-student").value.toLowerCase();
        //sets the chat box to be clear
        document.getElementById("input-student").value = "";
        //adds the value of the chatbox to the array messages
        studentPool.push(lastUserMessage)
        // messages.push("<b>" + "You:" + "</b> " + lastUserMessage);
        //sets the variable botMessage in response to lastUserMessage
        // chatbotResponse();
        //add the chatbot's name and message to the array messages
        // messages.push("<b>" + botName + ":</b> " + botMessage);
        // says the message using the text to speech function written below
        // Speech(botMessage);
        //outputs the last few array elements of messages to html
/*         let str = ""
        for (var i = 0; i < studentPool.length; i++) {
            if (i + 1 != studentPool.length) {
                str += studentPool[i] + ", "
            } else {
                str += studentPool[i]
            }
        } */
        document.getElementById("content-pool").innerHTML = arrayToString(studentPool)
        // for (var i = 1; i < 8; i++) {
        //     if (messages[messages.length - i])
        //         document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];

        numberOfGroups = document.getElementById("number_field").value
        document.getElementById("student-number").innerHTML = studentPool.length


        if (studentPool.length > numberOfGroups) {
            valid = true
            document.getElementById("valid-group").innerHTML = "True"
        } else {
            valid = false
            document.getElementById("valid-group").innerHTML = "False"
        }
    }
}

function createGroups() {

    numberOfGroups = document.getElementById("number_field").value


    if (studentPool.length > numberOfGroups) {
        valid = true
        document.getElementById("valid-group").innerHTML = "True"
    } else {
        valid = false
        document.getElementById("valid-group").innerHTML = "False"
    }


    if(valid) {

        for(let i = 0; i < numberOfGroups; i++) {
            groups.push([])
        }

        let g = 0
        while (studentPool.length > 0) {

            if (g >= numberOfGroups) {
                g = 0
            }

            const index = Math.floor((Math.random() * studentPool.length))
            const student = studentPool.splice(index, 1)
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

    // alert("Import doesn't function yet")

    let list = prompt("List of students")
    studentPool = list.split(", ")
    document.getElementById("content-pool").innerHTML = arrayToString(studentPool)


}

function exportStudentPool() {

    alert("Export doesn't function yet")

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





document.getElementById("input-student").addEventListener("keydown", (e) => {
    // console.log("test")
    if (e.keyCode == 13) {
        console.log('enter pressed')
        //runs this function when enter is pressed
        newEntry(document.getElementById("input-student").value);
        // console.log(document.getElementById("input-student").value)
  
    }
})

document.getElementById("searchbox").addEventListener("keydown", (e) => {
    // console.log("test")
    if (e.keyCode == 13) {
        alert("Searchbox doesn't function yet")
        // console.log('enter pressed')
        //runs this function when enter is pressed
        // newEntry(document.getElementById("input-student").value);
        // console.log(document.getElementById("input-student").value)
  
    }
})