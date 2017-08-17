var devfest = require('./service.js');
var readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout),
prefix = '*** Application Conférence ***\n1. Liste de tous les présentateurs\n2. Top présentateurs\n3. Liste des sessions\n4. Détail d une session\n99. Quitter\n';
rl.on('line', function(line) {
  switch(line.trim()) {
    case '1' : devfest.listerTousLesPresentateurs().forEach(function(element){
        console.log(element.firstname + " " + element.lastname +" " + element.category.title);
        
    })
            break;
        case '2' : devfest.listerTopPresentateurs().forEach(function(element){
            console.log(element.firstname + " "+ element.lastname +"\n" );
        }
        )
        break;
         case '3' : devfest.listerToutesLesSessions().forEach(function(element){
             console.log(element.id + " " + element.title + " " + element.type);             
         })
        break;
        case '4' : rl.question(`Veuillez saisir un id de session :`,(rep) =>{
                      console.log(devfest.trouverUneSession(rep).id + " " + devfest.trouverUneSession(rep).title);
                    rl.setPrompt(prefix, prefix.length);
                    rl.prompt();          
                    });
                             
                break;
        case '99' : rl.close();
        break;
        default : console.log('erreur');
                break;        
  }
    if (line.trim() !='4'){
        rl.setPrompt(prefix, prefix.length);
        rl.prompt(); 
    }
}).on('close', function() {
  console.log('Au revoir !');
  process.exit(0);
});
  rl.setPrompt(prefix, prefix.length);
  rl.prompt();


