<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="~/assets/img/main_img01.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="~/assets/img/main_img02.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="~/assets/img/main_img03.jpg"></b-carousel-slide>
    </b-carousel>
    <div class="container">
      <div>
        <h4 class="small_title">인기 상품</h4>
      </div>
      <div class="product_list">
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
      </div>

      <hr/>

      <div>
        <h4 class="small_title">신 상품</h4>
      </div>
      <div class="product_list">
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>
        <div class="product">
          <div class="product_top">
            <img class="product_img" src="~/assets/img/test.jpg"/>
          </div>
          <div class="product_bottom">
            <div class="product_detail">쿠쿠 고정 팔유/좌패드 -사무용 병원용 가정용 서재 학생용 수강용 회의용 스툴 보조 의자</div>
            <div class="product_price">109,091원</div>
          </div>
        </div>

      </div>


      <div style="height: 500px;">

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  data() {
    return {
      main_images:['main_img01.jpg','main_img02.jpg','main_img03.jpg'],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }

})
</script>

<style lang="scss" scoped >
  .small_title{
    text-align: center;
    margin: 60px 0px 30px 0px;
    font-weight: bold;
  }
  .product_list{
    display: flex;
    justify-content: space-between;
    flex-wrap : wrap;
    .product{
      width: 22%;
      .product_top{
        margin-top: 30px;
        border: 1px solid #e2e2e2;
      }
      .product_img{
        width: 100%;
        height: 100%;
        background-color: #7f7f7f;
      }
      .product_detail{
        padding: 15px 5px 0px 5px;
        font-weight: 600;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical;
      }
      .product_price{
        margin: 10px 5px 0px 5px;
        font-weight: 600;
        font-size: 15px;
        color : #8b00ff;
      }
    }
  }
</style>
