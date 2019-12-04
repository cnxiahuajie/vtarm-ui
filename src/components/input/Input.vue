<template>
    <div class="input">
        <input type="text">
    </div>
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
    .input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 35px;
        border-bottom: 2px solid rgba(96, 169, 166, 1);
    }

    .input input {
        width: calc(100%);
        outline: none;
        height: calc(100%);
        border: 0;
        color: #F2F6F5;
        background-color: rgba(0, 0, 0, 0);
        text-indent: 10px;
    }
</style>
