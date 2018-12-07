/**
 * 公共资源
 */
export default [{
  // 金融网点
  name: 'financialNets',
  path: 'financialNets',
  component: () => import('../component/publicSource/financialNet/Index')
}, {
  name: 'financialNet',
  path: 'financialNets/:id',
  props: true,
  component: () => import('../component/publicSource/financialNet/FinancialNet')
}, {
  // 药店
  name: 'pharmacies',
  path: 'pharmacies',
  component: () => import('../component/publicSource/pharmacy/Index')
}, {
  name: 'pharmacy',
  path: 'pharmacies/:id',
  props: true,
  component: () => import('../component/publicSource/pharmacy/Pharmacy')
}, {
  // 医院
  name: 'hospitals',
  path: 'hospitals',
  component: () => import('../component/publicSource/hospital/Index')
}, {
  name: 'hospital',
  path: 'hospitals/:id',
  props: true,
  component: () => import('../component/publicSource/hospital/Hospital')
}, {
  // 消防队
  name: 'fireBrigades',
  path: 'fireBrigades',
  component: () => import('../component/publicSource/fireBrigade/Index')
}, {
  name: 'fireBrigade',
  path: 'fireBrigades/:id',
  props: true,
  component: () => import('../component/publicSource/fireBrigade/FireBrigade')
}, {
  // 派出所
  name: 'policeStations',
  path: 'policeStations',
  component: () => import('../component/publicSource/policeStation/Index')
}, {
  name: 'policeStation',
  path: 'policeStations/:id',
  props: true,
  component: () => import('../component/publicSource/policeStation/PoliceStation')
}, {
  // 旅游厕所
  name: 'touristToilets',
  path: 'touristToilets',
  component: () => import('../component/publicSource/touristToilet/Index')
}, {
  name: 'touristToilet',
  path: 'touristToilets/:id',
  props: true,
  component: () => import('../component/publicSource/touristToilet/TouristToilet')
}, {
  // 旅游咨询中心
  name: 'touristInformationCenters',
  path: 'touristInformationCenters',
  component: () => import('../component/publicSource/touristInformationCenter/Index')
}, {
  name: 'touristInformationCenter',
  path: 'touristInformationCenters/:id',
  props: true,
  component: () => import('../component/publicSource/touristInformationCenter/TouristInformationCenter')
}, {
  // 旅游集散中心
  name: 'distributionCenters',
  path: 'distributionCenters',
  component: () => import('../component/publicSource/distributionCenter/Index')
}, {
  name: 'distributionCenter',
  path: 'distributionCenters/:id',
  props: true,
  component: () => import('../component/publicSource/distributionCenter/DistributionCenter')
}, {
  // 停车场
  name: 'parkingLots',
  path: 'parkingLots',
  component: () => import('../component/publicSource/parkingLot/Index')
}, {
  name: 'parkingLot',
  path: 'parkingLots/:id',
  props: true,
  component: () => import('../component/publicSource/parkingLot/ParkingLot')
}]
