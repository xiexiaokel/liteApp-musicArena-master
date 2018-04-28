// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameImg: `${imgHost}/images/game.gif`,
    hasTicket: true,//判断用户是否有入场券
    gameStep: '1',//判断游戏处于第几题，根据这个序号放入当前显示的游戏问题
    showTicketModal: false,//是否显示获取入场券弹窗
    showRelive: false,//是否显示复活弹窗
    gameStart: false,//游戏是否开始
    showCount: true,//是否显示倒计时
    stopCount: false,//是否立即停止倒计时
    currGameData: {},//当前显示的题目数据
    gameData: [{
      id: '1', title: '猜歌名',
      answerList: [
        { text: '风往北吹', correct: false, checked: false },
        { text: '白天不懂夜得黑', correct: true, checked: false },
        { text: '最爱你的人是我', correct: false, checked: false },
        { text: '一千零一夜', correct: false, checked: false }
      ]
    },
    {
      id: '2', title: '歌曲原唱是',
      answerList: [
        { text: '罗大佑', correct: false, checked: false },
        { text: '张学友', correct: false, checked: false },
        { text: '刘德华', correct: false, checked: false },
        { text: '谭咏麟', correct: true, checked: false }
      ]
    }
    ],//模拟的游戏题库
  },
  //开始挑战按钮事件
  startFight: function () {
    const { hasTicket, gameStep,gameData } = this.data;
    if (hasTicket) {
      this.setData({
        showTicketModal: false,//不显示获取入场券弹窗
        currGameData:gameData[0],
        gameStart:true
      })
    } else {
      this.setData({
        showTicketModal: true//显示获取入场券弹窗
      })
    }

  },
  //倒计时结束挑战失败事件
  fightFail: function () {
    this.setData({
      showRelive: true
    })
  },
  //获取入场券弹窗关闭执行事件
  closeModal: function () {
    console.log('入场券弹窗关闭')
  },
  //监听倒计时结束触发事件
  /* countDown:function(){
   this.setData({
     showAlert:true,
   })
  }, */

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