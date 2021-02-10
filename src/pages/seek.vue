<template>
    <div class="seek" :style="{minHeight:minheight + 'px'}">
        <div class="container">
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="求助主题" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="求助背景" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.backdesc"></el-input>
                    </el-form-item>
                    <el-form-item label="截止时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        
                    </el-form-item>
                    <el-form-item label="紧急求助" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="求助性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.typea">
                            <el-checkbox label="个人求助" name="type"></el-checkbox>
                            <el-checkbox label="医疗求助" name="type"></el-checkbox>
                            <el-checkbox label="教育求助" name="type"></el-checkbox>
                            <el-checkbox label="紧急灾害求助" name="type"></el-checkbox>
                            <el-checkbox label="公益活动求助" name="type"></el-checkbox>
                            <el-checkbox label="其他" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="求助方式" prop="type">
                        <el-checkbox-group v-model="ruleForm.typeb">
                            <el-checkbox label="向社会求助" name="type"></el-checkbox>
                            <el-checkbox label="向系统求助" name="type"></el-checkbox>
                            <el-checkbox label="向红十字会求助" name="type"></el-checkbox>
                            <el-checkbox label="募捐活动" name="type"></el-checkbox>
                            <el-checkbox label="其他" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="求助所需" prop="type">
                        <el-checkbox-group v-model="ruleForm.resource">
                            <el-checkbox label="善款" name="type"></el-checkbox>
                            <el-checkbox label="物资" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="具体所需" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" placeholder="例如：人民币20万;书包1000个等等"></el-input>
                    </el-form-item>
                    
                </el-form>
            </div>
            <div class="prov">
                 <el-form :model="peopleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="您的姓名" prop="myname">
                        <el-input v-model="peopleForm.myname" style="width:500px"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="myid">
                        <el-input v-model="peopleForm.myid" style="width:500px"></el-input>
                    </el-form-item>
                    <el-form-item label="您的地址" prop="myaddress">
                        <el-input v-model="peopleForm.myaddress" style="width:500px"></el-input>
                    </el-form-item>
                    <el-form-item label="您的电话" prop="myphone">
                        <el-input v-model="peopleForm.myphone" style="width:500px"></el-input>
                    </el-form-item>
                    <el-form-item label="您的邮箱" prop="myemail">
                        <el-input v-model="peopleForm.myemail" style="width:500px"></el-input>
                    </el-form-item>
                 </el-form>
                <div class="myupload">
                    <el-form :model="upForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="上传身份证正反面" prop="myname">
                            <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                        </el-form-item>
                    </el-form>
                    
                </div>
            </div>
            <div class="mat">
                <el-form :model="matForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="上传材料" prop="myname">
                            <el-upload
                                class="upload-demo"
                                accept="image/png,image/gif,application/msword,application/pdf"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-change="handleChange"
                                :file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png/doc/pdf文件，且不超过500kb</div>
                            </el-upload>
    
                        </el-form-item>
                    </el-form>
            </div>
            <div class="address">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
                    <defs>
                        <symbol id="icon-add" viewBox="0 0 31 32">
                            <title>add</title>
                            <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
                        </symbol>
                        <symbol id="icon-edit" viewBox="0 0 32 32">
                            <title>edit</title>
                            <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
                        </symbol>
                        <symbol id="icon-del" viewBox="0 0 32 32">
                            <title>delete</title>
                            <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
                            <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
                            <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
                            <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
                        </symbol>
                    </defs>
                </svg>
                <el-form :model="adForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="选择地址" prop="myname">
                        <div class="item-address">      
                            <div class="addr-list clearfix">
                                <div class="addr-info" :class="{'checked':index == checkIndex}" @click="checkIndex = index" v-for="(item,index) in list" :key="index">
                                    <h2>{{item.receiverName}}</h2>
                                    <div class="phone">{{item.receiverMobile}}</div>
                                    <div class="street">{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</div>
                                    <div class="action">
                                        <a href="javascript:;" class="fl" @click = "delAddress(item)">
                                            <svg class="icon icon-del">
                                                <use xlink:href="#icon-del"></use>
                                            </svg>
                                        </a>
                                        <a href="javascript:;" class="fr" @click="editAddressModal(item)">
                                            <svg class="icon icon-edit">
                                                <use xlink:href="#icon-edit"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="addr-add" @click="openAddressModal">
                                    <div class="icon-add"></div>
                                    <div>添加新地址</div>
                                </div>
                            </div>
                        </div>
                        
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即求助</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
                
            </div>
        </div>
        <modal
            title="删除确认"
            btnType = "1"
            :showModal = "showDelModal"
            @cancel = "showDelModal = false"
            @submit = "submitAddress"
        >
            <template v-slot:body>
                <p>您确认要删除地址吗？</p>
            </template>
        </modal>
        <modal
            title="新增确认"
            btnType = "1"
            :showModal = "showEditModal"
            @cancel = "showEditModal = false"
            @submit = "submitAddress"
        >
            <template v-slot:body>
                <div class="edit-wrap">
                    <div class="item">
                        <input type="text" class="input" placeholder="姓名" v-model="checkedItem.receiverName">
                        <input type="text" class="input" placeholder="手机号" v-model="checkedItem.receiverMobile">
                    </div>
                    <div class="item">
                        <select name="province" v-model="checkedItem.receiverProvince">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                        </select>
                        <select name="city" v-model="checkedItem.receiverCity">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                        </select>
                        <select name="district" v-model="checkedItem.receiverDistrict">
                            <option value="北京">北京</option>
                            <option value="天津">天津</option>
                        </select>
                    </div>
                    <div class="item">
                        <textarea name="street" v-model="checkedItem.receiverAddress" placeholder="详细地址"></textarea>
                    </div>
                    <div class="item">
                        <input type="text" class="input" placeholder="邮编" v-model="checkedItem.receiverZip">
                    </div>
                </div>
            </template>
        </modal>
        <modal 
            title="提示" 
            sureText="确认" 
            btnType="1" 
            modalType="middle"
            :showModal="showModal"
            @submit="showModal=false"
            @cancel="showModal=false">
            <template v-slot:body>
                <p>请等待审核！</p>    
            </template>   
         </modal>
    </div>
</template>
<script>
// import { Form } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import Modal from './../components/Modal'
export default {
    name:'seek',
    components:{
        // [Form.name]:Form
        Modal
    },
    data(){
        return{
            minheight:0,
            list:[],//地址列表
            checkIndex:0,//当前确定的收货地址
            showDelModal:false,//是否显示删除弹框
            showEditModal:false,//是否显示新增或者编辑弹框
            showModal:false,
            userAction:'',//用户行为 0：新增 1：编辑 2.删除 
            checkedItem:{},
            fileList: [],
            dialogImageUrl: '',
            dialogVisible: false,
            ruleForm: {
                name: '',               
                date1: '',                
                delivery: false,
                typea: [],
                typeb: [],
                resource: [],
                desc: '',
                backdesc:''
            },
            peopleForm:{
                myname:'',
                myid:'',
                myaddress:'',
                myphone:'',
                myemail:''
            },
            adForm:{},
            upForm:{},
            matForm:{},
            rules: {
                name: [
                    { required: true, message: '请输入求助主题', trigger: 'blur' },
                    { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                myname:[
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                ],
                myid:[
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { min: 18, max: 19, message: '长度在 18 到 19 个字符', trigger: 'blur' }
                ],
                myaddress:[
                    { required: true, message: '请输入地址', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                myphone:[
                    { required: true, message: '请输入电话号', trigger: 'blur' },
                    { min: 11, max: 11, message: '长度为11位', trigger: 'blur' }
                ],
                myemail:[
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { min: 0, max: 20, message: '长度在0到20个字符', trigger: 'blur' }
                ],
                
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                
                type: [
                    { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        }
    },
    mounted(){
        this.minheight = document.documentElement.clientHeight - 476;
        window.onresize = () => {
            this.minheight = document.documentElement.clientHeight - 476;
        };
        // this.getAddressList();
    },
    methods:{
        // getAddressList(){
        //     this.axios.get('/shippings').then((res)=>{
        //         this.list = res.list;
                
        //     })
        // },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.showModal = true;
                } else {
                    window.console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleRemove(file, fileList) {
            window.console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        //新增地址弹框
        openAddressModal(){
            this.userAction = 0;
            this.checkedItem = {};
            this.showEditModal = true;
        },
        editAddressModal(item){
            this.userAction = 1;
            this.checkedItem = item;
            this.showEditModal = true;
        },
        delAddress(item){
            this.checkedItem = item;
            this.userAction = 2;
            this.showDelModal = true;
        },
        //地址删除 编辑 新增功能
        submitAddress(){
            // this.closeModal();
            // let {checkedItem,userAction} = this;
            // let method,url,params = {};
            // if(userAction == 0){
            //     method = 'post',url = '';
                
            // } else if(userAction == 1){
            //     method = 'put',url = '';
            // } else if(userAction == 2){
            //     method = 'delete',url = '';
            // }
            // if(userAction == 0 || userAction == 1){
            //     let {receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = checkedItem;
            //     let errmsg = '';
            //     if(!receiverName){
            //         // this.$message.error('请输入收货人名称');
            //         errmsg = '请输入收货人名称'
            //     } else if(!receiverMobile || !/\d{11}/.test(receiverMobile)){
            //         errmsg = '请输入正确格式的手机号'
            //     } else if(!receiverProvince){
            //         errmsg = '请选择身份';
            //     } else if(!receiverCity){
            //         errmsg = '请选择对应的城市';
            //     } else if(!receiverDistrict || !receiverAddress){
            //         errmsg = '请输入收货地址';
            //     } else if(!/\{6}/.test(receiverZip)){
            //         errmsg = '请输入6位邮编';
            //     }
            //     if(errmsg){
            //         // this.$message.error(errmsg);
            //         return;
            //     }
            //     params = {
            //         receiverName,
            //         receiverMobile,
            //         receiverProvince,
            //         receiverCity,
            //         receiverDistrict,
            //         receiverAddress,
            //         receiverZip
            //     }
            // }
            
            // // this.axios[method](url,params).then(()=>{
            // //     // this.closeModal();
            // //     // this.getAddressList();
            // //     // this.$message.success('操作成功');
            // // });
        },
        closeModal(){
            this.checkedItem = {};
            this.userAction = '';
            this.showEditModal = false;
        },
    }
}
</script>
<style lang="scss">

    .seek{
        margin-top: 30px;
        width: 100%;
        .form{
            border-bottom: 1px solid #e5e5e5;
            box-sizing: border-box;
            padding-bottom: 30px;
        }
        .prov,.mat{
            margin-top: 50px;
            border-bottom: 1px solid #e5e5e5;
            box-sizing: border-box;
            padding-bottom: 30px;
        }
        .address{
            margin-top: 50px;
            .item-address{
                margin-bottom: 30px;
                .addr-list{
                    .addr-info,.addr-add{
                        box-sizing:border-box;
                        float: left;
                        width: 271px;
                        height: 180px;
                        border: 1px solid #E5E5E5;
                        margin-right: 15px;
                        padding: 15px 24px;
                        font-size: 14px;
                        color: #757575;
                    }
                    .addr-info{
                        cursor: pointer;
                        h2{
                            height: 27px;
                            font-size: 18px;
                            font-weight: 300;
                            color: #333333;
                            margin-bottom: 10px;
                        }
                        .street{
                            height: 50px;
                        }
                        .action{
                            height: 50px;
                            line-height: 50px;
                            .icon{
                                width: 20px;
                                height: 20px;
                                fill: #666666;
                                vertical-align: middle;
                                &:hover{
                                    fill: #FF5700;
                                }
                            }
                        }
                        &.checked{
                            border: 1px solid #ff6700;
                        }
                    }
                    .addr-add{
                        text-align: center;
                        color: #999999;
                        cursor: pointer;
                        .icon-add{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            background: url('/imgs/icon-add.png') #E0E0E0 no-repeat center;
                            background-size: 14px;
                            margin: 0 auto;
                            margin-top: 45px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .edit-wrap{
            font-size: 14px;
            .item{
                margin-bottom: 15px;
                .input{
                    display: inline-block;
                    width: 283px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 15px;
                    border: 1px solid #E5E5E5;
                    &+.input{
                        margin-left: 14px;
                    }
                }
                select{
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #E5E5E5;
                    margin-right: 15px;
                }
                textarea{
                    height: 62px;
                    width: 100px;
                    padding: 13px 15px;
                    box-sizing: border-box;
                    border: 1px solid #E5E5E5;
                }
            }
        }
        
    }
</style>