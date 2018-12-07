let mapConfig = {}
export default {
  config (config) {
    mapConfig = config
  },
  load () {
    return new Promise(function (resolve, reject) {
      if (window.BMap) {
        resolve(window.BMap)
      } else {
        let timestamp = '_' + new Date().getTime()
        window[timestamp] = function () {
          delete window[timestamp]
          resolve(window.BMap)
        }
        const $script = document.createElement('script')
        document.body.appendChild($script)
        $script.type = 'text/javascript'
        $script.src = '//api.map.baidu.com/api?v=2.0&ak=' + mapConfig.ak + '&callback=' + timestamp
      }
    })
  }
}
