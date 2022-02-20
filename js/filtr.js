
function filtrPotrawy(){

    const countries = document.querySelectorAll('input[name="sel-countries"]');
    const typ = document.querySelectorAll('input[name="sel-pora"]');
    const sections = document.querySelectorAll(".country-content");
    let ids="";
    let classes ="";
    //sprawdzanie filtrów:
    for(let i=0; i<countries.length; i++){
        let countrySplit = countries[i].id.split('-');
        secId="sec-" + countrySplit[1]+" ";
        if(countries[i].checked){
            ids += secId;
        }
       
    }

    for(let i=0; i<typ.length; i++){
        let typSplit = typ[i].id.split('-');
        if(typ[i].checked){
            classes += typSplit[1]+" ";
        }
    }
    //alert:
    if(ids==""){
        window.alert("Uwaga! Nie zazanaczono żadnych krajów! Wyniki będą puste");
    }else if (classes==""){
        window.alert("Uwaga! Z powodu wybranych filtrów, wyniki będą puste!");
    }

    for(let i=0; i<sections.length; i++){
        if(ids.includes(sections[i].id)){
            sections[i].style.display="flex";
            let children = sections[i].querySelectorAll("div.container1, div.container2");           
            for(let i=0; i<children.length; i++){
                checkClassList(classes, children[i]);
            }
        }else{
            sections[i].style.display="none";
        }
    }

}
function filtrZabytki(){

    const countries = document.querySelectorAll('input[name="sel-countries"]');
    const sections = document.querySelectorAll(".country-content");
    let ids="";
    //sprawdzanie filtrów:
    for(let i=0; i<countries.length; i++){
        let countrySplit = countries[i].id.split('-');
        secId="sec-" + countrySplit[1]+" ";
        if(countries[i].checked){
            ids += secId;
        }
       
    }
    //alert:
    if(ids==""){
        window.alert("Uwaga! Nie zazanaczono żadnych krajów! Wyniki będą puste");
    }

    for(let i=0; i<sections.length; i++){
        if(ids.includes(sections[i].id)){
            sections[i].style.display="flex";
        }else{
            sections[i].style.display="none";
        }
    }

}
function filtrTradycje(){

    const countries = document.querySelectorAll('input[name="sel-countries"]');
    const articles = document.querySelectorAll("article");
    let ids="";
    //sprawdzanie filtrów:
    for(let i=0; i<countries.length; i++){
        let countrySplit = countries[i].id.split('-');
        if(countries[i].checked){
            ids +=  countrySplit[1]+" ";
        }
       
    }
    //alert:
    if(ids==""){
        window.alert("Uwaga! Nie zazanaczono żadnych krajów! Wyniki będą puste");
    }

    for(let i=0; i<articles.length; i++){
        checkClassList(ids, articles[i]);
    }

}

function checkClassList(string, element){
    for(let i =0; i<element.classList.length; i++){
        if(string.includes(element.classList[i])){
            element.style.display="flex";
            break;
        }else{
            element.style.display="none";
        }
    }
}