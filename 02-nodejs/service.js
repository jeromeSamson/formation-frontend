
var devfest2015 = require("./data/devfest-2015.js");

exports.listerTousLesPresentateurs = function(){
   return devfest2015.speakers;
}

exports.listerToutesLesSessions = function(){
    return devfest2015.sessions;
}

exports.trouverUneSession = function(id){
   return devfest2015.sessions.find(function(element){
       if(element.id == id){
           return element;
       }
   });
}

exports.listerTopPresentateurs = function(){
   return devfest2015.speakers.filter(function(element){
        if(element.topspeaker === true){
            return element;
        }
            
    })
}

