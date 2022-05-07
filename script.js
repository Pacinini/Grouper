var studentPool = []

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
        let str = ""
        for (var i = 0; i < studentPool.length; i++) {
            if (i + 1 != studentPool.length) {
                str += studentPool[i] + ", "
            } else {
                str += studentPool[i]
            }
        }
        document.getElementById("content-pool").innerHTML = str
        // for (var i = 1; i < 8; i++) {
        //     if (messages[messages.length - i])
        //         document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
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