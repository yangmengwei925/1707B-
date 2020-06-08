<script>
import {login} from './api'

export default {
  onLaunch: function() {
	console.log("App Launch");
	wx.login({
		success: async res => {
			console.log("res...", res);
			let result = await login(res.code);
			if (result.code === 0){
				wx.setStorageSync('openid', result.data.openid)
			}else{
				wx.showToast({
					title: res.msg, //提示的内容,
					icon: 'none', //图标,
					mask: true, //显示透明蒙层，防止触摸穿透,
				});
			}
		},
		fail: (err) => {
			wx.showToast({
			  title: err, //提示的内容,
			  icon: 'none', //图标,
			  mask: true, //显示透明蒙层，防止触摸穿透,
			});
		},
	});
    
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
/*每个页面公共css */
page{
	height: 100%;
}
</style>
