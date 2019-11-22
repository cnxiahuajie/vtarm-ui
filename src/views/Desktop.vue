<template>
    <div id="desktop-container" class="box">
        <div class="status-element">

        </div>
        <div class="view-element" @drop="handleDrop" @dragover.prevent>
            <Form :id="form.id" :formProperties="form" v-for="form in forms" :key="form.id" @handleCloseForm="handleCloseForm" @handleMinForm="handleMinForm" @handleSelectForm="handleSelectForm"/>
        </div>
        <div class="box dock-element">
            <Dock ref="dock" @handleActive="handleActive"/>
        </div>
    </div>
</template>

<script>
    import Dock from "@/components/desktop/Dock";
    import Form from "../components/view/Form";

    export default {
        name: "Desktop",
        components: {Form, Dock},
        data() {
            return {
                expiredForms: [],
                forms: [
                    {
                        id: 'form-container',
                        name: '新窗口',
                        utext: `dasdsadadsadsadsadadsadasdsadasdad
                        dsadadsadsadsadsadsadasdasdsadad
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊的撒大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊`,
                        style: {
                            width: '800px',
                            height: '600px',
                            zIndex: 9999,
                            left: '50%',
                            top: '50%',
                            marginTop: '-400px',
                            marginLeft: '-300px',
                            opacity: 1
                        }
                    }
                ],
                activeForm: null
            }
        },
        methods: {
            handleDrop(e) {
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
            handleSelectForm (id) {
                this.activeForm = this.getForm(id);
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
                let form = this.getForm(id);
                form.style.visibility = 'hidden';
                form.style.opacity = 0;
            },
            // 最小化窗体
            handleMinForm (id) {
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
