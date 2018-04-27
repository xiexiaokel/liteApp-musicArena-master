// components/tabBar/tabBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabTitleList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemCheck: function (e) {
      const { tabTitleList } = this.data;
      const currentKey = e.currentTarget.dataset.key;
      tabTitleList.forEach(item => {
        item.key == currentKey ? item.checked = true : item.checked = false;
        this.setData({
          tabTitleList
        });
      })
      const tabDetail = {
        key: currentKey
      }
      this.triggerEvent('itemCheck', tabDetail);
    }
  }
})
