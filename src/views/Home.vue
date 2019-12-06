<template>
    <div id="home-container">
        <div class="tip-box"><h1>理论上来说，理论和实际是一样的。但实际上来说，他们则不是</h1></div>
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

    #home-container .left .status-box .hide-left {
        margin-left: auto;
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
