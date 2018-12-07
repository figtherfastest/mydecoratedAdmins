/*
涉旅人员管理
领队没有响应的页面
 */
export default [{
  // 导游
  name: 'tourGuides',
  path: 'tourGuides',
  component: () => import('../component/travelAgentManagement/tourGuide/Index')
}, {
  name: 'tourGuide',
  path: 'tourGuides/:id',
  props: true,
  component: () => import('../component/travelAgentManagement/tourGuide/TourGuide')
}, {
  // 领队
  name: 'leaderCharacters',
  path: 'leaderCharacters',
  component: () => import('../component/travelAgentManagement/leaderCharacter/Index')
}, {
  name: 'leaderCharacter',
  path: 'leaderCharacters/:id',
  props: true,
  component: () => import('../component/travelAgentManagement/leaderCharacter/LeaderCharacter')
}, {
  // 景区讲解员
  name: 'touristGuides',
  path: 'touristGuides',
  component: () => import('../component/travelAgentManagement/touristGuide/Index')
}, {
  name: 'touristGuide',
  path: 'touristGuides/:id',
  props: true,
  component: () => import('../component/travelAgentManagement/touristGuide/TouristGuide')
}, {
  // 旅游咨询人员
  name: 'travelConsultants',
  path: 'travelConsultants',
  component: () => import('../component/travelAgentManagement/travelConsultant/Index')
}, {
  name: 'travelConsultant',
  path: 'travelConsultants/:id',
  props: true,
  component: () => import('../component/travelAgentManagement/travelConsultant/TravelConsultant')
}, {
  // 大巴司机
  name: 'busDrivers',
  path: 'busDrivers',
  component: () => import('../component/travelAgentManagement/busDriver/Index')
}, {
  name: 'busDriver',
  path: 'busDrivers/:id',
  props: true,
  component: () => import('../component/travelAgentManagement/busDriver/BusDriver')
}]
