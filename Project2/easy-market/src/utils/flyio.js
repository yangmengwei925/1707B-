import Fly from "flyio/dist/npm/wx"

var tokenFly=new Fly();
export let fly = new Fly

//设置超时
// fly.config.timeout=10000;

const HOST = 'https://127.0.0.1' // 更改
//添加请求拦截器
fly.interceptors.request.use((request) => {
      // 把openid放在请求头部
    let sessionid = wx.getStorageSync('sessionid');
    // 如果没有sessionid就锁定请求，后续做登陆，登陆完成之后再发请求
    if (!sessionid) {
        console.log("没有sessionid，先请求sessionid...");
        //锁定当前实例，后续请求会在拦截器外排队
        fly.lock();
        return new Promise((resolve, reject)=>{
            wx.checkSession({
                success () {
                  //session_key 未过期，并且在本生命周期一直有效
                  resolve(request);
                },
                fail () {
                  // session_key 已经失效，需要重新执行登录流程
                  wx.login({
                      success(res){
                          // 使用tokenFly跳过请求拦截器发起网络请求
                          tokenFly,post('/login', {code}).then((res)=>{
                              // 设置sessionId等业务逻辑
                              resolve(request)
                          })
                      }
                  }) //重新登录
                }
              })
        }).finally(()=>{
            //解锁后，会继续发起请求队列中的任务
            fly.unlock()
        })
      } else {
        // console.log('每次请求的时候加到请求头',sessionid)
        if (sessionid){
            request.headers['JSESSIONID'] = sessionid;
        }
        //给所有请求添加自定义header
        // request.headers["Cookie"] = map(cookies, (v, k) => k + '=' + v).join(';')
        request.headers["Cookie"] = `SESSION=${sessionid}`;
        request.headers['content-type'] = "application/x-www-form-urlencoded" 
        //打印出请求体
        // console.log(request.body)
        //终止请求
        //var err=new Error("xxx")
        //err.request=request
        //return Promise.reject(new Error(""))

        //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
        return request;
      }
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    if (response.request.url.indexOf(HOST) == 0) {
      let hcks = response.headers['set-cookie'] || response.headers['Set-Cookie']
      if (hcks != null) {
        hcks.forEach(v => {
          let ck = v.split(';')[0].split('=')
          cookies[ck[0]] = ck[1]
        })
      }
    }
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
)

export default fly