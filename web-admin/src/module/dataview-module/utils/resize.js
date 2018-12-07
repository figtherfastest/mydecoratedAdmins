export default {
  resizeHandle (html) {
    let wRatio = window.innerWidth / 1920 // 宽度缩放比例
    let hRatio = window.innerHeight / 1080 // 高度缩放比例
    let limt = wRatio * 1080 // 阀值 可见高度超过这个之后使用高度比例缩放整个页面
    let min = window.innerHeight < limt ? hRatio : wRatio
    let offect = window.innerHeight < limt ? `translateX(${(window.innerWidth - (hRatio * 1920)) / 2}px)` : `translateY(${(window.innerHeight - (1080 * wRatio)) / 2}px)`
    html.style.transform = `scale(${min}) ${offect}`
    html.style.transformOrigin = '0 0 0'
    html.style.width = '1920px'
    html.style.height = '1080px'
    html.style.overflow = 'hidden'
  }
}
