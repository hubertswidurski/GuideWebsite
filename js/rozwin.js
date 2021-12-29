function togglepotrawe(btn){
    let container = btn.parentElement.parentElement; //bierzemy diva który ma całą potawę
    container.classList.toggle("zwiniety");//zmieniamy istnienie klasy na przeciwne
    const kids = container.children;
    for(let i =0; i< kids.length; i++){
        if(!kids[i].classList.contains("cont-header"))//czy nie jest to pasek górny (wraz z przyciksiem rozwijania):
        kids[i].classList.toggle("content-zwiniety");//jeśli nie to zwiń/rozwiń
    }
}