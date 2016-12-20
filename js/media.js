window.addEventListener("play", function(evt){
			if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
			{
				window.$_currentlyPlaying.pause();
			}
			window.$_currentlyPlaying = evt.target;
		}, true)

