require('./orderlist.less')


Page({
    data: {
        typeIndex:1
    },
    onShow() {
    },
    onLoad() {
        
    },
    changeType(e){
        const type = e.currentTarget.dataset.type;
        this.setData({
            typeIndex:type
        })
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