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
        name: "The_British_Museum",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.662006416705!2d-0.12914528405375658!3d51.51941661764514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sMuzeum%20Brytyjskie!5e0!3m2!1spl!2spl!4v1638628444185!5m2!1spl!2spl"
    },
    {
        name: "Dunluce_Castle",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2276.4320062096535!2d-6.581794984090423!3d55.210692380411814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48602f44a2eb43c5%3A0x10a91dc5612d9ab8!2sDunluce%20Castle!5e0!3m2!1spl!2spl!4v1638707174375!5m2!1spl!2spl"
    },
    {
        name: "Causeway",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18197.675712454202!2d-6.529064860449213!3d55.24080730000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48602944f4158f0f%3A0xf3228ca019de1fd2!2sGrobla%20Olbrzyma!5e0!3m2!1spl!2spl!4v1638707453371!5m2!1spl!2spl"
    },
    {
        name: "Carrick_a_Rede",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.780441484032!2d-6.334655083763982!3d55.23956663041924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861d356309deebf%3A0xfc877d7a7a17d382!2sNational%20Trust%20-%20Carrick-a-Rede!5e0!3m2!1spl!2spl!4v1638707613517!5m2!1spl!2spl"
    },
    {
        name: "Mourne_Mountains",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756516.3866087148!2d-5.492138114564803!3d53.99393825727041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48612714bcb6a77b%3A0x91aaab601785e7aa!2sMourne%20Mountains!5e0!3m2!1spl!2spl!4v1638709208714!5m2!1spl!2spl"
    },
    {
        name: "Scrabo_Tower",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.3442458969107!2d-5.7176231839685006!3d54.58030808926719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486174be67185f7f%3A0x6dcb33b162763417!2sScrabo%20Tower%2C%20Newtownards%20BT23%204SJ%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1638709795345!5m2!1spl!2spl"
    },
    {
        name: "",
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