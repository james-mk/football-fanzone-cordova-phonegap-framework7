//ENGLISH TEAMS SQUAD LISTS

function liverpoolPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/64/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function arsenalPlayers() {


    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/57/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function manuPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/66/";



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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function chelseaPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/61/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function cityPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/65/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function spursPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/73/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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


// FRENCH TEAMS SQUAD LISTS

function lyonPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/523/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function marseillePlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/516/";


    
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function monacoPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/548/players";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function psgPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/524/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

//GERMAN TEAMS SQUAD LISTS

function bayernPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/5/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function dortmundPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/98/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

//ITALIAN TEAMS SQUAD LISTS

function milanPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/98/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function interPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/108/";


  
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function juventusPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/109/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function lazioPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/110/";


  
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function napoliPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/113/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function romaPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/100/";


   
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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

//SPANISH TEAMS SQUAD LISTS

function atleticoPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/78/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function barcelonaPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/81/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function realPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/86/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function sevillaPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/559/";


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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

function villarealPlayers() {
    var xmlhttp;

    var url = "http://api.football-data.org/v2/teams/94/";

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

            var item = response.squad;
            console.log(item);
         
            var output = "";

            for (i = 0; i < item.length; i++) {
                let pName = item[i].name;
                let birthDay = item[i].dateOfBirth;
                let nationality = item[i].nationality;
                //let shirt = item[i].shirtNumber;
                let position = item[i].position;
                //let contractUntil = item[i].contractUntil;

              
                output += '<div class="card">';
                output += '<div class="card-content">';
                output += '<div class="list-block accordion-list">';
                output += '<ul>';
                output += '<li class="accordion-item"><a href="#" class="item-content item-link">';
                output += '<div class="item-inner">';
                output += '<div class="item-title">' + pName + '</div>';
                output += '</div>';
                output += '</a>';
                output += '<div class="accordion-item-content">';
                output += '<div class="content-block">';
                output += '<p class="tresult">' + "Date Of Birth: " + " " + birthDay + '</p>';
                output += '<p class="tresult">' + "Nationality : " + " " + nationality + '</p>';
                output += '<p class="tresult">' + "Player Position: " + " " + position + '</p>';
                /*output += '<p class="tresult">' + "Jersey Number: " + " " + shirt + '</p>';*/
                /*output += '<p class="tresult">' + "Contract Until: " + " " + contractUntil + '</p>';*/


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

