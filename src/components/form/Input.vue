<template>
    <input :type="type" :placeholder="placeholder">
</template>

<script>
    export default {
        name: "Button",
        props: {
            placeholder: {
                type: String,
                default: '请输入'
            },
            type: {
                type: String,
                default: 'text'
            }
        }
    }
</script>

<style scoped>

    input {
        width: calc(100%);
        outline: none;
        height: calc(30px);
        border: 0;
        color: #000000;
        background-color: #FFFFFF;
        text-indent: 10px;
    }

    ::-webkit-input-placeholder {
        color: #606266;
    }
</style>
