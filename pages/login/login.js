// pages/login/login.js
Page({
  data:{
    item: {
      showError: false,
      errorInfo: "错误",
      isRight: false
    },
      userName:"",
      PwdValue:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  bindAcc:function(e){
    this.setData({
        userName:e.detail.value
    })
  },
  bindCheckPwd:function(e){
    
    this.setData({
        PwdValue:e.detail.value
    }) 
  },
  bindLogin:function(){
    wx.request({
        url:"http://localhost:3000/users/find",
        data:{
          userName:this.data.userName,
          pwd:this.data.PwdValue
        },
        success:function(res){
           console.log(res)
          if(res.data.length>0){
             wx.navigateTo({
              url:"../index/index"
          })
          }
        }.bind(this)
        
    })
  },
  bindReg:function(){
     console.log(1)
     wx.navigateTo({
      url:'../reg/reg'
    })
    
  }
 
})