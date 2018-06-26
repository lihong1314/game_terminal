const account = require('../../services/account');
require('./login.less');
const { getStorage, setStorage } = require('../../utils/storage');

var time;


Page({
  data: {
    mobile: '',
    verifyCode: '',
    sendCodeStatus: false,
    submitStatus: false,
    verifyTip: '获取验证码',
    error: ''
  },

  /**
   * 校验手机号码
   * @param params
   */
  checkMobile: params => /^1[34578]\d{9}$/.test(params.mobile),

  /**
   * 校验验证码
   * @param params
   */
  checkVerifyCode: params => params.verifyCode.toString().trim().length === 6,

  /**
   * 设置帐号信息
   * @param params
   */
  setAccountData(params) {
    params = {
      ...this.data,
      ...params
    }
    params = {
      ...params,
      submitStatus: this.checkMobile(params) && this.checkVerifyCode(params),
      sendCodeStatus: this.checkMobile(params)
    }
    this.setData(params)
  },

  /**
   * 电话输入框绑定事件
   * @param e
   */
  bindPhoneInput: function (e) {
    this.setAccountData({ mobile: e.detail.value })
  },

  /**
   * 验证码输入框绑定事件
   * @param e
   */
  bindCodeInput: function (e) {
    this.setAccountData({ verifyCode: e.detail.value })
  },

   /**
   * 提交表单
   * @param e
   */
  formSubmit: function (e) {
    this.bindAccountByCode(this.data).then(res => {
      console.log('formSubmit--response: ', res)
      setStorage( 'USER_INFO', res );
      wx.switchTab({
        url: '/pages/personal/personal'
      })
    }, err => {
      console.log('formSubmit--err-info: ', err)
    })
  },

  /**
   * 重置表单
   */
  formReset: function () {
    this.setData({
      mobile: '',
      verifyCode: '',
      sendCodeStatus: false,
      submitStatus: false,
    })
    console.log('-- reset --')
  },

  /**
   * todo....
   * 获取验证码
   * @return {*}
   */
  sendVerifyCode: function() {
    clearTimeout(time)
    return account.sendVerifyCode(this.data.mobile).then(
      res => {
        var self = this
        self.setData({
          error:''
        })
        var countdown = 60;
        function settime() {
          if (countdown == 0) {
            self.setData({
              sendCodeStatus: true,
              verifyTip: '获取验证码'
            })
            countdown = 60;
            return;
          } else {
            countdown--;
            self.setData({
              sendCodeStatus: false,
              verifyTip: "重新获取("+countdown + "s)"
            })
          }
          time=setTimeout(function() {
            settime()
          }, 1000)
        }
        settime();
      }, res => {
        this.setData({
          error: res.message
        })
      },
      err => {
        console.log(err)
        this.setData({
          error: err
        })
      }
    )
  },

  /**
   * 动码绑定飞凡帐号
   * @return {Promise.<T>|*|Promise|Promise<any>}
   */
  bindAccountByCode: function () {
    return account.bindAccountByCode(this.data).then(res => {
      console.log(res)
      return res
    }).catch(err => {
      console.log(err)
    })
  },

  deletePhone: function() {
    this.setData({
      mobile: ''
    })
  },

  deleteCode: function() {
    this.setData({
      verifyCode: ''
    })
  },
  /*
  * 错误提示
  */
  hintError(){
    let errMsg=this.data.error;
    if(errMsg){
      wx.showToast({  
        title: errMsg,  
        icon:'none',  
        duration: 1500  
      })
    }
  },
  /**
   * 卸载页面清除计时器
   */
  onUnload(){
    clearTimeout(time)
  },

  /**
   * 隐藏页面清除计时器
   */
  onHide(){
    clearTimeout(time)
  }
})
