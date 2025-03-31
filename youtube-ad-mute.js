//load into CJS or other script execution extension

// deletes the side panel - I find this distracting when trying to learn
// auto mutes ads when they play - they are loud and obnoxious
// might not be able to stop them - but I don't have to let them
// in my ear holes.

(function() {
    function checkAndMute() {
      const player = document.getElementById('movie_player');
      if (!player) return;
      if (player.classList.contains('ad-showing')) {
        player.mute();
      } else {
        player.unMute();
      }
    }
  
    function initObserver() {
      const moviePlayer = document.getElementById('movie_player');
      if (!moviePlayer) return;
      const observer = new MutationObserver(checkAndMute);
      observer.observe(moviePlayer, { attributes: true, attributeFilter: ['class'] });
      checkAndMute();
    }
    
    setTimeout(function() {
      document.querySelector('#secondary').remove();
    },500);
  
    // Wait for the movie player to load
    const interval = setInterval(() => {
      if (document.getElementById('movie_player')) {
        clearInterval(interval);
        initObserver();
      }
    }, 100);
  })();
  