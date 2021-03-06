const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'',
    content:'',
    loading:false,
    is_disabled:'',
    btnText:'提交'
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  emailChange:function(e){
    this.setData({
      email: e.detail.detail.value
    })
  },

  contentChange:function(e){
    this.setData({
      content: e.detail.detail.value
    })
  },

  handleClick:function(e){
    //const logger = wx.getLogManager()
    var _this = this;
    _this.setData({
      loading:true,
      is_disabled:'disabled',
      btnText:'正在提交'
    })
    if (_this.data.email.length <= 0 || _this.data.content.length<=0){
      app.common.toast("请填写必要内容", app.warn.warning.toastError);
      _this.setData({
        loading: false,
        is_disabled: '',
        btnText: '提交'
      })
      return false;
    }
    var data = { email: _this.data.email, content: _this.data.content, openid: app.globalData.openId};
    var header = { 'content-type': 'application/json' };
    app.http.postHttp(app.http.url.feedback, data, header).then(function (res) {
      app.common.toast(res.info, 2000);
      _this.setData({
        loading: false,
        is_disabled: '',
        btnText: '提交'
      })
    })
  }
})