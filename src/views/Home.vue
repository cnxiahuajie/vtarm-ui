<template>
    <div id="home-container">
        <div class="top"></div>
        <div class="bottom"></div>
        <div id="root-menu">
            <div class="item mouse library">
                <div class="title">
                    <span>图书馆</span>
                </div>
                <img :src="libraryImageUrl">
            </div>
            <div class="item mouse component">
                <div class="title">
                    <span>组件库</span>
                </div>
                <img :src="componentImageUrl">
            </div>
            <div class="item mouse toolkit">
                <div class="title">
                    <span>工具箱</span>
                </div>
                <img :src="toolkitImageUrl">
            </div>
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
        display: flex;
        flex-direction: column;
        z-index: 1;
    }

    #home-container .top{
        background-color: #C8DAD3;
        height: 50%;
    }
    #home-container .bottom{
        height: 50%;
        background-color: #93B5B3;
    }

    #root-menu {
        position: absolute;
        z-index: 2;
        display: flex;
        width: calc(100vw);
        height: calc(100vh);
        justify-content: center;
        align-items: center;
    }

    #root-menu .item {
        height: 30%;
        width: 10%;
        background-color: rgba(99, 112, 126, 0.8);
        color: #637074;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        color: rgba(242, 246, 245, 1.0);
        border: 1px solid rgba(99, 112, 126, 0.6);
        position: relative;
    }

    #root-menu .item:hover {
        background-color: rgba(99, 112, 126, 0.6);
    }

    .library .title, .component .title, .toolkit .title {
        position: absolute;
        top: 0px;
        height: 50px;
        width: 100%;
        background-color: rgba(99, 112, 126, 1);
        color: rgba(242, 246, 245, 1.0);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
