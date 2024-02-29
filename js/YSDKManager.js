var ysdk = null;

function InitYaSDK(){
	console.log('Yandex SDK begin initialized');
	window.lang = 'ru';
  if(window['YaGames'] != null)	YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
				window.lang = ysdk.environment.i18n.lang;
				window.isMobile = !ysdk.deviceInfo.isDesktop() && ysdk.deviceInfo._type != null;
				if(isMobile) $('#pcmovement').hide();
    });
}

InitYaSDK();

function updscore(){
	if(window['ysdk']!=null)
	  ysdk.getLeaderboards()
	  .then(lb => {
		lb.setLeaderboardScore('lead', parseInt(score));
	  });
	  else console.log("ysdk == null");
}

document.addEventListener("visibilitychange", function() {
	  if (document.visibilityState === "hidden") {
			unityInstance.SendMessage('Level', 'PreBanner');
			window['MusEnable'] = false;
			pauseMusic();
	  }
	  else if(!advInScr){
			unityInstance.SendMessage('Level', 'PostBanner');
			window['MusEnable'] = true;
			playMusic();
	  }
	});

function setSize() {
    var unityContainer = document.getElementById("unityContainer");
    unityContainer.style.width = window.innerWidth + "px";
    unityContainer.style.height = window.innerHeight + "px";
  }

function yabanner(end){

	if(window['ysdk']==null){
		window['MusEnable'] = true;
				end();
				playMusic();
		return;
	}

	window['MusEnable'] = false;
	pauseMusic();
  advInScr = true;
  unityInstance.SendMessage('Level', 'PreBanner');
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
		window['MusEnable'] = true;
	  unityInstance.SendMessage('Level', 'PostBanner');
	  end();
	  advInScr = false;
		playMusic();
	}}});
}

var advInScr = false;

function yarbanner(reward,end){
	window['MusEnable'] = false;
	pauseMusic();
	if(window['ysdk']==null){
		window['MusEnable'] = true;
		end();
		playMusic();
		return;
	}

  advInScr = true;
  unityInstance.SendMessage('Level', 'PreBanner');

  ysdk.adv.showRewardedVideo({callbacks: {
	  onRewarded:reward,
	  onClose: function(){
		unityInstance.SendMessage('Level', 'PostBanner');
		window['MusEnable'] = true;
		end();
		advInScr = false;
		playMusic();
	}}});
}
