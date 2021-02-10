export default {
    saveUserName(context,username){
        context.commit('saveUserName',username);
    },
    saveCartCount(context,count){
        context.commit('saveCartCount',count);
    },
    saveList(context,list){
        context.commit('saveList',list);
    }
    
}