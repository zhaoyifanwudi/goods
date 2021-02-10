<template>
    <div class="index" :style="{minHeight:minheight + 'px'}">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <div class="nav-button nav-button-m"  @click="toDonate">
                        <span>我要捐赠</span>
                    </div>
                    <div class="nav-button" @click="toSeek">
                        <span>我要求助</span>
                    </div>
                </div>
                <swiper :options = "swiperOption" class="swiper-main">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product' + item.id">
                            <img :src="item.img" alt="">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="nav-bar">
                <a href="javascript:;">
                    <img v-lazy="'/imgs/nav-row.jpg'" alt="">
                </a>
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
            <div class="dynamic">
                <div class="dyn-work">
                    <div class="dyn-title">
                        <span>捐赠去向动态</span>
                        <span class="more">更多</span>
                    </div>
                    <div class="dyn-work-list">
                        <ul v-for="(item,index) in dynlist" :key="index">
                            <li class="list-content">
                                <a href="" target="_blank">{{item.title}}</a>
                                <span>[{{item.time}}]</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dyn-donate">
                    <div class="dyn-title">
                        <span>实时捐赠</span>
                        <span class="more">更多</span>
                    </div>
                    <div class="dyn-scroll">
                        <div class="dyn-scroll-con" :class="{'animate':animateUp}" @mouseenter="stop()" @mouseleave="up()">
                            <ul>
                                <li class="scroll-content" v-for="(item,index) in scrollist" :key="index" >
                                    <a href="" target="_blank">{{item.contents}}</a>
                                    <span>{{item.tag}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dynamic">
                <div class="dyn-work-way">
                    <div class="dyn-title">
                        <span>个人求助</span>
                        <span class="more">更多</span>
                    </div>
                    <div class="dyn-work-list">
                        <ul v-for="(item,index) in dynlist" :key="index">
                            <li class="list-content">
                                <a href="" target="_blank">{{item.title}}</a>
                                <span>[{{item.time}}]</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dyn-work-way">
                    <div class="dyn-title">
                        <span>公益项目</span>
                        <span class="more">更多</span>
                    </div>
                    <div class="dyn-work-list">
                        <ul v-for="(item,index) in dynlist" :key="index">
                            <li class="list-content">
                                <a href="" target="_blank">{{item.title}}</a>
                                <span>[{{item.time}}]</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="help-swiper">
                <swiper :options = "helpbar" class="swiper-bar-help">
                    <swiper-slide v-for="(item,index) in helplist" :key="index">
                        <div class="swiper-con">
                            <img :src="item.img" alt="">
                            <div class="con-font">
                                <a href="" target="_blank">{{item.title}}</a>
                                <div class="con-bar">
                                    <div :style="{width:item.nowp}"></div>
                                </div>
                                <span class="font-con">
                                    还差{{item.target - item.now}}元
                                </span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-home',
    components:{

    },
    data(){
        return{
            minheight:0,//控制footer
            //swiper
            swiperOption:{
                autoplay:true,
                /**
                 * autoplay:{
                 *  delay:3000
                 * }
                 */
                loop:true,
                effect:'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            bar:{
                autoplay:true,
                slidesPerView:4,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            helpbar:{
                autoplay:true,
                slidesPerView:6,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                }
            },
            
            //轮播图本地数据
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
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
            dynlist:[
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
            // activeIndex:0,//scroll
            intnum:undefined,//get定时器
            animateUp:false,
            //scroll-contents
            scrollist:[
                {
                    id:'1',
                    contents:'致新冠肺炎疫情防控爱心捐赠人的感谢信',
                    tag:'应急救灾',
                    time:''
                },{
                    id:'2',
                    contents:'爱心人士捐赠人民币1万元',
                    tag:'记忆包裹',
                    time:''
                },{
                    id:'3',
                    contents:'李女士捐赠物资含书包300个，辅导书1000本，文具盒500个等等',
                    tag:'个人求助',
                    time:''
                },{
                    id:'4',
                    contents:'田边三菱制药集团捐款100万元',
                    tag:'应急救灾',
                    time:''
                },{
                    id:'5',
                    contents:'敬汉卿捐赠希望小学一栋',
                    tag:'乡村教育',
                    time:''
                },{
                    id:'6',
                    contents:'爱心人士捐赠人民币5000元',
                    tag:'救在乡间',
                    time:''
                },{
                    id:'7',
                    contents:'安斯泰来捐赠12335只口罩全部发放至武汉大学中南医院',
                    tag:'应急救灾',
                    time:''
                },{
                    id:'8',
                    contents:'王先生捐赠人民币2万元',
                    tag:'百人援宁',
                    time:''
                },{
                    id:'9',
                    contents:'雅诗兰黛向中国红十字会总会捐款200万元',
                    tag:'应急救灾',
                    time:''
                },{
                    id:'10',
                    contents:'沙特阿拉伯石油公司向中国红十字会捐款人民币1000万元',
                    tag:'应急救灾',
                    time:''
                }
            ],
            helplist:[
                {
                    id:'1',
                    title:'自闭症儿童周末照料',
                    img:'/imgs/help/help1.jpg',
                    target:100000,
                    now:10000,
                    nowp:'10%'
                },
                {
                    id:'2',
                    title:'宝贝请不要离开我们',
                    img:'/imgs/help/help2.png',
                    target:100000,
                    now:70000,
                    nowp:'70%'
                },
                {
                    id:'3',
                    title:'守护山区孩子们的梦',
                    img:'/imgs/help/help3.jpg',
                    target:50000,
                    now:10000,
                    nowp:'20%'
                },
                {
                    id:'4',
                    title:'大病儿童救助计划',
                    img:'/imgs/help/help4.jpg',
                    target:200000,
                    now:70000,
                    nowp:'35%'
                },
                {
                    id:'5',
                    title:'山里娃的科学梦',
                    img:'/imgs/help/help5.jpg',
                    target:250000,
                    now:50000,
                    nowp:'20%'
                },
                {
                    id:'6',
                    title:'我想健康长大',
                    img:'/imgs/help/help6.jpg',
                    target:100000,
                    now:90000,
                    nowp:'90%'
                },
                {
                    id:'7',
                    title:'银龄关爱计划',
                    img:'/imgs/help/help7.jpg',
                    target:200000,
                    now:150000,
                    nowp:'75%'
                },
            ]
        }
    },
    mounted(){
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
        this.intnum = setInterval(this.scrollUp,1500);
    },
    computed:{
        // top(){
        //     return -this.activeIndex * 32 + 'px';
        // },
        // toplist(){
        //     return [...this.scrollist,this.scrollist[0]];
        // }
        // barWidth(){
        //     return (now,target) => {
        //         return (now / target) + '%';
        //     }
        // }
        
    },
    // created(){
    //     this.scrollUp();
    // },
    methods:{
        scrollUp(){
            this.animateUp = true;
            // this.intnum = setInterval(()=>{
            //     if(this.activeIndex < this.scrollist.length - 6){
            //         this.activeIndex += 1;
            //     } else {
            //         this.activeIndex = 0;
            //         this.activeIndex += 1;
            //     }
            // },1000)
            setTimeout(()=>{
                this.scrollist.push(this.scrollist[0]);
                this.scrollist.shift();
                this.animateUp = false;
            },500)
        },
        stop(){
            clearInterval(this.intnum);
        },
        up(){
            this.intnum = setInterval(this.scrollUp,1500);
        },
        toSeek(){
            this.$router.push('/seek');
        },
        toDonate(){
            this.$router.push('/donate');
        }
        
    },
    destroyed(){
        clearInterval(this.intnum);
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            .nav-menu{
                box-sizing: border-box;
                position: absolute;
                height: 451px;
                width: 264px;
                z-index: 9;
                background-color: #55585A7A;
                padding: 150px 47px;
                
                .nav-button{
                    height: 50px;
                    width: 170px;
                    line-height: 50px;
                    text-align: center;
                    color: #ffffff;
                    font-size: 15px;
                    letter-spacing: 1px;
                    background-color: $colorA;
                    // opacity: 0.5;
                    border-radius: 15px;
                    cursor: pointer;
                }
                .nav-button-m{
                    margin-bottom: 50px;
                }

            }
            .swiper-main{
                height: 451px;
                img{
                    width: 100%;
                    height: 100%;
                }
                .swiper-button-prev{
                    left: 274px;
                }
            }
        }
        .nav-bar{
            height: 130px;
            width: 100%;
        }
        .swiper-bar{
            height: 318px;
            margin-top: 10px;
            
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
        .dynamic{
            height: 255px;
            display: flex;
            justify-content: space-between;
            align-content: center;
            margin-bottom: 30px;
            .dyn-title{
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
            .dyn-work{
                width: 780px;
                height: 255px;
                margin-right: 20px;
               
                
                .dyn-work-list{
                    margin-top: 20px;
                    height: 199px;
                    li{
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
            .dyn-work-way{
                width: 600px;
                height: 255px;
                margin-right: 29px;
            
                &:last-child{
                    margin-right: 0;
                }
                
                .dyn-work-list{
                    margin-top: 20px;
                    height: 199px;
                    li{
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
                            max-width: 450px;
                        }
                    }

                }
            }
            .dyn-donate{
                width: 426px;
                height: 225px;               
                .dyn-scroll{
                    margin-top: 17px;
                    height: 199px;
                    overflow: hidden;
                    .dyn-scroll-con{
                        &.animate{
                            transition: all,0.5s;
                            transform: translateY(-32px);
                        }
                        .scroll-content{
                            font-size: 17px;
                            height: 27px;                       
                            margin-top:5px;
                            margin-left: 5px;
                            padding-left: 5px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            
                            a{
                                line-height: 27px;
                                color: #333333;
                                letter-spacing: 0.5px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 350px;
                            }
                            span{
                                line-height: 27px;
                                font-size: 14px;
                                color: $colorA;
                            }
                        }
                    }
                }
            }
        }
        .help-swiper{
            height: 200px;
            margin-top: 20px;
            .swiper-bar-help{               
                
                .swiper-con{
                    width: 180px;
                    height:200px;
                    border-radius:15px;
                    img{
                        display: block;
                        width: 180px;
                        height: 100px;
                    }
                    .con-font{
                        box-sizing: border-box;                   
                        height: 100px;
                        width: 180px;
                        background-color: $colorJ;
                        padding: 10px 10px;
                        a{
                            display: block;
                            color: #333333;
                            font-size: 16px;
                            line-height: 30px;
                            font-weight: 700;
                        }
                        .con-bar{
                            margin: 7px 0;
                            position: relative;
                            width: 160px;
                            // border: 1px solid #B1D632;
                            background-color: #999999;
                            
                            div{
                                display: block;
                                position: relative;
                                background:$colorA;                               
                                height: 2.5px;
                                line-height: 2.5px;
                            }
                        }
                        .font-con{
                            display: block;
                            margin-top: 12px;                          
                            line-height: 20px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>