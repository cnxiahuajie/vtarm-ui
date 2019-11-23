<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    body {
        margin: 0;
        overflow: hidden;
    }

    #app {
        display: flex;
        width: calc(100vw);
        height: calc(100vh);
        background-color: #161626;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        font-size: 13px;
    }
</style>
