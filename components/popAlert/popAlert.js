// components/popModal/popModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showAlert: {
      type: Boolean
    },
    height:{
      type:String
    },
    bgColor:{
      type:String
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeModal: function () {
      this.setData({
        showAlert: false
      })
      this.triggerEvent('closeAlert');
    }
  }
})
