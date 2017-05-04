// pages/setPWD/setPWD.js
var pwd="";
var acc="";
var checkPwd="";
Page({
  data:{
      item: {
      showError: false,
      errorInfo: "错误",
      isRight: false
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("options",options)
    acc=options.reg
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
  getPwd:function(e){
    console.log(e)
    if(/^\w{8,}$/.test(e.detail.value)){
      pwd=e.detail.value
      console.log(pwd)
    }else{
      this.setData({
        item:{
        showError: true,
        errorInfo: "密码格式不对"
        }
      })
    }

  },
  checkPwd:function(e){
if(e.detail.value==pwd){
  this.setData({
        item:{
        isRight: true
        }
      })
      checkPwd=e.detail.value
}else{
  this.setData({
        item:{
        showError: true,
        errorInfo: "密码不匹配",
        isRight: false
        }
      })
}

  },
  addValue:function(){
     wx.request({
    url:"http://localhost:3000/users/add",
    data:{
          userName:acc,
          pwd:checkPwd
        },
    success:function(){
      wx.navigateTo({
        url: '../index/index'
      })
    }
     })
    
  }
 
})