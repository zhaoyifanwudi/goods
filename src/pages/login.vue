<template>
  <div class="login">
      <div class="container">
        <a href="/#/index">
            <img src="/imgs/footer-logo.png" alt="">
            <div class="header-font">
                <p>爱心物资管理与追踪</p>
                <p class="des">让爱准确到达</p>
            </div>

        </a>
      </div>
      <div class="wrapper">
          <div class="container">
              <div class="login-img">
                  <img v-lazy="'/imgs/login-1.jpg'" alt="">
              </div>
              <div class="login-form">
                  <h3>
                      <span class="checked">账号登录</span>
                      <span class="sep-line">|</span>
                      <span>扫码登录</span>
                  </h3>
                  <div class="input">
                      <input type="text" placeholder="请输入账号" v-model="username">
                  </div>
                  <div class="input">
                      <input type="password" placeholder="请输入密码" v-model="password">
                  </div>
                  <div class="btn-box">
                      <a href="javascript:;" class="btn" @click="login">登录</a>
                  </div>

                  <div class="tips">
                      <div class="sms">手机短信登录/注册</div>
                      <div class="reg">立即注册<span>|</span>忘记密码？</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-l">
          <p class="copyright">Copyright 2019 goodstrace.com All Rights Reserved.</p>
      </div>
  </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            username:'',
            password:'',
            userId:''
        }
    },
    methods:{
        login(){
            let {username,password} = this;
            this.axios.post('/Login',{
                username,
                password
            }).then((res)=>{
                window.console.log(res.userid);
                // this.$cookie.set('userId',res.id,{expires:'session'});
            })
        }
    }
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    .login{
        &>.container{
            box-sizing: border-box;
            height: 131px;
            padding-top: 38px;   
            a{
                img{
                    height: 55px;
                    width: 55px;
                }
                .header-font{
                    height: 55px;
                    display: inline-block;
                    vertical-align: top;
                    margin-left: 10px;
                    font-size: 23px;
                    color: $colorA;
                    .des{
                        margin-top: 2px;
                        font-size: 17px;
                        color: $colorC;
                        letter-spacing: 1px;
                    }
                }
            }
        }
        .wrapper{           
            .container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 380px;
                .login-img{
                    width: 816px;
                    height: 380px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .login-form{
                    box-sizing: border-box;
                    padding-left: 31px;
                    padding-right: 31px;
                    background-color: $colorJ;
                    width: 410px;
                    height: 380px;
                    h3{
                        line-height: 23px;
                        font-size: 24px;
                        text-align: center;
                        margin: 40px auto 49px;
                        .checked{
                            color: $colorA;
                        }
                        .sep-line{
                            margin: 0 32px;
                        }
                    }
                    .input{
                        display: inline-block;
                        width: 348px;
                        height: 50px;
                        border: 1px solid #E5E5E5;
                        margin-bottom: 20px;
                        input{
                            width: 100%;
                            height: 100%;
                            border: none;
                            padding: 18px;
                        }
                    }
                    .btn{
                        width: 100%;
                        line-height: 50px;
                        margin-top: 10px;
                        font-size: 16px;
                    }
                    .tips{
                        margin-top: 14px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                        cursor: pointer;
                        .sms{
                            color: $colorA;
                        }
                        .reg{
                            color: #999999;
                            span{
                                margin: 0 7px;
                            }
                        }
                    }                  
                }
            }
        }
        .footer-l{
            height: 100px;
            padding-top: 70px;
            color: #999999;
            font-size: 16px;
            text-align: center;
            .copyright{
                margin-top: 13px;
            }
        }
    }
</style>