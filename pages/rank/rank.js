// pages/rank/rank.js
const app =getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitleList: [//tab分类
      { key: "honor", text: '荣誉榜', checked: true },
      { key: "will", text: '毅力榜', checked: false }
    ],
    tabShow: 0,//控制首页tab卡默认显示内容
    // 排行榜数据
    memberList: [{
      nickName: '你大爷',
      picture: `${imgHost}/images/head_pic.png`,
      successTime: '10',
      fightTime: '66',
    },
    {
      nickName: '你大妈',
      picture: `${imgHost}/images/head_pic.png`,
      successTime: '8',
      fightTime: '49',
    },
    {
      nickName: '你大姨',
      picture: `${imgHost}/images/head_pic.png`,
      successTime: '5',
      fightTime: '31',
    },
    {
      nickName: '你大舅',
      picture: `${imgHost}/images/head_pic.png`,
      successTime: '2',
      fightTime: '16',
    },
    
    ]
  },
  tabCheck: function (e) {
    switch (e.detail.key) {
      case 'honor':
        console.log('荣誉榜');
        this.setData({
          tabShow: 0,
        })
        break;
      case 'will':
        console.log('毅力榜');
        this.setData({
          tabShow: 1,
        })
        break;
      default:
        break;
    }
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