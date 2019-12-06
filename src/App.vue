<template>
    <div id="app">
        <div class="left">
            <div class="search-box">
                <input type="text" class="search-input" placeholder="搜索">
            </div>
            <div class="search-item-box">
                <div class="search-item mouse">
                    <h1>产品设计</h1>
                </div>
                <div class="search-item mouse">
                    <h1>美工交互设计</h1>
                </div>
                <div class="search-item mouse">
                    <h1>产品测试</h1>
                </div>
                <div class="search-item mouse">
                    <h1>前端开发</h1>
                </div>
                <div class="search-item mouse">
                    <h1 class="height-transition">后端开发</h1>
                    <div class="child-search-item">
                        <h2 class="height-transition">Springboot2</h2>
                        <h2 class="height-transition">Vtarm框架之基础</h2>
                        <h2 class="height-transition">Vtarm框架之初级应用</h2>
                        <h2 class="height-transition">Vtarm框架之中级应用</h2>
                        <h2 class="height-transition">Vtarm框架之高级应用</h2>
                    </div>
                </div>
                <div class="search-item mouse">
                    <h1>运维部署</h1>
                </div>
                <div class="search-item mouse">
                    <h1>服务器</h1>
                </div>
                <div class="search-item mouse">
                    <h1>数据库管理</h1>
                </div>
            </div>
            <div class="status-box">
                <span class="item mouse color-transition" @click="handleAbout">关于我</span>
                <span class="item mouse color-transition">设置</span>
                <span class="item mouse color-transition">登录</span>
                <span class="item mouse color-transition">用户中心</span>
                <span class="item mouse color-transition hide-left">&lt;&lt;</span>
            </div>
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "App",
        methods: {
            handleAbout() {
                this.$router.push({path:'/About'});
            }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        overflow: hidden;
        font-size: 12px;
    }

    #app {
        display: flex;
        width: calc(100vw);
        height: calc(100vh);
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        display: flex;
        z-index: 1;
    }

    #app .left{
        background-color: #93B5B3;
        width: 30%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    #app .right{
        display: flex;
        width: 70%;
        background-color: #C8DAD3;
    }

    #app .right .tip-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        text-shadow: 0 0 2px #93B5B3;
    }

    #app .left .search-box{
        display: flex;
        height: 5%;
        padding: 5px 10px;
    }

    #app .left .status-box{
        display: flex;
        width: calc(100% - 20px);
        height: 60px;
        position: absolute;
        bottom: 0;
        background-color: rgba(99, 112, 126, 0.6);
        align-items: center;
        color: #C8DAD3;
        padding: 0 10px;
        font-size: 14px;
        overflow: hidden;
    }

    #app .left .status-box .item{
        color: rgba(200, 218, 211, 1);
        margin: 0 10px;
    }

    #app .left .status-box .item:hover{
        color: rgba(200, 218, 211, 0.5);
    }

    #app .left .status-box .hide-left {
        margin-left: auto;
    }

    #app .left .search-item-box{
        display: flex;
        flex-direction: column;
        height: 95%;
        padding: 5px 20px;
        color: #FFFFFF;
    }

    #app .left .search-item-box .search-item {
        display: flex;
        flex-direction: column;
    }

    #app .left .search-item-box .search-item h1{
        font-size: 18px;
        margin: 10px;
    }

    #app .left .search-item-box .search-item h1:hover{
        text-shadow: 0 0 2px #FFFFFF;
    }

    #app .left .search-item-box .search-item h2{
        font-size: 16px;
        margin: 5px;
        height: 20px;

    }

    #app .left .search-item-box .search-item h2:hover{
        text-shadow: 0 0 5px #FFFFFF;
    }

    #app .left .search-item-box .search-item .child-search-item {
        transition: height 600ms;
        display: flex;
        height: 0px;
        flex-direction: column;
        overflow: hidden;
        padding: 0 20px;
    }

    #app .left .search-item-box .search-item:hover .child-search-item {
        height: 150px;
    }

    .search-input {
        width: calc(100%);
        outline: none;
        height: calc(100%);
        border: 0;
        color: #ffffff;
        border-bottom: 2px solid rgba(200, 218, 211, 1);
        background-color: rgba(0, 0, 0, 0);
        text-indent: 10px;
    }

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #F2F6F5;
    }

    .mouse {
        cursor: pointer;
    }

    .height-transition {
        transition: text-shadow 200ms;
        -moz-transition: text-shadow 200ms;	/* Firefox 4 */
        -webkit-transition: text-shadow 200ms;	/* Safari 和 Chrome */
        -o-transition: text-shadow 200ms;	/* Opera */
    }

    .color-transition {
        transition: color 200ms;
        -moz-transition: color 200ms;	/* Firefox 4 */
        -webkit-transition: color 200ms;	/* Safari 和 Chrome */
        -o-transition: color 200ms;	/* Opera */
    }
</style>
