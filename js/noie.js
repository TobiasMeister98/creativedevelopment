var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    document.write('<div style="width: 1000px; margin: 200px auto 0; border: 1px solid #888; padding: 10px; border-radius: 5px; box-shadow: 5px 5px 5px #444;"><h1 style="color: #f00;">Tut uns leid!</h1><hr>' +
                   '<h2>Diese Webseite ist nicht leider mit Ihrem Browser (Internet Explorer) kompatibel!<br>' +
                   'Bitte verwenden Sie einen anderen Browser, um diese Webseite aufzurufen.</h2><hr>' +
                   '<h3>M&ouml;gliche Browser:</h3>' +
                   '<h4>&#9679; <a href="https://www.mozilla.org/de/firefox/new/#">Mozilla Firefox</a></h4>' +
                   '<h4>&#9679; <a href="https://www.google.de/intl/de/chrome/browser/desktop/index.html">Google Chrome</a></h4></div>');
    document.write('<script type="text/undefined">');
}