<template>
    <div id="dock-container" class="box border">
        <div class="box item mouse application" v-for="application in applications" :key="application.id" @click="handleOpenApplication(application)">
            {{application.name}}
        </div>
        <div v-show="dividingVisible" id="dividing-line" class="dividing-line"></div>
        <div class="box item mouse application" :id="'application-id-' + application.id"
             v-for="application in backgroundApplication" :key="application.id" :style="application.style"
             @click="handleActive(application.id)">
            {{application.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dock",
        data() {
            return {
                applications: [
                    {
                        id: '1',
                        name: '图书馆'
                    },
                    {
                        id: '2',
                        name: '组件库'
                    },
                    {
                        id: '4',
                        name: '工具库'
                    },
                    {
                        id: '5',
                        name: '帮助'
                    }
                ],
                backgroundApplication: [],
                dividingVisible: false
            }
        },
        methods: {
            // 打开应用程序
            handleOpenApplication(application) {
                this.$emit('handleOpenApplication', application);
            },
            // 添加一个后台应用程序
            handleAddBackgroundApplication(application) {
                this.backgroundApplication.push(application);
                setTimeout(function () {
                    let ele = document.getElementById('application-id-' + application.id);
                    ele.style.width = '46px';
                }, 24);
                if (false === this.dividingVisible) {
                    this.dividingVisible = true;
                }
            },
            // 获取应用程序
            getApplication(id) {
                let application;
                this.applications.forEach(item => {
                    if (id === item.id) {
                        application = item;
                    }
                });
                return application;
            },
            // 移除窗体
            removeBackgroundApplication(id) {
                let that = this;
                this.backgroundApplication.forEach((item, i) => {
                    if (item.id === id) {
                        if (this.backgroundApplication.length === 1) {
                            this.dividingVisible = false;
                        }
                        document.getElementById('application-id-' + id).style.visibility = 'hidden';
                        setTimeout(function () {
                            that.backgroundApplication.splice(i, 1);
                        }, 24);

                    }
                });
            },
            // 激活后台应用程序
            handleActive(id) {
                this.$emit('handleActive', id);
                this.removeBackgroundApplication(id);
            }
        }
    }
</script>

<style scoped>
    #dock-container {
        z-index: 99999;
        justify-content: center;
        align-items: center;

        background-color: rgba(59, 58, 74, 0.5);
        border-width: 1px 1px 0px 1px;
        border-style: solid;
    }

    #dock-container .item {
        justify-content: center;
        align-items: center;
        width: calc(50px - 4px);
        height: calc(50px - 2px);
        margin: 10px;
        background-color: #161626;
        border: 1px solid;
        text-align-last: justify;
        color: #1ebad6;

        transition: background-color 500ms;
        -moz-transition: background-color 500ms; /* Firefox 4 */
        -webkit-transition: background-color 500ms; /* Safari 和 Chrome */
        -o-transition: background-color 500ms; /* Opera */
    }

    #dock-container .item:hover {
        background-color: rgba(30, 186, 214, 0.5);
    }

    .dividing-line {
        width: 1px;
        height: calc(40px - 2px);
        background-color: rgba(30, 186, 214, 0.5);
    }

    .application {
        transition: visibility 500ms;
        -moz-transition: visibility 500ms; /* Firefox 4 */
        -webkit-transition: visibility 500ms; /* Safari 和 Chrome */
        -o-transition: visibility 500ms; /* Opera */
    }
</style>
