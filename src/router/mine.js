export default [{
  path: "/mine/wollet",
  component: (resolve) => require(['../components/mine/wollet/wollet'], resolve)
}, {
  path: "/mine/wollet/moreInfo",
  component: (resolve) => require(['../components/mine/wollet/moreInfo'], resolve)
}, {
  path: "/mine/wollet/bankCardPwd",
  component: (resolve) => require(['../components/mine/wollet/bankCardPwd'], resolve)
},{
  path: "/mine/redEnvelope",
  component: (resolve) => require(['../components/mine/redEnvelope/redEnvelope'], resolve)
}, {
  path: "/mine/coupon",
  component: (resolve) => require(['../components/mine/coupon/coupon'], resolve)
}, {
  path: "/mine/mineBuy",
  component: (resolve) => require(['../components/mine/mineBuy/mineBuy'], resolve)
}, {
  path: "/mine/mineJimai",
  component: (resolve) => require(['../components/mine/mineJimai/mineJimai'], resolve)
}, {
  path: "/mine/mineSell",
  component: (resolve) => require(['../components/mine/mineSell/mineSell'], resolve)
}, {
  path: "/mine/mineLove",
  component: (resolve) => require(['../components/mine/mineLove/mineLove'], resolve)
}]
