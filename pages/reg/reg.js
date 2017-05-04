// pages/reg/reg.js
var acc="";

Page({
  data: {
    item: {
      showError: false,
      errorInfo: "错误",
      isRight: ""
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getValue: function (e) {
    console.log("e", e.detail.value)
    if (/^\d{11}$/.test(e.detail.value)) {
      wx.request({
        url:"http://localhost:3000/users/find",
        data:{
          userName:e.detail.value
        },
        success: function(res) {
          console.log("res",res)
          if(res.data.length>0){
             this.setData({
                item:{
                  showError: true,
                  errorInfo:"手机号已经注册",
                  isRight: false
                }
              })

          }else{
              this.setData({
                  item:{
                    showError: false,
                    errorInfo:"ok",
                    isRight: true
                  }
               })
            acc=e.detail.value
          }      
        }.bind(this)

      })

    } else {
      var item = this.data.item
      item.showError = true;
      item.errorInfo = "手机号输入错误"
      item.isRight = false
      this.setData({
        item: item
      })

    }

    console.log("showError",this.data.item)
  },
  bindBut: function () {
    if (this.data.item.isRight) {
      wx.navigateTo({
        url: './check?reg='+acc
      })
    }

  }
})