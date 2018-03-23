//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/lun1.jpg',
      '../../images/lun2.jpg',
      '../../images/lun3.jpg',
      '../../images/lun4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  }
})
