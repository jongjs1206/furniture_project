<template>
  <div class="container">
    <div class="container_menu">게시판</div>
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <div v-if="itemsCount==0">
      <div class="no_data">
        No Data
      </div>
    </div>

    <div class="board-footer">
      <div class="item"></div>
      <div class="item">
        <b-pagination v-model="currentPage" :total-rows="itemsCount" :per-page="perPage" align="center"></b-pagination>
      </div>
      <div class="item">
        <b-button @click="writeContent" variant="primary" style="float:right">글쓰기</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BoardList",

    data() {


      return {
        currentPage: 1, // 현재 페이지
        perPage: 10, // 페이지당 보여줄 갯수
        // bootstrap 'b-table' 필드 설정
        fields: [
          {
            key: "no",
            label: "번호"
          },
          {
            key: "title",
            label: "제목"
          },
          {
            key: "name",
            label: "글쓴이"
          },
          {
            key: "date_time",
            label: "작성일"
          }
        ],
        items: [],
        itemsCount : 0
      };
    },
    async created () {
      await this.getBoardList()
    },
    methods: {
      rowClick(item, index, e) {
        this.$router.push({
          path: `/board/boardDetail`,
          query: {contentId: `${item.id}`}
        });
      },
      writeContent() {
        this.$router.push({
          path: `/board/boardCreate`
        });
      },
      async getBoardList () {
        try {
          const res = await this.$axios.$get('/api/list')
          console.log('res => ', res)
          let contentItems = res.sort((a, b) => {
            return b.id - a.id;
          });
          this.items = contentItems;
          this.itemsCount = contentItems.length;
        } catch (e) {
          console.log('e => ', e)
          console.log('e.response => ', e.response)
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  .no_data{
    width: 100%;
    text-align: center;
    height: 500px;
    line-height: 500px;
    font-size : 30px;
    border-bottom: 1px solid #d3d3d3;
  }
  .board-footer{
    margin-top:30px;
    display: flex;
    justify-content: space-between;

    .item{
      width: 33%;
    }
  }
</style>
