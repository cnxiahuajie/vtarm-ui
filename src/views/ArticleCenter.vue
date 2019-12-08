<template>
    <div id="article-center-container">
        <div class="action-container">
            <Input class="article-filter item" :placeholder="'过滤'"/>
            <Select class="article-type item"/>
            <Button class="button mouse item" :text="'新建'" @clickButton="toArticleEdit"/>
        </div>
        <div class="article-list-container">
            <div class="article-item" v-for="n in 5" :key="'article' + n">
                <div class="content">
                    <div class="title">钢铁是怎样炼成的</div>
                    <div class="article-info">
                        <div class="item tag-point backend"></div>
                        <div class="item">创建于 <span>2019-12-02 12:33:23</span></div>
                    </div>
                </div>
                <div class="actions">
                    <Button class="button mouse" :text="'删除'" :type="'error'"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../components/buttons/Button";
    import Input from "../components/form/Input";
    import Select from "../components/form/Select";

    export default {
        name: "ArticleCenter",
        components: {Button, Input, Select},
        methods: {
            // 前往文章编辑页面
            toArticleEdit() {
                this.$router.push({name:'ArticleEdit'});
            }
        }
    }
</script>

<style scoped>
    #article-center-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .action-container {
        padding: 10px;
        background-color: #FFFFFF;
        display: flex;
    }

    .action-container .item:not(:first-child) {
        margin-left: 10px;
    }

    .article-list-container {
        display: flex;
        flex-direction: column;
    }

    .article-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #E4E7ED;
        padding: 10px;
        margin-top: 10px;
    }

    .article-item .content {
        display: flex;
        flex-direction: column;
    }

    .article-item .content .title {
        font-size: 18px;
    }

    .article-info {
        display: flex;
        align-items: center;
    }

    .article-info .item:not(:first-child) {
        margin-left: 10px;
    }

</style>