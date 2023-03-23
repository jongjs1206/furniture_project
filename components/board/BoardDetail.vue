<template>
  <div class="container">
    <div class="container_menu">게시판 > 상세</div>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-subject">{{item.title}}</div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">글쓴이: {{item.name}}</div>
          <div class="content-detail-content-info-right-created">등록일: {{item.createDate}}</div>
        </div>
      </div>
      <div class="content-detail-content">{{item.context}}</div>
      <div  style="float: right">
        <b-button variant="primary" @click="updateData">수정</b-button>&nbsp;
        <b-button variant="danger" @click="deleteData">삭제</b-button>
      </div>
  </div>
</template>

<script>
  export default {
    name: "BoardDetail",
    data() {
      return {
        item : {},
      };
    },
    async created () {
      await this.getBoardDetail()
    },
    methods: {
      async deleteData() {
        const res = await this.$axios.$post('/api/deleteBoard', {
            ID: this.$route.query.contentId
        }, {
          headers: {
            "Content-Type": `application/json`,
          },
        })
        this.$router.push({
          path: `/board/boardList`,
        });
      },
      updateData() {
        this.$router.push({
          path: `/board/boardCreate`,
          query: {contentId: this.$route.query.contentId,
                subject:this.item.title,
                 contents:this.item.context
          }
        });
      },
      async getBoardDetail () {
        try {
          const res = await this.$axios.$get('/api/listDetail', {
            params: {
              ID: this.$route.query.contentId
            }
          })
          console.log('res => ', res)
          this.item = res[0];
        } catch (e) {
          console.log('e => ', e)
          console.log('e.response => ', e.response)
        }
      }
    }
  };
</script>
<style scoped>
  .content-detail-content-info {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
  }

  .content-detail-content-info-left {
    width: 720px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .content-detail-content-info-right {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }

  .content-detail-content {
    border: 1px solid black;
    margin-top: 1rem;
    margin-bottom: 10px;
    padding: 1rem;
    min-height: 500px;
  }

  .content-detail-button {
    border: 1px solid black;
    margin-top: 1rem;
    padding: 2rem;
  }

  .content-detail-comment {
    border: 1px solid black;
    margin-top: 1rem;
    padding: 2rem;
  }
</style>
