<template>
  <div>
    <div class="background"></div>
    <div class="front">
      <div class="top">
        <p id="title">迪丽在线点餐系统</p>
        <p id="english">A sound mind in a sound body</p>
      </div>
      <router-link to="CustomerMain">
        <div id="customer" class="middle">
          <p>顾<br/>客<br/>点<br/>餐</p>
        </div>
      </router-link>
      <router-link to="ShopMain">
        <div id="shop" class="middle">
          <div id="image">
            <img :src="imgSrc" width="100%" height="100%" alt="" />
          </div>
          <p>商<br/>家<br/>加<br/>盟</p>
        </div>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloPage',
  data () {
    return {
      msg: 'Welcome to Dili System',
      imgSrc: require('../assets/images/shop.jpg')
    }
  }
}
</script>
<style>
  .top{
    text-align: left;
    padding-left: 100px;
    color: aliceblue;
  }
  .middle{
    float: left;
    height: 350px;
    padding: 50px 50px;
    background-color: black; opacity: 0.7;
    border-radius: 20px;
    margin-top: 30px;
    font-size: 50px;
    color: aliceblue;
    text-align: center;
   }
  #customer{
    width: 80px;
    margin-left: 350px;
  }
  #shop{
    width: 500px;
    margin-left: 50px;
  }
  #title{
    font-size: 50px;
    font-family: "等线 Light";
  }
  #english{
    font-size: 20px;
    font-family: "Segoe Script";
  }
  #image{
    width: 350px;
    height: 350px;
    float: left;
  }
  .background{
    width:100%;
    height:100%;
    z-index:-1;
    position: absolute;
    background-image: url("../assets/images/main_wallpaper.jpg");
  }
  .front{
    z-index:1;
    position: absolute;
  }
</style>
