import BaseState from './BaseState'
import regions from './RegionModule'

const CTX = CONTEXT_PATH + 'd/data'
export default {
  namespaced: true,
  state: {},
  modules: {
    region: regions,
    attractions: new BaseState({url: `${CTX}/attractions`}),
    bigBusInfo: new BaseState({url: `${CTX}/bigBuses`}),
    busNumber: new BaseState({url: `${CTX}/buses`}),
    car: new BaseState({url: `${CTX}/cars`}),
    flightInformation: new BaseState({url: `${CTX}/flightInformations`}),
    distributionCenter: new BaseState({url: `${CTX}/distributionCenters`}),
    financialNet: new BaseState({url: `${CTX}/financialNets`}),
    fireBrigade: new BaseState({url: `${CTX}/fireBrigades`}),
    gasStation: new BaseState({url: `${CTX}/gasStation`}),
    hospital: new BaseState({url: `${CTX}/hospitals`}),
    parkingLot: new BaseState({url: `${CTX}/parkingLots`}),
    petrolStation: new BaseState({url: `${CTX}/petrolStation`}),
    pharmacy: new BaseState({url: `${CTX}/pharmacys`}),
    policeStation: new BaseState({url: `${CTX}/policeStations`}),
    tourismMonitoringCenter: new BaseState({url: `${CTX}/tourismMonitoringCenter`}),
    touristicCollege: new BaseState({url: `${CTX}/touristicCollege`}),
    touristInformationCenter: new BaseState({url: `${CTX}/touristInformationCenters`}),
    touristToilet: new BaseState({url: `${CTX}/touristToilets`}),
    railTransit: new BaseState({url: `${CTX}/railTransits`}),
    taxi: new BaseState({url: `${CTX}/taxies`}),
    discountInformation: new BaseState({url: `${CTX}/discountInformations`}),
    touristRoute: new BaseState({url: `${CTX}/touristRoutes`}),
    tourBusService: new BaseState({url: `${CTX}/tourBusServices`}),
    characteristicTourism: new BaseState({url: `${CTX}/characteristicTourisms`}),
    emergingFormats: new BaseState({url: `${CTX}/emergingFormatss`}),
    publicTrails: new BaseState({url: `${CTX}/publicTrailss`}),
    qualityStreet: new BaseState({url: `${CTX}/qualityStreets`}),
    ruralTourism: new BaseState({url: `${CTX}/ruralTourisms`}),
    scienceAndTechnologyCultureCenter: new BaseState({url: `${CTX}/scienceAndTechnologyCultureCenters`}),
    tourismTown: new BaseState({url: `${CTX}/tourismTowns`}),
    touristAttractions: new BaseState({url: `${CTX}/touristAttractionss`}),
    touristCommodity: new BaseState({url: `${CTX}/touristCommoditys`}),
    touristProject: new BaseState({url: `${CTX}/touristProject`}),
    trainNumber: new BaseState({url: `${CTX}/trainNumbers`}),
    travelAgencyBranch: new BaseState({url: `${CTX}/travelAgencyBranch`}),
    busDriver: new BaseState({url: `${CTX}/busDrivers`}),
    leaderCharacter: new BaseState({url: `${CTX}/leaderCharacters`}),
    tourGuide: new BaseState({url: `${CTX}/tourGuides`}),
    touristGuide: new BaseState({url: `${CTX}/touristGuides`}),
    travelConsultant: new BaseState({url: `${CTX}/travelConsultants`}),
    association: new BaseState({url: `${CTX}/associationOfTourismOrganizations`}),
    performanceExhibition: new BaseState({url: `${CTX}/performanceExhibitions`}),
    tourismManagementDepartment: new BaseState({url: `${CTX}/tourismManagementDepartments`}),
    tourismPurpose: new BaseState({url: `${CTX}/tourismPurposes`}),
    touristActivity: new BaseState({url: `${CTX}/touristActivitys`}),
    accommodation: new BaseState({url: `${CTX}/accommodations`}),
    automobileService: new BaseState({url: `${CTX}/automobileServices`}),
    diningPlace: new BaseState({url: `${CTX}/diningPlaces`}),
    shoppingPlaceWord: new BaseState({url: `${CTX}/shoppingPlaceWords`}),
    tourGuideAgency: new BaseState({url: `${CTX}/tourGuideAgencys`}),
    travelAgentField: new BaseState({url: `${CTX}/travelAgentFields`}),
    travelServices: new BaseState({url: `${CTX}/travelServices`}),
    airport: new BaseState({url: `${CTX}/airports`}),
    bikeRental: new BaseState({url: `${CTX}/bikeRentals`}),
    busStation: new BaseState({url: `${CTX}/busStations`}),
    carRental: new BaseState({url: `${CTX}/carRentalEnterpises`}),
    passengerStation: new BaseState({url: `${CTX}/passengerStations`}),
    railTraffic: new BaseState({url: `${CTX}/railTraffics`}),
    railwayStation: new BaseState({url: `${CTX}/railwayStations`}),
    taxiEnterprise: new BaseState({url: `${CTX}/taxiEnterprises`}),
    wharf: new BaseState({url: `${CTX}/wharfs`}),
    tourBus: new BaseState({url: `${CTX}/tourBuses`}),
    voyage: new BaseState({url: `${CTX}/voyages`}),
    image: new BaseState({url: `${CTX}/images`}),
    video: new BaseState({url: `${CTX}/videos`}),
    audio: new BaseState({url: `${CTX}/audios`}),
    virtualMaterial: new BaseState({url: `${CTX}/virtualMaterials`})
  }
}
