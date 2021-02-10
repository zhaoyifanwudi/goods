<template>
  <div class="donate" :style="{minHeight:minheight + 'px'}">
      <div class="container">
          <div class="wrapper">
              <div class="left-bar">
                  <div class="bar-list">
                      <span @click="showPage = 1">捐赠项目</span>
                  </div>
                  <div class="bar-list">
                      <span @click="showPage = 2">捐赠方式</span>
                      <ul>
                          <li class="bar-type" @click="showDetails(1)">网上捐款</li>
                          <li class="bar-type" @click="showDetails(2)">银行转账</li>
                          <li class="bar-type" @click="showDetails(3)">邮局汇款</li>
                          <li class="bar-type" @click="showDetails(4)">邮递物资</li>
                          <li class="bar-type" @click="showDetails(5)">现场捐赠</li>
                      </ul>
                  </div>
                  <div class="bar-list">
                      <span>我的捐赠</span>
                  </div>
                  <div class="bar-list">
                      <span>募捐活动</span>
                  </div>
              </div>
              <div class="con-chirld" v-show="showPage == 2">
                    <span>捐款须知</span>
                    <p>感谢您的爱心捐款！在接收到您的捐赠并确认到账后，我们会为您提供公益事业捐赠统一票据及感谢信，请您在捐款时提供正确的电子邮箱地址，以便我们为您发送电子捐赠票据和感谢信。</p>
                    <p>请您时刻查看捐赠动向，对我们的公益行为进行监督!</p>
                    <p>如果您想向具体项目捐款，请移步捐赠项目，查看你想帮助的对象，然后决定捐赠事宜；如果你想向系统仓库直接捐赠，下列为各种捐赠方式！</p>
                    <span class="listshow1">网上捐款</span>
                    <div class="con-desc">
                        <a href="javascript:;" @click="showModalM = true">
                            <img src="/imgs/money.png" alt="" width="100%">
                        </a>
                    </div>
                    <span class="listshow2">银行转账</span>
                    <div class="con-desc">
                        <p>开户单位：******</p>
                        <p>人民币开户行：************</p>
                        <p>人民币开户行：************</p>
                        <p>外币开户行：************</p>
                        <p>外币账号：************</p>
                        <p>（请捐款人注明捐款用途）</p>
                    </div>
                    <span class="listshow3">邮局汇款</span>
                    <div class="con-desc">
                        <p>邮局汇款请注明客户号：******</p>
                        <p>收款人：************</p>
                        <p>地址：************</p>
                        <p>邮编：************</p>
                    </div>
                    <span class="listshow4">邮递物资</span>
                    <div class="con-desc">
                        <p>收件人：***</p>
                        <p>地址：************</p>
                        <p>联系方式：***********</p>
                        <div class="con-ino">
                            <span @click="showModal = true">填写捐赠详情</span>
                        </div>
                    </div>
                    <span class="listshow5">现场捐赠</span>
                    <div class="con-desc">
                        <p>鉴于我会已根据财政部要求升级了票据管理程序，捐赠票据实行电子化管理，捐赠人可在工作时段到现场捐赠，非工作时段建议登陆官网进行线上捐赠，您将收到财政统一的电子捐赠票据。</p>
                        <p>地址：************</p>
                    </div>
              </div>
              <div class="chirld-content" v-show="showPage == 1">
                    <div class="con-work">
                        <div class="con-title">
                            <span>公益项目</span>
                            <span class="more">更多</span>
                        </div>
                        <div class="con-list">
                            <ul v-for="(item,index) in conList" :key="index">
                                <li class="list-content">
                                    <a href="" target="_blank">{{item.title}}</a>
                                    <span>[{{item.time}}]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="con-work">
                        <div class="con-title">
                            <span>个人求助</span>
                            <span class="more">更多</span>
                        </div>
                        <div class="con-list">
                            <ul v-for="(item,index) in conList" :key="index">
                                <li class="list-content">
                                    <a href="" target="_blank">{{item.title}}</a>
                                    <span>[{{item.time}}]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="swiper-bar">
                        <swiper :options = "bar" class="swiper-bar-con">
                            <swiper-slide v-for="(item,index) in barlist" :key="index">
                                <div class="swiper-con">
                                    <img :src="item.img" alt="">
                                    <div class="con-font">
                                        <a :href="'/#/detail/' + item.id" target="_blank"><span class="font">{{item.tag}}</span>{{item.name}}</a>
                                        <span class="font-con">
                                            {{item.desc}}
                                        </span>
                                    </div>
                                    <div class="con-footer">
                                        <span class="footer-l">筹款目标：{{item.target}}</span>
                                        <div class="con-button">
                                            <span>立即捐款</span>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="con-work">
                        <div class="con-title">
                            <span>乡村教育</span>
                            <span class="more">更多</span>
                        </div>
                        <div class="con-list">
                            <ul v-for="(item,index) in conList" :key="index">
                                <li class="list-content">
                                    <a href="" target="_blank">{{item.title}}</a>
                                    <span>[{{item.time}}]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
              </div>
          </div>
      </div>
        <modal 
            title="捐赠详情" 
            sureText="确认" 
            btnType="1" 
            modalType="middle"
            :showModal="showModal"
            @submit="modalMessage"
            @cancel="showModal = false">
            <template v-slot:body>
                <div class="modal-con">
                    <div class="item">
                        <input type="text" class="input" placeholder="您的姓名" v-model="addressItem.receiverName">
                        <input type="text" class="input" placeholder="您的手机号" v-model="addressItem.receiverMobile">
                    </div>
                    <div class="item">
                        <textarea name="desc" v-model="addressItem.receiverItem" placeholder="物资详情"></textarea>
                    </div>
                    <div class="item">
                        <textarea name="other" v-model="addressItem.receiverOther" placeholder="备注"></textarea>
                    </div>
                </div>    
            </template>   
        </modal>
        <modal 
            title="捐赠详情" 
            sureText="确认" 
            btnType="1" 
            modalType="middle"
            @submit="showNext"
            :showModal="showModalM"
            @cancel="showModalM = false">
            <template v-slot:body>
                <div class="modal-con">
                    <div class="item">
                        <input type="text" class="input" placeholder="您的姓名（选填）" v-model="donateItem.receiverName">
                        <input type="text" class="input" placeholder="您的手机号（选填）" v-model="donateItem.receiverMobile">
                    </div>
                    <div class="item">
                        <input type="text" class="input" placeholder="捐赠金额（只需要输入数字）" v-model="donateItem.receivermoney">
                    </div>
                    <div class="item">
                        <textarea name="other" v-model="donateItem.receiverOther" placeholder="备注"></textarea>
                    </div>
                </div>    
            </template>   
        </modal>
        <modal 
            title="支付方式" 
            :showModal="showMoney"
            @cancel="showMoney = false">
            <template v-slot:body>
                <div class="pay-type">
                    <div class="pay pay-ali" :class="{'checked':payType == 1}" @click="paySubmit()"></div>
                    <div class="pay pay-wechat" :class="{'checked':payType == 2}" @click="paySubmit()"></div>
                </div>    
            </template>   
        </modal>
  </div>
</template>

<script>
import Modal from './../components/Modal'
export default {
    name:'donate',
    components:{
        Modal
    },
    data(){
        return{
            minheight:0,
            showIndex:null, //控制页面滑动
            showPage:2,
            el:0,
            showModal:false,
            showModalM:false,
            showMoney:false,
            addressItem:{},
            donateItem:{
                receivermoney:0,
                receiverMobile:'',
                receiverName:'',
                receiverOther:''
            },
            bar:{
                autoplay:true,
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            conList:[
                {
                    id:'1',
                    title:'致新冠肺炎疫情防控爱心捐赠人的感谢信',
                    time:'2020-02-26'
                },{
                    id:'2',
                    title:'价值300万元的连花清瘟胶囊运达湖北武汉',
                    time:'2020-02-26'
                },{
                    id:'3',
                    title:'中山瑞福医疗器械科技有限公司捐赠31.2万元防护物资支援疫情防控一线工作者',
                    time:'2020-03-27'
                },{
                    id:'4',
                    title:'哥斯达黎加群众捐赠的2000个口罩已分发至宜昌市有关单位',
                    time:'2020-03-27'
                },{
                    id:'5',
                    title:'立白集团及其控股朝云集团定向捐赠给江苏的消毒除菌洗涤物资已发放至全省28家新冠肺炎定点救治医院',
                    time:'2020-03-24'
                },{
                    id:'6',
                    title:'巴布亚新几内亚华侨华人捐赠的医疗物资已分发至宜昌市',
                    time:'2020-02-23'
                },
            ],
            //bar轮播
            barlist:[
                {
                    id:'1',
                    img:'/imgs/row/row-1.jpg',
                    tag:'[社会关怀与文化传播]',
                    name:'记忆包裹',
                    desc:'即使记忆会消逝，但爱一直在。与阿尔茨海默症的对抗任重道远，旨在通过宣传倡导，使更多人关注记忆障碍群体，一起努力与时间对抗，让遗憾少一些，再少一些。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'2',
                    img:'/imgs/row/row-2.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援滇',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'3',
                    img:'/imgs/row/row-3.jpg',
                    tag:'[医疗援助与发展]',
                    name:'救在乡间',
                    desc:'西部地区急救室援助计划',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'4',
                    img:'/imgs/row/row-4.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援陕',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'5',
                    img:'/imgs/row/row-5.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援宁',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'6',
                    img:'/imgs/row/row-6.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援甘',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'7',
                    img:'/imgs/row/row-7.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援贵',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },
                {
                    id:'8',
                    img:'/imgs/row/row-8.jpg',
                    tag:'[医疗援助与发展]',
                    name:'百人援青',
                    desc:'致力于帮助缩小中国东西部医疗差距，改善偏远贫困地区的医疗环境，将先进的医学理念和医疗技术以落地形式应用到西部少数民族地区，专注为西部地区提供专业高效的医疗援助，开展基层医生培训、大型医疗义诊行动；援建急救室、复明中心；关爱特殊群体；为重大自然灾害提供人道主义应急救援等。',
                    target:'经常性项目',
                    sum:10,
                    peoples:100
                },

            ],       
        }
    },
    mounted(){
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
    },
    methods:{
        // handle(obj){

        //     this.avList = obj;
        //     for(var i = 0;i < this.barList.length;i++){
        //         this.$set(this.sureList,i,false);
        //         // this.sureList[i] = false;              
        //     }
        //     this.$set(this.sureList,obj,true);
        // },
        getel(num){
            this.el = document.getElementsByClassName(`listshow${num}`)[0].offsetTop;
            this.$nextTick(()=>{
                window.scrollTo({"behavior":"smooth","top":this.el});
            })
        },
        showDetails(num){
            this.showPage = 2
            // var el=document.getElementsByClassName(`listshow${num}`)[0];
            // window.console.log(el.offsetTop);
            
            this.getel(num);
            // window.console.log(this.el);
            // if(this.showIndex==num){
            //     this.showIndex=null;
            // }else{
            //     this.showIndex=num;
            // }
            
        
        },
        modalMessage(){
            this.showModal=false;
            //to-do:提交
            // this.axios.post('',{
            //    addressItem
            // }).then(()=>{
            //     this.showModal=false;
            // });
            this.$message({
                message: '提交成功，感谢您，请尽快填写快递单号哦！',
                type: 'success'
            });
        },
        showNext(){
            if(this.donateItem.receivermoney == 0){
                this.$message({
                    message: '未填写捐献金额！',
                    type: 'warning'
                });
            }else{
                //to-do:提交
                // this.axios.post('',{
                //   donateItem
                // }).then(()=>{
                //     this.showModal=false;
                // });
                this.showModalM = false;
                this.showMoney = true;
            }
            
        },
        paySubmit(){

        }
    }
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    .donate{
        .wrapper{
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
            .left-bar{
                width: 270px;
                .bar-list{
                    width: 270px;
                    span{
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        display: inline-block;
                        text-align: center;
                        background-color: $colorA;
                        color: #ffffff;
                        cursor: pointer;
                        font-size: 19px;
                        margin: 0 0 25px 0;
                        
                    }
                    
                    ul{
                        margin-top: -25px;
                        margin-bottom: 25px;
                        .bar-type{
                            height: 45px;
                            line-height: 45px;
                            display: inline-block;
                            text-align: center;
                            width: 100%;
                            background-color: #f7f7f7;
                            color: #000000;
                            font-size: 16px;
                            cursor: pointer;
                            &:hover{
                                color: $colorA;
                            }                           
                        }
                    }
                }

            }
            .con-chirld{
                margin-left: 40px;
                padding-top: 10px;
                padding-right: 5px;
                width: 100%;
                span{
                    display: block;
                    font-size: 16px;
                    color: #CC0202;
                    font-weight: bold;
                    line-height: 30px;
                }
                p{
                    color: #646464;
                    line-height: 30px;
                    text-indent: 2em;
                    font-size: 14px;
                }
                .con-desc{
                    width: 100%;
                    background-color: #f4f5f6;
                    margin: 20px 0;
                    padding: 10px;
                    p{
                        line-height: 30px;
                        color: #646464;
                        text-indent: 2em;
                    }
                    a{
                        img{
                            height: 100px;
                            width: 252px;
                        }
                    }
                    .con-ino{
                        width: 150px;                       
                        background-color: $colorA;
                        border-radius: 10px;
                        margin-left: 25px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        cursor: pointer;
                        span{                    
                            line-height: 50px;
                            color: #ffffff;
                            font-size: 16px;
                            text-align: center;
                            
                        }
                    }
                }
            }
            .chirld-content{
                margin-left: 40px;
                padding-right: 5px;
                width: 100%;
                .con-title{
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                    height: 37px;
                    border-bottom: 2px solid $colorA;
                    padding-left: 25px;
                    padding-right: 10px;
                    line-height: 37px;
                    font-size: 24px;
                    color: $colorA;
                    font-weight: bold;
                    letter-spacing: 1px;
                    .more{
                        color: $colorC;
                        font-size: 14px;
                        &:after{
                            content: ' ';
                            display: inline-block;
                            vertical-align: middle;
                            width: 20px;
                            height: 20px;
                            background: url('/imgs/icon-left.png') no-repeat center;
                            background-size: 20px;
                            margin-left: 5px;
                        }
                    }
                }
                .con-work{
                    width: 100%;
                    height: 255px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                    .con-list{
                        margin-top: 20px;
                        height: 199px;
                        .list-content{
                            /* margin-top: 20px;
                            height: 199px; */                          
                            background: url('https://www.redcross.org.cn/Templets/RedCross2019/images/list-bg.png') left 9px no-repeat;
                            font-size: 17px;
                            height: 27px;
                            margin-top:5px;
                            margin-left: 9px;
                            padding-left: 16px;
                            padding-right:16px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center; 
                            a{
                                line-height: 20px;
                                color: #333333;
                                letter-spacing: 0.5px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 600px;
                            }                           
                        }
                    }
                }
                .swiper-bar{                   
                    height: 318px;
                    margin-top: 30px;
                    width: 916px;
                    overflow: hidden;
                    .swiper-bar-con{
                        height: 300px;
                        .swiper-con{
                            width: 285px;
                            img{
                                width: 285px;
                                height: 160px;
                            }
                            .con-font{
                                a{
                                    .font{
                                        color: $colorA;
                                        margin-right: 3px;
                                    }
                                    display: block;
                                    line-height: 30px;
                                    font-size: 16px;
                                    color: #333333;
                                }
                                .font-con{
                                    display: block;
                                    color: #999999;
                                    height: 44px;
                                    font-size: 14px;
                                    line-height: 22px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                            }
                            .con-footer{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                height: 29px;
                                .footer-l{
                                    height: 29px;
                                    line-height: 29px;
                                    color: $colorA;
                                }
                                .con-button{
                                    width: 85px;
                                    height: 29px;
                                    line-height: 29px;
                                    background-color: $colorA;
                                    color: #ffffff;
                                    text-align: center;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }
        .modal-con{
            font-size: 14px;
            .item{
                margin-bottom: 15px;
                .input{
                    display: inline-block;
                    width: 283px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 15px;
                    border: 1px solid #e5e5e5;
                    &+.input{
                        margin-left: 14px;
                    }
                }
                textarea{
                    height: 62px;
                    width: 580px;
                    border: 1px solid #e5e5e5;
                    box-sizing: border-box;
                    padding: 13px 15px;
                }
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        .pay-type{
            text-align: center;
            .pay{
                display:inline-block;
                width:188px;
                height:64px;
                border:1px solid #D7D7D7;
                cursor:pointer;
                &:last-child{
                    margin-left:90px;
                }
                &.checked{
                    border:1px solid #FF6700;
                }
            }
            .pay-ali{
                background:url('/imgs/pay/icon-ali.png') no-repeat center;
                background-size:103px 38px;
                margin-top:19px;
            }
            .pay-wechat{
                background:url('/imgs/pay/icon-wechat.png') no-repeat center;
                background-size:103px 38px;
            }
        }
    }
</style>