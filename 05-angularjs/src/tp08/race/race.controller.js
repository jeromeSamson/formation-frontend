export default class RaceController{
    constructor(RaceService,SimulatorService,$interval){
        this.$interval = $interval
        this.RaceService = RaceService
        this.simulator = SimulatorService
        this.walker = this.RaceService.list()        
    }
    start(){
        this.simulator.start()        
    }
    
}