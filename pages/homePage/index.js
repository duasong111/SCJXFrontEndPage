// pages/homePage/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"Hey,早上好啊",
    phrase:"一日之计在于晨，一年之计在于春",
    // 展示当前页码
    currentData : 0,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },


  // 用来去实现切换页面
   //获取当前滑块的index
   bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  // 人员详情的页面的跳转
  personnelDetails:function(){
console.log("点击了人员详情")
  },

  //展示获奖展示页面
  awardPresentation:function(){
    console.log("点击了获奖展示")
  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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