export default class TripsService{
        constructor(apiUrls,$resource){
            this.apiUrls = apiUrls
            this.$resource = $resource
        }
       findAll(){
            return this.$resource(this.apiUrls.light).query()   
       } 
}
