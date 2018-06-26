require('./balance.less')


Page({
    data: {
        coinlist:[
            {active:false,number:1,price:8},
            {active:false,number:2,price:10},
            {active:false,number:3,price:12},
            {active:false,number:4,price:15},
            {active:false,number:5,price:18},
            {active:false,number:6,price:20}
        ],
        coinIndex:null,
        coinNumber:0,
        coinPrice:0,
        tipFlag:true
    },
    onShow() {
    },
    onLoad() {
        
    },
    changeActive(e) {
        const index = e.currentTarget.dataset.index;
        const number = e.currentTarget.dataset.number;
        const price = e.currentTarget.dataset.price;
        this.setData({
            coinIndex:index,
            coinNumber:number,
            coinPrice:price,
            tipFlag:false,
        })

    },
    closeTip(){
        this.setData({
            tipFlag:true,
            coinIndex:null,
            coinNumber:0,
            coinPrice:0
        })
    },
    gotoComfir(){
        wx.navigateTo({
            url: `/pages/settlement/settlement?number=${this.data.coinNumber}&price=${this.data.coinPrice}`
        })
    }
})