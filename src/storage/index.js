/**
 * storage封装
 */
const STORAGE_KEY = 'goods'
export default{
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,ValidityState);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
    },
    //获取某一模块下的属性
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    //
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');       
    },
    //删除属性
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}