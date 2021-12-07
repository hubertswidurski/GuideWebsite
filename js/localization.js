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
        name: "Pontcysyllte",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.7769842882803!2d-3.0899765841756914!3d52.97042617990204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ab7a38883b2b5%3A0x1ab4fee72f2a556e!2sAkwedukt%20i%20kana%C5%82%20Pontcysyllte!5e0!3m2!1spl!2spl!4v1638902558094!5m2!1spl!2spl"
    },
    {
        name: "Bron_Yr_Aur",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.1650171215965!2d-3.869975384024055!3d52.60278803784259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486f87ceaf69214b%3A0x7f698aacd2546bec!2sBron-Yr-Aur%2C%20Machynlleth%20SY20%208QA%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1638902694399!5m2!1spl!2spl"
    },
    {
        name: "Govan",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.3376385983133!2d-4.938937584051611!3d51.59870181184413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486937f48db870f1%3A0x66db6d98a91a0554!2sKaplica%20%C5%9Bw.%20Govana!5e0!3m2!1spl!2spl!4v1638902938657!5m2!1spl!2spl"
    },
    {
        name: "Plas_Mawr",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521134.235216854!2d-4.698186845125296!3d51.89664011654374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48651e86affe5905%3A0xff621e66f321169c!2sPlas%20Mawr!5e0!3m2!1spl!2spl!4v1638903407060!5m2!1spl!2spl"
    },
    {
        name: "Y_Gaer",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314678.42072386586!2d-3.7565145218473868!3d51.96267323800909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e350b929989dd%3A0x5643f67d59ec0995!2sBrecon%20Gaer%20Roman%20Fort!5e0!3m2!1spl!2spl!4v1638903679877!5m2!1spl!2spl"
    },
    {
        name: "Archikatedra_Maryi",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8935.32549026938!2d-3.210683402162371!3d55.95229455352932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c7a4c34e8f6f%3A0x8d5d43322222ce36!2sArchikatedra%20Naj%C5%9Bwi%C4%99tszej%20Maryi%20Panny%20Wniebowzi%C4%99tej%20w%20Edynburgu!5e0!3m2!1spl!2spl!4v1638904559491!5m2!1spl!2spl"
    },
    {
        name: "Wieza_Orchardton",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.485763256248!2d-3.8474614839600196!3d54.876840266672474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4862dc9fa4e40df5%3A0x7967a80a2ef2e7b2!2sOrchardton%20Tower!5e0!3m2!1spl!2spl!4v1638905309320!5m2!1spl!2spl"
    },
    {
        name: "Dunfermline",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2228.7415381411174!2d-3.425532683926365!3d56.040463877236135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d1df67beee17%3A0x2e48f31e09d759b1!2sPa%C5%82ac%20Dunfermline%2C%20114%20Queensferry%20Rd%2C%20Rosyth%2C%20Dunfermline%20KY11%202QZ%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1638905546796!5m2!1spl!2spl"
    },
    {
        name: "Soutra_Aisle",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.6974157901695!2d-2.87740148393293!3d55.81585329459469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887a280544eb4a7%3A0x323cb10bb9372fbd!2sSoutra%20Aisle!5e0!3m2!1spl!2spl!4v1638905633971!5m2!1spl!2spl"
    },
    {
        name: "Wielka_Polska_Mapa_Szkocji",
        path: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.1928761584123!2d-3.2181436987123324!3d55.71250066417591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887ec78fd8abef1%3A0x198ad53eb7ad93e6!2sWielka%20Polska%20Mapa%20Szkocji!5e1!3m2!1spl!2spl!4v1638905933504!5m2!1spl!2spl"
    },
    {
        name: "",
        path: ""
    }
    
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