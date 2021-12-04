let loc = document.querySelector("#loc");
let iframe=document.querySelector("iframe");
let all_loc=[
    {
        name: "clifton",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.176694069808!2d-2.6300439840555168!3d51.45491222236022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b536e385dd53%3A0xed9161d2e926ecce!2sMost%20Wisz%C4%85cy%20Clifton!5e0!3m2!1spl!2spl!4v1638620433802!5m2!1spl!2spl",
    },
    {
        name: "Westminster",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7484922412173!2d-0.12699788405431814!3d51.49948271910276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c40c8d9b99%3A0x7797a8ef74e1f7c!2sPa%C5%82ac%20Westminsterski!5e0!3m2!1spl!2spl!4v1638626802799!5m2!1spl!2spl",
    },
    {
        name: "albert_hall",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.670593615824!2d-0.17955468405424885!3d51.500912118998194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b21867ad1%3A0x5efe9cee35da2fd9!2sRoyal%20Albert%20Hall!5e0!3m2!1spl!2spl!4v1638627051835!5m2!1spl!2spl"
    },
    {
        name: "York_Minster",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.2779169695586!2d-1.0841091839860222!3d53.96233233609314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931a5d58341b1%3A0x97daca52f7800d35!2sYork%20Minster!5e0!3m2!1spl!2spl!4v1638628041789!5m2!1spl!2spl"
    },
    {
        namr: "The_British_Museum",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.662006416705!2d-0.12914528405375658!3d51.51941661764514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sMuzeum%20Brytyjskie!5e0!3m2!1spl!2spl!4v1638628444185!5m2!1spl!2spl"
    },
    {
        namr: "",
        path: ""
    },
    {
        namr: "",
        path: ""
    },
    
]
function showLoc(el){
    all_loc.forEach(element => {
        if(element.name==el.id){
            iframe.src=element.path;
        }
    });
    loc.style.display="flex";
}
function zamknij(){
    loc.style.display="none";
}