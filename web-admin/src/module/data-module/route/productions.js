/**
 * 旅游产品
 */
export default [{
  // 旅游线路
  name: 'touristRoutes',
  path: 'touristRoutes',
  component: () => import('../component/trivalProducts/touristRoute/Index')
}, {
  name: 'touristRoute',
  path: 'touristRoutes/:id',
  props: true,
  component: () => import('../component/trivalProducts/touristRoute/TouristRoute')
}, {
  // 旅游商品
  name: 'touristCommodities',
  path: 'touristCommodities',
  component: () => import('../component/trivalProducts/touristCommodity/Index')
}, {
  name: 'touristCommodity',
  path: 'touristCommodities/:id',
  props: true,
  component: () => import('../component/trivalProducts/touristCommodity/TouristCommodity')
}, {
  // 优惠信息
  name: 'discountInformations',
  path: 'discountInformations',
  component: () => import('../component/trivalProducts/discountInformation/Index')
}, {
  name: 'discountInformation',
  path: 'discountInformations/:id',
  props: true,
  component: () => import('../component/trivalProducts/discountInformation/DiscountInformation')
}]
