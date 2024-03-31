var script = document.createElement('script');
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


error_log = document.getElementById("Message_error")
message_log = document.getElementById("Chat_list")
body = document.getElementById("Chat_list");
form = document.getElementById("Message_send");
box = document.getElementById("Type_box");


form.addEventListener("submit",function(event) {
    event.preventDefault();
    sendMessage();
});

function getMessages() {
    req2=$.ajax({url: "../htbin/chatget.py", dataType: "JSON", success: function(rep2) {
        for (let i=rep2.length-1; i<rep2.length; i++) {
            cur=rep2[i];
            if (body.lastChild.lastChild!=null && !(cur.msg==body.lastChild.lastChild.innerHTML && cur.user+" ("+cur.time+") : "==body.lastChild.firstChild.innerHTML)) {
                fragment = document.createDocumentFragment();
                msg_c= fragment.appendChild(document.createElement("div"));
                msg_c.className="Message_container";
                usr= msg_c.appendChild(document.createElement("span"));
                msg=msg_c.appendChild(document.createElement("span"));
                msg.className="Message_content";
                usr.innerHTML=cur.user+" ("+cur.time+") : ";
                msg.innerHTML=cur.msg;
                body.appendChild(fragment);
            }
            
        }
    }
    })
}


var getChat = window.setInterval(getMessages(),1000);



$(function() {
    $("#Type_box").keypress(function (e) {
        if(e.which === 13 && !e.shiftKey) {
            e.preventDefault();
        
            sendMessage(event);
        }
    });
});

function sendMessage(event) {
    event.preventDefault();
    console.log(box.value);
    
    req=$.ajax({url: "../htbin/chatsend.py", method: "POST", data:{msg: box.value} ,success: function(rep) {
        console.log(req.responseText);
        if (rep.num!=0) {
            error_log.innerHTML = rep.msg;
            console.log(typeof(rep)+"\n"+rep.num+"\n"+rep.msg);
        }
        else {
            clearInterval(getChat);
            req2=$.ajax({url: "../htbin/chatget.py", dataType: "JSON", success: function(rep2) {
                for (let i=rep2.length-1; i<rep2.length; i++) {
                    cur=rep2[i];
                    fragment = document.createDocumentFragment();
                    msg_c= fragment.appendChild(document.createElement("div"));
                    msg_c.className="Message_container"
                    usr= msg_c.appendChild(document.createElement("span"))
                    msg=msg_c.appendChild(document.createElement("span"))
                    msg.className="Message_content";
                    usr.innerHTML=cur.user+" ("+cur.time+") : ";
                    msg.innerHTML=cur.msg;
                    body.appendChild(fragment);
                    body.scrollTop=body.scrollHeight;
                }
            }
        })
        getChat = window.setInterval(getMessages(),1000);
        }
    }
    })
};
