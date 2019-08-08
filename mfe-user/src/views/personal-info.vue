<template>
  <div>
    <ul class="personal-info">
      <li>
        <label>用户名：</label>
        <span>梁石头</span>
      </li>
      <li>
        <label>昵称：</label>
        <span>stone</span>
      </li>
      <li>
        <label>邮箱：</label>
        <span>stone.ll@qq.com</span>
      </li>
      <li>
        <label>电话：</label>
        <span>18581898189</span>
      </li>
      <li>
        <label>爱好：</label>
        <span>篮球、旅游</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo"
};
</script>
<style lang="less" scoped>
.personal-info {
  width: 100%;
  padding: 20px;
  li {
    padding: 10px;
    label {
      width: 200px;
      text-align: right;
      background-color: #fefefe;
    }
    span {
      text-align: left;
    }
  }
  li:hover {
    background-color: aqua;
  }
}
</style>
