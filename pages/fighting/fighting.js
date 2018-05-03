// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameImg: `${imgHost}/images/game.gif`,
    hasTicket:1,//入场券储量
    hasRelive:0,//复活卡数量
    gameStep: 0,//判断游戏处于第几题，根据这个序号放入当前显示的游戏问题
    showSuccess:false,//显示挑战成功信息
    showTicketModal: false,//是否显示获取入场券弹窗
    showRelive: false,//是否显示复活弹窗
    gameStart: 0,//游戏是否开始
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
    if (hasTicket>0) {
      this.setData({
        showTicketModal: false,//不显示获取入场券弹窗
        currGameData:gameData[gameStep],
        gameStart:1
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
  //答案选择事件
  itemCheck:function(e){
    const currId = e.currentTarget.dataset.key;
    const {currGameData,hasRelive} = this.data;
    this.setData({
      stopCount:true,//立即停止倒计时
    })
    currGameData.answerList.forEach((item,index)=>{
      if(index == currId){
        item.checked=true;
        if(item.correct){
          this.setData({
            isCorrect:true
          });
          wx.showToast({
            title: '挑战成功',
            icon: 'success'
          });
          setTimeout(()=>{
            this.setData({
              gameStart:2
            })
          },500);
        }else{
          if(hasRelive>0){
            item.checked=true;
            this.setData({
              hasRelive:hasRelive-1,//复活卡减少1
            })
            wx.showToast({
              title: '自动使用复活卡复活,复活卡减1',
              icon: 'none'
            })
            setTimeout(()=>{
              this.setData({
                gameStart: 2
              })
            },1000)
          }
          else{
            this.setData({
              showRelive:true//显示获取复活卡弹窗
            })
          }
        }
      }
      else{
        item.checked=false;
      }
    })
    this.setData({
      currGameData
    })
  },
  //继续挑战事件
  nextFight:function(){
    this.setData({
      stopCount:false,//恢复倒计时
    })
    console.log('继续挑战');
    const {gameStep,gameData,currGameData} = this.data;
    if(gameStep<gameData.length-1){
      this.setData({
        currGameData: gameData[gameStep + 1],
        gameStart: 1,
        gameStep: gameStep + 1
      })
    }
    else{
     wx.showToast({
       title: '已经全部回答完毕',
       icon:'none'
     })
    }
  },
  //返回首页
  goHome:function(){
    wx.navigateBack({
      delta:1
    })
    this.setData({
      gameStart:0,
      gameStep:1,
    })
  },
  //分享方法
  share:function(){
    console.log('分享结果');
    this.setData({
      gameStart: 0,
      gameStep: 1,
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