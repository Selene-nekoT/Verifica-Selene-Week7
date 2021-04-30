// JavaScript source code

function RecuperaTitolo(h3) {
   
    try {
        
        //recupero i valori per tag= h3 
        let recuperoTitoli = document.getElementsByTagName(h3).item(0);  //-->Object
        let titolo = recuperoTitoli.innerHTML;   //per convertirlo in string

        console.log(titolo);
        console.log(typeof (titolo));   //->string

        //SET
        localStorage.setItem("Titolo", titolo);

        //GET
        let titoloVisualizzato = localStorage.getItem("Titolo");
        alert("Il tuo primo articolo ha titolo: " + titoloVisualizzato);

        //Ottenere la chiave usata
        let chiave = localStorage.key(0);
        alert("Hai usato questa chiave: " + chiave);

        //usando JQUERY
        //alert(`Articolo numero: ${chiave} con valore: ${titoloVisualizzato}`);

    } catch (e) {
        alert(e);
    }
}


function ColoraP(p) {

    let ArchivioArticoli = document.getElementsByTagName(p);


    for (let i = 0; i < ArchivioArticoli.length; i++) {
        if (isEven(i)) {
            ArchivioArticoli[i].style.backgroundColor = "Orange";
        } else {
            ArchivioArticoli[i].style.backgroundColor = "Yellow";
        }
    }
}


function isEven(number) {
    return (number % 2 == 0) ? true : false ;
}