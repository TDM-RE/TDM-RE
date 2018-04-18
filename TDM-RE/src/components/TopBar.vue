<template>
<nav id="top-bar">
  <div id="top-bar-content-wrapper">
    <div id="logo-wrapper">
      <img id="logo" src="../assets/logo.png" alt="logo">
    </div>
    <div id="nav-list-wrapper">
      <a class="nav-lists" v-for="list in navlists" :key="list">{{list}}</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      navlists: ['홈', '내 외출증', '외출증 쓰기', '외출 내역', '로그인', '회원가입']
    }
  }
}
</script>

<style scoped>
#top-bar{
  position: relative;
  background: #3a7ecf;
  height: 90px;
  vertical-align: middle;
}

#top-bar-content-wrapper{
  position: relative;
  padding: 0 10%;
}

#logo-wrapper{
  display: inline-block;
  height: 100%;
  line-height: 90px;
}

#logo{
  height: 30px;
  vertical-align: middle;
}

#nav-list-wrapper{
  float: right;
  height: 100%;
}

.nav-lists{
  margin: 0 10px;
  color: #fff;
  line-height: 90px;
}
</style>
