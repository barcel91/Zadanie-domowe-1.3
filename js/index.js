let result = prompt("Podaj liczbę");

let myNumber = parseInt(result);

if (isNaN(myNumber)) {

    console.log("To nie liczba");
}

else {
    var a = parseInt(myNumber, 10);

    switch (a) {
        case 1:
            console.log("Zdałeś egzamin");
            break;
        case 2:
            console.log("Zaliczona tylko teoria");
            break;
        case 3:
            console.log("Zaliczona tylko praktyka");
            break;
        case 0:
            console.log("Egzamin do poprawy");
            break;
        default:
            console.log("Coś jebło");
    }
}