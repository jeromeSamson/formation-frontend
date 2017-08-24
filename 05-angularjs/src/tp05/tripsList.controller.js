export default class TripListController{
    constructor($http){
        this.$http = $http
        this.$http.get('http://localhost:3000/trips').then(response=>{
            this.data = response.data
            
         },response=>{
             alert('erreur')
         })
       
    }
    
    save(item){
        this.ville = item
        this.$http({
            method: 'patch',
            url:'http://localhost:3000/trips/'+this.ville.id,
            data:this.ville,
            header:{
                'Content type' : 'application/json'
            }

        })
    }
}