<template>
  <view class="content">
    <MyMap class="map"/>
  </view>
</template>

<script>
import MyMap from "../../components/MyMap";
export default {
  components: {
    MyMap
  },
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {},
  methods: {}
};
</script>

<style>
.content{
	height: 100%;
}
.map{
	width: 100%;
	height: 100%;
}
</style>
