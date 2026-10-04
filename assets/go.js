// Creator links: dawnapp.co.il/<creator> sends the visitor to the right store,
// tagged with the creator's name so App Store Connect (ct=) and Play Console
// (utm_source=) can show installs per creator. Desktop visitors see both badges.
(function () {
  var APPLE_ID = '6804829042';
  var APPLE_PT = ''; // App Store Connect provider token; ct= is only attributed when this is set
  var PLAY_ID = 'com.dawnwake.app';

  var creator = (document.documentElement.getAttribute('data-creator') || 'creator')
    .toLowerCase().replace(/[^a-z0-9_-]/g, '');

  var apple = 'https://apps.apple.com/il/app/id' + APPLE_ID + '?ct=' + creator +
    (APPLE_PT ? '&pt=' + APPLE_PT : '') + '&mt=8';
  var play = 'https://play.google.com/store/apps/details?id=' + PLAY_ID + '&referrer=' +
    encodeURIComponent('utm_source=' + creator + '&utm_medium=creator&utm_campaign=mornings');

  var a = document.getElementById('apple');
  var p = document.getElementById('play');
  if (a) a.href = apple;
  if (p) p.href = play;

  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(ua);

  if (isAndroid) window.location.replace(play);
  else if (isIOS) window.location.replace(apple);
})();
