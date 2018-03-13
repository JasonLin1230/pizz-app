<script>
  export default {
    name: 'Home',
    data() {
      return {
        imgUrl: ''
      }
    },
  }
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="pic col-md-6 col-sm-6">
        <img src="../assets/silver.jpg" alt="silver" class="img-responsive">
      </div>
      <div class="detail col-md-6 col-sm-6">
        <h3>Apple/苹果 iphoneX</h3>
        <hr>
        <div class="options">
          <dl>
            <dt>处理器：</dt>
            <dd>64位架构的 A11芯片</dd>
          </dl>
          <dl>
            <dt>屏幕：</dt>
            <dd>5.8英寸 OLED全面屏</dd>
          </dl>
          <dl>
            <dt>摄像头：</dt>
            <dd>1200万像素双镜头摄像头、5.8英寸 OLED全面屏</dd>
          </dl>
          <dl>
            <dt>价格：</dt>
            <dd>¥<span class="price">7788-8958</span></dd>
          </dl>
          <dl>
            <dt>外观：</dt>
            <dd>
              <ul>
                <li>深空灰色</li>
                <li>银色</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>存储：</dt>
            <dd>
              <ul>
                <li>64GB</li>
                <li>256GB</li>
              </ul>
            </dd>
          </dl>
        </div>
        <hr>
        <button class="btn btn-block">加入购物车</button>
      </div>
    </div>
  </div><!-- ./container -->
</template>
<style>
.pic{
  padding: 0 50px;
}
.options dl{
  margin-bottom: 30px;
}
.options dt{
  width: 60px;
  float: left;
  color: #888;
}
.options dd{
  text-align: left;
}
</style>
