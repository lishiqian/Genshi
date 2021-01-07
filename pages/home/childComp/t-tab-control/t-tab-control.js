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
    isShow: false,
    weapon_type: {
      title: "武器类型",
      list: [{
          text: "全部",
          value: "全部"
        }, 
        {
          text: "双手剑",
          value: "双手剑"
        },
        {
          text: "单手剑",
          value: "单手剑"
        },
        {
          text: "法器",
          value: "法器"
        },
        {
          text: "弓",
          value: "弓"
        },
        {
          text: "长柄武器",
          value: "长柄武器"
        }
      ]
    },
    weapon_qulity: {
      title: "武器品质",
      list: [{
          text: "全部",
          value: 0
        },
        {
          text: "5星",
          value: 5
        },
        {
          text: "4星",
          value: 4
        },
        {
          text: "3星",
          value: 3
        },
        {
          text: "2星",
          value: 2
        },
        {
          text: "1星",
          value: 1
        }
      ]
    },
    select: {
      typeValue: '全部',
      typeIndex: 0,
      qulityValue: '全部',
      qulityIndex: 0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handShowBtnClick() {
      // console.log("--------------")
      this.setData({
        isShow: !this.data.isShow
      })
    },
    handItemClick(options){
      let index = options.currentTarget.dataset.index;
      let type = options.currentTarget.dataset.type;

      let select = this.data.select;
      if(type == 'type'){
        select.typeIndex = index
        select.typeValue = this.data.weapon_type.list[index].value
      }

      if(type == 'qulity'){
        select.qulityIndex = index
        select.qulityValue = this.data.weapon_qulity.list[index].value
      }

      this.setData({
        select: select
      })

      // console.log(select);
      this.triggerEvent("selectChange", select);
    }
  }
})