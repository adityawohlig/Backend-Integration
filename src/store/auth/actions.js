export default{
    
login(context){
    return context.commit('login');
},
logout(context){
    return context.commit('logout');
}
}