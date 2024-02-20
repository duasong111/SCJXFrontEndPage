// pages/homePage/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 展示当前页码
    currentData: 0,
    //获取比赛通知
    getCompetitionNotifications: "",
    //获取bing图片展示
    images: {},
    query: {},
    imagsult: {},
    index: -1,
    //当前天数用于改变bing的图片
    currentBingDays:0,

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取比赛通知
    // this.getGameNotices()
    //发送请求获取壁纸
    this.getimages();
  },

  //对图片的格式进行调整
  imageLoad: function (e) {
    var $width = e.detail.width,
      $height = e.detail.height,
      ratio = $width / $height;
    var viewWidth = 718,
      viewHeight = 718 / ratio;
    var image = this.data.images;
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight,
    }
    this.setData({
      images: image
    })
  },
  //发送请求获取壁纸
  getimages() {
    var currentBingDays = this.data.currentBingDays
    var url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${currentBingDays}&n=3&mkt=zh-CN`;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log("显示输出的结果",res.data.images)
        this.setData({
          imagsult: res.data.images //后边是数组名称
        })
      },
      fail: () => {
        wx.showToast({
          title: '请求超时，请检查网络或与管理员联系',
          icon: 'fail',
          duration: 2000//持续的时间
     
        })
      }
    })
  },
  //点击后生成任意一张图片
  previousPages:function(){
    var that = this
    var currentBingDays = this.data.currentBingDays
    var randomNum = Math.floor(Math.random() * 7); 
    this.setData({
      currentBingDays: randomNum
    });

    this.getimages()
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