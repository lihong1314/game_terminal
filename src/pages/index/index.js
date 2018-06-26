require('./index.less');


const { getStorage, setStorage } = require('../../utils/storage');
const { checkLogin, message } = require('../../utils/index.js');

var app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  onShow() {
  },
  onLoad() {
    
  },
  goToPaylist(){
    wx.navigateTo({
      url: `/pages/paylist/paylist`
    })
  },
  goToTerminalList(){
    wx.navigateTo({
      url: `/pages/terminallist/terminallist`
    })
  }
})
