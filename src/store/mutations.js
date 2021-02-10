export default {
    saveUserName(state,username){
        state.username = username;
    },
    saveCartCount(state,count){
        state.cartCount = count;
    },
    saveList(state,list){
        state.list = list;
    }
}