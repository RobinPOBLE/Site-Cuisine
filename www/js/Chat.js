var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


error_log = document.getElementById("Message_error")
message_log = document.getElementById("Chat_list")
body = document.getElementById("Chat_list");
input = document.getElementById("Type_box");
form = document.getElementById("Message_send");

form.addEventListener("submit",function(event) {
    sendMessage(event);
})

function sendMessage(event) {
    event.preventDefault();
    req=$.ajax({url: "../htbin/chatsend.py", method:"POST",success: function(data) {
        console.log(req.responseText);
        items=req.responseText
        if (items[num]!=0) {
            error_log.innerHTML = items[msg];
        }
        else {
            req2=$.getJSON("../htbin/chatget.py", function(data) {
                message_log.innerHTML=req2.responseText;
            })
        }
    }
    })
}


