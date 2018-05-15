var cardsData = require("../../../data/cards-data.js")
Page({


  data: {
    
  },


  onLoad: function (option) {
    var cardId = option.card_id;
    this.data.currentCardId = cardId;
    var cardData = cardsData.cardList[cardId];
    this.setData({
      cardData: cardData
    })
    //console.log(cardData);
    var cardsLiked = wx.getStorageSync("cards_liked")
    if (cardsLiked) {
      var cardLiked = cardsLiked[cardId]
      if(cardLiked){
        this.setData({
          liked: cardLiked
        })
      }

    }
    else {
      var cardsLiked = {};
      cardsLiked[cardId] = false;
      wx.setStorageSync("cards_liked", cardsLiked);
    }
  },

  onLikeTap: function (event) {
    var cardsLiked = wx.getStorageSync("cards_liked");
    var cardLiked = cardsLiked[this.data.currentCardId];
    //收藏变未收藏，未收藏变收藏
    cardLiked = !cardLiked;
    cardsLiked[this.data.currentCardId] = cardLiked;
    //更新文章是否的缓存值
    wx.setStorageSync("cards_liked", cardsLiked);
    //更新数据绑定变量，实现切换图片
    this.setData({
      liked: cardLiked
    })
    wx.showToast({
      title: cardLiked ? '收藏成功' : "取消收藏",
      icon: 'none',
      duration: 1000
    })
  },

  oncardtap:function(event){
    var cardid = event.currentTarget.dataset.cardid;
    console.log(cardid);
    wx.request({
      url: 'http://127.0.0.1:8000/keyword_search', //仅为示例，并非真实的接口地址
      data: {
        keyword: JSON.stringify(cardid)
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })},
  


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