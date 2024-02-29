function openGame(id){
  var tr = localStorage['transfer'] == null ? 1 : parseInt(parseInt(localStorage['transfer']) + 1);
  localStorage['transfer'] = tr;
  const tld = ysdk.environment.i18n.tld;
  open('https://yandex.'+tld+'/games/play/'+id + "?lang="+lang, '_blank');
  ysdk.getLeaderboards().then(lb => {lb.setLeaderboardScore('trans', tr);});
}

function moregames(moregamesexit){
  return $('<button id="moregamesButton">').text(lang == 'ru' ? "Рекомендованные игры" : "Recommended games").click(function(){
    $('#mm').empty().append(
      $('<div>').append(getMoreGames()),
      $('<p>').append(
        $('<button>').text(lang == 'ru' ? "Назад" : "Back").click(moregamesexit)
      )
    ).hide().show(200);
  });
}

function getMoreGames(){
  const games = [
    {
      'id':283060,
      'ru': 'https://avatars.mds.yandex.net/get-games/1881364/2a0000018cb5f7edcda8d5f9ecd7b47b7e9f/cover1',
      'en': 'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d11d1b024a4330befb3205ca1f7/cover1',
      'mobile': false,
      'pc': true
    },
    {
      'id':286481,
      'ru': 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d031945b991228294d94bcbb69c/cover1',
      'en': 'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d0318f51972ed769ca852edb9eb/cover1',
      'mobile': true,
      'pc': true,
    },
    {
      'id':290170,
      'ru': 'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d558886629fa4eee604de406902/cover1',
      'en': 'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d558886629fa4eee604de406902/cover1',
      'mobile': true,
      'pc': true,
    },
    {
      'id': 283371,
      'ru':'https://avatars.mds.yandex.net/get-games/11374519/2a0000018ce46752871677f39a5385cdf076/cover1',
      'en':'https://avatars.mds.yandex.net/get-games/11374519/2a0000018ce46752871677f39a5385cdf076/cover1',
      'mobile': true,
      'pc': true
    },
    {
      'id': 287951,
      'ru':'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d50c6de0f730e32cb0c84b3865c/cover1',
      'en':'https://avatars.mds.yandex.net/get-games/10152950/2a0000018d50c6de0f730e32cb0c84b3865c/cover1',
      'mobile': true,
      'pc': true
    },
    {
      'id': 286735,
      'ru':'https://avatars.mds.yandex.net/get-games/6300668/2a0000018d077ddd2c09a48f24a59e395c2b/cover1',
      'en':'https://avatars.mds.yandex.net/get-games/11385414/2a0000018d077d7c92947370939595dcae46/cover1',
      'mobile':true,
      'pc': false
    }
  ];

  function getGame(game){
    if((isMobile && !game.mobile) || (!isMobile && !game.pc)) return null;
    return $("<div class='game'>").append($("<img>").attr('src',game[lang])).click(function(){
      openGame(game.id);
    });
  }

  const componentChields = [];

  for(let i = 0; i < games.length; i++){
    componentChields.push(getGame(games[i]));
  }

  return componentChields;
}
