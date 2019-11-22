<template>
    <div :id="formProperties.id" class="box form" :style="formProperties.style" @click="handleSelectForm" @dblclick="handleChangeSize">
        <div class="head box" draggable="true" @dragstart="dragstart" @drag='draging' @dragend="dragend">
            <div class="name box">
                <span class="content">{{formProperties.name}}</span>
            </div>
            <div class="buttons box">
                <div class="item mouse box" @click="handleMin">-</div>
                <div class="item mouse box" @click="handleClose">x</div>
            </div>
        </div>
        <div class="body">
            {{formProperties.utext}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form",
        props: {
            // 窗体属性
            formProperties: Object
        },
        data() {
            return {
                // 是否全屏
                fullscreen: false
            }
        },
        methods: {
            dragend(e) {
            },
            draging(e) {
                this.formProperties.style.marginTop = '0px';
                this.formProperties.style.marginLeft = '0px';
                this.formProperties.style.left = (e.clientX - 400) + 'px';
                this.formProperties.style.top = (e.clientY - 10) + 'px';
                // DO NOTHING
            },
            dragstart(e) {
            },
            handleMin () {
                this.$emit('handleMinForm', this.formProperties.id);
            },
            handleClose () {
                this.$emit('handleCloseForm', this.formProperties.id);
            },
            // 激活窗体
            handleSelectForm() {
                this.$emit('handleSelectForm', this.formProperties.id);
            },
            handleChangeSize(e) {
                if(this.fullscreen) {
                    this.formProperties.style.left = (0) + 'px';
                    this.formProperties.style.top = (0) + 'px';
                } else {
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>

<style scoped>
    .form {
        background-color: rgba(59, 58, 74, 0.5);
        border: 1px solid #1ebad6;
        color: #1ebad6;
        box-shadow: 0 0 4px #1ebad6;
        flex-direction: column;
        position: absolute;

        transition: visibility 200ms;
        -moz-transition: visibility 200ms;	/* Firefox 4 */
        -webkit-transition: visibility 200ms;	/* Safari 和 Chrome */
        -o-transition: visibility 200ms;	/* Opera */
    }

    .head {
        height: 30px;
        justify-content: space-between;
        font-size: 12px;
        box-shadow: 0 0 2px #1ebad6;
    }

    .name {
        align-items: center;
    }

    .name .content {
        margin-left: 10px;
    }

    .buttons {
    }

    .buttons .item {
        width: 30px;
        justify-content: center;
        align-items: center;

        transition: background-color 500ms;
        -moz-transition: background-color 500ms; /* Firefox 4 */
        -webkit-transition: background-color 500ms; /* Safari 和 Chrome */
        -o-transition: background-color 500ms; /* Opera */
    }

    .buttons .item:hover {
        background-color: rgba(30, 186, 214, 0.5);
    }

    .body {
        padding: 10px;
    }
</style>
