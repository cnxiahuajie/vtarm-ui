<template>
    <div :id="id">
        <h1 class="title mouse" v-text="title" @click="toArticleView"></h1>
        <p class="fragment" v-html="fragment"></p>
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
    }

    .title:hover {
        color: rgba(48, 49, 51, 0.8);
    }

    .fragment {
        color: #909399;
    }
</style>