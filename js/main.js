export function test(){
    document.getElementById("logo").innerHTML="Test";
}
function test2(){
    document.getElementById("logo").innerHTML="Wielka Brytania";
}
var testv=document.createElement("div");
testv.innerHTML="test";
export function changeCountry(child, first){
    if(first){
        document.querySelector("footer").style.display="block";
        let imgs= document.getElementsByClassName("country_img");
        for(let i =0; i<imgs.length; i++){
            imgs[i].style.display="none";
        }
        let borders =document.getElementsByClassName("country_holder_main");
    }
    const array= document.querySelector("main").children;
    for(let i =0; i< array.length; i++){
        if(array[i].tagName =="SECTION"){
            if(array[i].id == child){
                array[i].style.display="flex";
            }else{
                array[i].style.display="none";
            }
        }
    }
}
export function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}