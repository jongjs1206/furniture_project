<template>
  <header>
    <div class="container header-top">
      <div class="logo">Rest Memory</div>
      <div class="header-top-right">
        <div class="user">
          <div class="cnt" style="visibility: hidden;"></div>
          <font-awesome-icon class="icon" :icon="['far', 'user']" />
        </div>
        <div class="basket">
          <div class="cnt">0</div>
          <font-awesome-icon class="icon" :icon="['fab', 'shopify']" />
        </div>
        <div class="heart">
          <div class="cnt">0</div>
          <font-awesome-icon class="icon" :icon="['far', 'heart']" />
        </div>
      </div>
    </div>
    <div class="container header-bottom">
      <div class="menu">
        <span class="menu_name">사무용의자</span>
        <span class="menu_name">학생용의자</span>
        <span class="menu_name">유아용의자</span>
        <span class="menu_name">임원용의자</span>
        <span class="menu_name">회의/수강의자</span>
        <span class="menu_name">독서실의자</span>
        <span class="menu_name">인테리어의자</span>
      </div>

    </div>
<!--    <div>-->
<!--      <b-navbar toggleable="lg"  class="container">-->

<!--        <b-navbar-brand href="#">-->
<!--          <Logo />-->
<!--        </b-navbar-brand>-->

<!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--        <b-collapse id="nav-collapse" is-nav>-->
<!--          <b-navbar-nav>-->
<!--            <b-nav-item href="#">메뉴1</b-nav-item>-->
<!--            <b-nav-item href="#">메뉴2</b-nav-item>-->
<!--            <b-nav-item href="#">메뉴3</b-nav-item>-->
<!--            <b-nav-item href="#">메뉴4</b-nav-item>-->
<!--            <b-nav-item href="#">메뉴5</b-nav-item>-->
<!--            <b-nav-item @click="toBoard">게시판</b-nav-item>-->
<!--          </b-navbar-nav>-->

<!--          &lt;!&ndash; Right aligned nav items &ndash;&gt;-->
<!--          <b-navbar-nav class="ml-auto">-->
<!--            <b-button class="btn-login" variant="outline-primary">로그인</b-button>-->
<!--          </b-navbar-nav>-->
<!--        </b-collapse>-->
<!--      </b-navbar>-->
<!--    </div>-->
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  import Logo from '~/components/Logo'

  export default {
    components: {
      Logo
    },
    data() {
      return {
        navigations: [
          {
            name: 'Search',
            href: '/'
          },
          {
            name: 'Movie',
            href: '/movie/tt4520988',
            path: /^\/movie/
          },
          {
            name: 'About',
            href: '/about'
          }
        ]
      }
    },
    computed: {
      ...mapState('about', [
        'image',
        'name'
      ])
    },
    methods: {
      isMatch(path) {
        if (!path) return false
        return path.test(this.$route.fullPath)
      },
      toBoard() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    border-bottom: 1px solid #d3d3d3;

    .header-top{
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .logo{
        font-weight: bold;
        font-size: 35px;
        letter-spacing: 7px;
      }

      .header-top-right{
        display: flex;

        font-size: 25px;
        .user{
          font-size: 23px;
          position: relative;
          top: 2px;
        }
        .basket{
          margin-left: 18px;
          cursor: pointer;
        }
        .heart{
          margin-left: 15px;
          cursor: pointer;
        }
        .cnt {
          font-size: 12px;
          background: #c7b5ec;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          position: relative;
          top:20px;
          left: 15px;
          z-index: 20;
          text-align: center;
          font-weight: bolder;
          color: white;
        }
      }
    }

    .header-bottom{
      .menu{
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .menu_name{
        font-weight: 700;
        margin-right: 20px;
        cursor: pointer;
        padding: 5px 7px 5px 7px;
        &:hover{
          background: #c7b5ec;
          color: white;
        }
      }
    }
  }

</style>
