<template>
  <div>
    <b-card>
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">{{item.id}}</div>
          <div class="content-detail-content-info-left-subject">{{item.title}}</div>
        </div>
        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">글쓴이: {{item.user}}</div>
          <div class="content-detail-content-info-right-created">등록일: {{item.createDate}}</div>
        </div>
      </div>
      <div class="content-detail-content">{{item.contents}}</div>
      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>&nbsp;
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
      <div class="content-detail-comment">
        <CommentList ></CommentList>
      </div>
    </b-card>
  </div>
</template>

<script>
  import data from "@/data";
  import CommentList from "./CommentList";

  export default {
    name: "BoardDetail",
    data() {
      // const contentId = Number(this.$route.query.contentId);
      // const contentData = data.Content.filter(
      //   contentItem => contentItem.content_id === contentId
      // )[0];
      return {
        item : {},
        // contentId: contentId,
        // title: contentData.title,
        // context: contentData.context,
        // user: data.User.filter(item => item.user_id === contentData.user_id)[0]
        //   .name,
        // created: contentData.created_at
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
                 contents:this.item.contents
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
    },
    components: {
      CommentList
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
    align-items: center;
    padding: 1rem;
  }

  .content-detail-content {
    border: 1px solid black;
    margin-top: 1rem;
    padding-top: 1rem;
    min-height: 720px;
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
