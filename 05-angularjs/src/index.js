import tplTp01 from './tp01/expression.html'
import tplTp02 from './tp02/vues.html'
import tplTp03 from './tp03/carrousel.html'
import tplTp04 from './tp04/forms.html'
import anguler from 'angular'
import CarrouselCtrl from './tp03/carrousel.controller'
import FormController from './tp04/form.controller'
document.querySelector('body').innerHTML= [tplTp01,tplTp02,tplTp03,tplTp04].join('<hr>')
angular.module('tripApp',[]).controller(CarrouselCtrl.name,CarrouselCtrl).controller(FormController.name,FormController)
console.log('Bonjour App');