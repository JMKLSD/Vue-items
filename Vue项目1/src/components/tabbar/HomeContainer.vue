<template>
  <div>

    <!-- 轮播图 -->

    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品列表</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a></li>
   
     
    </ul>


  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'

  import swiper from '../subcomponents/swiper.vue'

  export default {
    data() {
      return {
        lunbotuList: []
      };
    },
    created() {
      this.getLunbotu();
    },
    methods: {
      getLunbotu() {
        this.$http.get("http://www.liulongbin.top:3005/api/getLunbo").then(result => {

          if (result.body.status === 0) {
            this.lunbotuList = result.body.message;
          } else {
            Toast('加载轮播图失败')
          }
        })
      }
    },
    components:{
      swiper
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: #ff0000;
      }

      &:nth-child(2) {
        background-color: #15944e;
      }

      &:nth-child(3) {
        background-color: #0c2a6b;
      }

      img {
        height: 100%;
        width: 100%;
      }
    }

  }
    .mui-grid-view.mui-grid-9 {
      background-color: #fff !important;
      border: none;
      img {
        width: 60px;
        height: 60px;
      }

      .mui-media-body {
        font-size: 13px;
      }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
      border: 0;
    }
</style>