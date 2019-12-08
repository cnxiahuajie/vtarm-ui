<template>
    <div id="select-container">
        <div class="select" tabindex="1">
            <input class="selectopt" name="test" type="radio" id="opt1" checked>
            <label for="opt1" class="option">请选择类型</label>
            <input class="selectopt" name="test" type="radio" id="opt2">
            <label for="opt2" class="option">前端</label>
            <input class="selectopt" name="test" type="radio" id="opt3">
            <label for="opt3" class="option">后端</label>
            <input class="selectopt" name="test" type="radio" id="opt4">
            <label for="opt4" class="option">服务器</label>
            <input class="selectopt" name="test" type="radio" id="opt5">
            <label for="opt5" class="option">运维</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Select"
    }
</script>

<style scoped>

    .select {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 220px;
        height: 32px;
        z-index: 3;
        border: 1px solid #E4E7ED;
    }

    .option {
        padding: 0 32px 0 10px;
        min-height: 32px;
        display: flex;
        align-items: center;
        background: #FFFFFF;
        position: absolute;
        top: 0;
        width: 100%;
        pointer-events: none;
        order: 2;
        z-index: 1;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;

    }

    .option:hover {
        background: #93b5b3;
        color: #F2F6F5;
    }

    .select:focus .option {
        position: relative;
        pointer-events: all;
    }

    input {
        opacity: 0;
        position: absolute;
        left: -99999px;
        outline: none;
    }

    input:checked + label {
        order: 1;
        z-index: 2;
        background: #ffffff;
        border-top: none;
        position: relative;
    }

    input:checked + label:after {
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid;
        position: absolute;
        right: 10px;
        top: calc(50% - 2.5px);
        pointer-events: none;
        z-index: 3;
    }

    input:checked + label:before {
        position: absolute;
        right: 0;
        height: 32px;
        width: 32px;
        content: '';
        background: #FFFFFF;
    }
</style>