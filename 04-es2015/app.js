let favoriteCityId = 'rome'

console.log(favoriteCityId)
favoriteCityId = 'paris'

console.log(favoriteCityId)

const citiesId = [
    'paris','nyc','rome','rio-de-janeiro'
]

console.log(citiesId)

//citiesId = [] Erreur car citiesID est une constante

citiesId.push('tokyo')
console.log(citiesId)

function getWeather (cityId){
    let city = cityId
    let temperature = 20
    return {city,temperature}
}

const weather = getWeather(favoriteCityId)

console.log(weather);

const{city,temperature} = weather

console.log(city);
console.log(temperature);

const[parisId,nycId,...otherCitiesId] = citiesId

console.log(parisId)
console.log(nycId)
console.log(otherCitiesId.length)


class Trip{
    constructor(id,name,imageUrl){
        this.id = id
        this.name=name
        this.imageUrl = imageUrl
    }
    set price(newPrice){
        this._price = newPrice
    }
    get price(){
        return this._price
    }

    static getDefaultTrip(){
        return new Trip('rio-de-janeiro','Rio-de-Janeiro','img/rio-de-janeiro')
    }
}

let parisTrip = new Trip('paris','Paris','img/paris.jpg')

console.log(parisTrip);
console.log(parisTrip.name);

Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}]`
}

console.log(parisTrip.toString())

parisTrip._price = 100

Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`
}

console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id,name,imageUrl){
        super(id,name,imageUrl)
        this._price = 0
    }
    toString(){
        return `Free`+super.toString()
    }

}

const freeTrip = new FreeTrip('nantes','Nantes','img/nantes.jpg')

console.log(freeTrip.toString());


class TripService {
    constructor() {
        this.tripSet = new Set([
        new Trip('paris', 'Paris', 'img/paris.jpg'),
        new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
       new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        ])
    }
    findByName(tripName) {
        return new Promise((resolve,reject)=>{
            setTimeout(
               ()=>{        
                    this.tripSet.forEach((t)=>{
                        if(t.name === tripName){
                            resolve(t);
                        }
                    })
                  reject(tripName)         
                }
                ,2000)
        })
    }
}      
    class PriceService {
        constructor() {
            this.pricesMap = new Map([
                ['paris', 100],
                ['rio-de-janeiro', 800]
            ]);
        }
        findPriceByTripId(tripId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let found = this.pricesMap.get(tripId);
                    if(found){
                        resolve(found);
                    }else{
                        reject(tripId);
                    }
                }, 2000);
            });
        }
    }

t = new TripService()
t.findByName('Paris').then(trip=>{
    console.log(`Trip found : ${trip}`);
    
},error=>{
    console.log(`No trip with name ${error}`);
    

})

t.findByName('Toulouse').then(trip=>{
    console.log(`Trip found : ${trip}`);
    
},error=>{
    console.log(`No trip with name ${error}`);
    

})

p = new PriceService()

p.findPriceByTripId('rio-de-janeiro')
.then(price=>{console.log(`Price found : ${price}`);})
.catch(error=>{console.log(`No price found for id ${error}`);})

p.findPriceByTripId('nantes')
.then(price=>{console.log(`Price found : ${price}`);})
.catch(error=>{console.log(`No price found for id ${error}`);})




    