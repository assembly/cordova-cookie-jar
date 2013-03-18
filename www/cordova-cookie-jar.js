var CDVCookieJar = (function (gap) {
  function CDVCookieJar() {};

  CDVCookieJar.storeCookiesForDomain = function(domain) {
    gap.exec(null, null, "CDVCookieJar", "storeCookiesForDomain", [domain]);
  };

  CDVCookieJar.restoreCookiesForDomain = function(domain) {
    gap.exec(null, null, "CDVCookieJar", "restoreCookiesForDomain", [domain]);
  };

  CDVCookieJar.emptyCookiesForDomain = function(domain) {
    gap.exec(null, null, "CDVCookieJar", "emptyCookiesForDomain", [domain]);
  };

  gap.addConstructor(function () {
    if (gap.addPlugin) {
      gap.addPlugin("cookieJar", CDVCookieJar);
    } else {
      if (!window.plugins) {
        window.plugins = {};
      }
      window.plugins.cookieJar = CDVCookieJar;
    }
  });
  return CDVCookieJar;
})(window.cordova || window.Cordova || window.PhoneGap);
