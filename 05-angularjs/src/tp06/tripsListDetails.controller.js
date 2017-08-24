export default class TripListDetailController{
    constructor($resource){
        this.TripResource = $resource('http://localhost:3000/trips-details/:tripId', {tripId:"@id"}, {
            'update': { method:'PUT' }
        })
        this.data = this.TripResource.query()
    }

   save(data){              
        data.$update()
    }
}