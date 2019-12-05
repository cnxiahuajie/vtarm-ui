<template>
    <div id="home-container">
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
                    <h1>后端开发</h1>
                    <div class="child-search-item">
                        <h2>Springboot2</h2>
                        <h2>Vtarm框架之基础</h2>
                        <h2>Vtarm框架之初级应用</h2>
                        <h2>Vtarm框架之中级应用</h2>
                        <h2>Vtarm框架之高级应用</h2>
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
                <span class="item mouse">反馈</span>
                <span class="item mouse">设置</span>
                <span class="item mouse">登录</span>
                <span class="item mouse">用户中心</span>
            </div>
        </div>
        <div class="right">
            <div class="tip-box"><h1>理论上来说，理论和实际是一样的。但实际上来说，他们则不是</h1></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        data() {
            return {
                libraryImageUrl: require("@/" + 'assets/images/home/library.png'),
                componentImageUrl: require("@/" + 'assets/images/home/component.png'),
                toolkitImageUrl: require("@/" + 'assets/images/home/tools.png')
            }
        },
        methods: {}
    }
</script>

<style scoped>
    #home-container {
        width: calc(100vw);
        height: calc(100vh);
        display: flex;
        z-index: 1;
    }

    #home-container .left{
        background-color: #93B5B3;
        width: 30%;
        display: flex;
        flex-direction: column;
        position: relative;
        min-width: 230px;
    }
    #home-container .right{
        display: flex;
        width: 70%;
        background-color: #C8DAD3;
    }

    #home-container .right .tip-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        text-shadow: 0 0 2px #93B5B3;
    }

    #home-container .left .search-box{
        display: flex;
        height: 5%;
        padding: 5px 10px;
    }

    #home-container .left .status-box{
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

    #home-container .left .status-box .item{
        color: rgba(200, 218, 211, 1);
        margin: 0 10px;
    }

    #home-container .left .status-box .item:hover{
        color: rgba(200, 218, 211, 0.5);
    }

    #home-container .left .search-item-box{
        display: flex;
        flex-direction: column;
        height: 95%;
        padding: 5px 20px;
        color: #FFFFFF;
    }

    #home-container .left .search-item-box .search-item {
        display: flex;
        flex-direction: column;
    }

    #home-container .left .search-item-box .search-item h1{
        font-size: 18px;
        margin: 10px;
    }

    #home-container .left .search-item-box .search-item h1:hover{
        text-shadow: 0 0 2px #FFFFFF;
    }

    #home-container .left .search-item-box .search-item h2{
        font-size: 16px;
        margin: 5px;
        height: 20px;
    }

    #home-container .left .search-item-box .search-item h2:hover{
        text-shadow: 0 0 5px #FFFFFF;
    }

    #home-container .left .search-item-box .search-item .child-search-item {
        transition: height 600ms;
        display: flex;
        height: 0px;
        flex-direction: column;
        overflow: hidden;
        padding: 0 20px;
    }

    #home-container .left .search-item-box .search-item:hover .child-search-item {
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

</style>
