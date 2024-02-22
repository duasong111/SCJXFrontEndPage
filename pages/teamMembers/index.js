// pages/teamMembers/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //团队成员展示数据
    teamMembers: "",


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //请求团队成员展示
    this.grtTeamMembers()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  grtTeamMembers: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8000/members/get-members/',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        that.setData({
          teamMembers: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})