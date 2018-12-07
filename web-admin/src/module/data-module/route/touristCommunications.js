/**
 * 旅游交通管理
 */
export default [{
  // 航空
  name: 'airports',
  path: 'airports',
  component: () => import('../component/travelTransport/airport/AirPorts')
}, {
  name: 'airportInformation',
  path: 'airports/:id',
  props: true,
  component: () => import('../component/travelTransport/airport/Airport')
}, {
  name: 'flightInformation',
  path: 'airports/:airport/flight/:id',
  props: true,
  component: () => import('../component/travelTransport/airport/FlightInformation')
}, {
  // 铁路
  name: 'railwayStations',
  path: 'railwayStations',
  component: () => import('../component/travelTransport/railwayStation/RailwayStations')
}, {
  name: 'railwayStation',
  path: 'railwayStations/:id',
  props: true,
  component: () => import('../component/travelTransport/railwayStation/RailwayStation')
}, {
  name: 'train',
  path: 'railwayStations/:stationId/train/:id',
  props: true,
  component: () => import('../component/travelTransport/railwayStation/TrainNumber')
}, {
  // 公路
  name: 'passengerStations',
  path: 'passengerStations',
  component: () => import('../component/travelTransport/passengerStation/Index')
}, {
  name: 'passengerStation',
  path: 'passengerStations/:id',
  props: true,
  component: () => import('../component/travelTransport/passengerStation/PassengerStation')
}, {
  name: 'bigBus',
  path: 'passengerStations/:stationId/bigBus/:id',
  props: true,
  component: () => import('../component/travelTransport/passengerStation/BigBus')
}, {
  // 水运
  name: 'wharfs',
  path: 'wharfs',
  component: () => import('../component/travelTransport/wharf/Wharfs')
}, {
  name: 'wharf',
  path: 'wharfs/:id',
  props: true,
  component: () => import('../component/travelTransport/wharf/Wharf')
}, {
  name: 'voyage',
  path: 'wharfs/:wharfId/voyages/:id',
  props: true,
  component: () => import('../component/travelTransport/wharf/Voyage')
}, {
  // 大巴
  name: 'tourBuses',
  path: 'tourBuses',
  component: () => import('../component/travelTransport/tourBus/Index')
}, {
  name: 'tourBus',
  path: 'tourBuses/:id',
  props: true,
  component: () => import('../component/travelTransport/tourBus/TourBus')
}, {
  name: 'tourBusService',
  path: 'tourBuses/:busId/services/:id',
  props: true,
  component: () => import('../component/travelTransport/tourBus/TourBusService')
}, {
  // 公交
  name: 'busStations',
  path: 'busStations',
  component: () => import('../component/travelTransport/busStation/Index')
}, {
  name: 'busStation',
  path: 'busStations/:id',
  props: true,
  component: () => import('../component/travelTransport/busStation/BusStation')
}, {
  name: 'bus',
  path: 'busStations/:stationId/buses/:id',
  props: true,
  component: () => import('../component/travelTransport/busStation/Bus')
}, {
  // 轨道交通
  name: 'railTraffics',
  path: 'railTraffics',
  component: () => import('../component/travelTransport/railTraffic/Index')
}, {
  name: 'railTraffic',
  path: 'railTraffics/:id',
  props: true,
  component: () => import('../component/travelTransport/railTraffic/RailTraffic')
}, {
  name: 'transit',
  path: 'railTraffics/:trafficId/transits/:id',
  props: true,
  component: () => import('../component/travelTransport/railTraffic/RailTransit')
}, {
  // 出租车
  name: 'taxiEnterprises',
  path: 'taxiEnterprises',
  component: () => import('../component/travelTransport/taxiEnterprise/Index')
}, {
  name: 'taxiEnterprise',
  path: 'taxiEnterprises/:id',
  props: true,
  component: () => import('../component/travelTransport/taxiEnterprise/TaxiEnterprise')
}, {
  name: 'taxi',
  path: 'taxiEnterprises/:enterpriseId/taxies/:id',
  props: true,
  component: () => import('../component/travelTransport/taxiEnterprise/Taxi')
}, {
  // 汽车租赁
  name: 'carRentals',
  path: 'carRentals',
  component: () => import('../component/travelTransport/carRental/Index')
}, {
  name: 'carRental',
  path: 'carRentals/:id',
  props: true,
  component: () => import('../component/travelTransport/carRental/CarRental')
}, {
  name: 'car',
  path: 'carRentals/:companyId/cars/:id',
  props: true,
  component: () => import('../component/travelTransport/carRental/Car')
}, {
  // 自行车租赁
  name: 'bikeRentals',
  path: 'bikeRentals',
  component: () => import('../component/travelTransport/bikeRental/Index')
}, {
  name: 'bikeRental',
  path: 'bikeRentals/:id',
  props: true,
  component: () => import('../component/travelTransport/bikeRental/BikeRental')
}]
