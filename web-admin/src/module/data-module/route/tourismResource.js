/*
* 旅游资源管理
* */
export default [{
  // 旅游景区
  name: 'touristAttractions',
  path: 'touristAttractions',
  component: () => import('../component/tourismResourceManagement/touristAttractions/Index')
}, {
  name: 'touristAttraction',
  path: 'touristAttractions/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/touristAttractions/TouristAttractions')
}, {
  // 乡村旅游
  name: 'ruralTourisms',
  path: 'ruralTourisms',
  component: () => import('../component/tourismResourceManagement/ruralTourism/Index')
}, {
  name: 'ruralTourism',
  path: 'ruralTourisms/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/ruralTourism/RuralTourism')
}, {
  // 城镇旅游
  name: 'tourismTowns',
  path: 'tourismTowns',
  component: () => import('../component/tourismResourceManagement/tourismTown/Index')
}, {
  name: 'tourismTown',
  path: 'tourismTowns/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/tourismTown/TourismTown')
}, {
  // 特色街道
  name: 'qualityStreets',
  path: 'qualityStreets',
  component: () => import('../component/tourismResourceManagement/qualityStreet/Index')
}, {
  name: 'qualityStreet',
  path: 'qualityStreets/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/qualityStreet/QualityStreet')
}, {
  // 特色场所
  name: 'characteristicTourisms',
  path: 'characteristicTourisms',
  component: () => import('../component/tourismResourceManagement/characteristicTourism/Index')
}, {
  name: 'characteristicTourism',
  path: 'characteristicTourisms/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/characteristicTourism/CharacteristicTourism')
}, {
  // 新兴业态
  name: 'emergingFormats',
  path: 'emergingFormats',
  component: () => import('../component/tourismResourceManagement/emergingFormats/Index')
}, {
  name: 'emergingFormat',
  path: 'emergingFormats/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/emergingFormats/EmergingFormats')
}, {
  // 公园步道
  name: 'publicTrails',
  path: 'publicTrails',
  component: () => import('../component/tourismResourceManagement/publicTrails/Index')
}, {
  name: 'publicTrail',
  path: 'publicTrails/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/publicTrails/PublicTrails')
}, {
  // 科技文化馆
  name: 'scienceAndTechnologyCultureCenters',
  path: 'scienceAndTechnologyCultureCenters',
  component: () => import('../component/tourismResourceManagement/scienceAndTechnologyCultureCenter/Index')
}, {
  name: 'scienceAndTechnologyCultureCenter',
  path: 'scienceAndTechnologyCultureCenters/:id',
  props: true,
  component: () => import('../component/tourismResourceManagement/scienceAndTechnologyCultureCenter/ScienceAndTechnologyCultureCenter')
}]
