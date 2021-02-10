<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
      <div class="container">
          <div class="pro-title">
              {{title}}
          </div>
          <div class="pro-param">
              <a href="javascript:;">详情</a><span>|</span>
              <a href="javascript:;">所需物资</a><span>|</span>
              <a href="javascript:;">留言</a>
              <slot name="more"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'nav-bar',
    props:{
        title:String
    },
    data(){
        return{
            isFixed:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight);
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152 ? true : false;
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.initHeight,false);
    }
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        background-color: $colorG;
        z-index: 10;
        &.is_fixed{
            width: 100%;
            position: fixed;
            top: 0;
            box-shadow: 0 5px 5px $colorE;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: 18px;
                color: $colorB;
                font-weight: bold;
                letter-spacing: 1px;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin: 0 10px;
                }
                a{
                    color: $colorC;
                }
            }
        }
    }
</style>