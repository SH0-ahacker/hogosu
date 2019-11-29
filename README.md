# hogosu.js
hogosu.js is a simple programation code

# Hello Word

hogosu use JavaScript commands version MEGACOOL AND EASY FOR REMENBER!!!!!!!!!!!!!!

1- use camera (JS, HTML)

# script:

<video autoplay=""></video>

function useCamera () {

const constraints = {

  video: true
};


const video = document.querySelector('video');

navigator.mediaDevices.getUserMedia(constraints).

  then((stream) => {video.srcObject = stream});
  
  
  
  }
  
  
# command
  
  useCamera()
