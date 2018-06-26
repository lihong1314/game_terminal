require('./terminallist.less')


Page({
    data: {
    },
    onShow() {
    },
    onLoad() {
        
    },
    goToBuyTime(){
        wx.navigateTo({
            url: `/pages/buytime/buytime`
        })
    }
})