var script = document.createElement('script');
script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


error_log = document.getElementById("Message_error")
message_log = document.getElementById("Chat_list")
body = document.getElementById("Chat_list");
input = document.getElementById("Type_box");
form = document.getElementById("Message_send");
box = document.getElementById("Type_box");


form.addEventListener("submit",function(event) {
    event.preventDefault();
    sendMessage();
});


var intervalID = window.setInterval(function() {
    req2=$.ajax({url: "../htbin/chatget.py", dataType: "JSON", success: function(rep2) {
        for (let i=rep2.length-1; i<rep2.length; i++) {
            cur=rep2[i];
            if (body.lastChild.lastChild!=null && !(cur.msg==body.lastChild.lastChild.innerHTML && cur.user==body.lastChild.firstChild.innerHTML)) {
                fragment = document.createDocumentFragment();
                msg_c= fragment.appendChild(document.createElement("div"));
                msg_c.className="Message_container"
                usr= msg_c.appendChild(document.createElement("div"))
                msg=msg_c.appendChild(document.createElement("div"))
                usr.innerHTML=cur.user;
                msg.innerHTML=cur.msg;
                body.appendChild(fragment);
            }
            
        }
    }
    })
},1000);



$(function() {
    $('form').each(function() {
        $(this).find('input').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                sendMessage(event);
            }
        });

        $(this).find('input[type=submit]').hide();
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
           req2=$.ajax({url: "../htbin/chatget.py", dataType: "JSON", success: function(rep2) {
                for (let i=rep2.length-1; i<rep2.length; i++) {
                    cur=rep2[i];
                    fragment = document.createDocumentFragment();
                    msg_c= fragment.appendChild(document.createElement("div"));
                    msg_c.className="Message_container"
                    usr= msg_c.appendChild(document.createElement("div"))
                    msg=msg_c.appendChild(document.createElement("div"))
                    usr.innerHTML=cur.user;
                    msg.innerHTML=cur.msg;
                    body.appendChild(fragment);
                    
                }
           }
        })
        }
    }
    })
};
