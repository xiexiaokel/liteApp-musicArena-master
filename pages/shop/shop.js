// pages/shop/shop.js
const app =getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { id: '1', picture: `${imgHost}/images/tiket.png` },
      { id: '2', picture: `${imgHost}/images/tiket.png` },
      { id: '3', picture: `${imgHost}/images/tiket.png` }
    ]
  },
  //图片点击事件
  pageJump:function(e){
    const key = e.currentTarget.dataset.key;
    wx.navigateTo({
      url: '../shop/shop',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})