var app = getApp();
var con = require("../../utils/api.js");
var oldUrl = require("../../utils/data02.js");
var sid, le, cid;
Page({
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    productData: [],
    proCat:[],
    page: 8,
    index: 2,
    brand:[],
    length: 0,
    // 滑动
    imgUrl: [],
    kbs:[],
    lastcat:[],
    course:[],
    sortList: [{
      name: "综合排序",
      image: ""
    }],
    discountList: [

    ],
    categoryList: {
    },
    selected: 0,
    mask1Hidden: true,
    mask2Hidden: true,
    animationData: "",
    location: "",
    characteristicSelected: [false, false, false, false, false, false, false],
    discountSelected: null,
    selectedNumb: 0,
    sortSelected: "综合排序",
    count:0
  },
//跳转商品列表页   
// listdetail:function(e){
//     console.log(e.currentTarget.dataset.title)
//     wx.navigateTo({
//       url: '../listdetail/listdetail?title='+e.currentTarget.dataset.title,
//       success: function(res){
//         // success
//       },
//       fail: function() {
//         // fail
//       },
//       complete: function() {
//         // complete
//       }
//     })
//   },

//点击加载更多
getMore:function(e){
  var that = this;
  var page = that.data.page;
  wx.request({
      url: con.getdish,
      method:'GET',
      data: { wxappid: con.wxappid,count: page},
      header: {
        'Content-Type':  'application/json'
      },
      success: function (res) {
        console.log(123654);  
        console.log(res.data.info)
        var prolist = res.data.info.length;
        console.log(prolist,page);
        if(prolist < page){
          wx.showToast({
            title: '没有更多数据！',
            duration: 2000
          });
          return false;
        }
        //that.initProductData(data);
        that.setData({
          page: page+4,
          restaurant:res.data.info
        });
        //endInitData
      },
      fail:function(e){
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      }
    })
},
//菜品分类
finish: function (e) {
  console.log(12312313);
  var that = this;
  wx.request({
    url: con.getdishbysid_classyfy_dish,
    data: {
      wxappid: con.wxappid,
      sid: sid
    },
    method: "GET",
    success: function (res) {
      that.setData({
        restaurant: res.data.info,
      })
    }
  });
},
//综合排序
sortSelected: function (e) {
  le = e.currentTarget.dataset.id;
  var that = this;
  wx.request({
    url: con.getdishascbycid,
    method: "GET",
    data: {
      wxappid: con.wxappid,
      cid: con.cid
    },
    success: function (res) {
      console.log(12132);
      that.setData({
        restaurant: res.data.info,
        sortSelected: that.data.sortList[e.currentTarget.dataset.index].name
      })
    }
  });
},
clearSelectedNumb: function () {
  this.setData({
    characteristicSelected: [false],
    discountSelected: null,
    selectedNumb: 0
  })
},
characteristicSelected: function (e) {
  var info = this.data.characteristicSelected;
  info[e.currentTarget.dataset.index] = !info[e.currentTarget.dataset.index];
  this.setData({
    characteristicSelected: info,
    selectedNumb: this.data.selectedNumb + (info[e.currentTarget.dataset.index] ? 1 : -1)
  })
  console.log(e.currentTarget.dataset.index);
},
discountSelected: function (e) {
  sid = e.currentTarget.dataset.id;
  if (this.data.discountSelected != e.currentTarget.dataset.index) {
    this.setData({
      discountSelected: e.currentTarget.dataset.index,
      selectedNumb: this.data.selectedNumb + (this.data.discountSelected == null ? 1 : 0)
    })
  } else {
    this.setData({
      discountSelected: null,
      selectedNumb: this.data.selectedNumb - 1
    })
  }
},
addShopCart: function (e) { //添加到购物车
  var that = this;
  console.log(e);
  var productId = e.currentTarget.dataset.productid;
  var status = e.currentTarget.dataset.status;

 console.log(productId);
 that.data.count++;
 that.setData({
   count: that.data.count
 });
  wx.request({
    url: con.addgoodstocart,
    method: 'post',
    data: {
      wxappid: con.wxappid,
      fansid: app.globalData.fansid,
      goodsid: productId
      // num: that.data.buynum,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function (res) {
      console.log(res);
      // //--init data        
      var data = res.data;
      console.log(data, 110011);
      if (data.status == 1) {
        
          wx.showToast({
            title: '加入购物车成功',
            icon: 'success',
            duration: 2000
          });
        
      } else {
        wx.showToast({
          title: data.err,
          duration: 2000
        });
      }
    },
    fail: function () {
      // fail
      wx.showToast({
        title: '网络异常！',
        duration: 2000
      });
    }
  });
},
buynow:function(e){
  var ptype = e.currentTarget.dataset.type;
  if(ptype == "buynow"){
    wx.switchTab({
      url: '../cart/cart' 
    });
    return;
  }
},
goShopCart:function(){
  if(this.data.count!=0){
    wx.switchTab({
      url: "../cart/cart"
    })
  }else{
    wx.showToast({
      title: '请添加菜品进购物车',
    })
  }
},
onTapTag: function (e) {
  var that = this;
  wx.request({
    url: con.getdishAscbySales,
    method: "GET",
    data: {
      wxappid: con.wxappid,
      cid: con.cid
    },
    success: function (res) {
      that.setData({
        restaurant: res.data.info
      })
    }
  })
  console.log(e);
  this.setData({
    selected: e.currentTarget.dataset.index
  });
},
mask1Cancel: function () {
  this.setData({
    mask1Hidden: true
  })
},
mask2Cancel: function () {
  this.setData({
    mask2Hidden: true
  })
},
onOverallTag: function () {
  this.setData({
    mask1Hidden: false
  })
},
onFilter: function () {
  this.setData({
    mask2Hidden: false
  })
},

  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  onLoad: function (options) {
    var that = this;
    wx.request({
      url: con.getdish,
      method:'GET',
      data: { wxappid: con.wxappid, count:4},
      header: {
        'Content-Type':  'application/json'
      },
      success: function (res) {
        console.log(res.data);  
        that.setData({
          restaurant: res.data.info
        });
        //endInitData
      },
      fail:function(e){
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    }),

      wx.request({
        url: con.getdish,
        method: 'GET',
        data: { wxappid: con.wxappid},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          
          that.setData({
           length: res.data.info.length
           
          });
          // console.log(length);
          //endInitData
        },
        fail: function (e) {
          wx.showToast({
            title: '网络异常！',
            duration: 2000
          });
        },
      }),
      wx.request({
        url: con.getcompanysort,
        method: "GET",
        data: {
          wxappid: con.wxappid,
          cid: con.cid
        },
        header: {
          "Content-Type": "application/json"
        },
        success: function (res) {
          // console.log(66666);
          console.log(res.data.info);
          var len = res.data.info;
          for (var i in len) {
            var le = len[i];
            that.data.discountList.push(le);

            that.setData({
              discountList: that.data.discountList
            })
          }
        }
      });

    wx.request({
      url: oldUrl.hospital_getslide,
      method: 'GET',
      data: { wxappid: oldUrl.wyy_user_wxappid},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(r){
      
           var img = r.data.info;
          //  console.log(img)
           that.setData({
             imgUrls: img
           })
      }
    });
  },

  onShareAppMessage: function () {
    return {
      title: "餐饮",
      path: "pages/index/index",
      success:function(){
        wx.showToast({
          title: '转发成功',
        })
      },
      fail:function(){
        wx.showToast({
          title: '转发失败',
        })
      }
    }
  }

});