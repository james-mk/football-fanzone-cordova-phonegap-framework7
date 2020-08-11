//FUNCTIONS FOR FETCHING AND DISPLAYING UPCOMING FIXTURES

//LEAGUES
function eplFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2021/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('eplResult').innerHTML = output;





        }
    }
}

function la_ligaFixtures() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2014/matches?status=SCHEDULED";

    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('llResult').innerHTML = output;





        }
    }
}

function serie_a_fixtures() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2019/matches?status=SCHEDULED";

    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('saResult').innerHTML = output;





        }
    }
}

function bundesligaFixtures() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2002/matches?status=SCHEDULED";

    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';

                }


            }



            document.getElementById('blResult').innerHTML = output;





        }
    }
}

function ligue_1_Fixtures() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2015/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('l1Result').innerHTML = output;





        }
    }
}

//SPAIN
function villarealFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/94/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('villarealResult').innerHTML = output;





        }
    }
}

function sevillaFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/559/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('sevillaResult').innerHTML = output;





        }
    }
}

function realFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/86/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('realResult').innerHTML = output;





        }
    }
}

function barcelonaFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/81/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('barcelonaResult').innerHTML = output;





        }
    }
}

function atleticoFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/78/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('atleticoResult').innerHTML = output;





        }
    }
}

//GERMANY
function dortmundFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/4/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('dortmundResult').innerHTML = output;





        }
    }
}

function bayernFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/5/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('bayernResult').innerHTML = output;





        }
    }
}

//FRANCE
function psgFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/524/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('psgResult').innerHTML = output;





        }
    }
}

function monacoFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/548/matches?status=SCHEDULED";

    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('monacoResult').innerHTML = output;





        }
    }
}

function marseilleFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/516/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('marseilleResult').innerHTML = output;





        }
    }
}


function lyonFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/523/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('lyonResult').innerHTML = output;





        }
    }
}

//ENGLAND
function liverpoolFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/64/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('result').innerHTML = output;





        }
    }
}


function spursFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/73/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('spursResult').innerHTML = output;





        }
    }
}


function cityFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/65/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('cityResult').innerHTML = output;





        }
    }
}


function chelseaFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/61/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('chelseaResult').innerHTML = output;





        }
    }
}

function manuFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/66/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';

                }


            }



            document.getElementById('manuResult').innerHTML = output;





        }
    }
}


function arsenalFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/57/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('arseResult').innerHTML = output;





        }
    }
}


//ITALY
function romaFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/100/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('romaResult').innerHTML = output;





        }
    }
}

function napoliFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/113/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('napoliResult').innerHTML = output;





        }
    }
}


function lazioFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/110/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('lazioResult').innerHTML = output;





        }
    }
}

function juventusFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/109/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';



                }


            }



            document.getElementById('juventusResult').innerHTML = output;





        }
    }
}

function interFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/108/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('interResult').innerHTML = output;





        }
    }
}

function milanFixtures() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/98/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card main_card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';


                }


            }



            document.getElementById('milanResult').innerHTML = output;





        }
    }
}


//UCL
function uclFixtures() {
    var url = "http://api.football-data.org/v2/competitions/2001/matches?status=SCHEDULED";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


                var response = JSON.parse(xmlhttp.responseText);

                console.log(response);


                let pre_fix = response.matches;
                console.log(pre_fix);
                let score = pre_fix.score;

                if (pre_fix.length === 0) {
                    alert('No fixtures to show at this time');

                }

                var output = "";
                for (var i = 0; i < pre_fix.length; i++) {
                    var away = pre_fix[i].awayTeam.name;
                    var home = pre_fix[i].homeTeam.name;
                    var matchday = pre_fix[i].matchday;
                    var htaway = pre_fix[i].score.halfTime.awayTeam;
                    var hthome = pre_fix[i].score.halfTime.homeTeam;
                    var ftaway = pre_fix[i].score.fullTime.awayTeam;
                    var fthome = pre_fix[i].score.fullTime.homeTeam;
                    var date = pre_fix[i].utcDate;
                    /*var status = fix[i].status;
                    
                    var awayTeamName = fix[i].awayTeamName;
                    let homeTeamName = fix[i].homeTeamName;
                    let matchday = fix[i].matchday;
                    let date = fix[i].date;
                    let goalsHomeTeam = fix[i].result.goalsHomeTeam;
                    let goalsAwayTeam = fix[i].result.goalsAwayTeam;

                     let HTgoalsHomeTeam=fix[i].result.halfTime.goalsHomeTeam;
                     let HTgoalsAwayTeam=fix[i].result.halfTime.goalsAwayTeam;*/
                    output += '<div class="card">';
                    output += '<div class="card-content">';
                    output += '<div class="list-block accordion-list">';
                    output += '<ul>';
                    output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                    output += '<div class="item-inner">';
                    output += '<div class="item-title">' + date + '<br/>' + home + " Vs " + away + '</div>';
                    output += '</div>';
                    output += '</a>';
                    output += '<div class="accordion-item-content">';
                    output += '<div class="content-block">';
                    output += '<p class="tresult">' + "MatchDay: " + " " + matchday + '</p>';
                    //output += '<p class="tresult">' + "Date : " + " " + date + '</p>';
                    //output += '<h3 >' + "Results " + '</h3>';
                    output += '<h4>' + "Half Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + hthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + htaway + '</p>';
                    output += '<h4>' + "Full Time: " + " " + '</h4>';
                    output += '<p class="tresult">' + home + " : " + " " + fthome + '</p>';
                    output += '<p class="tresult">' + away + " : " + " " + ftaway + '</p>';




                    output += '</div>';
                    output += '</div>';
                    output += '</li>';
                    output += '</ul>';
                    output += '</div>';

                    output += '</div>';
                    output += '</div>';





                }


            }



            document.getElementById('uclResult').innerHTML = output;





        }
    }

}
