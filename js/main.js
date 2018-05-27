var video = document.getElementById("video");
var transcript = document.querySelectorAll("span");

video.addEventListener("timeupdate", () => {
  for (let i=0; i <transcript.length; i++){
    if (video.currentTime >= transcript[i].getAttribute("data-start") && video.currentTime <= transcript[i].getAttribute("data-end")){
      transcript[i].style.color = "#ff3333";
    } else {
      transcript[i].style.color = "#222";
    }
  }
});
