var app = getApp();
var bon = require('../../utils/api.js');
// var con = require('../../data.js');
// pages/order/downline.js
Page({
  data:{
    itemData:{},
    userId:0,
    paytype:'weixin',//0线下1微信
    remark:'',
    cartId:0,
    addrId:0,//收货地址//测试--
    btnDisabled:false,
    productData:[],
    address:{},
    total:0,
    vprice:0,
    vid:0,
    addemt:1,
    vou:[],
    goodsArr: [],
    default_id: 0,
    table:[],
    tableIndex:0,
    person:[],
    personIndex:0,
    sortIndex:0,
    status: 1,
    navbar: ['外卖', '店内用餐'],
    currentTab: 0 
  },
  onLoad:function(options){
    var uid = bon.wxappid;
    var oId = options.cartId;
    var d = oId.split(",")
    // console.log(222, d);
    this.setData({
      cartId: d,
      userId: uid
    });
    // this.loadProductDetail();
    this.chooseTable();
    this.sum();
    this.loadDetail();
  },
  // loadProductDetail:function(){
  //   var that = this;
       
  //     wx.request({
  //       url: con.Index_getFansRecipients,
  //       data: {
  //         wxappid: con.wyy_user_wxappid,
  //         fansid: app.globalData.fansid,
  //       },
  //       method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //       header: {// 设置请求的 header
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       },

  //       success: function (res) {
  //         console.log(res);
  //         var address = res.data.default_info;
  //         var id = res.data.default_id;
  //         console.log(address);
  //         that.setData({
  //           address: address,
  //           default_id: id,
  //         })
  //       },
  //       fail: function () {
  //         // fail
  //         wx.showToast({
  //           title: '网络异常！',
  //           duration: 2000
  //         });
  //       }
  //     })
  // },

  
  chooseTable: function(){
    var that = this;
    wx.request({
      url: bon.gettablebycid,
      method: "get",
      data:{
        wxappid: bon.wxappid,
        cid: bon.cid
      },
      header:{
        "Content-Type": "application/json"
      },
      success:function(res){
        var len = res.data.info
        for(var i in len){
          // console.log(len[i].table_name);
          that.data.table.push(len[i].table_name);
          that.data.person.push(len[i].table_renshu);
        }
        console.log(that.data.table);
        that.setData({
          table: that.data.table,
          person: that.data.person
        })
      }
    })
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },  
  loadDetail: function (e) {
      // console.log(e.currentTarget.dataset.type);
      var that = this;
      if(this.data.status == 1){
        wx.request({
          url: bon.getcartgoodsbySelected,
          method: "POST",
          data: {
            wxappid: bon.wxappid,
            fansid: app.globalData.fansid,
            dishidarr: JSON.stringify(that.data.cartId)
          },
          header:{
            "content-type": "application/x-www-form-urlencoded"
          },
          success:function(res){
            console.log(123654);
            //--init data
            var cart = res.data.info;
            // console.log(78787878, cart, res);
            that.setData({
              productData: cart
            });
            //endInitData
            that.sum();
          },
          
        })
      }
  }, 
  bindPickerChange:function(e){
    this.setData({
      tableIndex: e.detail.value
    })
  },
  bindNumChange:function(e){
    this.setData({
      personIndex: e.detail.value
    })
  },
  sum: function () {
    var carts = this.data.productData;
    // console.log(89898989, carts);
    // 计算总金额
    var total = 0;
    for (var i = 0; i < carts.length; i++) {
        total += carts[i].dish_num * carts[i].price;
    }
    // 写回经点击修改后的数组
    this.setData({
      productData: carts,
      total:total
    });
  },

  remarkInput:function(e){
    this.setData({
      remark: e.detail.value,
    })
  },

 //选择优惠券
  getvou:function(e){
    var vid = e.currentTarget.dataset.id;
    var price = e.currentTarget.dataset.price;
    var zprice = this.data.vprice;
    var cprice = parseFloat(zprice) - parseFloat(price);
    this.setData({
      total: cprice,
      vid: vid
    })
  }, 

//微信支付
  createProductOrderByWX:function(e){
    this.setData({
      paytype: 'weixin',
    });

    this.createProductOrder();
  },

  //线下支付
  createProductOrderByXX:function(e){
    this.setData({
      paytype: 'cash',
    });
    wx.showToast({
      title: "线下支付开通中，敬请期待!",
      duration: 3000
    });
    return false;
    this.createProductOrder();
  },

  //确认订单
  createProductOrder:function(){
    this.setData({
      btnDisabled:false,
    })

    //创建订单
    var that = this;
    wx.request({
      url: app.d.ceshiUrl + '/Api/Payment/payment',
      method:'post',
      data: {
        uid: that.data.userId,
        cart_id: that.data.cartId,
        type:that.data.paytype,
        aid: that.data.addrId,//地址的id
        remark: that.data.remark,//用户备注
        price: that.data.total,//总价
        vid: that.data.vid,//优惠券ID
      },
      header: {
        'Content-Type':  'application/x-www-form-urlencoded'
      },
      success: function (res) {
        //--init data        
        var data = res.data;
        if(data.status == 1){
          //创建订单成功
          if(data.arr.pay_type == 'cash'){
              wx.showToast({
                 title:"请自行联系商家进行发货!",
                 duration:3000
              });
              return false;
          }
          if(data.arr.pay_type == 'weixin'){
            //微信支付
            that.wxpay(data.arr);
          }
        }else{
          wx.showToast({
            title:"下单失败!",
            duration:2500
          });
        }
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:createProductOrder',
          duration: 2000
        });
      }
    });
  },
  
  //调起微信支付
  wxpay: function(order){
      wx.request({
        url: app.d.ceshiUrl + '/Api/Wxpay/wxpay',
        data: {
          order_id:order.order_id,
          order_sn:order.order_sn,
          uid:this.data.userId,
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'Content-Type':  'application/x-www-form-urlencoded'
        }, // 设置请求的 header
        success: function(res){
          if(res.data.status==1){
            var order=res.data.arr;
            wx.requestPayment({
              timeStamp: order.timeStamp,
              nonceStr: order.nonceStr,
              package: order.package,
              signType: 'MD5',
              paySign: order.paySign,
              success: function(res){
                wx.showToast({
                  title:"支付成功!",
                  duration:2000,
                });
                setTimeout(function(){
                  wx.navigateTo({
                    url: '../user/dingdan?currentTab=1&otype=deliver',
                  });
                },2500);
              },
              fail: function(res) {
                wx.showToast({
                  title:res,
                  duration:3000
                })
              }
            })
          }else{
            wx.showToast({
              title: res.data.err,
              duration: 2000
            });
          }
        },
        fail: function() {
          // fail
          wx.showToast({
            title: '网络异常！err:wxpay',
            duration: 2000
          });
        }
      })
  },
  DataonLoad: function () {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
      url: con.Index_getFansRecipients,
      data: {
        wxappid: con.wyy_user_wxappid,
        fansid: app.globalData.fansid,
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {// 设置请求的 header
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      success: function (res) {
        // success
        var address = res.data.adds;
        if (address == '') {
          var address = []
        }
        that.setData({
          address: address,
        })
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    })

  },


});