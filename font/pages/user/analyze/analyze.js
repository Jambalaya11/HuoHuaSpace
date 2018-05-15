const app = getApp();

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'Web学习小程序行为分析',
      path: '/pages/user/analyze/analyze',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    /*charts: [{
      id: 'bar',
      name: '柱状图'
    }, {
      id: 'scatter',
      name: '散点图'
    }, {
      id: 'pie',
      name: '饼图'
    }, {
      id: 'line',
      name: '折线图'
    }, {
      id: 'funnel',
      name: '漏斗图'
    }, {
      id: 'gauge',
      name: '仪表盘'
    }, {
      id: 'k',
      name: 'K 线图'
    }, {
      id: 'radar',
      name: '雷达图'
    }, {
      id: 'heatmap',
      name: '热力图'
    }, {
      id: 'tree',
      name: '树图'
    }, {
      id: 'treemap',
      name: '矩形树图'
    }, {
      id: 'sunburst',
      name: '旭日图'
    }, {
      id: 'map',
      name: '地图'
    }, {
      id: 'graph',
      name: '关系图'
    }, {
      id: 'boxplot',
      name: '箱型图'
    }, {
      id: 'parallel',
      name: '平行坐标图'
    }, {
      id: 'sankey',
      name: '桑基图'
    }, {
      id: 'themeRiver',
      name: '主题河流图'
    }],*/
    chartsWithoutImg: [
      {
      id: 'mybehavior',
      name: '我的学习行为'
      }, {
      id: 'userbehavior',
      name: '用户学习行为'
      }, ]
  },

  onReady() {
  },

  open: function (e) {
    wx.navigateTo({
      url: e.target.dataset.chart.id + '/index'
    });
    if (e.target.dataset.chart.id == 'mybehavior'){
      var userid = 1
    }
    else{
      var userid = 2
    }
    wx.request({
      url: 'http://127.0.0.1:8000/record_return', //仅为示例，并非真实的接口地址
      data: {
        userid: userid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
});
