<template>
    <div class="button mouse" v-text="text"></div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
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
        height: 30px;
        color: #FFFFFF;
        text-shadow: 0 0 1px rgba(96, 169, 166, 1);
        background-color: rgba(96, 169, 166, 0.5);
        border: 2px solid rgba(96, 169, 166, 1);
    }

    .button:hover {
        background-color: rgba(96, 169, 166, 0.8);
        border: 2px solid rgba(96, 169, 166, 1);
    }
</style>
