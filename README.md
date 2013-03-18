# Cordova Cookie Jar

Your Phonegap / Cordova app needs more persistent cookie based sessions.

    <script src="cordova-cookie-jar/cordova-cookie-jar.js"><script>

    <script>

       // ... somewhere after cookies have been created
       plugins.cookieJar.storeCookiesForDomain("your-domain.com");

       // ... somewhere before you wish those cookies didn't disappear
       plugins.cookieJar.restoreCookiesForDomain("your-domain.com");

       // ... somewhere after those cookies are no good anymore
       plugins.cookieJar.emptyCookiesForDomain("your-domain.com");

    </script>
