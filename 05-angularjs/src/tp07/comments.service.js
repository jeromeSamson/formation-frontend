class CommentsService {
    constructor(apiUrls, $resource) {
      this.apiUrls = apiUrls;
      this.TripResource = $resource(apiUrls.full+'/:tripId', {tripId:"@id"}, {
        'update': { method:'PUT' }
    })
    }
  
    findBytripId(tripId) {
      return this.TripResource.get({tripId:tripId})
    }
  
    addComment(comment, trip) {
        trip.comments.push({id:'anonymous',text:comment})
        trip.$update()
    } 
  }
  const commentsService = (apiUrls, $resource) => {
    return new CommentsService(apiUrls, $resource);
  };
  export default commentsService;