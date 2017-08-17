var villes =['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element){
    console.log(element);
    
})

lettreADansToutesLesVilles =  villes.every(function(element){
   return element.indexOf('a') != -1;
})

console.log(lettreADansToutesLesVilles);


console.log(villes.some(function(element){
    return element.indexOf('-') !=-1;
}));

villesSansTiretSansEspace = villes.filter(function(element){
    return(element.indexOf(" ")==-1 && element.indexOf("-")==-1);
})

console.log(villesSansTiretSansEspace);

villeMajusculeSeTerminantParS = villes.filter(function(element){
    if(element.substring(element.length-1,element.length) == 's'){
        return element;
    }
}).map(function(element){
    return element.toLocaleUpperCase();
})
    
console.log(villeMajusculeSeTerminantParS);

