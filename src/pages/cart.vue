<template>
  <div class="cart" :style="{minHeight:minheight + 'px'}">
      <div class="container">
          <div class="cart-wrap" v-if="list.title != ''">
              <div class="item-cart">
                  <div class="cart-info">
                      <div class="info-title">
                          <h2 :class="{'checked':list.showButton == 1}">{{list.title}}</h2>
                          <span :class="{'checked':list.showButton == 1}">编号：{{list.id}}</span>
                      </div>
                      <p :class="{'checked':list.showButton == 1}"><span :class="{'checked':list.showButton == 1}">您的捐赠：</span>{{list.donate}}</p>
                      <p :class="{'checked':list.showButton == 1}"><span :class="{'checked':list.showButton == 1}">您的留言：</span>{{list.say}}</p>
                  </div>
                  <div class="cart-total">
                      <p :class="{'checked':list.showButton == 1}"><span>物资动态：</span>{{list.now}}</p>
                      <div class="total-foot">
                          
                          <div class="btn" v-show="list.showButton == 1" @click="goPay(list.id)">未完成捐赠</div>
                          <div class="btn" v-show="list.showButton == 2">查看捐赠详情</div>
                          <p v-show="list.showButton == 2 || list.showButton == 0">位置详情<em class="icon-down" :class="{'up':list.showDetail}" @click="list.showDetail = !list.showDetail"></em></p>
                      </div>
                  </div>
              </div>
              <div class="item-detail" v-if="list.showDetail">
                  <div class="detail-desc" v-show="list.showButton == 2 || list.showButton == 0">
                    <baidu-map class="map" style="display: flex; flex-direction: column" :center=list.center :scroll-wheel-zoom="true">
                        <bm-marker :position=list.position :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                            <bm-label content="这里是目的地" :labelStyle="{color: 'red', fontSize : '15px'}" :offset="{width: -35, height: 30}"/>
                        </bm-marker>
                        <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
                    </baidu-map>
                  </div>
                  <div class="detail-now">
                    <el-steps :active=list.no align-center>
                        <el-step title="late" :description=list.lated></el-step>
                        <el-step title="now" :description=list.nowad></el-step>
                        <el-step title="end" :description=list.end></el-step>
                    </el-steps>
                  </div>
              </div>
          </div>
          <div class="cart-wrap" v-for="(item,index) in cartList" :key="index">
              <div class="item-cart">
                  <div class="cart-info">
                      <div class="info-title">
                          <h2 :class="{'checked':item.showButton == 1}">{{item.title}}</h2>
                          <span :class="{'checked':item.showButton == 1}">编号：{{item.id}}</span>
                      </div>
                      <p :class="{'checked':item.showButton == 1}"><span :class="{'checked':item.showButton == 1}">您的捐赠：</span>{{item.donate}}</p>
                      <p :class="{'checked':item.showButton == 1}"><span :class="{'checked':item.showButton == 1}">您的留言：</span>{{item.say}}</p>
                  </div>
                  <div class="cart-total">
                      <p :class="{'checked':item.showButton == 1}"><span>物资动态：</span>{{item.now}}</p>
                      <div class="total-foot">
                          
                          <div class="btn" v-show="item.showButton == 1" @click="goPay(item.id)">未完成捐赠</div>
                          <div class="btn" v-show="item.showButton == 2">查看捐赠详情</div>
                          <p v-show="item.showButton == 2 || item.showButton == 0">位置详情<em class="icon-down" :class="{'up':item.showDetail}" @click="item.showDetail = !item.showDetail"></em></p>
                      </div>
                  </div>
              </div>
              <div class="item-detail" v-if="item.showDetail">
                  <div class="detail-desc" v-show="item.showButton == 2 || item.showButton == 0">
                    <baidu-map class="map" style="display: flex; flex-direction: column" :center=item.center :scroll-wheel-zoom="true">
                        <bm-marker :position=item.position :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                            <bm-label content="这里是目的地" :labelStyle="{color: 'red', fontSize : '15px'}" :offset="{width: -35, height: 30}"/>
                        </bm-marker>
                        <bm-view style="width: 100%; height:100px; flex: 1"></bm-view>
                    </baidu-map>
                  </div>
                  <div class="detail-now">
                    <el-steps :active=item.no align-center>
                        <el-step title="late" :description=item.lated></el-step>
                        <el-step title="now" :description=item.nowad></el-step>
                        <el-step title="end" :description=item.end></el-step>
                    </el-steps>
                  </div>
              </div>
          </div>
          <!-- <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled = "busy"
            infinite-scroll-distance = "410"
          >
            <img src="/imgs/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div> -->
          <no-data v-if="!loading &&lengths == 0"></no-data>
      </div>
      
  </div>
</template>

<script>
import {mapState} from 'vuex';
import NoData from './../components/NoData'
// import infiniteScroll from 'vue-infinite-scroll'
export default {
    name:'cart',
    components:{
        NoData
    },
    data(){
        return{
            minheight:0,
            loading:false,
            busy:false,//滚动加载是否触发
            showNextPage:true,//加载更多控制
            pageNum:1,
            // showDetail:true,//detail
            // showButton:0,//0 1 2
            location: '北京',
            keyword: '百度',
            cartList:[
                {
                    title:'记忆包裹',
                    id:'2020041201',
                    donate:'人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；人民币：10000元；',
                    say:'加油！',
                    now:'正发往系统仓库~',
                    showButton:0,
                    showDetail:false,
                    center:'郑州',
                    position:{lng: 116.404, lat: 39.915},
                    end:'北京系统总仓库，进行公益活动。',
                    nowad:'郑州分仓库,即将发往北京。',
                    lated:'郑州分仓库收到捐款。',
                    no:1
                },{
                    title:'个人求助',
                    id:'2020041303',
                    donate:'人民币：1000元；',
                    say:'加油！',
                    now:'未完成捐赠，抓紧时间哦~',
                    showButton:1,
                    showDetail:false,
                    center:'',
                    position:{lng: 116.404, lat: 39.915}
                },{
                    title:'乡村教育',
                    id:'2020041503',
                    donate:'人民币：50000元；书包：1000个；衣物：500件；文具盒：1000个；等等',
                    say:'加油！',
                    now:'已到达指定爱心小学~',
                    showButton:2,
                    showDetail:false,
                    center:'正阳',
                    position:{lng: 116.404, lat: 39.915},
                    end:'正在贵州进行公益活动~',
                    nowad:'北京系统总仓库发出，随公益人员前往贵州。',
                    lated:'北京系统总仓库正在集合物资，指定具体公益计划。',
                    no:2
                },
                
            ],
            
            lengths:0
        }
    },
    computed:{
        ...mapState(['list'])
    },
    mounted(){
        
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
        this.lengths = this.cartList.length;
        window.console.log(this.list);
        // this.getCartList();
    },
    methods:{
        getCartList(){
            //to-do
        },
        goPay(orderNo){
            // this.$router.push('/order/pay');
            // this.$router.push({
            //     name:'order-pay',
            //     query:{
            //         orderNo
            //     }
            // });
            this.$router.push({
                path:'/confirm',
                query:{
                    orderNo
                }
            });
        },
        //to-do下拉加载更多
        // scrollMore(){
        //     this.busy = true;
        //     setTimeout(()=>{
        //         this.pageNum++;
        //         this.getList();
        //     },500);
        // },
        // getList(){
        //     this.loading = true;
        //     this.axios.get('/orders',{
        //         params:{
        //             pageSize:10,
        //             pageNum:this.pageNum
        //         }
        //     }).then((res)=>{
        //         this.list = res.list.concat(res.list);
        //         this.loading = false;
        //         if(res.hasNextPage){
        //             this.busy = false;
        //         } else {
        //             this.busy = true;
        //         }
        //     })
        // }
    }
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    .cart{
        background-color: #f5f5f5;
        padding-top: 30px;
        padding-bottom: 61px;
        .cart-wrap{
            padding: 32px 50px;
            box-sizing: border-box;
            background-color: #ffffff;
            font-size: 14px;
            margin-bottom: 30px;
            .item-cart{
                display: flex;
                align-items: center;
                
                .cart-info{
                    margin-right: 200px;
                    width: 600px;
                    .info-title{      
                        h2{
                            display: inline-block;
                            font-size: 24px;
                            color: $colorA;
                            margin-bottom: 20px;
                            letter-spacing: 1px;
                            margin-right: 100px; 
                            &.checked{
                                color: $colorD;
                            }  
                        }
                        span{
                            display: inline-block;
                            &.checked{
                                color: $colorD;
                            }
                        }
                    }
                    p{
                        display: block;
                        color: #666666;
                        margin-bottom: 10px;
                        span{
                            color: #000000;
                            &.checked{
                                color: $colorD;
                            }
                        }
                        &.checked{
                            color: $colorD;
                        }
                    }
                }
                .cart-total{
                    
                    &>p:first-child{
                        margin-top: 30px;
                        margin-bottom: 30px;
                        &.checked{
                            color: $colorD;
                        }
                    }
                    .total-foot{
                        padding-top: 35px;
                        box-sizing: border-box;
                        height: 30px;
                        width: 220px;
                        /* display: flex;
                        justify-content: space-between;
                        align-items: center; */
                        p{
                            float: right;
                            line-height: 30px;
                            
                        }
                        .icon-down{
                            display: inline-block;
                            width: 14px;
                            height: 10px;
                            background: url('/imgs/icon-down.png') no-repeat center;
                            background-size: contain;
                            margin-left: 9px;
                            transition:all .5s;
                            cursor: pointer;
                            &.up{
                                transform: rotate(180deg);
                            }
                        }
                        .btn{
                            float: right;
                            margin-left: 20px;
                            
                        }
                    }
                }
            }
            .item-detail{
                border-top: 1px solid #d7d7d7;
                padding-top: 30px;
                font-size: 14px;
                margin-top: 45px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .detail-desc{
                    height: 200px;
                    width: 700px;
                    .map{
                        height: 200px;
                        width: 700px;
                    }
                }
                .detail-now{
                    margin-left: 30px;
                    height: 200px;
                    width: 500px;
                }
            }
        }
    }
</style>