// pages/home/childComp/t-tab-control/t-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handShowBtnClick(){
      console.log("--------------")
      this.setData({
        isShow: !this.data.isShow
      })
    }
  }
})
