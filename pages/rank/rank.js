// pages/rank/rank.js
const app =getApp();
const imgHost = app.globalData.imgHost;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabTitleList: [//tab分类
      { key: "friend", text: '好友排行', checked: true },
      { key: "season", text: '赛季排行', checked: false }
    ],
    tabShow: 0,//控制首页tab卡默认显示内容
    // 排行榜数据
    memberList: [{
      nickName: '你大爷',
      picture: `${imgHost}/images/head_pic.png`,
      level:'1',
      successTime: '10',
      seasonTime: '66',
    },
    {
      nickName: '你大妈',
      picture: `${imgHost}/images/head_pic.png`,
      level: '3',
      successTime: '8',
      seasonTime: '49',
    },
    {
      nickName: '你大姨',
      picture: `${imgHost}/images/head_pic.png`,
      level: '5',
      successTime: '5',
      seasonTime: '31',
    },
    {
      nickName: '你大舅',
      picture: `${imgHost}/images/head_pic.png`,
      level: '2',
      successTime: '2',
      seasonTime: '16',
    },
    
    ]
  },
  tabCheck: function (e) {
    switch (e.detail.key) {
      case 'friend':
        console.log('好友排行');
        this.setData({
          tabShow: 0,
        })
        break;
      case 'season':
        console.log('赛季排行');
        this.setData({
          tabShow: 1,
        })
        break;
      default:
        break;
    }
  },

  //按钮点击自定义事件
  myEvent:function(){
    console.log('按钮被点击了')
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