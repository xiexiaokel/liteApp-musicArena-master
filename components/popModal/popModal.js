/* 组件说明 */

/* closeModal为暴露给外部的弹窗关闭后执行的方法，监听此方法可执行自己自定义的操作 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal:{
      type:Boolean
    },
    height:{
      type:String,
    },
    bgColor:{
      type:String
    },
    title:{
      type:String,
    },
    bgTitle:{
      type:String
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    showModal:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeModal:function(){
      this.setData({
        showModal:false
      })
      this.triggerEvent('closeModal');
    }
  }
})
