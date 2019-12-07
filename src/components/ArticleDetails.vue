<template>
    <div :id="id" class="article-details-container">
        <h1>
            标题
        </h1>
        <p class="author-info">
            <span class="item author-name">夏华杰</span>
            <span class="item">发表于</span>
            <span class="item">2019-12-7 13:05:22</span>
            <span class="item">阅读 <span>2019</span></span>
        </p>
        <p>
            内容
        </p>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails",
        props: {
            id: String
        },
        methods: {}
    }
</script>

<style scoped>
    .article-details-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .author-info {
        display: flex;
        align-items: center;
    }

    .author-info .item:not(:first-child) {
        margin-left: 10px;
    }

    .author-info .author-name {
        font-weight: bold;
    }
</style>