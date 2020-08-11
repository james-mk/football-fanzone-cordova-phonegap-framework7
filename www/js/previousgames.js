//FUNCTIONS FOR FETCHING AND DISPLAYING PREVIOUS FIXTURES

//LEAGUES
function epl_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2021/matches?status=FINISHED&limit=20";


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


function laliga_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2014/matches?status=FINISHED&limit=20";


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



        document.getElementById('llResult').innerHTML = output;





    }
}
}

function serie_a_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2019/matches?status=FINISHED&limit=20";


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



        document.getElementById('saResult').innerHTML = output;





    }
}
}

function bundesliga_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2002/matches?status=FINISHED&limit=20";


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



        document.getElementById('blResult').innerHTML = output;





    }
}
}

function ligue_1_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/competitions/2015/matches?status=FINISHED&limit=20";


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

//ENGLAND

function city_prev() {

    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/65/matches?status=FINISHED&limit=3";


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


function united_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/66/matches?status=FINISHED&limit=3";


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

function liverpool_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/64/matches?status=FINISHED&limit=3";


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

function spurs_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/73/matches?status=FINISHED&limit=3";


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

function chelsea_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/61/matches?status=FINISHED&limit=3";


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


function arsenal_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/57/matches?status=FINISHED&limit=3";


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


//SPAIN

function barcelona_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/81/matches?status=FINISHED&limit=3";


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


function madrid_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/86/matches?status=FINISHED&limit=3";


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


function atletico_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/78/matches?status=FINISHED&limit=3";


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

function sevilla_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/559/matches?status=FINISHED&limit=3";


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

function villareal_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/94/matches?status=FINISHED&limit=3";


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

//ITALY

function juventus_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/109/matches?status=FINISHED&limit=3";


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

function napoli_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/113/matches?status=FINISHED&limit=3";


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

function roma_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/100/matches?status=FINISHED&limit=3";


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

function lazio_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/110/matches?status=FINISHED&limit=3";


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

function inter_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/108/matches?status=FINISHED&limit=3";


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

function milan_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/98/matches?status=FINISHED&limit=3";


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


//GERMANY

function bayern_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/5/matches?status=FINISHED&limit=3";


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

function dortmund_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/4/matches?status=FINISHED&limit=3";


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
//FRANCE

function psg_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/524/matches?status=FINISHED&limit=3";


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

function lyon_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/523/matches?status=FINISHED&limit=3";


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

function monaco_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/548/matches?status=FINISHED&limit=3";


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

function marseille_prev() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/516/matches?status=FINISHED&limit=3";


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


//ONCLICK EVENTS FOR PREVIOUS GAMES (PREVIOUS BUTTONS)




