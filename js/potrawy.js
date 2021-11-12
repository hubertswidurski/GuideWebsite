import {changeCountry, scrollTop} from './main.js';
var first=true;
document.querySelector("#anglia").addEventListener("click", ()=>{changeCountry("sec-anglia", first);first=false});
document.querySelector("#walia").addEventListener("click", ()=>{changeCountry("sec-walia", first);first=false});
document.querySelector("#szkocja").addEventListener("click", ()=>{changeCountry("sec-szkocja", first);first=false});
document.querySelector("#irlandia").addEventListener("click", ()=>{changeCountry("sec-irlandia", first);first=false});
document.querySelector("#topper").addEventListener("click", ()=> scrollTop());
