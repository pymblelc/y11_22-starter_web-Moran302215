console.log('hello world');

let myImage = document.getElementById("myPhoto");
let results = document.getElementById("myText");
let myButton = document.getElementById("btnAnalyse");

let imageURL = myImage.src;



myButton.addEventListener("click", function () {

    ImageAPI.analyseFaces(imageURL, function (data) {
        let finalInfo = (data[0].faceAttributes.age);
        results.innerHTML = 
        'This person looks about ' 
        + finalInfo 
        + ' years old.';
    });

});