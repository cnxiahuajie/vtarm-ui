<template>
    <div :id="formProperties.id" class="box form border" :style="formProperties.style" @mousedown="handleFormMouseDown">
        <div class="head box move" @mousemove="handleHeadMouseMove" @mousedown="handleHeadMouseDown"
             @mouseup="handleHeadMouseUp"
             @mouseleave="handleHeadMouseLeave">
            <div class="name box">
                <span class="content">{{formProperties.name}}</span>
            </div>
            <div class="buttons box">
                <div class="item mouse box" @click="handleMin">-</div>
                <div class="item mouse box" @click="handleClose">x</div>
            </div>
        </div>
        <div class="body" v-html="formProperties.utext" @mousemove="handleBodyMouseMove" @mousedown="handleBodyMouseDown" @mouseup="handleBodyMouseUp"></div>
    </div>
</template>

<script>

    // 重置窗体大小的鼠标精度
    const RESIZE_PRECISION = 4;

    export default {
        name: "Form",
        props: {
            // 窗体属性
            formProperties: Object
        },
        data() {
            return {
                // 鼠标原点坐标
                originHeadMousePoint: {
                    x: -1,
                    y: -1
                },
                // 鼠标目标点坐标
                targetHeadMousePoint: {
                    x: -1,
                    y: -1
                },
                // 窗体原点坐标
                originFormPoint: {
                    x: -1,
                    y: -1
                },
                // 移动中
                moving: false,
                // 调整大小准备就绪
                resizeReady: false,
            }
        },
        methods: {
            // 点击窗体任意一个位置进行激活
            handleFormMouseDown(e) {
                this.handleSelectForm(this.formProperties.id);
            },
            // 鼠标调整窗体大小释放
            handleBodyMouseUp(e) {
                if (this.resizeReady) {
                    this.formProperties.resize = false;
                }
            },
            // 鼠标调整窗体大小按下
            handleBodyMouseDown(e) {
                if (this.resizeReady) {
                    console.log(1)
                    this.formProperties.resize = true;
                }
            },
            // 鼠标移动到窗体内容区
            handleBodyMouseMove(ev) {
                let eresize = 'e-resize';
                let seresize = 'se-resize';
                let sresize = 's-resize';
                let ele = document.getElementById(this.formProperties.id);
                if (ele.classList.contains(eresize)) {
                    ele.classList.remove(eresize)
                }
                if (ele.classList.contains(seresize)) {
                    ele.classList.remove(seresize)
                }
                if (ele.classList.contains(sresize)) {
                    ele.classList.remove(sresize)
                }
                // 东
                let e = (RESIZE_PRECISION > Math.abs(ev.clientX - (parseInt(this.formProperties.style.left.replace('px', '')) + parseInt(this.formProperties.style.width.replace('px', '')))));
                // 南
                let s = (RESIZE_PRECISION > Math.abs(ev.clientY - (parseInt(this.formProperties.style.top.replace('px', '')) + parseInt(this.formProperties.style.height.replace('px', '')))));
                // 东南
                let se = e && s;

                if (se) {
                    ele.classList.add(seresize);
                    this.resizeReady = true;
                } else if (e) {
                    ele.classList.add(eresize);
                    this.resizeReady = true;
                } else if (s) {
                    ele.classList.add(sresize);
                    this.resizeReady = true;
                } else {
                    this.resizeReady = false;
                }
            },
            // 鼠标移出
            handleHeadMouseLeave(e) {
                this.moving = false;
            },
            // 鼠标释放
            handleHeadMouseUp(e) {
                this.moving = false;
            },
            // 鼠标按下
            handleHeadMouseDown(e) {
                this.moving = true;
                this.originHeadMousePoint.x = e.clientX;
                this.originHeadMousePoint.y = e.clientY;
                let ele = document.getElementById(this.formProperties.id);
                this.originFormPoint.x = parseInt(ele.style.left.replace('px', ''));
                this.originFormPoint.y = parseInt(ele.style.top.replace('px', ''));
            },
            // 鼠标移动
            handleHeadMouseMove(e) {
                if (this.moving) {
                    this.targetHeadMousePoint.x = e.clientX;
                    this.targetHeadMousePoint.y = e.clientY;

                    this.formProperties.style.left = ((this.originFormPoint.x + (this.targetHeadMousePoint.x - this.originHeadMousePoint.x))) + 'px';
                    this.formProperties.style.top = ((this.originFormPoint.y + (this.targetHeadMousePoint.y - this.originHeadMousePoint.y))) + 'px';
                }
            },
            // 最小化
            handleMin() {
                this.$emit('handleMinForm', this.formProperties.id);
            },
            // 关闭
            handleClose() {
                this.$emit('handleCloseForm', this.formProperties.id);
            },
            // 激活窗体
            handleSelectForm(id) {
                this.$emit('handleSelectForm', id);
            }
        }
    }
</script>

<style scoped>
    .form {
        background-color: rgba(59, 58, 74, 1);
        color: #1ebad6;
        flex-direction: column;
        position: absolute;

        transition: visibility 200ms;
        -moz-transition: visibility 200ms; /* Firefox 4 */
        -webkit-transition: visibility 200ms; /* Safari 和 Chrome */
        -o-transition: visibility 200ms; /* Opera */
    }

    .head {
        height: 30px;
        justify-content: space-between;
        font-size: 12px;
        box-shadow: 0 0 2px #1ebad6;
        flex-shrink: 0;
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
        height: calc(100%);
    }
</style>
