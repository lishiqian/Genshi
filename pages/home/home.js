// pages/home/home.js
import request from '../../network/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weapon_list: [],
    show_weapon_data: []
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
        weapon_list: res.data,
        show_weapon_data: res.data
      })
    })
  },

  handleSelectChange(options){
    let typeValue = options.detail.typeValue;
    let qulityValue = options.detail.qulityValue;
    
    let show_weapon_data = this.data.weapon_list;

    //按照武器类型筛选数据
    if(typeValue != '全部'){
      show_weapon_data = show_weapon_data.filter(item => {
        return item.weaponType.typeName == typeValue
      });
    }

    //按照品质筛选数据
    if(qulityValue != '全部'){
      show_weapon_data = show_weapon_data.filter(item => {
        return item.quality == qulityValue
      });
    }

    this.setData({
      show_weapon_data: show_weapon_data
    });
    
  }
})