var WYY_HOST_URL = "https://wxapi.weiyunyi.com/Wap.php/";
var c = "Shop"
module.exports = {
  wyy_host_api_url: WYY_HOST_URL,
  wyy_user_wxappid: "14",
  wyy_share_info: '',
  wyy_config_version: 2567,
 //命名规范 模块名_方法名
  
  //获取商家首页幻灯片 getslide
  Shop_getslide: WYY_HOST_URL + c + "/getslide",

  // 购物车数据展示接口
  Index_getfanscartlist: WYY_HOST_URL + c + "/getfanscartlist",

  // 添加商品进购物车接口  和 +1
  Index_addgoodstocart: WYY_HOST_URL + c + "/addgoodstocart",

  //购物车减去（-1）商品
  Index_subgoodsfromcart: WYY_HOST_URL + c + "/subgoodsfromcart",

  //购物车删除指定商品（数量清0）

  Index_delgoodsfromcart: WYY_HOST_URL + c + "/delgoodsfromcart",

  //用户登录slogin
  index_slogin: WYY_HOST_URL + "/Index/slogin",

  //获取购物车已选择商品信息列表(POST)
  index_getcartgoodsbySelected: WYY_HOST_URL + c +  "/getcartgoodsbySelected",

  // 添加粉丝收货地址（POST）
  Index_addRecipients: WYY_HOST_URL + c + "/addRecipients",
  //查询粉丝收货地址
  Index_getFansRecipients: WYY_HOST_URL + c + "/getFansRecipients",

// 设置粉丝默认收货地址（POST）
  Index_SetDefaultRecipients: WYY_HOST_URL + c + "/SetDefaultRecipients",

  // 删除粉丝收货地址（POST）
  Index_delRecipients: WYY_HOST_URL + c + "/delRecipients",



  
  // 1获取广告信息
  Index_getad: WYY_HOST_URL + c + "/getad",

  //2获取商品分类配置信息
  Index_getcategory: WYY_HOST_URL + c + "/getcategory",

  //3商城基础配送设置表
  Index_getconfig: WYY_HOST_URL + c + "/getconfig",

  // 4获取所有代金券配置信息
  Index_getdiscountlist: WYY_HOST_URL + c + "/getdiscountlist",

  // 5根据代金券id获取此代金券信息
  Index_getdiscountbyid: WYY_HOST_URL + c + "/getdiscountbyid",

  // 6获取商城所有粉丝的评价信息
  Index_getevaluationlist: WYY_HOST_URL + c + "/getevaluationlist",

  // 7根据粉丝编号获取评价信息
  Index_getfansevaluation: WYY_HOST_URL + c + "/getfansevaluation",

  // 8获取商品图片
  Index_getgoodsphotos: WYY_HOST_URL + c + "/getgoodsphotos",

  // 9获取商品属性分类配置信息
  Index_getgoodsattrbyid: WYY_HOST_URL + c + "/getgoodsattrbyid",
  
  // 10获取店铺商品属性分类表
  Index_getgoodsattr: WYY_HOST_URL + c + "/getgoodsattr",

  // 11根据商品属性分类id获取该分类下的所有属性
  Index_getgoodsattrmdm: WYY_HOST_URL + "/getgoodsattrmdm",

  // 12获取指定属性分类下的商品
  Index_getgoodsbycatid: WYY_HOST_URL + c + "/getgoodsbycatid",

  // 13根据商品id获取商品信息
  Index_getgoodsinfo: WYY_HOST_URL + c + "/getgoodsinfo",

  // 14根据商品分类id获取该分类下的所有商品
  Index_getgoodsbycateid: WYY_HOST_URL + c + "/getgoodsbycateid",

  //15根据品牌id获取该品牌下的所有商品
  Index_getgoodsbypid: WYY_HOST_URL + c + "/getgoodsbypid",

  //16获取已下架的所有商品信息集合
  Index_getoffgoods: WYY_HOST_URL + c + "/getoffgoods",

  // 17获取已上架的所有商品信息集合
  Index_getongoods: WYY_HOST_URL + c + "/getongoods",

  // 18取全部商品信息集合
  Index_getgoods: WYY_HOST_URL + c + "/getgoods",

  // 19获取指定商品的属性集合
  Index_getgoodsmdm: WYY_HOST_URL + c + "/getgoodsmdm",

  // 20获取商城消息模板配置表
  Index_getmsgconfig: WYY_HOST_URL + c + "/getmsgconfig",

  // 21获取商城所有订单集合
  Index_getorder: WYY_HOST_URL + c + "/getorder",

  // 22获取指定粉丝的所有订单集合
  Index_getfansorder: WYY_HOST_URL + c + "/getfansorder",

  // 23根据粉丝id和发货状态获取该粉丝的指定状态的所有订单集合
  Index_getfansorderbyfhs: WYY_HOST_URL + c + "/getfansorderbyfhs",

  // 24根据粉丝id和订单状态获取该粉丝的指定状态的所有订单集合
  Index_getfansorderbyos: WYY_HOST_URL + c + "/getfansorderbyos",

  // 25根据订单编号获取订单详情
  Index_getorderbysn: WYY_HOST_URL + c + "/getorderbysn",

  // 26根据订单编号获取订单商品信息
  Index_getordergoodsbysn: WYY_HOST_URL + c + "/getordergoodsbysn",

  // 27获取打印管理信息列表
  Index_getprintlist: WYY_HOST_URL + c + "/getprintlist",

  // 28根据id获取打印机信息
  Index_getprintinfo: WYY_HOST_URL + c + "/getprintinfo",

  // 29获取商城所有订单的收货人信息集合
  Index_getrecipients: WYY_HOST_URL + c + "/getrecipients",

  // 30根据订单号获取该订单收货人信息
  Index_getrecipientsbysn: WYY_HOST_URL + c + "/getrecipientsbysn",

  // 31获取商城所有品牌列表
  Index_getpinpailist: WYY_HOST_URL + c + "/getpinpailist",

  // 32根据品牌id获取品牌信息
  Index_getpinpaibyid: WYY_HOST_URL + c + "/getpinpaibyid",

  // 33获取商城短信配置信息
  Index_getsmsconfig: WYY_HOST_URL + c + "/getsmsconfig",

  // 34根据用户id获取用户信息
  Index_getuserinfo: WYY_HOST_URL + c + "/getuserinfo",

  // 35获取商城所有用户信息列表
  Index_getuserlist: WYY_HOST_URL + c + "/getuserlist",

  // 36获取分享设置列表
  Index_getshareconfig: WYY_HOST_URL + c + "/getshareconfig"

}