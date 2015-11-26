//global var
order = { source: { value: '', status: 0 }, destination: { value: '', status: 0 }, numOfPeople: { value: 1, status: 0 } };
msgMaxWidth = window.innerWidth - 100;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCurrentLocation);

}
function getCurrentLocation(position) {
    $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyARHmqF_2XzhSv8PBGCDg2-X5p12W5lOIU', function (res) {
        console.log(res);
        if (res['results'] != undefined) {
            order.source.value = res.results[0].formatted_address;
            order.source.status = 1;
        }

    });
}
//init speech recognition
if (!('webkitSpeechRecognition' in window))
{
    alert("You browser doesn't support speech recognition, please use Chrome.");
}
recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = true;
recognition.lang = "en-US";
recognition.onstart = function () {
    console.log('start');
    $('#inputBox').css('background', '#dd4b39');
    $('#sendBtn').text('Listening');
};
recognition.onend = function () {
    $('#inputBox').css('background', 'white');
    $('#sendBtn').text('Send');
    $('#sendBtn').trigger('click');
};
recognition.onerror = function (e) {
    $('#inputBox').css('background', 'white');
    $('#sendBtn').text('Send');
    console.log(e);
};
recognition.onresult = function (e) {
    
    $('#answerTxt').val(e.results[0][0].transcript);
};
function googleMapPlugin(field) {

}
//scripts of AI
scripts =
    {
    destination: ["Where are you want to go?",
                  "Your destination is {location}, right?",
                   "We cannot locate your destination or it isn't in service area, please try again."],
    source: ["Where are you now?","Your location is {location}, right?","Excuse me, where are you now?"],
    numOfPeople:['How many passengers?'],
};
//AI speak
function ask(content) {
    var words = content.split('|')[0];
    var plugin = '';
    if (content.split('|').length > 1)
        plugin = content.split('|')[1];
    var msg = new SpeechSynthesisUtterance(words);
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
    words = words.replace(new RegExp('\\n'), "</br>");
    $('#content').append('<div class="direct-chat-msg">\
    <div class="direct-chat-info clearfix">\
        <span class="direct-chat-name pull-left">Campus Cruiser</span>\
        <span class="direct-chat-timestamp pull-right">'+ (new Date()).toLocaleString() + '</span>\
    </div><!-- /.direct-chat-info -->\
    <img class="direct-chat-img" src="Cruiser_Logo.jpg" alt="message user image"><!-- /.direct-chat-img -->\
    <div class="direct-chat-text" style="background:#f39c12;color:white;float:left;margin-left:20px;max-width:'+msgMaxWidth+'px"><div>' + words +'</div><div>'+plugin+'</div>'+
    '</div><!-- /.direct-chat-text -->\
    </div><!-- /.direct-chat-msg -->');
    if ($('#content').height() > $('#msgBox').height()) {
        $('#msgBox').scrollTop($('#content').height() - $('#msgBox').height());
    }
    

}
function locationStatus(field,addr){
    if (addr[0] == 0) {
        order[field].status = 1;
        order[field].value = addr[1];
        return scripts[field][order[field].status].replace("{location}", order[field].value) + '|<iframe width="100%" height="300" frameborder="0" style="border:0;" src="https://www.google.com/maps/embed/v1/search?q='+addr[2]+'+' + String(addr[1]).replace(' ', '+') + ',+Los+Angeles,+CA,+United+States&key=AIzaSyAOwwmWHbANks4G77DpHp3h_5Ag0dxds-Y" allowfullscreen></iframe>';
    } else {
        order[field].status = 0;
        return scripts[field][2];
    }
}
function dirtyWords(words) {
    if (words.match(new RegExp('\\*|hell|damn', 'i')))
        return true;
    else
        return false;
}
//manage dialogue
function dialogueManage(order, words) {
    console.log(words);
    if (dirtyWords(words))
        return "Please notice your words!";
    //for each field, 0=haven't ask, 1=wait for confirm, 2=cannot accquire, 3=confirmed
    if (order.destination.status < 3) {
        switch (order.destination.status) {
            case 0:
                var addr = getAddr(words);
                return locationStatus('destination',addr);
                break;
            case 1:
                if (isConfirm(words)) {
                    order.destination.status = 3;
                    if (order.source.status == 0)
                        return scripts.source[0];
                    else {
                        var addr = [0, order.source.value];
                        return locationStatus('source', addr);
                    }
                        
                } else {
                    var addr = getAddr(words);
                    return locationStatus('destination', addr);
                }
                break;
         
        }
    } else if (order.source.status < 3) {
        switch (order.source.status) {
            case 0:
                var addr = getAddr(words);
                return locationStatus('source', addr);
                break;
            case 1:
                if (isConfirm(words)) {
                    if (order.source.value != order.destination.value) {
                        order.source.status = 3;
                        return scripts.numOfPeople[0];
                    } else {
                        return "Can you walk to there?";
                    }
                } else {
                    var addr = getAddr(words);
                    return locationStatus('source', addr);
                }
                break;

        }
    } else if (order.numOfPeople.status < 3) {
        switch (order.numOfPeople.status) {
            case 0:
                var num = getPeople(words);
                order.numOfPeople.value = num;
                order.numOfPeople.status = 1;
                return num > 1 ? num + ' passengers, right?' : 'just one passengers, right?';
                break;
            case 1:
                if (isConfirm(words)) {
                    order.numOfPeople.status = 3;
                    return "Here is your reservation.\n Pick up at " + order.source.value + ".\nDrop off at " + order.destination.value + ".\n Number of passengers is " + order.numOfPeople.value + '.\n Please confirm.|'+
                        '<iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/directions?origin=' + String(order.source.value).replace(' ', '+') + ',+Los+Angeles,+CA,+United+States&destination=' + String(order.destination.value).replace(' ', '+') + ',+Los+Angeles,+CA,+United+States&key=AIzaSyAOwwmWHbANks4G77DpHp3h_5Ag0dxds-Y" allowfullscreen></iframe>';
                } else {
                    var num = getPeople(words);
                    order.numOfPeople.value = num;
                    return num > 1 ? num + ' passengers, right?' : 'just one passenger, right?';
                }
                break;

        }
    } else {
        if (isConfirm(words)) {
            return "Thank you! Your reservation is confirmed. Confirmation code is FIGHTON. We will arrive in 15 minutes.";
        } else {
            var field = whichField(words);
            switch (field) {
                case 'destination':
                    var addr = [0, order.source.value];
                    return locationStatus('source', addr);
                    break;
                case 'source':
                    var addr = getAddr(words);
                    return locationStatus('source', addr);
                    break;
                case 'numOfPeople':
                    var num = getPeople(words);
                    order.numOfPeople.status = 1;
                    order.numOfPeople.value = num;
                    return num > 1 ? num + ' passengers, right?' : 'just one passenger, right?';
                    break;
                case 'none':
                    return 'If something wrong, please tell me.';
            }
        }
    }
}
function whichField(words) {
    if (words.match(new RegExp('want to go|destination', 'i')))
        return 'destination';
    if (words.match(new RegExp('in(/s/S)*now|location|origin', 'i')))
        return 'source';
    if (words.match(new RegExp('people|men|man|woman|women|guys', 'i')))
        return 'numOfPeople';
    return 'none';
}
//user speak
function answer(words) {
    $('#content').append('<div class="direct-chat-msg right">\
                    <div class="direct-chat-info clearfix">\
                        <span class="direct-chat-name pull-right">You</span>\
                        <span class="direct-chat-timestamp pull-left">'+(new Date()).toLocaleString()+'</span>\
                    </div><!-- /.direct-chat-info -->\
                    <img class="direct-chat-img" src="images.jpg" alt="message user image"><!-- /.direct-chat-img -->\
                    <div class="direct-chat-text" style="float:right;margin-right:20px;max-width:' + msgMaxWidth + 'px">'
                      +words+
                    '</div><!-- /.direct-chat-text -->\
                </div><!-- /.direct-chat-msg -->\
        ');

   ans= dialogueManage( order, words);
   ask(ans);

}