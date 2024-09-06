// jwplayer.js
// Add your JW Player initialization code here
jwplayer("player").setup({
  file: "https://path_to_your_video.mp4", // Replace with your video URL
  image: "https://path_to_your_poster_image.jpg", // Replace with your poster image URL
  width: "100%",
  aspectratio: "16:9",
  skin: {
    name: "netflix"
  }
});
