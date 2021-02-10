<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="iconfont icon-goods">&#xe635;</span>联系我们</li>
                <li><span class="iconfont icon-goods">&#xe657;</span>我要捐赠</li>
                <li><span class="iconfont icon-goods"  @click="toSeek">&#xe658;</span>我要求助</li>
                <li><span class="iconfont icon-goods">&#xe64f;</span>相关法律</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'service-bar',
    methods:{
        toSeek(){
            this.$router.push('/seek');
        }
    }
}
</script>
<style lang="scss">
    .service{
        padding: 33px;
        color: #666666;
        font-size: 16px;
        li{
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right:1px solid #e5e5e5;
            &:last-child{
                border-right: 0;
            }
            span{
                margin-right: 8px;
            }
        }
    }
</style>