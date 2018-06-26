require('./buytime.less')


Page({
    data: {
        cionNum:1,
        gameTime:60,
        storeName:'XXX游戏机 -回龙观华联店'
    },
    onShow() {
    },
    onLoad() {
        
    },
    decrement(){
        let num = this.data.cionNum;
        if(num <= 1){
            wx.showToast({  
                title: '不能再减少了啦！',  
                icon:'none',  
                duration: 1500  
              })
            return;
        }else{
            num--;
        }
        this.setData({
            cionNum:num,
            gameTime:60*num
        })

    },
    incremental(){
        let num = this.data.cionNum;
        num++;
        this.setData({
            cionNum:num,
            gameTime:60*num
        })
    },
    goToBuyTimeFn(){
        wx.navigateTo({
            url: `/pages/buysuccess/buysuccess?gameTime=${this.data.gameTime}&storeName=${this.data.storeName}`
        })
    }
})