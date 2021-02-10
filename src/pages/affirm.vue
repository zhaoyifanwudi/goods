<template>
  <div class="affirm"  :style="{minHeight:minheight + 'px'}">
      <product-param :title="loveTitle">
          <template v-slot:more>
              <button class="btn" @click="togoMore">
                  更多
              </button>
          </template>
      </product-param>
      <div class="container">
          <div class="content clearfix">
              <div class="affirm-con fl">
                  <div class="con-desc">
                      <span>温馨提示：</span>您的所捐财务都将统一由系统暂收，然后进行公益项目，我们将打通所有数据壁垒，将你的爱心准确送达，请在我的捐赠页时刻查看您的捐赠！
                  </div>
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <div class="con-affirm">
                        <div class="clearfix">
                            <el-form-item label="您的姓名：" prop="name" style="width:420px;" class="fl">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="您的电话：" prop="phone" style="width:420px;" class="fr">
                                <el-input v-model="ruleForm.phone"></el-input>
                            </el-form-item>
                        </div>
                        <el-form-item label="您的邮箱：" prop="email" style="width:420px;">
                            <el-input v-model="ruleForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="您的地址：" prop="address">
                            <el-input v-model="ruleForm.address"></el-input>
                        </el-form-item>
                    </div>
                    <div class="con-affirm">
                        <el-form-item label="您的捐赠金额：" prop="money" style="width:420px;">
                            <el-input v-model="ruleForm.money"></el-input>
                        </el-form-item>
                        <el-form-item label="您的捐赠物资：" prop="goods">
                            <el-input type="textarea" v-model="ruleForm.goods"></el-input>
                        </el-form-item>
                    </div>
                    <div class="con-affirm con-last">
                        <el-form-item label="您的要求：" prop="require">
                            <el-input type="textarea" v-model="ruleForm.require"></el-input>
                        </el-form-item>
                        <el-form-item label="您想说的话：" prop="say">
                            <el-input type="textarea" v-model="ruleForm.say"></el-input>
                        </el-form-item>
                    </div>
                    <div class="con-sure">    
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')" style="margin-right:100px;">立即捐赠</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </div>
                </el-form>  
              </div>
              <div class="affirm-now fr">
                  <div class="now-title">
                      <span>捐赠动态</span>
                  </div>
                  <div class="now-list">
                      <ul :class="{'animate':animateUpp}" @mouseenter="stop()" @mouseleave="up()">
                          <li class="list-content" v-for="(item,index) in nowList" :key="index">
                              <span>{{item.contents}}</span>
                              <span>{{item.time}}</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam';
export default {
    name:'affirm',
    components:{
        ProductParam
    },
    data(){
        return{
            minheight:0,
            loveTitle:'记忆包裹',
            affirmId:this.$route.query.id,
            nowList:[
                {
                    id:'1',
                    contents:'1爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'2',
                    contents:'2爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'3',
                    contents:'3爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'4',
                    contents:'4爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'5',
                    contents:'5爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'6',
                    contents:'6爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'7',
                    contents:'7爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'8',
                    contents:'8王先生捐赠人民币2万元',
                    time:'10:20'
                },{
                    id:'9',
                    contents:'9爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'10',
                    contents:'10爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'1',
                    contents:'11爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'2',
                    contents:'12爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'3',
                    contents:'13爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'4',
                    contents:'14爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'5',
                    contents:'15爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'6',
                    contents:'爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'7',
                    contents:'爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'8',
                    contents:'王先生捐赠人民币2万元',
                    time:'10:20'
                },{
                    id:'9',
                    contents:'爱心人士捐赠人民币1万元',
                    time:'10:20'
                },{
                    id:'10',
                    contents:'爱心人士捐赠人民币1万元',
                    time:'10:20'
                }
            ],
            intnumm:undefined,//get定时器
            animateUpp:false,
            ruleForm:{
                name:'' || '爱心人士',
                phone:'',
                email:'',
                address:'',
                money:'',
                goods:'',
                require:'',
                say:''
            },
            list:{},
            rules: {
                name: [
                    { required: true, message: '请输入您的名字', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                myname:[
                    { required: true, message: '请输入您的电话', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度为11位', trigger: 'blur' }
                ],     
                address:[
                    { required: true, message: '请输入地址', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],          
                money: [
                    { required: true, message: '请输入您的捐款金额', trigger: 'blur' }
                ],
                goods: [
                    { required: true, message: '请输入您的捐赠物资', trigger: 'blur' }
                ],
            }
        }
    },
    mounted(){
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
        this.intnumm = setInterval(this.scrollUp,1500);
    },
    methods:{
        //to-do affirm对象
        togoMore(){
            this.$router.push('/donate');
        },
        scrollUp(){
            this.animateUpp = true;
            setTimeout(()=>{
                this.nowList.push(this.nowList[0]);
                this.nowList.shift();
                this.animateUpp = false;
            },500)
        },
        stop(){
            clearInterval(this.intnumm);
        },
        up(){
            this.intnumm = setInterval(this.scrollUp,1500);
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.list = {
                        title:this.loveTitle,
                        // id:this.affirmId,
                        id:2020060301,
                        donate:this.ruleForm.money + this.ruleForm.goods,
                        say:this.ruleForm.say,
                        now:'未完成捐赠，抓紧时间哦~',
                        showButton:1,
                        showDetail:false,
                        center:'',
                        position:{lng: 116.404, lat: 39.915},
                    }
                    this.$store.dispatch('saveList',this.list);
                    this.$router.push('/confirm')
                } else {
                    window.console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
    destroyed(){
        clearInterval(this.intnum);
    }
    
}
</script>

<style lang = "scss">
    @import './../assets/scss/config.scss';
    .affirm{
        button{
            margin-left: 10px;
        }
        .container{
            .content{
                margin-top: 40px;
                .affirm-con{
                    width: 870px;
                    .con-desc{
                        height: 60px;
                        font-size: 14px;
                        line-height: 25px;
                        background-color: #f5f4f3;
                        padding-left: 10px;
                        padding-right: 10px;
                        padding-top: 5px;
                        box-sizing: border-box;
                        span{
                            color: $colorA;
                        }
                    }
                    .con-affirm{
                        width: 870px;
                        margin-top: 40px;
                        padding-bottom: 20px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #E5E5E5;
                        /* &:last-child{
                            border-bottom: 0;
                        } */
                    }
                    .con-last{
                        border-bottom: 0;
                    }
                    .con-sure{
                        width: 870px;
                        height: 50px;
                        text-align: center;
                        margin-top: 40px;
                        margin-bottom: 30px;
                    }
                }
                .affirm-now{
                    margin-left: 36px;
                    height: 500px;
                    width: 320px;
                    /* border: 1px solid #333333; */
                    .now-title{
                        height: 47px;
                        line-height: 47px;
                        border-bottom: 2px solid $colorA;
                        padding-left: 10px;
                        font-size: 19px;
                        letter-spacing: 1px;
                    }
                    .now-list{
                        margin-top: 17px;
                        height: 420px;
                        overflow: hidden;
                        ul{
                            &.animate{
                                transition: all,0.5s;
                                transform: translateY(-32px);
                            }
                            .list-content{
                                font-size: 17px;
                                height: 27px;                       
                                margin-top:5px;
                                margin-left: 5px;
                                padding-left: 5px;
                                line-height: 27px;
                                color: #333333;
                                letter-spacing: 0.5px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                max-width: 300px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                
                            }
                        }
                    }
                }
            }
        }
    }
</style>