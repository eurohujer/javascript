import { getRequest } from './droplet_get.js';
import { deleteRequest } from './droplet_delete.js';
import { startRequest } from './droplet_start.js';
import { cistenie } from './cistenie.js';

$(document).ready(function(){

//definicia pre tlacitko stav dropletov
$("#ziskajdroplet").click(function(){
cistenie();
getRequest();
});

//definicia pre tlacitko vymaz droplet
$("#vymazdroplet").click(function(){
cistenie();
deleteRequest();
});

//definicia pre tlacitko zapni droplet
$("#zapnidroplet").click(function(){
cistenie();
startRequest();
});


});  //ukoncenie document ready funkcie
