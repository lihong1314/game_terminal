require('./buysuccess.less')

Page({
    data: {
    },
    onShow() {
    },
    onLoad(options) {
        const gameTime = options.gameTime;
        const storeName = options.storeName;
        this.setData({
            gameTime,
            storeName
        })
    },
    goToIndex(){
        wx.switchTab({
            url: `/pages/index/index`
        })
    }
})