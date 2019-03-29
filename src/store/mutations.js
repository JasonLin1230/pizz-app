export const setMenuItems = (state,data) => {
    state.menuItems = data
}
export const deleteMenuItem = (state,item) => {
    state.menuItems.forEach((element,index) => {
        if(element == item){
            state.menuItems.splice(index,1)
        }
    });
}
export const pushToMenuItems = (state,data) => {
    state.menuItems.push(data)
}
export const userStatus = (state,user) => {
    if(user){
        state.currentUser=user
        state.isLogin=true
    }else{
        state.currentUser=null
        state.isLogin=false
    }
}