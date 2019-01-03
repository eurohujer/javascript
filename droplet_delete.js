//modul droplet_delete.js

// definicia funkcie DELETE request dropletu

function deleteRequest() {
getRequest() // potrebujem id dropletu aby som vedel co idem vymazavat
// kedze get requets nevracia hodnotu ale iba promise, musim pouzit dalsi .then
.then(function(idckoDropletu) {
var actionurl = "https://api.digitalocean.com/v2/droplets/" + idckoDropletu;

if ( !idckoDropletu ){
return false //ak get funkcia vratila false, znamena to ze neexistuje idcko dropletu a funkcia delete sa ukonci.
}

document.getElementById("postodpoved3").innerHTML = "Teraz vymazem droplet id " + idckoDropletu;

fetch(actionurl, {
                        credentials: 'omit', // 'include', default: 'omit'
                        method: 'DELETE', // 'GET', 'PUT', 'DELETE', etc.
                        headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 763dfba3bf1e17d33a2de30136c0df75ffd40bd3b9f5c0a7262953001ff2c462'
                        }),
                        mode: "cors",
                }) //koniec return fetch funkcie
}) // koniec .then po zavolani get funkcie
} // koniec definicie deleteRequest funkcie


export { deleteRequest };
