// MUDANÇA DE SLIDES DO CARROSSEL

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

showSlide(currentSlide)

slideInterval = setInterval(() => showSlide(currentSlide + 1), 8000);




const postVideo = document.querySelectorAll(".post[data-post-type='video'] .play")
for (let i = 0; i < postVideo.length; i++) {
  postVideo[i].addEventListener("click", function() {
    resumeVideo(this.parentNode.querySelector("video"))
  })
}


const videos = document.querySelectorAll(".post[data-post-type='video'] video")
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("pause", function() {
    console.log("pause")
    pauseVideo(this)
  })

  videos[i].addEventListener("play", function() {
    console.log("play")
    resumeVideo(this)
  })
}

function pauseVideo(video) {
  video.parentNode.querySelector(".play").classList.remove("hidden")
  video.controls = false
  video.pause()
}

function resumeVideo(video) {
  video.parentNode.querySelector(".play").classList.add("hidden")
  video.controls = true
  video.play()
}



// const postVideoPlay = document.querySelectorAll(".post[data-post-type='video'] .play")
// for (let i = 0; i < postVideo.length; i++) {
//   postVideoPlay[i].addEventListener("click", function() {
//     this.parentNode.querySelector("video").play()
//     this.classList.add("hidden")
//   })
// }