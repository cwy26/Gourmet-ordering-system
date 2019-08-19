<template>
  <ul id="footer">
    <router-link tag="li" to="/index">
      <span>图标</span>
      <p>首页</p>
    </router-link>
    <router-link tag="li" to="/reservation">
      <span>图标</span>
      <p>社区</p>
    </router-link>
    <!-- 预留位给会员 to="member" -->
    <router-link tag="li" to="/helloworld">
      <span>图标</span>
      <p>会员</p>
    </router-link>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
margin: 0;
}
#footer li {
  flex: 1;
  height: 40px；;
}
#footer li.active {
  color: var(--red);
}
#footer li.router-link-active {
  color: var(--red);
}
#footer p {
    margin: 0;
  font-size: 12px;
  line-height: 16px;
}
</style>