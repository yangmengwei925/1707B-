<template>
  <map
    :longitude="longitude"
    :latitude="latitude"
    scale="14"
    :markers="markers"
    show-location
  ></map>
</template>

<script>
export default {
    data: ()=>{
        return {
            longitude: '',
            latitude: '',
            markers: []
        }
    },
    props: {
        propsLon:{
            type: String,
            default: ""
        },
        propsLat: {
            type: String,
            default: ""
        } 
    },
    created(){
        if (this.props && this.props.propsLon){
            // 使用传入的定位
            this.longitude = this.props.propsLon;
            this.latitude = this.props.propsLat;
        }else{
            // 通过api获取当前位置信息
            this.getLocation();
        }
    },
    methods: {
        getLocation(){
            wx.getLocation({
              type: 'wgs84', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标,
              success: res => {
                console.info("getLocation success: ", res);
                // const latitude = res.latitude
                // const longitude = res.longitude
                // const speed = res.speed
                // const accuracy = res.accuracy
                this.longitude = res.longitude;
                this.latitude = res.latitude;
              },
              fail: () => {
                wx.showToast({
                  title: "getLocation failed", //提示的内容,
                  icon: 'none', //图标,
                  mask: true, //显示透明蒙层，防止触摸穿透,
                });
              }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
map{
    width: 100%;
    height: 100%;
}
</style>