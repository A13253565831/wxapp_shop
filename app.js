// app.js
//  var con = require('data.js');
var oldUrl = require("utils/data02.js");
App({
  d: {
    // hostUrl: 'https://wxplus.paoyeba.com/index.php',
    // hostImg: 'http://img.ynjmzb.net',
    // hostVideo: 'http://zhubaotong-file.oss-cn-beijing.aliyuncs.com',
    userId: 1,
    fansid: 0,
    appId:"",
    appKey:"",
    ceshiUrl:'https://wxplus.paoyeba.com/index.php',
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    //login
    this.getUserInfo();
    this.getAddress()
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (o) {
          // console.log(o);
          wx.getUserInfo({
            success: function (res) {
              wx.request({
                url: oldUrl.index_slogin,
                method: "POST",
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  code: o.code,
                  wxappid: oldUrl.wyy_user_wxappid,
                  nickname: res.userInfo.nickName,
                  pic: res.userInfo.avatarUrl
                },
                success: function (res) {
                  console.log(res);
                  wx.setStorage({
                    key: 'fansid',
                    data: res.data.fansid,
                  });
                  that.globalData.fansid = res.data.fansid;
                  console.log(res.data.fansid);
                  // console.log(222222,res.data.openid, res);
                  wx.setStorage({
                    key: 'openid',
                    data: res.data.openid,
                  })
                }
              })

              that.globalData.userInfo = res.userInfo
              // console.log(33333333,res.userInfo);
            }
          })
        }
      });
    }
  },
  getAddress: function () {
    var that = this;
    wx.chooseAddress({
      success: function (r) {
        console.log(r);
      }
    })

  },

  // getUserSessionKey:function(code){
  //   //用户的订单状态
  //   var that = this;
  //   wx.request({
  //     url: that.d.ceshiUrl + '/Api/Login/getsessionkey',
  //     method:'post',
  //     data: {
  //       code: code
  //     },
  //     header: {
  //       'Content-Type':  'application/x-www-form-urlencoded'
  //     },
  //     success: function (res) {
  //       //--init data        
  //       console.log(666, res);
  //       var data = res.data;
  //       if(data.status==0){
  //         wx.showToast({
  //           title: data.err,
  //           duration: 2000
  //         });
  //         return false;
  //       }
  //       that.globalData.userInfo['sessionId'] = data.session_key;
  //       that.globalData.userInfo['openid'] = data.openid;
  //       that.onLoginUser();
  //     },
  //     fail:function(e){
  //       wx.showToast({
  //         title: '网络异常！err:getsessionkeys',
  //         duration: 2000
  //       });
  //     },
  //   });
  // },
  // onLoginUser:function(code){
    
  //   var that = this;
  //   var user = that.globalData.userInfo;
  //   wx.request({
  //     url: con.index_slogin,
  //     method:'post',
  //     data: {
  //       // SessionId: user.sessionId,
  //       // gender:user.gender,
  //       // NickName: user.nickName,
  //       // HeadUrl: user.avatarUrl,
  //       // openid:user.openid
  //       code: code,
  //       wxappid: con.wyy_user_wxappid,
  //       nickname: user.nickName,
  //       pic: user.avatarUrl

  //     },
  //     header: {
  //       'Content-Type':  'application/x-www-form-urlencoded'
  //     },
  //     success: function (res) {
  //       //--init data        
  //       var data = res.data.arr;
  //       console.log(777,res, data);
  //       var status = res.data.status;
  //       console.log(data, res);
  //       if(status!=1){
  //         wx.showToast({
  //           title: res.data.err,
  //           duration: 3000
  //         });
  //         return false;
  //       }
  //       that.globalData.userInfo['id'] = data.id;
  //       that.globalData.userInfo['NickName'] = data.nickName;
  //       that.globalData.userInfo['HeadUrl'] = data.HeadUrl;
  //       var userId = data.ID;
  //       console.log(8888, userId);
  //       if (!userId){
  //         wx.showToast({
  //           title: '登录失败！',
  //           duration: 3000
  //         });
  //         return false;
  //       }
  //       that.d.userId = userId;
  //       console.log(userId, 9999);
  //     },
  //     fail:function(e){
  //       wx.showToast({
  //         title: '网络异常！err:authlogin',
  //         duration: 2000
  //       });
  //     },
  //   });
  // },
  getOrBindTelPhone:function(returnUrl){
    var user = this.globalData.userInfo;
    if(!user.tel){
      wx.navigateTo({
        url: 'pages/binding/binding'
      });
    }
  },

 globalData:{
    userInfo:null,
    fansid:""
  },

  onPullDownRefresh: function (){
    wx.stopPullDownRefresh();
  }

});





