// import * as wxp from './services/wxp'
// import * as locationService from './services/location'
require('./utils/sensorsdata.js');
import wxValidate from './utils/wxValidate'
import './app.less'
App({
  globalData:{
    val:''
  },
  wxValidate: (rules, messages) => new wxValidate(rules, messages),
  getCurrentCity() {
    return this.globalData.currentCity
  },
  setCurrentCity(currentCity) {
    this.globalData.currentCity = currentCity
  }
})
