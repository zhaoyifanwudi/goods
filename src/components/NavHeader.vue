<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-munu">
                    <a href="javascript:;">中国红十字会</a>
                    <a href="javascript:;">韩红基金会</a>
                    <a href="javascript:;">在线服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">Jack</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username"></a>
                    <a href="javascript:;" v-if="username">个人中心</a>
                    <a :href="'/#/cart'" class="my-goods"><span class="iconfont icon-goods">&#xe602;</span>我的捐赠</a>
                </div>
            </div>           
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index">
                        <div class="icon-imgl"></div>
                        <div class="icon-imgr"></div>
                    </a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>仓库物资明细</span>
                    </div>
                    <div class="item-menu">
                        <span>物资急需通告</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/01.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉第一医院物资急需</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/04.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉第四医院物资急需</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/05.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉第三医院物资急需</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/07.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉第五医院物资急需</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/09.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉急救中心物资急需</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <div class="pro-img">
                                        <img src="/imgs/needs/06.jpg" alt="">
                                    </div>
                                    <a href="" target="_blank">
                                        <div class="pro-name">武汉第四医院物资急需</div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="item-menu">
                        <span>国家应急物资</span>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            username:true,
            showSlide:''//大图展示控制
        }
    },
    mounted(){

    },
    methods:{
        login(){
            this.$router.push('/login');
            this.username = true;
        }
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color:#b0b0b0;
                    margin-right: 17px;
                }
                .my-goods{
                    width: 110px;
                    background-color: #ff0000;
                    text-align: center;
                    color: #ffffff;
                    margin-right: 0;
                    display: inline-block;
                    .icon-goods{                      
                        vertical-align: middle;
                        width:16px;
                        height: 12px;
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                height: 112px;
                position: relative;
                @include flex();
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        letter-spacing: 1px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0px;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.05);
                            transition: all .5s;
                            z-index: 10;
                            background-color: #ffffff;
                            .product{
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 13px;
                                line-height: 13px;
                                text-align: center;
                                position: relative;
                                img{
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 139px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 21px;
                                    margin-bottom: 8px;
                                    color: $colorB;
                                    &:hover{
                                        color: $colorA;
                                    }
                                }

                            }
                        }
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;
                        input{
                            border:none;
                            box-sizing: border-box;
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            margin-left: 17px;
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            background: url('/imgs/icon-search.png') no-repeat center;
                            background-size: contain;
                        }
                    }
                }
            }
        }
    }
</style>