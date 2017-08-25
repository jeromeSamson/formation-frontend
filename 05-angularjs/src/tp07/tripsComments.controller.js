export default class TripsController{
    constructor(tripService,stepsService,commentService){
        this.tripService = tripService
        this.dataLight = this.tripService.findAll()   
        this.stepsService = stepsService  
        this.commentService = commentService
    }

    steps(){
        this.step = this.stepsService.findById(this.choix)       
    }
    comment(){
        this.comments = this.commentService.findBytripId(this.choix)
        
    }
    saveComment(){       
        this.commentService.addComment(this.newComment,this.comments)
        this.newComment=""
    }

}