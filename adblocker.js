window.addEventListener("load", skipAd);

// Since cda.pl's ads are just <video> tags you can easily control them
// This script just starts the ad and rewinds it to the end
function skipAd() {
  const ad = document.querySelector(".pb-ad-video-player");
  if (ad != null) {
    ad.play();
    ad.currentTime = ad.duration;
    document.querySelector(".pb-video-player").pause(); // Pause the actual video so it doesn't start automatically
  }
}
