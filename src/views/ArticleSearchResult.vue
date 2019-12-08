<template>
    <div id="article-search-result">
        <div class="article" v-for="n in 40" :key="n">
            <ArticleSearchItem :id="'111'" :title="keyword" :fragment="keyword" @toArticleView="toArticleView"/>
        </div>
    </div>
</template>

<script>
    import ArticleSearchItem from "../components/ArticleSearchItem";
    export default {
        name: "ArticleSearchResult",
        components: {ArticleSearchItem},
        data() {
            return {
                keyword: ''
            }
        },
        beforeRouteUpdate (to, from, next) {
            this.handleSearch(to);
            next() // 一定要有next
        },
        methods: {
            // 执行搜索
            handleSearch(to) {
                this.keyword = to.query.keyword
            },
            // 前往文章详情页面
            toArticleView(id) {
                this.$router.push({name:'ArticleView', query: {id: id}});
            }
        }
    }
</script>

<style scoped>
    #article-search-result {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 100%;
        overflow-y: scroll;
    }

    #article-search-result .article {
        display: flex;
        border-bottom: 1px solid #E4E7ED;
        padding: 10px 0;
    }

</style>