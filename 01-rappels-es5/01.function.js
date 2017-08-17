console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function additionner(nb1,nb2){
    return nb1 + nb2;
}

var resultat1 = additionner(nombre1,nombre2);

console.log('resultat1 ==',resultat1);

var somme = additionner;

var resultat2 = somme(nombre1,nombre2);

console.log('resultat2 ==',resultat2);

var multiplication = function(nb1,nb2){
    return nb1*nb2;
}

var resultat3 = multiplication(nombre1,nombre2);

console.log('resultat3 ==',resultat3);

var afficherOperation = new Object(),
    nomOperation,
    operation,
    nb1,
    nb2;


afficherOperation.nomOperation="Somme";
afficherOperation.operation=additionner;
afficherOperation.nb1=20;
afficherOperation.nb2=40;
console.log(afficherOperation.nomOperation,'[ nb1 ==',afficherOperation.nb1,'nb2 ==',afficherOperation.nb2,'] ==',afficherOperation.operation(afficherOperation.nb1,afficherOperation.nb2));


afficherOperation.nomOperation="Multiplication";
afficherOperation.operation=multiplication;
afficherOperation.nb1=10;
afficherOperation.nb2=20;
console.log(afficherOperation.nomOperation,'[ nb1 ==',afficherOperation.nb1,'nb2 ==',afficherOperation.nb2,'] ==',afficherOperation.operation(afficherOperation.nb1,afficherOperation.nb2));



afficherOperation.nomOperation="Soustraction";
afficherOperation.operation=function(nb1,nb2){
    return nb1-nb2;
}
afficherOperation.nb1=15;
afficherOperation.nb2=5;
console.log(afficherOperation.nomOperation,'[ nb1 ==',afficherOperation.nb1,'nb2 ==',afficherOperation.nb2,'] ==',afficherOperation.operation(afficherOperation.nb1,afficherOperation.nb2));

