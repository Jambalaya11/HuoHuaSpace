var postsData = require("../../../data/posts-date.js")
var app = getApp();
Page({


  data: {
    
  },


  onLoad: function (option) {
    var postId=option.post_id;
    this.data.currentPostId=postId;
    var postData=postsData.postList[postId];
    this.setData({
      postData: postData
    })

    var postsCollected=wx.getStorageSync("posts_collected")
    if (postsCollected){
      var postCollected = postsCollected[postId]
      if(postCollected){
        this.setData({
          collected:postCollected
        })
      }
    }
    else{
      var postsCollected={};
      postsCollected[postId]=false;
      wx.setStorageSync("posts_collected",postsCollected)
    }
  },
  
  onCollectionTap:function(event){
    var postsCollected = wx.getStorageSync("posts_collected");
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变未收藏，未收藏变收藏
    postCollected=!postCollected;
    postsCollected[this.data.currentPostId]=postCollected;
    //更新文章是否的缓存值
    wx.setStorageSync("posts_collected", postsCollected);
    //更新数据绑定变量，实现切换图片
      this.setData({
        collected: postCollected
      })
      wx.showToast({
        title: postCollected?'收藏成功':"取消收藏",
        icon: 'none',
        duration: 1000
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