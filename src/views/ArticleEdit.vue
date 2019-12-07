<template>
    <div id="article-edit-container">
        <Input class="item" :placeholder="'请输入标题'"/>
        <div class="item article-type-column">
            <Select class="article-type"/>
            <Input class="article-column" :placeholder="'请输入专栏'"/>
        </div>
        <TinymceEditor class="item" ref="editor" v-model="article.content" :disabled="disabled" />
        <div class="button-container">
            <Button class="button mouse" :text="'保存'"/>
            <Button class="button mouse" :text="'定时发布'"/>
            <Button class="button mouse" :text="'立即发布'"/>
        </div>
    </div>
</template>

<script>
    import TinymceEditor from "../components/TinymceEditor";
    import Select from "../components/form/Select";
    import Input from "../components/form/Input";
    import Button from "../components/buttons/Button";

    export default {
        name: "ArticleEdit",
        components: {Button, Select, TinymceEditor, Input},
        data() {
            return {
                disabled: false,
                article: {
                    content: ''
                }
            }
        }
    }
</script>

<style scoped>
    #article-edit-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    #article-edit-container .item:not(:first-child) {
        margin-top: 10px;
    }

    #article-edit-container .article-type-column {
        display: flex;
    }

    .article-column {
        margin-left: 10px;
    }

    .button-container {
        margin-top: 10px;
        padding: 10px;
        background-color: #FFFFFF;
        display: flex;

    }

    .button-container .button:not(:first-child) {
        margin-left: 10px;
    }
</style>