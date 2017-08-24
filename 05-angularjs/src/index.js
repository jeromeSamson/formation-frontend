import tplTp01 from './tp01/expression.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import tplTp05 from './tp05/tripsList.html'
import anguler from 'angular'
import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/form.controller'
import TripListController from './tp05/tripsList.controller'
document.querySelector('body').innerHTML= [tplTp01,tplTp02,tplTp03,tplTp04,tplTp05].join('<hr>')
angular.module('tripApp',[]).controller(CarrouselCtrl.name,CarrouselCtrl).controller(FormController.name,FormController).controller(TripListController.name,TripListController)
console.log('Bonjour App');