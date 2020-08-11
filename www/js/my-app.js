// Initialize your app
var myApp = new Framework7({

    name: 'Football Fan Zone',
    version: '2.0.0',
    material: true,



    fastClicks: true,

    // App id
    id: 'com.insiteskenya.footie',

    // Enable swipe panel
    swipePanel: 'left',

    swipePanelOnlyClose: false,


    clicks: {
        externalLinks: '.external',
    },

    activeState: true,

    pushState: true


});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true

});



$$('#email').click(function() {

    email_gmail();

});
$$('#call').click(function() {

    call_airtel();

});

$$('#surf').click(function() {

    open_website();

});

$$('#share').click(function() {

    share();

});



$$('#llt').click(function() {

    la_liga_table();

});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    if (!navigator.onLine) {
        alert('Oops! You are offline. Please Turn on Wifi or Mobile Data to use the App');
        navigator.app.exitApp();
    }



});



$$(document).on('page:reinit', function(e, page) {
    // Do something here when page loaded and initialized




});




$$(document).on('click', '#eplteams', function(e) {
    eplTeams();
});




$$(document).on('click', '#lt', function(e) {
    la_ligaTeams();
});




$$(document).on('click', '#sateams', function(e) {
    serie_a_teams();
});





$$(document).on('click', '#bundesteams', function(e) {
    bundesligaTeams();
});




$$(document).on('click', '#l1teams', function(e) {
    ligue_1_teams();
});



$$(document).on('click', '#cityfixtures', function(e) {
    cityFixtures();
});


$$(document).on('click', '#manufixtures', function(e) {
    manuFixtures();
});


$$(document).on('click', '#lfcfixtures', function(e) {
    liverpoolFixtures();
});


$$(document).on('click', '#spursfixtures', function(e) {
    spursFixtures();
});


$$(document).on('click', '#chelseafixtures', function(e) {
    chelseaFixtures();
});


$$(document).on('click', '#arsenalfixtures', function(e) {
    arsenalFixtures();
});


$$(document).on('click', '#barcafixtures', function(e) {
    barcelonaFixtures();
});


$$(document).on('click', '#realfixtures', function(e) {
    realFixtures();
});


$$(document).on('click', '#atletifixtures', function(e) {
    atleticoFixtures();
});


$$(document).on('click', '#sevillafixtures', function(e) {
    sevillaFixtures();
});


$$(document).on('click', '#villafixtures', function(e) {
    villarealFixtures();
});


$$(document).on('click', '#milanfixtures', function(e) {
    milanFixtures();
});


$$(document).on('click', '#interfixtures', function(e) {
    interFixtures();
});


$$(document).on('click', '#juvefixtures', function(e) {
    juventusFixtures();
});


$$(document).on('click', '#laziofixtures', function(e) {
    lazioFixtures();
});


$$(document).on('click', '#napolifixtures', function(e) {
    napoliFixtures();
});


$$(document).on('click', '#romafixtures', function(e) {
    romaFixtures();
});


$$(document).on('click', '#bayernfixtures', function(e) {
    bayernFixtures();
});


$$(document).on('click', '#dortmundfixtures', function(e) {
    dortmundFixtures();
});



$$(document).on('click', '#lyonfixtures', function(e) {
    lyonFixtures();
});



$$(document).on('click', '#marseillefixtures', function(e) {
    marseilleFixtures();
});


$$(document).on('click', '#monacofixtures', function(e) {
    monacoFixtures();
});


$$(document).on('click', '#psgfixtures', function(e) {
    psgFixtures();
});

$$(document).on('click', '#uclfixtures', function(e) {
    uclFixtures();
});

$$(document).on('click', '#eplfixtures', function(e) {
    eplFixtures();
});

$$(document).on('click', '#llf', function(e) {
    la_ligaFixtures();
});

$$(document).on('click', '#safixtures', function(e) {
    serie_a_fixtures();
});


$$(document).on('click', '#bundesfixtures', function(e) {
    bundesligaFixtures();
});

$$(document).on('click', '#l1fixtures', function(e) {
    ligue_1_Fixtures();
});

$$(document).on('click', '#uclfixtures', function(e) {
    uclFixtures();
});

//ONCLICK EVENTS FOR SQUAD BUTTONS


$$(document).on('click', '#lyon_sq', function(e) {
    lyonPlayers();
});

$$(document).on('click', '#marseille_sq', function(e) {
    marseillePlayers();
});
$$(document).on('click', '#monaco_sq', function(e) {
    monacoPlayers();
});
$$(document).on('click', '#psg_sq', function(e) {
    psgPlayers();
});

$$(document).on('click', '#bayern_sq', function(e) {
    bayernPlayers();
});

$$(document).on('click', '#dortmund_sq', function(e) {
    dortmundPlayers();
});

$$(document).on('click', '#milan_sq', function(e) {
    milanPlayers();
});

$$(document).on('click', '#inter_sq', function(e) {
    interPlayers();
});

$$(document).on('click', '#juventus_sq', function(e) {
    juventusPlayers();
});
$$(document).on('click', '#lazio_sq', function(e) {
    lazioPlayers();
});

$$(document).on('click', '#napoli_sq', function(e) {
    napoliPlayers();
});

$$(document).on('click', '#roma_sq', function(e) {
    romaPlayers();
});

$$(document).on('click', '#barcelona_sq', function(e) {
    barcelonaPlayers();
});

$$(document).on('click', '#real_sq', function(e) {
    realPlayers();
});
$$(document).on('click', '#atletico_sq', function(e) {
    atleticoPlayers();
});

$$(document).on('click', '#sevilla_sq', function(e) {
    sevillaPlayers();
});

$$(document).on('click', '#villareal_sq', function(e) {
    villarealPlayers();
});

$$(document).on('click', '#city_sq', function(e) {
    cityPlayers();
});

$$(document).on('click', '#united_sq', function(e) {
    manuPlayers();
});

$$(document).on('click', '#liverpool_sq', function(e) {
    liverpoolPlayers();
});

$$(document).on('click', '#spurs_sq', function(e) {
    spursPlayers();
});

$$(document).on('click', '#chelsea_sq', function(e) {
    chelseaPlayers();
});

$$(document).on('click', '#arsenal_sq', function(e) {
    arsenalPlayers();
});


$$(document).on('click', '#epl_prev', function(e) {
    epl_prev();
});
$$(document).on('click', '#laliga_prev', function(e) {
    laliga_prev();
});

$$(document).on('click', '#serie_a_prev', function(e) {
    serie_a_prev();
});

$$(document).on('click', '#bundesliga_prev', function(e) {
    bundesliga_prev();
});

$$(document).on('click', '#ligue_1_prev', function(e) {
    ligue_1_prev();
});

// PREVIOUS GAMES 
//ENGLAND

$$(document).on('click', '#city_prev', function(e) {
    city_prev();
});

$$(document).on('click', '#united_prev', function(e) {
    united_prev();
});

$$(document).on('click', '#chelsea_prev', function(e) {
    chelsea_prev();
});

$$(document).on('click', '#arsenal_prev', function(e) {
    arsenal_prev();
});

$$(document).on('click', '#liverpool_prev', function(e) {
    liverpool_prev();
});

$$(document).on('click', '#spurs_prev', function(e) {
    spurs_prev();
});

//SPAIN

$$(document).on('click', '#madrid_prev', function(e) {
    madrid_prev();
});

$$(document).on('click', '#barcelona_prev', function(e) {
    barcelona_prev();
});

$$(document).on('click', '#atletico_prev', function(e) {
    atletico_prev();
});

$$(document).on('click', '#sevilla_prev', function(e) {
    sevilla_prev();
});

$$(document).on('click', '#villareal_prev', function(e) {
    villareal_prev();
});

//ITALY

$$(document).on('click', '#juventus_prev', function(e) {
    juventus_prev();
});

$$(document).on('click', '#napoli_prev', function(e) {
    napoli_prev();
});

$$(document).on('click', '#roma_prev', function(e) {
    roma_prev();
});

$$(document).on('click', '#lazio_prev', function(e) {
    lazio_prev();
});

$$(document).on('click', '#inter_prev', function(e) {
    inter_prev();
});

$$(document).on('click', '#milan_prev', function(e) {
    milan_prev();
});

//GERMANY

$$(document).on('click', '#bayern_prev', function(e) {
    bayern_prev();
});

$$(document).on('click', '#dortmund_prev', function(e) {
    dortmund_prev();
});

//FRANCE

$$(document).on('click', '#psg_prev', function(e) {
    psg_prev();
});

$$(document).on('click', '#lyon_prev', function(e) {
    lyon_prev();
});

$$(document).on('click', '#monaco_prev', function(e) {
    monaco_prev();
});

$$(document).on('click', '#marseille_prev', function(e) {
    marseille_prev();
});




/*$$(document).on('click', '#', function (e) {
 
});

$$(document).on('click', '#', function (e) {
   
});

$$(document).on('click', '#', function (e) {
  
});


*/

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function(page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    var page = e.detail.page;
    preload();


    if (page.name === 'ucl') {

        ucl();
    }
    if (page.name === 'ucl_table') {

        uclTable();
    }
    if (page.name === 'serie_a') {

        serie_a();
    }
    if (page.name === 'ligue_1') {

        ligue_1();
    }
    if (page.name === 'laliga') {

        la_liga();
    }
    if (page.name === 'epl') {

        epl();
    }
    if (page.name === 'bundesliga') {

        bundesliga();
    }
    if (page.name === 'man_city') {

        city();
    }
    if (page.name === 'man_united') {

        manu();
    }
    if (page.name === 'tottenham') {

        spurs();
    }
    if (page.name === 'liverpool') {

        liverpool();
    }
    if (page.name === 'chelsea') {

        chelsea();
    }
    if (page.name === 'arsenal') {

        arsenal();
    }
    if (page.name === 'lyon') {

        lyon();
    }
    if (page.name === 'marseille') {

        marseille();
    }
    if (page.name === 'monaco') {

        monaco();
    }
    if (page.name === 'psg') {

        psg();
    }
    if (page.name === 'bayern_munich') {

        bayern();
    }
    if (page.name === 'dortmund') {

        dortmund();
    }

    if (page.name === 'ac_milan') {

        milan();
    }
    if (page.name === 'inter_milan') {

        inter();
    }
    if (page.name === 'juventus') {

        juventus();
    }
    if (page.name === 'lazio') {

        lazio();
    }
    if (page.name === 'napoli') {

        napoli();
    }
    if (page.name === 'roma') {

        roma();
    }

    if (page.name === 'atletico_madrid') {

        atletico();
    }
    if (page.name === 'barcelona') {

        barcelona();
    }
    if (page.name === 'real_madrid') {

        real();
    }
    if (page.name === 'sevilla') {

        sevilla();
    }
    if (page.name === 'villareal') {

        villareal();
    }
});
$$(document).on('click', '.button', function(e) {
    myApp.showIndicator();
    setTimeout(function() {
        myApp.hideIndicator();
    }, 2300)
});



function eplTable() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2021/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);

            //console.log(response);

            var item = response.standings;
            console.log(item);


            var output = "";

            for (i = 0; i < item.length; i++) {

                let position = item[i].table;

                console.log(position);

                let team = item[i].team;
                console.log(team);
                let drawn = position[i].draw;
                //let drawn = position[i].draw;
                let gd = position[i].goalDifference;
                let ga = position[i].goalsAgainst;
                let gf = position[i].goalsFor;
                let lost = position[i].lost;
                let played = position[i].playedGames;
                let points = position[i].points;
                let tposition = position[i].position;



                /* 
                
                let tposition = item[i].position;
                let played = item[i].playedGames;
                let lost = item[i].losses;
                let points = item[i].points;
                let team = item[i].teamName;
                let against = item[i].goalsAgainst;
                let scored = item[i].goals;
                let wins = item[i].wins;
                let gd = item[i].goalDifference;
                let draws = item[i].draws;

*/

                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + tposition + " " + team + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Points: " + " " + points + '</p>';
                output += '<p class="tresult">' + "Games Played: " + " " + played + '</p>';
                output += '<p class="tresult">' + "Games Won: " + " " + wins + '</p>';
                output += '<p class="tresult">' + "Drawn: " + " " + drawn + '</p>';
                output += '<p class="tresult">' + "Lost: " + " " + lost + '</p>';
                output += '<p class="tresult">' + "Goals Scored: " + " " + scored + '</p>';
                output += '<p class="tresult">' + "Goals Against: " + " " + against + '</p>';
                output += '<p class="tresult">' + "Goal Difference: " + " " + gd + '</p>';

                output += '</div>';
                output += '</div>';
                output += '</li>';
                output += '</ul>';
                output += '</div>';

                output += '</div>';
                output += '</div>';

            }


            document.getElementById('eplResult').innerHTML = output;
        }




    }

}


function serie_a_table() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2019/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);

            console.log(response);

            var item = response.standings;

            console.log(item);

            var output = "";

            for (i = 0; i < item.length; i++) {

                let tposition = item[i].position;
                let played = item[i].playedGames;
                let lost = item[i].losses;
                let points = item[i].points;
                let team = item[i].teamName;
                let against = item[i].goalsAgainst;
                let scored = item[i].goals;
                let wins = item[i].wins;
                let gd = item[i].goalDifference;
                let draws = item[i].draws;


                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + tposition + " " + team + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Points: " + " " + points + '</p>';
                output += '<p class="tresult">' + "Games Played: " + " " + played + '</p>';
                output += '<p class="tresult">' + "Games Won: " + " " + wins + '</p>';
                output += '<p class="tresult">' + "Drawn: " + " " + draws + '</p>';
                output += '<p class="tresult">' + "Lost: " + " " + lost + '</p>';
                output += '<p class="tresult">' + "Goals Scored: " + " " + scored + '</p>';
                output += '<p class="tresult">' + "Goals Against: " + " " + against + '</p>';
                output += '<p class="tresult">' + "Goal Difference: " + " " + gd + '</p>';

                output += '</div>';
                output += '</div>';
                output += '</li>';
                output += '</ul>';
                output += '</div>';

                output += '</div>';
                output += '</div>';

            }
            document.getElementById('saResult').innerHTML = output;
        }




    }

}


function bundesliga_table() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2002/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);

            console.log(response);

            var item = response.standings;

            console.log(item);

            var output = "";

            for (i = 0; i < item.length; i++) {

                let tposition = item[i].position;
                let played = item[i].playedGames;
                let lost = item[i].losses;
                let points = item[i].points;
                let team = item[i].teamName;
                let against = item[i].goalsAgainst;
                let scored = item[i].goals;
                let wins = item[i].wins;
                let gd = item[i].goalDifference;
                let draws = item[i].draws;


                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + tposition + " " + team + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Points: " + " " + points + '</p>';
                output += '<p class="tresult">' + "Games Played: " + " " + played + '</p>';
                output += '<p class="tresult">' + "Games Won: " + " " + wins + '</p>';
                output += '<p class="tresult">' + "Drawn: " + " " + draws + '</p>';
                output += '<p class="tresult">' + "Lost: " + " " + lost + '</p>';
                output += '<p class="tresult">' + "Goals Scored: " + " " + scored + '</p>';
                output += '<p class="tresult">' + "Goals Against: " + " " + against + '</p>';
                output += '<p class="tresult">' + "Goal Difference: " + " " + gd + '</p>';

                output += '</div>';
                output += '</div>';
                output += '</li>';
                output += '</ul>';
                output += '</div>';

                output += '</div>';
                output += '</div>';

            }
            document.getElementById('blResult').innerHTML = output;

        }




    }

}


function la_liga_table() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2014/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);

            console.log(response);

            var item = response.standings;

            console.log(item);

            var output = "";

            for (i = 0; i < item.length; i++) {

                let tposition = item[i].position;
                let played = item[i].playedGames;
                let lost = item[i].losses;
                let points = item[i].points;
                let team = item[i].teamName;
                let against = item[i].goalsAgainst;
                let scored = item[i].goals;
                let wins = item[i].wins;
                let gd = item[i].goalDifference;
                let draws = item[i].draws;


                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + tposition + " " + team + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Points: " + " " + points + '</p>';
                output += '<p class="tresult">' + "Games Played: " + " " + played + '</p>';
                output += '<p class="tresult">' + "Games Won: " + " " + wins + '</p>';
                output += '<p class="tresult">' + "Drawn: " + " " + draws + '</p>';
                output += '<p class="tresult">' + "Lost: " + " " + lost + '</p>';
                output += '<p class="tresult">' + "Goals Scored: " + " " + scored + '</p>';
                output += '<p class="tresult">' + "Goals Against: " + " " + against + '</p>';
                output += '<p class="tresult">' + "Goal Difference: " + " " + gd + '</p>';

                output += '</div>';
                output += '</div>';
                output += '</li>';
                output += '</ul>';
                output += '</div>';

                output += '</div>';
                output += '</div>';

            }
            document.getElementById('llResult').innerHTML = output;

        }




    }

}


function ligue_1_table() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2015/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);

            console.log(response);

            var item = response.standings;

            console.log(item);

            var output = "";

            for (i = 0; i < item.length; i++) {

                let tposition = item[i].position;
                let played = item[i].playedGames;
                let lost = item[i].losses;
                let points = item[i].points;
                let team = item[i].teamName;
                let against = item[i].goalsAgainst;
                let scored = item[i].goals;
                let wins = item[i].wins;
                let gd = item[i].goalDifference;
                let draws = item[i].draws;


                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + tposition + " " + team + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Points: " + " " + points + '</p>';
                output += '<p class="tresult">' + "Games Played: " + " " + played + '</p>';
                output += '<p class="tresult">' + "Games Won: " + " " + wins + '</p>';
                output += '<p class="tresult">' + "Drawn: " + " " + draws + '</p>';
                output += '<p class="tresult">' + "Lost: " + " " + lost + '</p>';
                output += '<p class="tresult">' + "Goals Scored: " + " " + scored + '</p>';
                output += '<p class="tresult">' + "Goals Against: " + " " + against + '</p>';
                output += '<p class="tresult">' + "Goal Difference: " + " " + gd + '</p>';

                output += '</div>';
                output += '</div>';
                output += '</li>';
                output += '</ul>';
                output += '</div>';

                output += '</div>';
                output += '</div>';

            }
            document.getElementById('l1Result').innerHTML = output;

        }




    }

}

/*
function uclTable() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2001/standings";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        //BEGIN STATEMENTS FOR ALL GROUPS [A-H]

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputA = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupA = standings.A;
            console.log(groupA);
            for (i = 0; i < groupA.length; i++) {
                let team = groupA[i].team;
                let scored = groupA[i].goals;
                let gd = groupA[i].goalDifference;
                let points = groupA[i].points;
                let rank = groupA[i].rank;
                let played = groupA[i].playedGames;
                let group = groupA[i].group;
                let against = groupA[i].goalsAgainst;

                outputA += '<div class="card">';

                outputA += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputA += '</div>';
            }





        }
        document.getElementById('cla').innerHTML = outputA;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputA = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupB = standings.B;
            console.log(groupB);
            for (i = 0; i < groupB.length; i++) {
                let team = groupB[i].team;
                let scored = groupB[i].goals;
                let gd = groupB[i].goalDifference;
                let points = groupB[i].points;
                let rank = groupB[i].rank;
                let played = groupB[i].playedGames;
                let group = groupB[i].group;
                let against = groupB[i].goalsAgainst;

                outputA += '<div class="card">';

                outputA += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputA += '</div>';
            }





        }
        document.getElementById('clb').innerHTML = outputA;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputC = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupC = standings.C;
            console.log(groupB);
            for (i = 0; i < groupC.length; i++) {
                let team = groupC[i].team;
                let scored = groupC[i].goals;
                let gd = groupC[i].goalDifference;
                let points = groupC[i].points;
                let rank = groupC[i].rank;
                let played = groupC[i].playedGames;
                let group = groupC[i].group;
                let against = groupC[i].goalsAgainst;

                outputC += '<div class="card">';

                outputC += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputC += '</div>';
            }





        }
        document.getElementById('clc').innerHTML = outputC;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputD = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupD = standings.D;
            console.log(groupD);
            for (i = 0; i < groupD.length; i++) {
                let team = groupD[i].team;
                let scored = groupD[i].goals;
                let gd = groupD[i].goalDifference;
                let points = groupD[i].points;
                let rank = groupD[i].rank;
                let played = groupD[i].playedGames;
                let group = groupD[i].group;
                let against = groupD[i].goalsAgainst;

                outputD += '<div class="card">';

                outputD += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputD += '</div>';
            }





        }
        document.getElementById('cld').innerHTML = outputD;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputE = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupE = standings.E;
            console.log(groupD);
            for (i = 0; i < groupE.length; i++) {
                let team = groupE[i].team;
                let scored = groupE[i].goals;
                let gd = groupE[i].goalDifference;
                let points = groupE[i].points;
                let rank = groupE[i].rank;
                let played = groupE[i].playedGames;
                let group = groupE[i].group;
                let against = groupE[i].goalsAgainst;

                outputE += '<div class="card">';

                outputE += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputE += '</div>';
            }





        }
        document.getElementById('cle').innerHTML = outputE;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputF = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupF = standings.F;
            console.log(groupD);
            for (i = 0; i < groupF.length; i++) {
                let team = groupF[i].team;
                let scored = groupF[i].goals;
                let gd = groupF[i].goalDifference;
                let points = groupF[i].points;
                let rank = groupF[i].rank;
                let played = groupF[i].playedGames;
                let group = groupF[i].group;
                let against = groupF[i].goalsAgainst;

                outputF += '<div class="card">';

                outputF += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputF += '</div>';
            }





        }
        document.getElementById('clf').innerHTML = outputF;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputG = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupG = standings.G;
            console.log(groupD);
            for (i = 0; i < groupG.length; i++) {
                let team = groupG[i].team;
                let scored = groupG[i].goals;
                let gd = groupG[i].goalDifference;
                let points = groupG[i].points;
                let rank = groupG[i].rank;
                let played = groupG[i].playedGames;
                let group = groupG[i].group;
                let against = groupG[i].goalsAgainst;

                outputG += '<div class="card">';

                outputG += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputG += '</div>';
            }





        }
        document.getElementById('clg').innerHTML = outputG;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            var response = JSON.parse(xmlhttp.responseText);
            var outputH = "";
            console.log(response);


            var standings = response.standings;
            console.log(standings);
            var groupH = standings.H;
            console.log(groupD);
            for (i = 0; i < groupH.length; i++) {
                let team = groupH[i].team;
                let scored = groupH[i].goals;
                let gd = groupH[i].goalDifference;
                let points = groupH[i].points;
                let rank = groupH[i].rank;
                let played = groupH[i].playedGames;
                let group = groupH[i].group;
                let against = groupH[i].goalsAgainst;

                outputH += '<div class="card">';

                outputH += '<p class="tresult">' + rank + ': ' + team + '-' + ' ' + 'P: ' + played + ', ' + 'F: ' + scored + ', ' + 'A: ' + against + ', ' + 'GD: ' + gd + ', ' + 'Points: ' + points + '</p>';


                outputH += '</div>';
            }





        }
        document.getElementById('clh').innerHTML = outputH;



    }

}
*/

$$(document).on('click', '#eplt', function(e) {
    eplTable();
});

$$(document).on('click', '#satable', function(e) {
    serie_a_table();
});


$$(document).on('click', '#bundestable', function(e) {
    bundesliga_table();
});


$$(document).on('click', '#llt', function(e) {
    la_liga_table();
});


$$(document).on('click', '#l1table', function(e) {
    ligue_1_table();
});


$$(document).on('click', '', function(e) {
    uclTable();
});







/* Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

*/