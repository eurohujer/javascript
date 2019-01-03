//modul droplet_start.js

// definicia funkcie ZAPNI droplet
function startRequest() {
getRequest() // zistujem ci uz bezi nejaky droplet, ak ano, funkcia sa ukonci
// kedze get requets nevracia hodnotu ale iba promise, musim pouzit dalsi .then
.then(function(idckoDropletu) {

        if ( idckoDropletu ){
        document.getElementById("postodpoved3").innerHTML = "Jeden droplet s id-ckom " + idckoDropletu + " uz bezi, takze nebudem spustat dalsi";
        return false //ak get funkcia vratila true, znamena to ze existuje idcko dropletu takze nebudem spustat dalsi a funkcia sa ukonci.
}


//som stale v .then, znamena to ze neexistuje ziadne id dropletu a mozem zacat jeden vytvarat
document.getElementById("postodpoved1").innerHTML = "Teraz idem nastartovat novy droplet zo zalohy";

// spustam fetch na vytvorenie dropletu
        var url = 'https://api.digitalocean.com/v2/droplets/';
        var data = {"name":"zApiVytiahnutyKokot","region":"fra1","size":"s-1vcpu-1gb","image":"41423132","ssh_keys":[23683586],"backups":false,"ipv6":false,"user_data":"#!/bin/bash\n~/vpnpusher.sh","private_networking":null,"volumes": null,"tags":["vpnServer"]}

fetch(url, {
        credentials: 'omit', // 'include', default: 'omit'
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 763dfba3bf1e17d33a2de30136c0df75ffd40bd3b9f5c0a7262953001ff2c462'
        }),
        mode: "cors",
        body: JSON.stringify(data),  //cez http sa neprenasaju objekty ak chapem dobre
        }) // uzavrety fetch

        .then(response => response.json())
        .then(function(vysledok) {

$("#postodpoved2").text("droplet " + vysledok.droplet.id + " vytvoreny " + vysledok.droplet.created_at);
$("#postodpoved3").text("cena noveho dropletu je " + vysledok.droplet.size.price_monthly + " eur mesacne");

        console.log(JSON.stringify(vysledok));
          })
        .catch(error => alert("chyba restoru" + JSON.stringify(error)))

}) // koniec .then pre get request v ktorom sa odohrava aj vytvaranie dropletu... co je dost neprehladne
} // koniec definicie funkcie ZAPNI droplet


export { startRequest };
