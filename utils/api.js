var WYY_HOST_URL = "https://wxapi.weiyunyi.com";
var c = "Dish";
module.exports = {
    wyy_host_api_url:WYY_HOST_URL,
    wxappid: "6",
    //获取指定菜品详情 菜品id
    id: "12132",
    //获取指定门店的菜品
    cid: "864",
    //获取指定分类下的菜品 关联菜品分类id
    sid: "2632",
    //获取指定门店信息  根据门店id获取门店详情
    id: "866",
    //获取菜品分类详情 id
    id: "2624",
    //根据餐桌id获取预定单 tableid
    tableid: "844",
    //根据订单号获取预订单详情
    ordernum: "123",
    fansid: "2",
    //获取所有菜品
    getdish:  WYY_HOST_URL + "/Wap.php/"+c+"/getdish",
    //获取所有已上架菜品
    getondish: WYY_HOST_URL + "/Wap.php/"+ c+ "/getondish",
    //获取所有已下架菜品
    getoffdish: WYY_HOST_URL + "/Wap.php/" + c + "/getoffdish",
    //获取指定门店的菜品 cid
    getdishbycid: WYY_HOST_URL + "/Wap.php/" + c + "/getdishbycid",
    //获取指定菜品详情 id=12132
    getdishbyid_detail: WYY_HOST_URL+ "/Wap.php/" + c+ "/getdishbyid",
    //获取指定分类下的菜品  sid=2627
    getdishbysid_classyfy_dish: WYY_HOST_URL + "/Wap.php/" + c + "/getdishbysid",
    //获取所有门店数据列表
    getcompanylist: WYY_HOST_URL + "/Wap.php/" + c + "/getcompanylist",
    //获取指定门店信息  根据门店id获取门店详情 id=866
    getcompanybyid_detail: WYY_HOST_URL + "/Wap.php/" + c + "/getcompanybyid",
    //获取指定门店的菜品分类  根据门店id获取门店的菜品分类 cid
    getcompanysort: WYY_HOST_URL + "/Wap.php/"　+ c + "/getcompanysort",
    //获取菜品分类详情 id=2624

    getsortinfo: WYY_HOST_URL + "/Wap.php/" + c + "/getsortinfo",

    //获取分享设置列表
    getshareconfig: WYY_HOST_URL + "/Wap.php/" + c + "/getshareconfig",

    //获取所有餐桌列表
    gettablelist: WYY_HOST_URL + "/Wap.php/" + c +　"/gettablelist",

    //获取指定门店的餐桌列表   根据门店id获取餐桌列表+cid
    gettablebycid: WYY_HOST_URL + "/Wap.php/" + c +　"/gettablebycid",

    //根据门店id和餐桌状态获取餐桌列表  根据门店id和餐桌状态获取餐桌列表,cid,status=0
    gettbalebystatus: WYY_HOST_URL + "/Wap.php/" + c + "/gettbalebystatus",

    //获取指定餐桌的预订记录 根据餐桌id获取预定单 tableid
    getyudingbytableid: WYY_HOST_URL + "/Wap.php/" + c + "/getyudingbytableid",

    //根据id获取预订单详情 id=2
    getyudingbyid: WYY_HOST_URL + "/Wap.php/" + c + "/getyudingbyid",

    //根据订单号获取预订单详情 ordernum=123
    getyudingbyordernum: WYY_HOST_URL + "/Wap.php/" + c + "/getyudingbyordernum",

    //根据门店id获取该门店所有预定单 根据门店id获取该门店所有预定单 cid
    getyudingbycid: WYY_HOST_URL + "/Wap.php/" + c + "/getyudingbycid",

    //获取指定粉丝的所有预订单
    getyudingbyfansid: WYY_HOST_URL + "/Wap.php/" + c + "/getyudingbyfansid",

    //获取单门店首页展示信息
    getDishOneInfo: WYY_HOST_URL + "/Wap.php/" + c + "/getDishOneInfo",

    //菜品的综合排序 cid=864
    getdishascbycid: WYY_HOST_URL + "/Wap.php/" + c + "/getdishascbycid",
    
    //销量排序
    getdishAscbySales: WYY_HOST_URL + "/Wap.php/" + c + "/getdishAscbySales",

    // 获取粉丝的购物车菜品总数及菜品详单
    getfanscartlist: WYY_HOST_URL + "/Wap.php/" + c + "/getfanscartlist",

    //添加（＋1）菜品进入粉丝的购物车
    addgoodstocart: WYY_HOST_URL + "/Wap.php/" + c + "/addgoodstocart",

    //从购物车减去（-1）商品菜品
    subgoodsfromcart: WYY_HOST_URL + "/Wap.php/" + c + "/subgoodsfromcart",
    
    //从粉丝购物车删除指定菜品
    delgoodsfromcart: WYY_HOST_URL + "/Wap.php/" + c + "/delgoodsfromcart",
    
    //获取购物车已选择商品信息列表
    getcartgoodsbySelected: WYY_HOST_URL + "/Wap.php/" + c + "/getcartgoodsbySelected",

    //查询粉丝收货地址
    getFansRecipients: WYY_HOST_URL + "/Wap.php/" + c + "/getFansRecipients",

    //添加粉丝收货地址
    addRecipients: WYY_HOST_URL + "/Wap.php/" + c + "/addRecipients",

    //获取所有省份列表
    getprovince: WYY_HOST_URL + "/Wap.php/" + c + "/getprovince",

    //获取指定省份下的城市列表
    getCitybyProvinceCode: WYY_HOST_URL + "/Wap.php/" + c + "/getCitybyProvinceCode",

    //获取指定城市的区域列表
    getAreabyCityCode: WYY_HOST_URL + "/Wap.php/" + c + "/getAreabyCityCode",

    //设置粉丝默认收货地址
    SetDefaultRecipients: WYY_HOST_URL + "/Wap.php/" + c + "/SetDefaultRecipients"
} 




