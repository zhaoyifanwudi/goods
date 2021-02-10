<template>
  <div class="confirm" :style="{minHeight:minheight + 'px'}">
    <div class="container">
      <div class="order-wrap">
        <div class="item-order">
          <div class="icon-succ"></div>
          <div class="order-info">
            <h2>提交成功！</h2>
            <p>
              爱心捐款请在
              <span>30分</span>内支付哦，物资请您在当天内填写快递单号哦！
            </p>

          </div>
          <div class="order-total">
            <p>
              您的捐款总额：
              <span>{{payMent}}</span>
            </p>
            <p>
              订单详情
              <em class="icon-down" :class="{'up':showDetail}" @click="showDetail = !showDetail"></em>
            </p>
          </div>
        </div>
        <div class="item-detail" v-if="showDetail">
          <div class="item">
            <div class="detail-title">捐款Id：</div>
            <div class="detail-info">{{orderNo}}</div>
          </div>
          <div class="item">
            <div class="detail-title">你的捐赠：</div>
            <div class="detail-info">
              {{orderAffirm}}
            </div>
          </div>
          <div class="item">
            <div class="detail-title">您的留言：</div>
            <div class="detail-info">{{orderSay}}</div>
          </div>
        </div>
      </div>
      <div class="item-pay">
        <h3>选择以下方式付款</h3>
        <div class="pay-way">
          <p>支付平台</p>
          <div class="pay pay-ali" :class="{'checked':payType == 1}" @click="paySubmit(1)"></div>
          <div class="pay pay-wechat" :class="{'checked':payType == 2}" @click="paySubmit(2)"></div>
        </div>
      </div>
      <div class="item-pay">
        <h3>请向如下地址邮递您的捐赠物资</h3>
        <div class="pay-way">
          <p>地址：{{addressInfo}}</p>
          <div class="item-sub" @click="showModalM = true"><span>填写物流单号</span></div>
        </div>
      </div>
    </div>
    <modal 
      title="填写物流订单号" 
      sureText="确认" 
      btnType="1" 
      modalType="middle"
      @submit="postWid"
      :showModal="showModalM"
      @cancel="showModalM = false">
      <template v-slot:body>
          <div class="modal-con">
              <el-form :model="wForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="物流公司：" prop="bus" style="width:420px;">
                  <el-select v-model="wForm.bus" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="物流单号：" prop="ino" style="width:420px;">
                    <el-input v-model="wForm.ino"></el-input>
                </el-form-item>
              </el-form>
          </div>    
      </template>   
  </modal>
  <scan-pay-code v-if="showPay" @close="closePayModal"></scan-pay-code>
  <modal
    title="支付完成"
    btnType = "3"
    :showModal = "showPayModal"
    sureText = "查看订单"
    @cancel = "showPayModal = false"
    @submit = "getOrderList"
  >
    <template v-slot:body>
        <p>您确认是否完成支付?</p>
    </template>
  </modal>
  </div>
</template>

<script>
// import QRCode from 'qrcode'
import Modal from './../components/Modal'
import ScanPayCode from './../components/ScanPayCode'
export default {
  name: "confirm",
  components:{
    Modal,
    ScanPayCode
  },
  data() {
    return {
      orderId: this.$route.query.orderNo,
      minheight: 0,
      addressInfo: "*******", //地址
      payMent: 10000, //总额
      showDetail: false,
      orderNo: "20200411", //订单号
      orderSay: "加油！", //留言
      payType: "", //支付类型
      orderAffirm:"人民币：10000元;",//捐赠desc
      ruleForm:'ruleForm',
      showModalM:false,
      showPay:false,
      showPayModal:false,
      payImg:'',
      T:'',
      wForm:{
        bus:'',
        ino:''
      },
      rules:{
        ino: [
          { required: true, message: '请输入您的订单号', trigger: 'blur' }
        ],
        bus:[
          { required: true, message: '请选择物流公司', trigger: 'blur' }
        ],
      },
      options: [{
        value: '选项1',
        label: '顺丰'
      }, {
        value: '选项2',
        label: '邮政'
      }, {
        value: '选项3',
        label: '中通'
      }, {
        value: '选项4',
        label: '圆通'
      }, {
        value: '选项5',
        label: '韵达'
      }, {
        value: '选项6',
        label: '其他'
      }],
    };
  },
  mounted() {
    this.minheight = document.documentElement.clientHeight - 476;
    window.onresize = () => {
      this.minheight = document.documentElement.clientHeight - 476;
    };
    // this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      //to-do调用api
    },
    paySubmit(payType) {
      if (payType == 1) {
        window.open();
      } else {
        // this.axios.post('/pay',{
        //   orderId:this.orderId,
        //   orderName:'dudud',
        //   amount:0.01,
        //     payType:2//1. 支付宝 2. 微信
        // }).then((res)=>{
        //   QRCode.toDataURL(res.content).then(url=>{
        //       this.showPay = true;
        //       this.payImg = url;
        //       this.loopOrderState();
        //   }).catch(()=>{
        //       // this.$message.error('微信二维码生成失败，请稍后重试');
        //   })
        // })
        this.showPay = true;
      }
    },
    getOrderList() {
      this.$router.push();
    },
    validForm(){
      this.$refs[this.ruleForm].validate((valid) => {
        if (valid) {
          window.console.log(this.wForm);
          this.showModalM = false;
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
    },
    postWid(){
      this.validForm();
    },
    closePayModal(){
      this.showPay = false;
      this.showPayModal = true;
      clearInterval(this.T);

    },
    loopOrderState(){
      this.T = setInterval(()=>{
          this.axios.get().then((res)=>{
              if(res.status == 20){
                  clearInterval(this.T);
                  this.getOrderList();
              }
          })
      },1000);
    },
  }
};
</script>

<style lang = "scss">
@import "./../assets/scss/config.scss";
.confirm {
  background-color: #f5f5f5;
  padding-top: 30px;
  padding-bottom: 61px;
  .order-wrap {
    padding: 62px 50px;
    background-color: #ffffff;
    font-size: 14px;
    margin-bottom: 30px;
    .item-order {
      display: flex;
      align-items: center;
      .icon-succ {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: url("/imgs/icon-gou.png") #80c58c no-repeat center;
        background-size: 60px;
        margin-right: 40px;
      }
      .order-info {
        margin-right: 248px;
        h2 {
          font-size: 24px;
          color: #333333;
          margin-bottom: 20px;
        }
        p {
          color: #666666;
          span {
            color: $colorA;
          }
        }
      }
      .order-total {
        & > p:first-child {
          margin-bottom: 30px;
        }
        span {
          vertical-align: middle;
          font-size: 28px;
          color: $colorA;
        }
        .icon-down {
          display: inline-block;
          width: 14px;
          height: 10px;
          background: url("/imgs/icon-down.png") no-repeat center;
          background-size: contain;
          margin-left: 9px;
          transition: all 0.5s;
          cursor: pointer;
          &.up {
            transform: rotate(180deg);
          }
        }
      }
      
    }
    .item-detail {
      border-top: 1px solid #d7d7d7;
      padding-top: 47px;
      padding-left: 130px;
      font-size: 14px;
      margin-top: 45px;
      .item {
        margin-bottom: 19px;
        .detail-title {
          float: left;
          width: 100px;
        }
        .detail-info {
          display: inline-block;
        }
      }
    }
  }
  .item-pay{
    padding: 26px 50px 72px;
    background-color: #ffffff;
    color: #333333;
    margin-bottom: 30px;
    h3{
      font-size: 20px;
      font-weight: 200;
      padding-bottom: 24px;
      color: #333333;
      border-bottom: 1px solid #d7d7d7;
      margin-bottom: 26px;
    }
    .pay-way{
      font-size: 18px;
      .item-sub{
        margin-top: 25px;
        height: 54px;
        width: 150px;
        /* border: 1px solid #d7d7d7; */
        text-align: center;
        cursor: pointer;
        background-color: $colorA;
        border-radius: 10px;
        span{
          line-height: 54px;
          font-size: 16px;
          color: #ffffff;
          letter-spacing: 1px;
        }
        &:hover{
          border: 1px solid $colorA;
        }
      }
      .pay{
        display: inline-block;
        width: 188px;
        height: 64px;
        border: 1px solid #d7d7d7;
        cursor: pointer;
        &:last-child{
          margin-left: 20px;
        }
        &.checked{
          border: 1px solid $colorA;
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
}
</style>