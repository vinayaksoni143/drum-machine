var volume = 50;
var setPower = 1;
var setBank = 1;
var display_text=''

var l = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
}, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
}, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
}, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
}, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
}, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
}, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
}, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
}, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}];

var d = [{
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
}, {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
}, {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
}, {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
}, {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
}, {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
}, {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
}, {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
}, {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
}]

$("#power").on("click", function(){
    var p=$('#power').css("float")
    if(p=="right"){
        $('#power').css({"background-color":"red","float":"left"});
        setPower = 0;
        $('.pad-bank').css({"pointer-events":"none","opacity":"0.7"});
        console.log('Power OFF');
    }
    else{
        $('#power').css({"background-color":"rgb(19, 192, 82)","float":"right"});
        setPower = 1;
        $('.pad-bank').css({"pointer-events":"auto","opacity":"1"});
        console.log('Power ON');
    }
})

$("#bank").on("click", function(){
    var b=$('#bank').css("float")
    if(b=="right"){
        $('#bank').css({"background-color":"red","float":"left"});
        setBank = 0;
        console.log('Bank OFF');
    }
    else{
        $('#bank').css({"background-color":"rgb(19, 192, 82)","float":"right"});
        setBank = 1;
        console.log('Bank ON');
    }
})

function playAudio(x,vol) {
    var audioObj=''
    if(setBank==1){
        audioObj = l.find(item => item.keyTrigger === x);
    }
    else{
        audioObj = d.find(item => item.keyTrigger === x);
    }

    if (audioObj) {
        // Create an audio element
        const audio = new Audio(audioObj.url);
        audio.volume = vol/100;
        audio.play();
    }

}

function event_listener(id){
    id = id.trim()
    id = id.toUpperCase()
    console.log(id)

    var display_text = '';

    if(setBank==1){
        display_text = l.find(item => item.keyTrigger === id);
    }
    else{
        display_text = d.find(item => item.keyTrigger === id);
    }
    
    $('#display').text(display_text.id)
    playAudio(id,volume);

}

$('.drum-pad').on("click", function(){
    const key = $(this).text();
    event_listener(key)
  });

$(document).on('keydown', function(event) {
    const key = event.key;
    if(setPower==0){
        event.preventDefault();
    }
    else{
        event_listener(key);
    }
    
});

$('#volume').on('change', function(){
    volume = $(this).val();
    $("#display").text('Volume '+volume);
})




