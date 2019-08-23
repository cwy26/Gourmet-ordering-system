<template>
    <div>
        <div class="comment_filter">
          <comments-filter :content="content"></comments-filter>
        </div>
        <comment-list :comments_list = "comments_list"></comment-list>
    </div>
</template>
<script>
import commentList from "./common/comment_content.vue"
import commentsFilter from "./common/comments_filter.vue"
export default {
    data() {
        return {
          comments_list: [],
          content: ["全部", "晒图评价", "低分评价"]
        }
    },
    created() {
     this.axios.get("/comments").then( result => {
         if(result.data.code === 1) {
        this.comments_list = this.comments_list.concat(result.data.data);
         }
     });
    },
    components: {
    commentList, commentsFilter
    }

}
</script>
<style scoped>
.comment_filter {
    padding: 0 15px;
    margin-bottom: 30px;
}
</style>
