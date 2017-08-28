import RaceService from './race.service'
import RaceController from './race.controller'
const raceModule = angular.module('raceModule',[]).service(RaceService.name,RaceService).controller(RaceController.name,RaceController)

export default raceModule