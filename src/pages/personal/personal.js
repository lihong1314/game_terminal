require('./personal.less')


Page({
    data: {
        
    },
    onShow() {
    },
    onLoad() {
        
    },
    callPhone(){
        wx.makePhoneCall({
            phoneNumber: '4008005665' 
        })
    },
    goLogin(){
        wx.navigateTo({
            url: `/pages/loginmode/loginmode`
        })
    }
})