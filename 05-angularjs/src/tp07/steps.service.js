export default class StepsService{
    constructor(apiUrls,$resource){
        this.apiUrls = apiUrls
        this.$resource = $resource  
          
    }
    findById(tripId){
        return this.$resource(this.apiUrls.full+'/:tripId', {tripId:"@id"},).get({tripId:tripId})   
   } 
}