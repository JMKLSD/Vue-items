<template>
  <div class="app-container">

    <!-- 顶部 header区域 -->
    <mt-header fiexd title="My first Vue item">
      <span to="/" slot="left" @click="goBack" v-show="flag"> 
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>



    <!-- 中间内容组件 -->

    <transition>
      <router-view></router-view>

    </transition>

    <!-- 底部nav -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-zsy" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-zsy" to="member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item-zsy" to="shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">{{ $store.getters.getAllCount }}</span>
          </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-zsy" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">我的设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.flag = this.$route.path == '/home' ? false : true;
  },
  watch: {
    '$route.path': function(newval) {
      if(newval == '/home') {
        this.flag = false;
      }else {
        this.flag = true;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .mint-header {
    z-index: 10;
  }

  .app-container {
    overflow-x: hidden;
    padding-bottom: 50px;

  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .mui-bar-tab .mui-tab-item-zsy.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-zsy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>