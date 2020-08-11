// FUNCTIONS FOR FETCHING LEAGUE  INFO
//EPL
function epl() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2021";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;



            document.getElementById('eplcountry').innerHTML = 'Country: ' + country;

            document.getElementById('eplsd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('epled').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('eplcmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }

}


//SERIE A


function serie_a() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2019";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;



            document.getElementById('sacountry').innerHTML = 'Country: ' + country;

            document.getElementById('sasd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('saed').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('sacmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }


}


//BUNDESLIGA
function bundesliga() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2002";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;



            document.getElementById('blcountry').innerHTML = 'Country: ' + country;

            document.getElementById('blsd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('bled').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('blcmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }


}

//LA LIGA


function la_liga() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2014";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;



            document.getElementById('llcountry').innerHTML = 'Country: ' + country;

            document.getElementById('llsd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('lled').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('llcmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }

}



//LIGUE 1


function ligue_1() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2015";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;



            document.getElementById('l1country').innerHTML = 'Country: ' + country;

            document.getElementById('l1sd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('l1ed').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('l1cmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }

}


function ucl() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/competitions/2001/";


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

            let country = response.area.name;

            //parent variable for start/end dates and current match day
            let currentSeason = response.currentSeason;
            let endDate = currentSeason.endDate;
            let startDate = currentSeason.startDate;
            let matchday = currentSeason.currentMatchday;
            let tier = response.plan;
            let crest = response.emblemUrl;



            document.getElementById('uclcountry').innerHTML = 'Location: ' + country;
           document.getElementById('ucl_crest').src = crest;
            document.getElementById('uclsd').innerHTML = 'Season Begins: ' + startDate;
            document.getElementById('ucled').innerHTML = 'Season Ends: ' + endDate;
            document.getElementById('uclcmd').innerHTML = 'Current Matchday: ' + matchday;


        }



    }
}



function loader() {
    myApp.showPreloader();
}

function hide() {
    myApp.hidePreloader();
}
