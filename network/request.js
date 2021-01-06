const baseUrl = 'http://192.168.31.211:8081'

 function request(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method | 'GET',
      data: options.method | {},
      success: function(res){
        resolve(res)
      },
      fail: function(err){
        reject(err)
      }
    })
  })
}

export default request;
