// 旅游目的地管理
import targets from './targets'
// 旅游商品管理
import productions from './productions'
// 公共资源管理
import commonResources from './commonResources'
// 旅游资源管理
import tourismResource from './tourismResource'
// 旅游交通管理
import touristCommunications from './touristCommunications'
// 涉旅人员管理
import referPersonManage from './referPersonManage'
// 涉旅企业管理
import tirvalEnterprise from './trivalEnterprise'
// 涉旅数据管理
import tirvalDatabases from './trivalDatabases'
// 多媒体资源
import multimediaResource from './multimediaResource'

// 数据中心路由
export default [{
  name: 'data',
  path: '/data',
  redirect: '/data/index',
  component: () => import('../component/.common/Template'),
  children: [
    ...targets,
    ...productions,
    ...commonResources,
    ...tourismResource,
    ...touristCommunications,
    ...referPersonManage,
    ...tirvalEnterprise,
    ...tirvalDatabases,
    ...multimediaResource,
    {
      name: 'index',
      path: 'index',
      component: () => import('../component/Index.vue')
    }
  ]
}]
