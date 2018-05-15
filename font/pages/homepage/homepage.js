Page({


  data: {
    
  },

  onLoad: function (options) {
    
    
  },
  oncardtap: function (event) {
    var courseid = event.currentTarget.dataset.courseid;
    //console.log("on card id is" + cardId);
    console.log(courseid);
    if(courseid == 1){
      wx.navigateTo({
        url: '/pages/homepage/html/html'
      })
    }
    else if(courseid == 2){
      wx.navigateTo({
        url: '/pages/homepage/css/css'
      })
    }
    else if(courseid == 3){
      wx.navigateTo({
        url: '/pages/homepage/Javascript/Javascript'
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/homepage/php/php'
      })
    }
    wx.request({
      url: 'http://127.0.0.1:8000/add_record', //仅为示例，并非真实的接口地址
      data: {
        userid: 1,
        courseid: courseid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  onMoreTap_card: function(event){
    wx.switchTab({
      url: '../card/card',   //跳转至词条页面
    })
  },
  onMoreTap_project:function(event) {
    wx.switchTab({
      url: '../project/project',   //跳转至项目页面
    })
  },


  onReady: function () {
    
  },


  onShow: function () {
    
  },


  onHide: function () {
    
  },


  onUnload: function () {
    
  },


  onPullDownRefresh: function () {
    
  },


  onReachBottom: function () {
    
  },


  onShareAppMessage: function () {
    
  }
})