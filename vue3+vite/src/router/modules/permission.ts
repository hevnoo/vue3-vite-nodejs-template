import router from '@/router/index'

const whiteList = ['/login']
//全局前置
router.beforeEach((to: any, from: any, next: any)=>{
    next()
})

//全局后置
router.afterEach((to: any, from: any) => {
    //tab标签
    document.title = `Admin | ${to.meta.title}`;
})