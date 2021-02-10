<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/footer-logo.png" alt="">
            <p>爱心捐赠物资管理与追踪</p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">主页</a><span>|</span>
            <a href="" target="_blank">红十字会</a><span>|</span>
            <a href="" target="_blank">韩红基金会</a><span>|</span>
            <a href="" target="_blank">中国青少年基金会</a><span>|</span>
            <a href="" target="_blank">中国扶贫基金</a>           
        </div>
        <div class="copyright">Copyright 2019 <span class="domain">goodstrace.com</span> All Rights Reservesd.</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer',
}
</script>
<style lang="scss">
    @import './../assets/scss/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 40px;
            margin-bottom: 23px;
            img{
                width: 53px;
                height: 53px;
                margin-bottom: 31px;
            }
        }
        .footer-link{
            margin-bottom:13px;
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
        }
        .copyright{
            .domain{
                color: $colorA;
            }
        }
    }
</style>