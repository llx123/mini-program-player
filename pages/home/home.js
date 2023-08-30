// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['A', 'B', 'C'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    navBarList: [
      {
        text: "每日推荐",
        icon: "icon-tuijian",
      },
      {
        text: "歌单",
        icon: "icon-gedan",
      },
      {
        text: "排行榜",
        icon: "icon-paihangbang",
      },
      {
        text: "电台",
        icon: "icon-diantai",
      },
      {
        text: "直播",
        icon: "icon-zhibo",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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