export default class FormulaireController{
    constructor(){

    }
    $onInit(){
        this.master = {}
    }
    
    update(user){
        this.master = angular.copy(user)
    }
    reset(){
        this.user = angular.copy({})
    }
        
}
