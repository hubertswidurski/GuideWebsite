function test(){
    document.getElementById("logo").innerHTML="Piss & Shit";
}
function test2(){
    document.getElementById("logo").innerHTML="Wielka Brytania";
}
var testv=document.createElement("div");
testv.innerHTML="test";
export function changeCountry(child, first){
    if(first){
        document.querySelector("#countries").classList.add("countries_after");
        document.querySelector("#countries").classList.remove("countries_before");
    }
    let element = document.getElementById('country_content');
    if (typeof(element) != 'undefined' && element != null)
    {
        element.remove();
    }
    document.querySelector("main").appendChild(child);
}
