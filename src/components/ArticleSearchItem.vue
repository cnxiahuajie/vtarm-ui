<template>
    <div :id="id">
        <h1 class="title mouse" v-text="title" @click="toArticleView"></h1>
        <p class="fragment" v-html="fragment"></p>
        <div class="article-info">
            <p class="item">
                <label>阅读量</label><span>300</span>
            </p>
            <p class="item">
                <label class="tag-point backend"></label>
                <span>前端</span>
            </p>
            <p class="item">
                <label>发布于</label>
                <span>2019-12-32 12:32:22</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleSearchItem",
        props: {
            id: String,
            title: String,
            fragment: String
        },
        methods: {
            // 前往文章详情页面
            toArticleView() {
                this.$emit('toArticleView', this.id);
            }
        }
    }
</script>

<style scoped>
    .title {
        color: rgba(48, 49, 51, 1);
        font-size: 18px;
        color: #409EFF;
    }

    .title:hover {
        color: rgba(48, 49, 51, 0.8);
    }

    .fragment {
        color: #909399;
    }

    .article-info {
        display: flex;
    }

    .article-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-info .item {
        display: flex;
        align-items: center;
    }
</style>