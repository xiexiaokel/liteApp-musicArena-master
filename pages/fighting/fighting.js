// pages/fighting/fighting.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAlert:false,//是否显示alert弹窗
    showModal:false,//是否显示模态框弹窗
    showCount:true,//是否显示倒计时
    stopCount:false,//是否立即停止倒计时
    alertIcon:`${imgHost}/images/fail_icon.png`,
    successImg: `${imgHost}/images/success_icon.png`,
    successBtn: `${imgHost}/images/prize_btn.png`,
    processData: [{
      num: 1,
      checked: true
    }, {
      num: 2,
      checked: false
    }, {
      num: 3,
      checked: false
    }, {
      num: 4,
      checked: false
    }, {
      num: 5,
      checked: false
    }, {
      num: 6,
      checked: false
    }, {
      num: 7,
      checked: false
    }, {
      num: 8,
      checked: false
    }, {
      num: 9,
      checked: false
    }, {
      num: 10,
      checked: false
    }, {
      num: 11,
      checked: false
    }, {
      num: 12,
      checked: false
    }],
    answerStep: 1,//答题进度
    //模拟题库数据
    gameData: [
      {
        id: '1',
        title: '世界无烟日是那一天？',
        answerList: [
          { text: '2月28日', correct: false, checked: false },
          { text: '3月28日', correct: false, checked: false },
          { text: '4月28日', correct: true, checked: false },
          { text: '5月28日', correct: false, checked: false }
        ]

      },
      {
        id: '2',
        title: '三八妇女节是哪天?',
        answerList: [
          { text: '2月28日', correct: true, checked: false },
          { text: '3月28日', correct: false, checked: false },
          { text: '4月28日', correct: false, checked: false },
          { text: '5月28日', correct: false, checked: false }
        ]

      },
      {
        id: '3',
        title: '六一儿童节是哪天?',
        answerList: [
          { text: '2月28日', correct: false, checked: false },
          { text: '3月28日', correct: false, checked: false },
          { text: '4月28日', correct: false, checked: false },
          { text: '5月28日', correct: true, checked: false }
        ]

      }
    ],
    currGameData: {},//当前显示的题目数据
  },
  //监听倒计时结束触发事件
  countDown:function(){
   this.setData({
     showAlert:true,
   })
  },
  // 点击事件
  checkItem: function (e) {
    const currKey = e.currentTarget.dataset.key; //当前选中的答案
    const { currGameData, answerStep } = this.data;
    currGameData.answerList.forEach((item, index) => {
      if (index == currKey) {
        item.checked = true;
        if (item.correct) {
          console.log('回答正确');
          this.setData({
            stopCount:true
          })
          setTimeout(() => {
            this.refreshGameData();
          }, 1000);
        }
        else {
          console.log('回答错误答题结束');
          this.setData({
            showAlert:true,
            stopCount:true
          })
        }
      }
      else {
        item.checked = false;
      }
    })
    this.setData({
      currGameData,
      answerStep: answerStep + 1,
    })

  },
  //进入下一题
  refreshGameData() {
    const { answerStep, gameData, processData } = this.data;
    if(answerStep<=3){
      this.setData({
        currGameData: gameData[answerStep - 1],
        stopCount:false,
      })
      processData.forEach(item => {
        item.num == answerStep ? item.checked = true : item.checked = false;
      })
      this.setData({
        processData,
      })
    }
    else{
      console.log('恭喜您，答题成功可以领奖');
      this.setData({
        showModal:true
      })
    }
    
  },
  //失败跳转到首页
  goHome:function(){
    wx.navigateBack({
      delta:1
    })
  },
  getPrize: function () {
    wx.navigateTo({
      url: '../prize/prize',
    })
  },
  myCustomEvent:function(){
    console.log('游戏开始了开始了')
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
    const { gameData, answerStep } = this.data;
    this.setData({
      currGameData: gameData[answerStep - 1]
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    const { fightResult } = this.data;
    if (fightResult) {
      this.setData({
        resultImg: `${imgHost}/images/success_icon.png`
      })
    } else {
      this.setData({
        resultImg: `${imgHost}/images/fail_icon.png`
      })
    }
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