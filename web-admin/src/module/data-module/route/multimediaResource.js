/**
 * 多媒体资源
 */
export default [{
  // 视频库
  name: 'videoDatabases',
  path: 'videoDatabases',
  component: () => import('../component/media/videoDatabase/Index')
}, {
  name: 'videoDatabase',
  path: 'videoDatabases/:id',
  props: true,
  component: () => import('../component/media/videoDatabase/VideoDatabase')
}, {
  // 音频库
  name: 'audioDatabases',
  path: 'audioDatabases',
  component: () => import('../component/media/audioDatabase/Index')
}, {
  name: 'audioDatabase',
  path: 'audioDatabases/:id',
  props: true,
  component: () => import('../component/media/audioDatabase/AudioDatabase')
}, {
  // 图片库
  name: 'imageDatabases',
  path: 'imageDatabases',
  component: () => import('../component/media/imageDatabase/Index')
}, {
  name: 'imageDatabase',
  path: 'imageDatabases/:id',
  props: true,
  component: () => import('../component/media/imageDatabase/ImageDatabase')
}, {
  // 虚拟素材字段
  name: 'virtualMaterials',
  path: 'virtualMaterials',
  component: () => import('../component/media/virtualMaterial/Index')
}, {
  name: 'virtualMaterial',
  path: 'virtualMaterials/:id',
  props: true,
  component: () => import('../component/media/virtualMaterial/VirtualMaterial')
}]
