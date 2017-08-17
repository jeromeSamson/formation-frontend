function Personne(nom,prenom,pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function(){
     
        return 'nom = '+nom+' prenom = '+prenom+' pseudo = '+pseudo;
    }
}

var jules = new Personne("Jules","LEMAIRE","jules77");
var paul = new Personne("Paul","LEMAIRE","paul44");

function afficherPersonne(Personne){
    console.log(Personne.nom,Personne.prenom,Personne.pseudo, Personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

jules.pseudo = 'jules44';

afficherPersonne(jules);

console.log(jules.age);

Personne.prototype.age = "NON Renseigné";

console.log(jules.age);

jules.age=30;
console.log(jules.age);

Personne.prototype.getInitiales = function(){
    initiale = this.nom.charAt(0);
    initiale = initiale + this.prenom.charAt(0);
    return initiale;
}

console.log(jules.getInitiales());

var robert ={
nom : "Robert",
prenom :"LEPREFET",
pseudo : "robert77",
getNomComplet : function(){
     
        return 'nom = '+this.nom+' prenom = '+this.prenom+' pseudo = '+this.pseudo;
}
};

afficherPersonne(robert);


function Client(nom,prenom,pseudo,numeroClient){
    Personne.call(this,nom,prenom,pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return 'nom = '+this.nom+' prenom = '+this.prenom+' numero client = '+this.numeroClient; 
    }
}

var steve = new Client('steve','LUCAS','steve44','A01');
afficherPersonne(steve);

console.log(steve.numeroClient);

console.log(steve.getInfos());