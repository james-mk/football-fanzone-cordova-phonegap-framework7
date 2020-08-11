document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
        .startInit("2be06239-c625-4755-b673-8dd3c7a1511e")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
}, false);

