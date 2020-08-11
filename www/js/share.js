function open_facebook() {
    window.open('https://www.facebook.com/insiteswebdesign', '_system', 'location=yes');
    return false;
}

function open_twitter() {
    window.open('https://www.twitter.com/insites_ke', '_system', 'location=yes');
    return false;
}

function open_blog() {
    window.open('http://www.insiteskenya.com/blog', '_system', 'location=yes');
    return false;
}

function open_website() {
    window.open('http://www.insiteskenya.com', '_system', 'location=yes');
    return false;
}

function call_orange() {
    //window.location ='tel:+254775488080';
    window.open('tel:+254775488080', '_system');
}

function call_airtel() {
    //window.location ='tel:+254752305333';
    window.open('tel:+254732400500', '_system');
}

function email_gmail() {
    window.open('mailto:insiteskenya@gmail.com', '_system');
}

function email_info() {
    window.open('mailto:info@insiteskenya.com', '_system');
}


function share() {
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
    var options = {
        message: 'Check Football fixtures,results,table standings, team/player/competition profiles for all your favourite teams! Download the new Football Fanzone App ', // not supported on some apps (Facebook, Instagram)

        url: 'http://www.insiteskenya.com',
        chooserTitle: 'Share Via' // Android only, you can override the default share sheet title
    }

    var onSuccess = function (result) {
        console.log("Share complete " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }

    var onError = function (msg) {
        console.log("Sharing failed: " + msg);
    }

    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}
