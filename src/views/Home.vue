<template>
    <div id="home-container">
        <div class="top"></div>
        <div class="bottom"></div>
        <div id="root-menu">
            <div class="item mouse">
                图书馆
            </div>
            <div class="item mouse">
                组件库
            </div>
            <div class="item mouse">
                工具箱
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        data() {
            return {}
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
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        color: rgba(242, 246, 245, 1.0);
        border: 1px solid rgba(99, 112, 126, 0.6);
    }

    #root-menu .item:hover {
        color: #ffffff;
    }

</style>
