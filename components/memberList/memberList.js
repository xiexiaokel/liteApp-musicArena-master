// components/memberList/memberList.js
const app = getApp();
const imgHost = app.globalData.imgHost;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderBy:{
      type:String,
    },
    memberList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    memberList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
