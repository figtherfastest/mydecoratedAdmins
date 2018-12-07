/*
* 涉旅企业管理
* 娱乐场所  没有
* */
export default [{
  // 旅行社
  name: 'travelAgentFields',
  path: 'travelAgentFields',
  component: () => import('../component/travelRelatedEnterpriseManagement/travelAgentField/Index')
}, {
  name: 'travelAgentField',
  path: 'travelAgentFields/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/travelAgentField/TravelAgentField')
}, {
  // 导游服务公司
  name: 'tourGuideAgencys',
  path: 'tourGuideAgencys',
  component: () => import('../component/travelRelatedEnterpriseManagement/tourGuideAgency/Index')
}, {
  name: 'tourGuideAgency',
  path: 'tourGuideAgencys/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/tourGuideAgency/TourGuideAgency')
}, {
  // 住宿场所
  name: 'accommodations',
  path: 'accommodations',
  component: () => import('../component/travelRelatedEnterpriseManagement/accommodation/Index')
}, {
  name: 'accommodation',
  path: 'accommodations/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/accommodation/Accommodation')
}, {
  // 餐饮场所
  name: 'diningPlaces',
  path: 'diningPlaces',
  component: () => import('../component/travelRelatedEnterpriseManagement/diningPlace/Index')
}, {
  name: 'diningPlace',
  path: 'diningPlaces/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/diningPlace/DiningPlace')
}, {
  // 购物场所
  name: 'shoppingPlaceWords',
  path: 'shoppingPlaceWords',
  component: () => import('../component/travelRelatedEnterpriseManagement/shoppingPlaceWord/Index')
}, {
  name: 'shoppingPlaceWord',
  path: 'shoppingPlaceWords/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/shoppingPlaceWord/ShoppingPlaceWord')
}, {
  // 汽车服务公司
  name: 'automobileServices',
  path: 'automobileServices',
  component: () => import('../component/travelRelatedEnterpriseManagement/automobileService/Index')
}, {
  name: 'automobileService',
  path: 'automobileServices/:id',
  props: true,
  component: () => import('../component/travelRelatedEnterpriseManagement/automobileService/AutomobileService')
}]
