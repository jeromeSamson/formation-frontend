import tplTp01 from './tp01/expression.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripsList.html'
import tplTp06 from './tp06/tripsListDetails.html'
import tplTp07 from './tp07/tripsComments.html'
import tplTp08 from './tp08/race/race.html'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import anguler from 'angular'
import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/form.controller'
import TripListController from './tp05/tripsList.controller'
import TripListDetailController from './tp06/tripsListDetails.controller'
import ngResource from 'angular-resource'


import apiUrls from './tp07/apiUrls.service'
import CommentsService from './tp07/comments.service'
import StepsService from './tp07/steps.service'
import TripsService from './tp07/trips.service'
import TripsController from './tp07/tripsComments.controller'


import raceModule from './tp08/race/race.module'
import simulatorModule from './tp08/simulator/simular.module'


document.querySelector('body').innerHTML= [tplTp08,tplTp07,tplTp06,tplTp05,tplTp04,tplTp03,tplTp02,tplTp01].join('<hr>')
angular.module('tripApp',['ngResource',raceModule.name,simulatorModule.name])
.controller(CarrouselCtrl.name,CarrouselCtrl)
.controller(FormController.name,FormController)
.controller(TripListController.name,TripListController)
.controller(TripListDetailController.name,TripListDetailController)
.constant('apiUrls',apiUrls)
.factory('commentService',CommentsService)
.service('tripService',TripsService)
.service('stepsService',StepsService)
.controller(TripsController.name,TripsController)
console.log('Bonjour App');
