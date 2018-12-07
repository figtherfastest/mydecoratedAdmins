export default [{
  name: 'datav',
  path: '/datav',
  component: () => import('../component/DataViewTemplate'),
  redirect: {
    name: 'dataIndex'
  },
  children: [{
    // 综合数据展示
    name: 'dataIndex',
    path: 'index',
    component: () => import('../component/home/Index')
  }, {
    // 旅游经济核算大数据
    name: 'calcData',
    path: 'calcData',
    component: () => import('../component/calcData/Index')
  }, {
    // 信用全景分析
    name: 'creditPanorama',
    path: 'creditPanorama',
    component: () => import('../component/creditPanorama/Index')
  }, {
    // 旅游营销大数据
    name: 'marketingData',
    path: 'marketingData',
    component: () => import('../component/marketingData/Index')
  }, {
    // 产业运行监测
    name: 'industry',
    path: 'industry',
    component: () => import('../component/industry/Index')
  }, {
    // 舆情监测分析
    name: 'popularFeelings',
    path: 'popularFeelings',
    component: () => import('../component/popularFeelings/Index')
  }, {
    // 假日统计分析
    name: 'holiday',
    path: 'holiday',
    component: () => import('../component/holiday/Index')
  }, {
    name: 'test',
    path: 'test',
    component: () => import('../Test')
  }]
}]
