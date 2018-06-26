const account = require('../../services/account');
require('./loginmode.less');
const { getStorage, setStorage } = require('../../utils/storage');
Page({
  data: {},
  bindAccountBySilent: function (e) {
    wx.showLoading({
      title: '授权中请稍后...',
      mask: true
    })
    return account.bindAccountBySilent(e.detail).then(res => {
      wx.switchTab({
        url: '/pages/personal/personal'
      })
    }, err => {
      // wx.redirectTo({ url: '/pages/login/login'})
    })
  },
  phoneLoginTap() {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  }

})
