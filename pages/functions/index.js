Page({
  data: {
      navLeftItems:"",
      navRightItems: "",
      curNav: 1,
      curIndex: 0
  },
  onLoad: function() {
      // 加载的使用进行网络访问，把需要的数据设置到data数据对象
      var that = this        
      wx.request({
          url: 'http://127.0.0.1:8000/inform/InformProject/',
          method: 'GET',
          data: {},
          header: {
              'Accept': 'application/json'
          },
          success: function(res) {

              console.log("输出选择的数据", res.data.data.navLeftItems)
              that.setData({
                  navLeftItems: res.data.data.navLeftItems,
                  navRightItems: res.data.data.navRightItems
              })
          }
      })
  },

  //事件处理函数--就是点击之后相对应的去进行展示
  switchRightTab: function(e) {
      let id = e.target.dataset.id,  
      index = parseInt(e.target.dataset.index);
      this.setData({
          curNav: id,
          curIndex: index
      })
  }

})