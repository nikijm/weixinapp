// pages/check/check.js
var checkValue="";
var reg="";
Page({
  data:{
      item: {
      showError: false,
      errorInfo: "错误",
      isRight: ""
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("options",options)
        reg=options.reg
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getcheckValue:function(e){
    console.log(e.detail.value)
    if(/^\d{6}$/.test(e.detail.value)){
      this.setData({
        item:{
          isRight: true
        }
      })
checkValue=e.detail.value
    }else{
      this.setData({
        item:{
        showError: true,
        errorInfo: "验证码错误",
        isRight: false
        }
      })
    }

  },
  bindCheck:function(){
    if(this.data.item.isRight){
      wx.navigateTo({
        url: './setPWD?reg='+reg
      })
    }
   
  }
})