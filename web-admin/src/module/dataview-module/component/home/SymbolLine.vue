<template>
  <datav-panel title="旅客交通分析" :animate-index="2">
    <chart class="datav-chart" :options="option"/>
  </datav-panel>
</template>

<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  var pathSymbols = {
    train: 'image://data:image/png;base64,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',
    boat: 'image://data:image/png;base64,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',
    car: 'image://data:image/png;base64,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',
    other: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAHYElEQVRogb2aXWwc1RXHfzM7++G1d7OxWYLt+IPgxJCAA4mDQhKUBlQgiVoVJRBRHkDlhQr1gZdWlaiKaFWpHy+o4r20aklTJZWqQIAiIgQ4QJKGGJKYOPgjiZ0Qb7y2116v92v6cO/szuzuzOzGcf7Saufee/ae/1yfe+4551p5rU9hkQgAHfKzAlgG1AM+OZ4G5oBp4DvgIjACpBajVFvE79YCPcAqQHWQrZOf24C7gC1AHhgC+oGzQPZGCNQCL9ALPASEa1Vmggp0yc/3gT7gBJCpdoJaiK8GdgKNJf0K0ALcKb+bgBBWU0kA14FxYFh+63I8BDwObAKOAIPVkFGqsHHNNLEZYdnXQ+2rP4Mwk+Py2YzjwHu4mI/bijcAP0aspIE6YAewAfDUQNaMMLANYXL/A44C83JsE7AS+DswazeBZ8cLtiu+HHgeuN3Utw54FujEeUNWCxVoBR5AeJ0J2R8C7gbOY+N97JSHgeco2rMK7Ab2AsGbQLgUQTn3bhOnRsmhohlWIu4FngEipvY+hDdZavRKXV7Zjkgu3lLBSsSfAJpN43uANTefoy3WSJ0Gt2aEN7OglPhqYKOpvQvoXgp2LuiWug1sQHArwExcw/pm67C+xK3GRuBeU3sXJi9odoebKG7GOqxvXBF+zzK8niAKCpl8klR2ylH+trp7CHqjpLKTTCTPopN3U7ELERokEV5uE3DMTFxDxBAGHsHBeyiKh40rXmRd01OEfK0oiofZ9DjD0x/SN/5H0rmERd6j+Nja+ku2t/260Hd64i+8PfRTcvkFJ+J1ksth2d6COKCyBvG1CN8JIrrbYDeTR/XzWMef6L3jJUt/xN/JytAWmhs28u/BZwurr6kBnuo+SFfEur/WR58nqEU5eH4fmXzSifwDwMcIPx+SXPsNG+8xCfbicLg0BVaXkTajK7KT9tDDsqWwtfUXZaQNrF6+m52r3kBTA07EVayuuMfoDCBCU6HJ+hJliAbvdRq2yET8nTzc+oqj7ProczTXux4RPZIbCK4BFevx3YJLwORT692UoKl+AILeKIriHs401bkeE2GK8ZIKdKpAu0ngTrcZsrrjZgIgr4vAbj4boxi92mM2c9VVBiu3dhWRmRhowQWTqQuuGuKpbwGYWhjl8yuvO8peThzj0swnrnOWcIuqiMDfQBMu+G7uSwYmD9mPJ/v5dup9AHQ9x0eXXuVC/B1b2UODz7CQKw3JK8LMrdGz4wXlUYr+/BEqBDRm5PUsF6aOkNfThH3tpHMJUrk4C7kZvor9jbeHXiSZuVaQz+kLnJs8SNjfxh319xf6R6Y/5F/n95BIj1VDGoRtfyqfFeW1PuVV0+Ar1JAcBL1RdD0P6KiKxpyJcCW0hjazzNdOMhtjLPE5mfxctaoAcsBvjecbzfIBSGYm3IVMGEt8xhifLUZlARqwAPhlO404Zl3REd5OW2gbK+rvQ1W8TCTPMD57gvPx/5TJBrQIa5v20drwIAEtQiobZ2z2OMPT/yWeGqqWa9r8rCHyOoN4ohri9zTtZe+aA5a+uxufBODoxV/RN/4H8rqoNAS9UZ7uPkRbaKtF/v7bf8LUwghvndtFbH6gGuLmACipIsoGBq7jgpCvhR91vWk7vqP9N7Q0GCehwubml8tIG4j4O3m04/doalV/ZDO3SRWImTrG3X7dFtrmqqgjvB0Ar1pHZ/h7jrIrGzYT1Fy9cCm3CRVRyzMw4vZrvyfkJlIImnyeBhp8zY6yQW+UgBZxlJEYNj1fVBFkjYh+jPICjQXGce4EXdfld56cnnaWJU9ez7lNOUNxxfPAqIqoWxhbW0dUmGyRSLtaU8Gfp3JTriFCPDVUjVvtpxj0DAPzqmnAwHGEs6+Iy7PHuDp3ylZDMjPBYFwkLHk9y5nYPx0Znb1+gFTOMeXLSU4GTkMxnD1L0d3MIMpiFZHOzbJ/4AeMTB8tG7uW/Jr9Az9kJn2p0Nc/8Vc+GP15wT2a8cWV1/nk8u/czO8URfNNSK6WoudDiOImCF/+Mxx8ut8TZnlgFU2Bbjyqj9j8ANMLo7bHfmOgi+WBLsK+VuazcWLz54jNn3MiDKKe+GeKdcX3kMmymbgGvITIpkGUBva4zbzEOAR8JZ/jwBvIKq45t8wC5vjza+DkrWBng5MUSYOonRdsqjQpHsRq30eAb5aMmj2+kboNnEJUbguolM0fAYxcKgccBNzTnpuHQanT8GxXsVoCUJl4BvgHMGVqv8WtMZuTwH6Kd0FTkkuZS7Krn8wAbyI2BIjT6jBiJRyrNzeIpJz7MMVTPC45VDzJnW4kUsAZRHZtBCjXgC8RYfAKFn8rkUPsqQOIcMPAFSfSUP3l1U7KK7dh4EFEscY98rIigTitv6hA7gTwLi6XV9UQN1DLdWEY63XhDPbXhQYmqeG6sJaccxARSfYiqqbGKuuIP3PV6XoJEizxBS1y4mOIoGctsB6x0rXaeh6x8qe5RVfiBrIIG+1HxDMdiFJeFBEyVPonhDjiOvAiMEox/rgh/B/fnCzGyas2WwAAAABJRU5ErkJggg==',
    plane: 'image://data:image/png;base64,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'
  }

@Component
  export default class SymbolLine extends Vue {
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value
            }
        },
        xAxis: {
            data: [ '飞机', '高铁', '轮船', '汽车', '其他' ],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        grid: {
          bottom: 25,
          right: 18
        },
      yAxis: {
        type: 'value',
        name: '单位：万元',
        nameTextStyle: {
          color: '#fff'
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        axisLabel: {
          color: '#fff'
        },
        axisTick: {
          show: false
        }
      },
        color: ['#e54035'],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#4FE0FE' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0CCCF8' // 100% 处的颜色
                    }]
                  }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [123, 60, 25, 18, 12],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            barCategoryGap: '10%',
            symbolPosition: 'end',
            symbolSize: 40,
            symbolOffset: [0, '-120%'],
            data: [{
                value: 123,
                symbol: pathSymbols.plane
            }, {
                value: 60,
                symbol: pathSymbols.train
            }, {
                value: 25,
                symbol: pathSymbols.boat
            }, {
                value: 18,
                symbol: pathSymbols.car
            }, {
                value: 12,
                symbol: pathSymbols.other
            }]
        }]
    }
  }
</script>
