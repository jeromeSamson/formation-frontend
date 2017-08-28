export default class SimulatorService {
    constructor($interval,RaceService){
        this.$interval = $interval
        this.raceServ = RaceService
    }
    start() {
        // TODO modifier de manière aléatoire la position des compétiteurs toutes les secondes
        // Utiliser le service RaceService   
       this.process = this.$interval(()=>this.run(),1000)
    }
    run(){
            this.raceServ.list().forEach(walker=>{               
                let rand = Math.ceil((Math.random()*10))
                this.raceServ.update(walker.name,rand)
                if (walker.progress >= 100) {
                    walker.progress = 100                
                    this.$interval.cancel(this.process)
                }
            }, this);
           
        }
}
    
