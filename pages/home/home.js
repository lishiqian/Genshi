// pages/home/home.js
import request from '../../network/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weapon_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getWeaponData()
  },


  /**
   * 获取武器数据
   */
  _getWeaponData(){
    request({
      url: '/weapon/list'
    }).then(res => {
      this.setData({
        weapon_list: res.data
      })
    })
  }
})