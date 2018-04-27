//index.js
//获取应用实例
const app = getApp()
const imgHost = app.globalData.imgHost;

Page({
  data: {
    headPic:`${imgHost}/images/head_pic.png`,//头像
    onlinePic:`${imgHost}/images/online.png`,//客服图标
    complaintPic:`${imgHost}/images/complaint.png`,
    titlePic:`${imgHost}/images/title.png`,//音乐擂台赛图片
    shopIcon:`${imgHost}/images/shop_icon.png`,//商店图标
    rankIcon: `${imgHost}/images/rank_icon.png`,//排行榜图标
    moreIcon: `${imgHost}/images/more_icon.png`,//更多图标
    userLevel:'1',//用户等级
  },
  onLoad: function () {

  },
  // 页面跳转事件
  pageJump:function(e){
    const currKey = e.currentTarget.dataset.key;

    switch (currKey){
      case 'shop':
        wx.navigateTo({
          url: '../shop/shop',
        });
        break;
      case 'rank':
        wx.navigateTo({
          url: '../rank/rank',
        });
        break;
      case 'more':
        wx.navigateTo({
          url: '../more/more',
        });
        break;
      default:
        break;
    }
  }
})
