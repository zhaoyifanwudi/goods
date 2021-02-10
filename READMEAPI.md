//统一返回字段
{
    status:0,   //0为正常 10为未登录
    data:{

    },
    msg:''
}

login:
    //登录(建议直接数据库硬编码，不做注册)
    post  /login
    req: username,
         password
    res:id

    //拉去用户信息
    get
    req:id
    res:username

<!-- index:
    //轮播图数据拉取(图片数据直接保存在前端（省事）)
    get  (只要5张)
    res:[
        {
            id:'',
            img:''
        }
    ]

    数据为：[
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
            ], -->
affirm:
    //捐赠页
    post   /affirm   (字段类型如我写的例子一样)
    req:{
        title:'',
        id:'',
        donate:'',
        say:'',
        now:'',
        showButton:1,
        showDetail:false,
        center:'',
        position:{
            lng:116.404,
            lag:39.915
        }
    }
    res ino  (订单编号)

    get /affirm
        res:{
            title:'',
            id:'',
            donate:'',
            say:'',
            now:'',
            showButton:1,
            showDetail:false,
            center:'',
            position:{
                lng:116.404,
                lag:39.915
            }
        }

    



    
    