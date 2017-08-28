import SimulatorService from './simulator.service'

 const simulatorModule = angular.module('simulatorModule',[]).service(SimulatorService.name,SimulatorService)

 export default simulatorModule 