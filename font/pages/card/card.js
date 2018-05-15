var cardsData=require("../../data/cards-data.js")

Page({


  data: {

  },

  onLoad: function (option) {
    this.setData({
      cardList: cardsData.cardList
    });
  },
    oncardtap: function (event) {
    var cardId = event.currentTarget.dataset.cardid;
    //console.log("on card id is" + cardId);
    wx.navigateTo({
      url: "card-detail/card-detail?card_id=" + cardId,
    })
    wx.request({
      url: 'http://127.0.0.1:8000/add_record', //仅为示例，并非真实的接口地址
      data: {
        userid: 1,
        courseid: 5+cardId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
})