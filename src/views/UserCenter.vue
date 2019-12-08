<template>
    <div id="user-center-container">
        <div class="properties-group public-profile-container">
            <h2 class="title">公共属性</h2>
            <div class="public-profile-box">
                <div class="public-profile">
                    <div class="item nick-name">
                        <label class="title">昵称</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <div class="item github">
                        <label class="title">Github</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <div class="item github">
                        <label class="title">个性签名</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <Button class="item" :text="'保存'"/>
                </div>
                <div class="tootip">
                    <p>这里的信息将会被公开展示，请注意个人隐私。</p>
                </div>
            </div>
        </div>

        <div class="properties-group security-container">
            <h2 class="title">密保安全</h2>
            <div class="security-box">
                <div class="security">
                    <div class="item old-password">
                        <label class="title">旧密码</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <div class="item new-password">
                        <label class="title">新密码</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <div class="item confirm-password">
                        <label class="title">确认密码</label>
                        <Input class="input" :placeholder="''"/>
                    </div>
                    <Button class="item" :text="'确认修改'"/>
                </div>
                <div class="tootip">
                    <p>频繁的修改密码会增强您的账号的安全性。</p>
                </div>
            </div>
        </div>

        <div class="properties-group recent-happenings">
            <h2 class="title">最近动态</h2>
            <div class="item">
                <p class="info">2019年12月23日 登录</p>
            </div>
            <div class="item">
                <p class="info">2019年12月23日 登出</p>
            </div>
            <div class="item">
                <p class="info">2019年12月23日 发布了《一条咸鱼的梦想》</p>
            </div>
            <div class="item">
                <p class="info">2019年2月3日 修改了密码。</p>
            </div>
        </div>

        <div class="properties-group subscribe">
            <h2 class="title">我的订阅</h2>
            <div class="item">
                <p class="info"><span class="who">夏华杰</span><span class="do">发布了</span>《<span class="what">一条咸鱼的梦想1</span>》</p>
            </div>
            <div class="item">
                <p class="info"><span class="who">夏华杰</span><span class="do">发布了</span>《<span class="what">一条咸鱼的梦想1</span>》</p>
            </div>
            <div class="item">
                <p class="info"><span class="who">夏华杰</span><span class="do">发布了</span>《<span class="what">一条咸鱼的梦想1</span>》</p>
            </div>
            <div class="item">
                <p class="info"><span class="who">夏华杰</span><span class="do">发布了</span>《<span class="what">一条咸鱼的梦想1</span>》</p>
            </div>
            <div class="item">
                <p class="info"><span class="who">夏华杰</span><span class="do">发布了</span>《<span class="what">一条咸鱼的梦想1</span>》</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from "../components/form/Input";
    import Button from "../components/buttons/Button";

    export default {
        name: "UserCenter",
        components: {Button, Input}
    }
</script>

<style scoped>
    #user-center-container {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .public-profile-box {
        display: flex;
    }

    .properties-group .title {
        padding: 10px 0;
        border-bottom: 1px solid #E4E7ED;
    }

    .properties-group .item .title {
        font-weight: bold;
        font-size: 14px;
    }

    .public-profile {
        width: 50%;
    }

    .properties-group .item:not(:first-child) {
        margin-top: 10px;
    }

    .properties-group .item .input {
        margin-top: 5px;
    }

    .security-box {
        display: flex;
    }

    .security {
        width: 50%;
    }

    .tootip {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>