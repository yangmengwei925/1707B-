<template>
    <div>
        <button @click="authFinger">点击识别指纹</button>
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
    </div>
</template>

<script>
import {decrypt} from '../../api'
export default {
    methods: {
        authFinger(){
            wx.startSoterAuthentication({
                requestAuthModes: ['fingerPrint'],
                challenge: '123456',
                authContent: '请用指纹解锁',
                success(res) {
                    wx.showToast({
                      title: '指纹识别成功', //提示的内容,
                      icon: 'success', //图标,
                      duration: 2000, //延迟时间,
                    });
                }
            })
        },
        async getPhoneNumber(e){
            console.log(e.detail.errMsg)
            console.log(e.detail.iv)
            console.log(e.detail.encryptedData)
            let result = await decrypt(e.detail.iv, e.detail.encryptedData);
            console.log('result...', result);
        }
    }
}
</script>