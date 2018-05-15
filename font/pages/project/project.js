var postsData=require("../../data/posts-date.js")

Page({

  data: {
    
  },

  onLoad: function () {
    this.setData({
      postList:postsData.postList
    });
  },
  
  onPostTap:function(event){
    var postId=event.currentTarget.dataset.postid;
    //console.log("postid is"+postId);
    wx.navigateTo({ 
      url: 'project-detail/project-detail?post_id='+postId,
    })
    console.log(11+postId);
    wx.request({
      url: 'http://127.0.0.1:8000/add_record', //仅为示例，并非真实的接口地址
      data: {
        userid: 1,
        courseid: 11+postId,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
})