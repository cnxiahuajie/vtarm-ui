<template>
    <div id="desktop-container" class="box">
        <div class="status-element">

        </div>
        <div class="view-element" @mousemove="handleFormMouseMove">
            <Form :id="form.id" :formProperties="form" v-for="form in forms" :key="form.id"
                  @handleCloseForm="handleCloseForm" @handleMinForm="handleMinForm"
                  @handleSelectForm="handleSelectForm"/>
        </div>
        <div class="box dock-element">
            <Dock ref="dock" @handleActive="handleActive" @handleOpenApplication="handleOpenApplication"/>
        </div>
    </div>
</template>

<script>
    import Dock from "@/components/desktop/Dock";
    import Form from "../components/view/Form";

    // 默认样式
    const defaultFormStyle = {
        width: '800px',
        height: '600px',
        zIndex: 9998,
        left: '100px',
        top: '100px',
        opacity: 1
    }

    export default {
        name: "Desktop",
        components: {Form, Dock},
        data() {
            return {
                // 所有窗口
                forms: [],
                // 当前激活窗口
                activeForm: null,
                // 已打开的窗口
                openForms: []
            }
        },
        methods: {
            // 窗体区鼠标移动
            handleFormMouseMove(e) {
                if (this.activeForm && this.activeForm.resize === true) {
                    let buttomY = (parseInt(this.activeForm.style.top.replace('px', '')) + parseInt(this.activeForm.style.height.replace('px', '')));
                    let newHeight = (parseInt(this.activeForm.style.height.replace('px', '')) + e.clientY - buttomY);
                    this.activeForm.style.height = newHeight + 'px';

                    let rightX = (parseInt(this.activeForm.style.left.replace('px', '')) + parseInt(this.activeForm.style.width.replace('px', '')));
                    console.log(rightX)
                    let newWidth = (parseInt(this.activeForm.style.width.replace('px', '')) + e.clientX - rightX);
                    this.activeForm.style.width = newWidth + 'px';
                }
            },
            // 删除窗体
            handleRemoveForm(id) {
                this.forms.forEach((item, i) => {
                    if (item.id === id) {
                        this.forms.splice(i, 1);
                    }
                });
            },
            // 打开应用程序
            handleOpenApplication(application) {
                if (this.openForms.indexOf(application.id) >= 0) {
                    return false;
                }
                this.forms.push({
                    id: application.id,
                    name: application.name,
                    utext: '<h1>Hello Vtarm!</h1>',
                    resize: false,
                    style: JSON.parse(JSON.stringify(defaultFormStyle))
                });
                this.openForms.push(application.id);
            },
            // 获取窗体
            getForm(id) {
                let form;
                this.forms.forEach(item => {
                    if (item.id === id) {
                        form = item;
                    }
                });
                return form;
            },
            // 选中窗体
            handleSelectForm(id) {
                this.activeForm = this.getForm(id);
                this.handleFocusForm(id);
            },
            // 窗体焦点
            handleFocusForm(id) {
                this.forms.forEach(item => {
                    if (item.id === id) {
                        item.style.zIndex = 9999;
                    } else {
                        item.style.zIndex = 9998;
                    }
                });
            },
            // 激活窗体
            handleActive(id) {
                if (id) {
                    this.activeForm = this.getForm(id);
                    this.activeForm.style.visibility = 'visible';
                    this.activeForm.style.opacity = 1;
                }
            },
            // 关闭窗体
            handleCloseForm(id) {
                this.handleRemoveForm(id);
            },
            // 最小化窗体
            handleMinForm(id) {
                let form = this.getForm(id);
                form.style.visibility = 'hidden';
                form.style.opacity = 0;
                this.$refs.dock.handleAddBackgroundApplication({
                    id: form.id,
                    name: form.name,
                    style: {
                        visibility: 'visible',
                        opacity: 1
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #desktop-container {
        width: calc(100vw);
        height: calc(100vh);
        flex-direction: column;
    }

    #desktop-container .status-element {
        min-height: calc(30px);
        max-height: calc(30px);
        overflow: hidden;
    }

    #desktop-container .view-element {
        min-height: calc(100vh - 100px);
        max-height: calc(100vh - 100px);
        min-width: calc(100vw);
        max-width: calc(100vw);
        overflow: hidden;
    }

    #desktop-container .dock-element {
        min-height: calc(70px);
        max-height: calc(70px);
        overflow: hidden;
        justify-content: center;
        align-items: center;
    }
</style>
