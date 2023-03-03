const constellations = [
    "and",
    "leo",
    "ant",
    "lmi",
    "aps",
    "lep",
    "aqr",
    "lib",
    "aql",
    "lup",
    "ara",
    "lyn",
    "ari",
    "lyr",
    "aur",
    "men",
    "boo",
    "mic",
    "cae",
    "mon",
    "cam",
    "mus",
    "cnc",
    "nor",
    "cvn",
    "oct",
    "cma",
    "oph",
    "cmi",
    "ori",
    "cap",
    "pav",
    "car",
    "peg",
    "cas",
    "per",
    "cen",
    "phe",
    "cep",
    "pic",
    "cet",
    "psc",
    "cha",
    "psa",
    "cir",
    "pup",
    "col",
    "pyx",
    "com",
    "ret",
    "cra",
    "sge",
    "crb",
    "sgr",
    "crv",
    "sco",
    "crt",
    "scl",
    "cru",
    "sct",
    "cyg",
    "ser",
    "del",
    "dor",
    "sex",
    "dra",
    "tau",
    "equ",
    "tel",
    "eri",
    "tri",
    "for",
    "tra",
    "gem",
    "tuc",
    "gru",
    "uma",
    "her",
    "umi",
    "hor",
    "vel",
    "hya",
    "vir",
    "hyi",
    "vol",
    "ind",
    "vul",
    "lac"
];

// var applicationId = 'd9c326dc-833b-474f-b51a-f157d89954ce';
// var applicationSecret = '8de6ffd9d55939a76d782dc6dfb19998a457ee836f6e89af0f4a21c865f1ee13c00135dba55d5b86ea2e4446a1ddaf844ef611deb0f3b00b813297d02f8e447f37cb745b24cb2939b45c8cbbcc6e98dc53bb380ef8b0800a5c1200d39dda017b15fcdfe7c1fe715cad76da2260947c1c';  


const apiId = "f6db66df-5ad0-4c42-b153-060bc2bd2de0";
const secret = "eaab42a1965d4ae799de1d87a7f98638d8c31a72132eb88cc07e106a73ff48ea622c469f90c7cb5f73b669de2fecdb886e19529dda03b632cd7a5d560e05dd37b6c407bc646e445d71e80b9cbad78360e2a3c7d3aeb47018cbfdf0b26b43c3bbe1cbcef979d6d683b4679bd2d3b9d0e2";
const headers = {'Authorization': `Basic ${btoa(`${apiId}:${secret}`)}`};

function fetchBodies() {
    const url = "https://api.astronomyapi.com/api/v2/bodies";;
    fetch(url, {headers}).
    then(response => response.json()).
    then(data => console.log(data));
}

function fetchStarChart() {
 const url = "https://api.astronomyapi.com/api/v2/studio/star-chart";
 const body = {
            "style": "navy",
            "observer": {
                "latitude": 33.775867,
                "longitude": -84.39733,
                "date": "2019-12-20"
            },
            "view": {
                "type": "constellation",
                "parameters": {
                "constellation": "ori"
            }
        }
 }
 fetch(url, {method: "POST", headers, body: JSON.stringify(body)}).
 then(response => response.json()).
 then(data => console.log(data)).
 then(data => document.getElementById("photo-of-the-day").src = data.imageUrl)
//  then(data => console.log(data));
    // img = document.getElementById("photo-of-the-day");
    // img.src = data.;
}

// fetchStarChart();