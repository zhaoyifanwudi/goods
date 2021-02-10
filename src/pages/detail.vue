<template>
  <div class="detail" :style="{minHeight:minheight + 'px'}">
      <div class="container">
          <div class="content clearfix">
              <div class="swiper">
                  <swiper :options = "swiperOption">
                      <swiper-slide  v-for="(item,index) in imgList" :key="index">
                          <img :src="item.img" alt="">
                      </swiper-slide>
                      <div class="swiper-pagination"  slot="pagination"></div>
                  </swiper>
              </div>
              <div class="con-desc">
                  <div class="desc-title">
                      <span class="title">{{detailist.title}}</span>
                      <span class="target">目标：{{detailist.target}}</span>
                      <div class="desc">
                          <span>截止日期：{{detailist.endTime}}</span>
                        <span>项目性质：{{detailist.desc}}</span>
                      </div>
                      <hr>
                      <span class="d-now">已完成:{{detailist.now}}</span>
                      <span class="d-now">爱心人次：{{detailist.lovePeple}}人</span>                     
                  </div>
                  <div class="con-version clearfix">
                      <div class="version fl" :class="{'checked':version==1}" @click="version=1">捐赠善款</div>
                      <div class="version fr" :class="{'checked':version==2}" @click="version=2">捐赠物资</div>
                  </div>
                  <div class="btn-group">
                      <a href="javascript:;" class="btn fl" @click="gotoAffirm">我要帮助</a>
                  </div>
              </div>
          </div>
          <div class="content-main clearfix">
              <div class="main-bar">
                  <div class="bar-list">
                      <ul v-for="(item,index) in barList" :key="index">
                          <li :class="{ 'on':sureList[index] }" @click="handle(index)">{{item}}</li>
                      </ul>
                  </div>
                  <div class="list-main" v-if="avList == 0">
                      <div class="main-con">
                          <div class="main-con-title">
                                这是一个<span>关乎爱、关乎记忆、关乎生命和尊严</span>的公益项目。
                          </div>
                          <div class="main-con-desc">
                                <div class="main-con-line">在我们周围，真切存在着这样的人群：邻居的爷爷常常看着家人忙里忙外，话到嘴边却又忘记了他们的名字，只好低下头沉默许久；隔壁曾经非常体面的婶婶，现在总是穿得很滑稽，常常把睡衣套在上衣的外面，买完东西在大街上游荡好几个小时却找不到回家的路，直到邻居发现并送她回家；满头银发的外婆念叨着出门备办年夜饭食材，她把购物袋放在门口，转了一圈又提上几大袋来，边走边重复刚才的话，忽然瞧见门口已经采办好的东西，她有些糊涂：“已经买好了啊？怎么又买了呢？” </div>
                                <img src="/imgs/con-swiper/sw1.jpg" alt="">
                                <div class="import">
                                    <div class="import-con">如果记忆被吞噬，爱在哪里？</div>
                                    <div class="import-con">如果亲人已忘记，家在哪里？</div>
                                    <div class="import-con">如果我不是我，你又在哪里？</div>
                                </div>
                                <div class="main-con-line">阿尔茨海默病(AD)，俗称老年痴呆症，世界平均上每3秒钟就会新增一个病例。它被认为是一种残酷的病，是一种起病隐匿的，临床上以记忆障碍、失语、失认、执行功能障碍等表现为特征，病因迄今未明。据不完全统计，中国有上千万阿尔茨海默病患者，一些专业医生甚至估计，不同程度的患者已高达5000万人(这类病症漏诊率高达70%以上），且大部分患者确诊时都是中晚期，并呈现年轻化趋势，给患者、家庭和社会带来沉重负担。 </div>
                                <div class="main-con-line">目前人们对于阿尔茨海默症的认识普遍较浅，医疗保障和社会福利较为短缺，专业护理机构和护理人员相对匮乏，使得患病老人和家属的生活质量受到了很大的影响。另一方面，中国的独生子女政策和大规模的人口迁移，也使得社会、家庭对患病老人缺乏相应的关心和照顾。获得“精神上的慰藉”，成为了很多阿尔茨海默病患者和家属最奢侈的愿望。 </div>
                                <img src="/imgs/con-swiper/sw2.jpg" alt="">
                                <div class="main-con-line">截至2018年底， 60岁及以上老年人口约有2.49亿人，我国阿尔茨海默症患病人数居世界第一。阿尔茨海默症患病率随年龄显著升高，早期不易被察觉，容易被忽视，所以关注阿尔茨海默症群体正变得更为紧迫。老吾老以及人之老。也许有一天我们发现父亲或母亲只是老了、记忆力衰退了，但直到他们看着你的脸，却在问“你是谁？”时，你会觉得有什么东西戳痛了你的心。随着时间的流逝，“脑海中的橡皮擦”就会慢慢抹去他们曾经最珍贵的记忆，面对这种目前没有药物能治愈的病症，只有爱和不厌其烦的陪护才是最好的治疗。</div>
                                <img src="/imgs/con-swiper/sw3.jpg" alt="">
                                <div class="import">
                                    <div class="import-con">也许我们到了那个年纪也会这样吧。</div>
                                    <div class="import-con">忘了自己刚刚做了什么，</div>
                                    <div class="import-con">忘了自己一大段的人生，</div>
                                    <div class="import-con">忘了对自己来说，最重要的人。</div>
                                </div>
                                <div class="main-con-line">我们希望通过健康宣教、公益倡导、群体活动、专业团队的社会工作等多种方式对社会大众和阿尔茨海默病患者及家属提高认知，为他们的生活进行良好的引导，减轻社会负担；我们希望在遗忘与守望中，给予他们理解与治疗的方式方法；我们希望通过该项目让大家认知这种病症存在的普遍性，并且更加坦然地面对它，并以此唤起大众对于这个群体的关注，做到早预防、早发现、早治疗；我们希望用“情感”的力量让大家看到治疗阿尔茨海默症的希望，帮助他们坦然面对自己，鼓励他们走进社会、融入人群，用更多的爱与陪伴对抗遗忘。</div>
                                <div class="main-con-line">由韩红爱心慈善基金会发起人韩红作曲的音乐剧作品《阿尔兹记忆的爱情》音乐专辑将于9月21日正式上线，收益所得将全额捐赠给“记忆包裹”公益项目，用于关注阿尔茨海默症群体。</div>
                                <div class="main-con-line">与阿尔茨海默症的对抗，任重道远；需要你我携手一起，守护那份最珍贵的记忆。 </div>

                          </div>
                          <div class="main-con-need">
                              项目所需：￥500000
                              <img src="" alt="">
                          </div>
                          <div class="main-con-budget">
                              <div class="main-con-name">
                                  项目预算
                              </div>
                              <img src="/imgs/con-swiper/need.jpg" alt="">
                          </div>
                          <div class="main-con-explain">
                              <div class="main-con-name">
                                  管理费说明
                              </div>
                              <span>管理费10%，主要用途：项目调研、回访，成员的工资、办公费、水电费、交通费等</span>
                          </div>
                          <div class="main-con-plan">
                              <div class="main-con-name">
                                  执行计划
                              </div>
                              <div class="main-font">
                                  <div>1、2019 年 8 月—10 月：韩红音乐剧作品《阿尔兹记忆的爱情》音乐专辑将在腾讯音乐上线，收益所得将全额捐赠给基金会用于该项目的执行。 </div>
                                  <div>
                                      <div> 2、2019 年11月：项目实施</div>
                                      <div>包裹申领主体：需为社会组织、团体（如社会福利院、社区街道养老驿站、养老机构等）  </div>
                                      <div>申领要求：（1）在北京市服务于记忆障碍群体的社会组织、团体。（2）2017、2018年累计服务记忆障碍群体家庭超过30户，具备详细的记忆障碍服务对象的信息。</div>
                                      <div>申领方式：通过关注基金会官方微信公众号，在线提交【记忆包裹】机构申领表。</div>
                                  </div>
                                  <div>3、2019 年 11 月—12 月，基金会将按规范统一采购，制定具体的发放计划，将记忆包裹发放给审核通过的申领机构。 </div>
                                  <div>4、2020 年 1 月-2020 年 12 月，基金会将收集整理记忆包裹使用情况进行系统反馈，评估项目有效性，以备项目的完善和优化。</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="list-main" v-else-if="avList == 1">
                      <div class="list-helpm">
                          <ul class="list-item-header">
                              <li class="col-2">时间</li>
                              <li class="col-1">金额</li>
                              <li class="col-3">姓名</li>
                              <li class="col-2">分类</li>
                              <li class="col-2">支付方式</li>
                          </ul>
                          <ul class="list-item-con">
                              <li class="item-con" v-for="(item,index) in helpList" :key="index">
                                  <div class="col-2">{{item.time}}</div>
                                  <div class="col-1 item-price">{{item.price}}</div>
                                  <div class="col-3">{{item.name}}</div>
                                  <div class="col-2">{{item.su}}</div>
                                  <div class="col-2">{{item.way}}</div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="list-main" v-else-if="avList == 2">
                      <div class="list-now">
                          <div class="mes-title">
                                <span>捐赠进展</span>
                                <span class="more"><a href="javascript:;">更多</a></span>
                          </div>
                      </div>
                  </div>
                  <div class="list-main" v-else-if="avList == 3">
                      <div class="list-plan-now">
                          <div class="mes-title">
                                <span>项目进展</span>
                                <span class="more"><a href="javascript:;">更多</a></span>
                          </div>
                      </div>
                  </div>
                  <div class="list-main" v-else-if="avList == 4">
                      <div class="list-mes">
                          <div class="mes-title">
                                <span>爱心留言</span>
                                <span class="more"><a href="javascript:;">我要留言</a></span>
                          </div>
                          <ul>
                            <li class="mes-con" v-for="(item,index) in messageList" :key="index">
                                <div class="mes-img">
                                    <img :src="item.img" alt="">
                                </div>
                                <div class="mes-con-main">
                                    <div class="love-people">
                                            <div class="love-name">{{item.name}}</div>
                                            <div class="love-time">{{item.time}}</div>
                                    </div>
                                    <div class="love-mes">
                                        {{item.content}}
                                    </div>
                                    <div class="love-fu">
                                        回复
                                    </div>
                                </div>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="main-list">
                  <div class="list-title">
                        <span>其他项目</span>
                        <span class="more">更多</span>
                  </div>
                  <div class="list-con">
                      <ul>
                          <li>
                              <div class="list-img">
                                  <a href="javascript:;">
                                      <img src="/imgs/row/row-5.jpg" alt="">
                                  </a>
                              </div>
                              <div class="list-txt">
                                  <span class="txt-title">百人援宁</span>
                                  <div class="now-p">已筹款：<span>￥1772345</span></div>
                              </div>
                          </li>
                          <li>
                              <div class="list-img">
                                  <a href="javascript:;">
                                      <img src="/imgs/row/row-5.jpg" alt="">
                                  </a>
                              </div>
                              <div class="list-txt">
                                  <span class="txt-title">百人援宁</span>
                                  <div class="now-p">已筹款：<span>￥1772345</span></div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detail',
    data(){
        return{
            minheight:0,
            version:1,
            id:this.$route.params.id,
            imgList:[
                {
                    img:'/imgs/con-swiper/sw1.jpg'
                },
                {
                    img:'/imgs/con-swiper/sw2.jpg'
                },
                {
                    img:'/imgs/con-swiper/sw3.jpg'
                },
            ],
            swiperOption:{
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            detailist:{
                title:'记忆包裹',
                target:'￥500000',
                endTime:'2020-10-01',
                desc:'社会关怀和文化传播',
                now:'70%',
                lovePeple:1200,
            },
            barList:['基本信息','捐赠动态','捐赠进展','项目进展','留言'],
            sureList:[true,false,false,false,false],
            avList:0,
            helpList:[
                {
                    id:'1',
                    time:'2020-04-05',
                    price:10000,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },
                {
                    id:'2',
                    time:'2020-04-05',
                    price:1500,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'3',
                    time:'2020-04-05',
                    price:1200,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'4',
                    time:'2020-04-05',
                    price:1000,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'5',
                    time:'2020-04-05',
                    price:3000,
                    name:'派大星',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'6',
                    time:'2020-04-05',
                    price:1000,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'7',
                    time:'2020-04-05',
                    price:500,
                    name:'王先生',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'8',
                    time:'2020-04-05',
                    price:5000,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'9',
                    time:'2020-04-04',
                    price:100,
                    name:'李同学',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'10',
                    time:'2020-04-04',
                    price:600,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'11',
                    time:'2020-04-04',
                    price:500,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'12',
                    time:'2020-04-04',
                    price:50,
                    name:'爱心人士',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },{
                    id:'13',
                    time:'2020-04-04',
                    price:1000,
                    name:'张',
                    su:'资金捐赠',
                    way:'线上捐赠'

                },
            ],
            messageList:[
                {
                    id:'1',
                    img:'/imgs/con-swiper/sw1.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'2',
                    img:'/imgs/con-swiper/sw2.jpg',
                    name:'张女士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'3',
                    img:'/imgs/con-swiper/sw3.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'4',
                    img:'/imgs/con-swiper/sw1.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'5',
                    img:'/imgs/con-swiper/sw2.jpg',
                    name:'张女士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'6',
                    img:'/imgs/con-swiper/sw3.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'7',
                    img:'/imgs/con-swiper/sw1.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'8',
                    img:'/imgs/con-swiper/sw2.jpg',
                    name:'张女士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                {
                    id:'9',
                    img:'/imgs/con-swiper/sw3.jpg',
                    name:'爱心人士',
                    time:'2020-04-05',
                    content:'加油！'
                },
                
            ]

        }
    },
    mounted(){
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
    },
    methods:{
        handle(obj){

            this.avList = obj;
            for(var i = 0;i < this.barList.length;i++){
                this.$set(this.sureList,i,false);
                // this.sureList[i] = false;              
            }
            this.$set(this.sureList,obj,true);
        },
        //to-do  helpList滚动加载
        //to-do  messageList滚动加载
        gotoAffirm(){
            this.$router.push({
                path:'/affirm',
                query:{
                    id:this.id,
                    version:this.version
                }
            })
            //to-do
            // this.axios.post('',{
            //     id:this.id,
            //     version:this.version
            // }).then(()=>{
            //     this.$router.push({
            //         path:'/affirm',
            //         query:{
            //             version:this.version
            //         }
            //     })
            // })
        }
    }
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/base.scss';
    .detail{
        .content{
            margin-top: 10px;
            
            width: 100%;
            .swiper{
                height: 338px;
                width: 500px;
                vertical-align: middle;
                float: left;
                margin-right: 26px;
                img{
                    height: 338px;
                }

            }
            .con-desc{
                box-sizing: border-box;
                float: right;
                width: 700px;
                height: 338px;
                padding-right: 10px;
                padding-top: 5px;
                .desc-title{
                    .title{
                        display: block;
                        line-height: 40px;
                        font-size: 37px;
                        letter-spacing: 1px;
                        color: $colorA;
                    }
                    .target{
                        font-size: 21px;
                        display: block;
                        line-height: 20px;
                        margin: 20px 0;
                    }
                    .desc{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 20px;
                        font-size: 17px;
                        color: $colorC;
                        margin-bottom: 10px;
                    }
                    .d-now{
                        margin-top: 10px;
                        /* padding: 0 10px; */
                        display: block;
                        line-height: 20px;
                        font-size: 19px;
                        font-weight: 700;
                    }
                    
                }
                .con-version{
                    margin:20px 0;
                    /* padding: 0 10px; */
                    padding-right: 30px;
                    .version{
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                        color: #333333;
                        border: 1px solid #e5e5e5;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                        &.checked{
                            border: 1px solid $colorA;
                            color: $colorA;
                        }
                    }
                }
                .btn-group{
                    height: 45px;
                    /* padding: 0 10px; */
                    .btn{
                        width: 287px;
                        height: 50px;
                        line-height: 50px;
                        font-size: 16px;
                    }
                }

            }
        }
        .content-main{
            margin-top: 40px;

            .main-bar{
                float: left;
                width: 990px;
                
                .bar-list{
                    width: 100%;
                    height: 40px;
                    border-bottom: 1px solid #e5e5e5;
                    box-sizing: border-box;
                    padding-left: 20px;
                    padding-bottom: 2px;
                    li{
                        
                        height: 38px;
                        line-height: 38px;
                        width:116px;
                        text-align: center;
                        float: left;
                        font-size: 16px;
                        cursor: pointer;
                        &.on{
                            border-top:2px solid $colorA;
                            border-left: 1px solid #e5e5e5;
                            border-right: 1px solid #e5e5e5;
                            color: $colorA;
                        }
                    }
                }
                .list-main{
                    
                    margin-top: 30px;
                    .main-con{
                        width: 100%;
                        box-sizing: border-box;
                        padding-left: 100px;
                        padding-right: 200px;
                        font-size: 16px;
                        color: rgb(119, 119, 119);
                        .main-con-title{
                            margin-bottom: 40px;
                            span{
                                color: $colorA;
                                font-weight: 600;
                            }
                        }
                        .main-con-desc{
                            .main-con-line{
                                line-height: 28px;
                                margin: 20px 0;
                            }
                            img{
                                margin: 15px 0;
                                height: 100%;
                            }
                            .import{
                                margin-bottom: 20px;
                                .import-con{
                                    line-height: 30px;
                                    color: $colorA;
                                    font-weight: 600;
                                    letter-spacing: 1px;
                                }
                            }
                        }
                        .main-con-need{
                            font-size: 25px;
                            line-height: 30px;
                            margin: 40px 0;
                            color: #333333;
                            font-weight: 700;
                        }
                        .main-con-name{
                            line-height: 25px;
                            margin-bottom: 30px;
                            font-size: 19px;
                            font-weight: 600;
                            color: #333333;
                        }
                        .main-con-budget{
                            margin-bottom: 30px;
                            img{
                                height: 100%;
                            }
                        }
                        .main-con-explain{
                            margin-bottom: 30px;
                            span{
                                line-height: 28px;
                            }
                        }
                        .main-con-plan{
                            margin-bottom: 30px;
                            .main-font{
                                line-height: 28px;
                            }
                        }
                    }
                    .list-helpm{
                        padding: 0 30px;
                        .col-1{
                            flex: 1;
                        }
                        .col-2{
                            flex: 2;
                        }
                        .col-3{
                            flex: 3;
                        }
                        .list-item-header{
                            border-top: 1.5px solid $colorA;
                            display: flex;
                            height: 40px;
                            line-height: 40px;
                            background-color: #f5f4f3;
                            text-align: center;
                            color: #333333;
                            font-size: 16px;
                            li{
                                border: 0.1px solid #e5e5e5;
                                border-top: 0;
                            }
                            
                        }
                        .list-item-con{
                            .item-con{
                                display: flex;
                                height: 40px;
                                line-height: 40px;
                                
                                text-align: center;
                                color: #333333;
                                font-size: 16px;
                                div{
                                    border: 0.1px solid #e5e5e5;
                                    border-top: 0;
                                }
                                .item-price{
                                    color:#00a60c;
                                }
                            }
                        }
                    }
                    .mes-title{
                            height: 40px;
                            padding: 0 10px;
                            display: flex;
                            justify-content: space-between;
                            align-content: center;
                            line-height: 40px;
                            font-size: 16px;
                            color: $colorA;
                            letter-spacing: 1px;
                            background-color: #f5f4f3;
                            .more{
                                a{
                                    color: $colorD;
                                    font-size: 14px;
                                }
                            }
                        }
                    .list-mes{
                        padding: 0 30px;
                        
                        .mes-con{
                            height: 130px;
                            padding: 20px 10px;
                            box-sizing: border-box;
                            border-bottom: 1px solid #f5f4f3;
                            display: flex;
                            justify-content: space-between;
                            
                            .mes-img{
                                width: 50px;
                                margin-right: 10px;
                                margin: auto 0;
                                img{
                                    height: 50px;
                                    width: 50px;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    
                                }
                            }
                            .mes-con-main{
                                width: 830px;
                                .love-people{
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    line-height: 30px;
                                    margin-bottom: 7px;
                                    .love-name{                                       
                                        font-size: 16px; 
                                    }
                                    .love-time{
                                        font-size: 14px;
                                    }
                                }
                                .love-mes{
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    height: 33px;
                                    font-size: 14px;
                                    line-height: 14px;
                                }
                                .love-fu{
                                        height: 10px;
                                        text-align: right;
                                        line-height: 10px;
                                }

                            }
                        }
                    }
                    .list-now{
                        padding: 0 30px;
                    }
                    .list-plan-now{
                        padding: 0 30px;
                    }

                }
            }
            .main-list{
                float: right;
                height: 460px;
                width: 220px;
                padding: 15px 10px;
                border: 1px solid #e5e5e5;
                box-sizing: border-box;
                .list-title{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    line-height: 20px;
                    font-size: 16px;
                    color: #333333;
                    font-weight: 550;
                    letter-spacing: 1px;
                    .more{
                        color: $colorD;
                        font-size: 14px;
                        &:after{
                            content: ' ';
                            display: inline-block;
                            vertical-align: middle;
                            width: 12px;
                            height: 12px;
                            background: url('/imgs/icon-left.png') no-repeat center;
                            background-size: 20px;
                            margin-left: 3px;
                        }
                    }

                }
                .list-con{
                    margin-top: 15px;
                    width: 200px;
                    li{
                        height: 190px;
                        width: 200px;
                        border-bottom: 0.5px solid $colorD;
                        &:last-child{
                            margin-top: 23px;
                            border-bottom: 0;
                        }
                        .list-img{
                            height: 125px;
                            width: 200px;
                            
                            img{
                                width: 200px;
                            }
                        }
                        .list-txt{
                            .txt-title{
                                display: block;
                                line-height: 16px;
                                font-size: 16px;
                                margin:5px 0;
                            }
                            .now-p{
                                line-height: 16px;
                                font-size: 16px;
                                color: $colorD;
                                span{
                                    color: $colorA;
                                }
                            }
                        }
                        
                    }
                }
            }
        }
        
    }
</style>