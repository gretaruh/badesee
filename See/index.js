

var images = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png','11.png','12.png','13.png','14.png','15.png']
document.addEventListener("click",addElement);

function addElement(event) {

    console.log(event.pageX);
    var article = document.createElement("img");
    article.classList.add('click')

    
    let randomimg = Math.floor(Math.random() * images.length);

    article.setAttribute('src', 'images/badepeople/'+images[randomimg]);
    article.style.left = event.pageX + "px";
   article.style.top = event.pageY + "px";
   
   
   document.body.appendChild(article);
   }











   // Animation control
function startAnimation() {

    let flowers = document.querySelectorAll('.floweranimation');
  
    flowers.forEach(function (flower){
      flower.style.animationPlayState = "running";
    });
  }



  const el = this;
var newone = elm.cloneNode(true);
elm.parentNode.replaceChild(newone, elm);



//AUDIO FUNCTIONS

var song = document.getElementById("backsound");
song.volume = - 5;

function playAudio2() {
  song.addEventListener('timeupdate', function(){
    var buffer = .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
  song.play();
}

function pauseAudio() {
  x.pause();
}



function myfunction(event) {
  var audio = new Audio('kinder.mp3');
  audio.play();

let bild = document.getElementById('kinder');

bild.addEventListener('mouseover')

}

function myfunction2(event) {
  var audio = new Audio('musikmenschen.mp3');
  audio.play();

let bild = document.getElementById('hinten');

bild.addEventListener('mouseover')

}




function play_birds(event) {
  var audio = new Audio('birds.mp3');
  audio.play();
}




function play_boy(event) {
  var audio = new Audio('boah_ente.mp3');
  audio.play();
}





