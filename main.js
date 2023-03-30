P1 = ""
P2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quallity:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+ data_uri +'">';
    }
    )
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y5RQ6DezO/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded")


}

function speak(){
    var synth = window.speechSynthesis;
    speak1 = "The first prediction is   "+ P1;
    speak2 = "The second prediction is  "+ P2;
    var utterThis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterThis);

}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img,GotResult);
}
function GotResult(error,result){

    if(error){
        console.error(error);

    }
    else{
        console.log(result);

        document.getElementById("result_emotion_name").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result [1].label;

        P1 = result[0].label;
        P2 = result[1].label; 
        
        speak()

        if(P1 == "happy")
        {
            document.getElementById("update_emoji").innerHTML ="&#128522;";

        }

        if(P1 == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532;";

            
        }
        if(P1 == "crying")
        {
            document.getElementById("update_emoji").innerHTML = "&#128546;";

            
        }
        if(P1 == "confused")
        {
            document.getElementById("update_emoji").innerHTML = "&#x1f615;";


            
        }




        if(P2 == "happy")
        {
            document.getElementById("update_emoji2").innerHTML ="&#128522;";

        }

        if(P2 == "sad")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128532;";

            
        }
        if(P2 == "crying")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128546;";

            
        }
        if(P2 == "confused")
        {
            document.getElementById("update_emoji2").innerHTML = "&#x1f615;";


            
        }
        
        
        
        



    }



}