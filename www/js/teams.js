function liverpool() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }

}



function arsenal() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/57";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);


            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }

}



function manu() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/66/";


    //console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);

            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function chelsea() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/61/";


    //console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);


            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;



        }




    }

}



function city() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/65/";


    //console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }

}



function spurs() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function lyon() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }

}



function marseille() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }

}



function monaco() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/548/";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function psg() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function bayern() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function dortmund() {
    var xmlhttp;


    var url = "http://api.football-data.org/v2/teams/4/";


    console.log(url);

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = getData;
    xmlhttp.open("get", url, true);
    xmlhttp.setRequestHeader("X-Auth-Token", key);
    xmlhttp.send();


    function getData() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function milan() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function inter() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function juventus() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function lazio() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function napoli() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function roma() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function atletico() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function barcelona() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function real() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}



function sevilla() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;

        }




    }
}



function villareal() {
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


            let response = JSON.parse(xmlhttp.responseText);
            console.log(response);



            var TeamName = response.name;
            var TeamCrest = response.crestUrl;
            var ShortName = response.shortName;
            var founded = response.founded;
            var phone = response.phone;
            var updated = response.lastUpdated;
            var address = response.address;
            var clubcolors = response.clubColors;
            var Email = response.email;
            var website = response.website;
            var venue = response.venue;



            document.getElementById('team_crest').src = TeamCrest;
            document.getElementById('name').innerHTML = 'Club Name: ' + TeamName;
            document.getElementById('alias').innerHTML = 'Alias : ' + ShortName;

            document.getElementById('founded').innerHTML = 'founded: ' + founded;
            document.getElementById('venue').innerHTML = 'Venue : ' + venue;

            document.getElementById('address').innerHTML = 'Address: ' + address;
            document.getElementById('phone').innerHTML = 'Phone : ' + phone;
            document.getElementById('Email').innerHTML = 'Email: ' + Email;
            document.getElementById('website').innerHTML = 'Website : ' + website;
            document.getElementById('clubcolors').innerHTML = 'Club Colors: ' + clubcolors;


        }




    }
}