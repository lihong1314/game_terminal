require('./settlement.less')


Page({
    data: {
        number:null,
        price:null
    },
    onShow() {
    },
    onLoad(options) {
        this.setData({
            number:options.number,
            price:options.price
        })
    },
    goToPay(){
        wx.navigateTo({
            url: ``
        })
    }
})