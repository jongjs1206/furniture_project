<template>
  <div class="container">
    <div class="container_menu">게시판 > 글쓰기</div>
    <b-input v-model="subject" placeholder="제목을 입력해주세요."></b-input>
    <textarea
      class="textarea"
      v-model="context"
      placeholder="내용을 입력해 주세요"
      rows="3"
      max-rows="50"
    ></textarea>
    <br>
    <div style="float: right">
      <b-button variant="primary" @click="updateMode ? updateContent() : uploadContent()">저장</b-button>&nbsp;
      <b-button variant="danger" @click="cancle">취소</b-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'BoardCreate',
    data() {
      return {
        contentId:'',
        subject: '',
        context: '',
        user_id: 1,
        created_at: "2018-09-11",
        updated_at: null,
        updateObject: null,
        updateMode: this.$route.query.contentId > 0 ? true : false,
      }
    },
    created() {
      if(this.$route.query.contentId > 0) {
        this.contentId = this.$route.query.contentId;
        const contentId = Number(this.$route.query.contentId)
        // this.updateObject = data.Content.filter(contentItem => contentItem.content_id === contentId)[0]
        this.subject = this.$route.query.subject;
        this.context = this.$route.query.contents;
      }
    },
    methods: {
      async uploadContent() { // 저장
        if(this.subject==''){
          alert('제목을 입력해주세요');
          return false;
        }else if(this.context==''){
          alert('내용을 입력해주세요');
          return false;
        }
        const res = await this.$axios.$post('/api/uploadContent', {
            subject: this.subject,
            context : this.context
          }, {
          headers: {
            "Content-Type": `application/json`,
          },
        })

        this.$router.push({
          path: `/board/boardList`,
        })
      },
      async updateContent() { // 수정
        if(this.subject==''){
          alert('제목을 입력해주세요');
          return false;
        }else if(this.context==''){
          alert('내용을 입력해주세요');
          return false;
        }

        const res = await this.$axios.$post('/api/updateContent', {
          contentId:this.contentId,
          subject: this.subject,
          context : this.context
        }, {
          headers: {
            "Content-Type": `application/json`,
          },
        })

        this.$router.push({
          path: `/board/boardList`,
        })
      },
      cancle() {
        this.$router.push({
          path: `/board/boardList`,
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.textarea{
  margin-top:10px;
  margin-bottom:10px;
  width: 100%;
  height: 500px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  resize: both;
  outline-color: pink;
}
</style>
