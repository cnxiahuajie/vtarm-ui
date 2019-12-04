<template>
    <div class="button" v-text="text" :style="style"></div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            style: Object,
            width: String,
            height: String,
            text: String,
            type: String,
            click: Function
        }
    }
</script>

<style scoped>
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 35px;
        color: #F2F6F5;
        background-color: rgba(96, 169, 166, 0.5);
        border: 2px solid rgba(96, 169, 166, 1);
    }

    .button:hover {
        background-color: rgba(96, 169, 166, 0.8);
        border: 2px solid rgba(96, 169, 166, 1);
    }
</style>
