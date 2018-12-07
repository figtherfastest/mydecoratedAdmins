export default [{
  name: 'opinion',
  path: '/opinion',
  component: () => import('../component/Template'),
  children: [{
    name: 'opinion-index',
    path: 'index',
    component: () => import('../component/Opinions')
    // children: [{
    //   name: 'opinion-detail',
    //   path: ':id',
    //   component: () => import('../component/opinionDetail')
    // }]
  }, {
    name: 'opinion-detail',
    path: '/opinions/:id',
    component: () => import('../component/opinionDetail')
  }]
}]
