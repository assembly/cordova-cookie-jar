#import <Cordova/CDVPlugin.h>

@interface CDVCookieJar : CDVPlugin { }

- (void) storeCookiesForDomain:(CDVInvokedUrlCommand*)cdvCommand;
- (void) restoreCookiesForDomain:(CDVInvokedUrlCommand*)cdvCommand;
- (void) emptyCookiesForDomain:(CDVInvokedUrlCommand*)cdvCommand;

@end
