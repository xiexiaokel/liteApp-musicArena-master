// components/pictureList/pictureList.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Array
    },
    hasBtn:{
      type:Boolean
    },
    records:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goodsList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getPrize:function(){
      this.triggerEvent('getPrize');
    },
    addAddress:function(){
      this.triggerEvent('addAddress');
    }
  }
})
