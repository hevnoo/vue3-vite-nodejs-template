
// staticRouter(静态路由)
export const staticRouter: any[] = [
	{
        path: '/login',
        name: 'login',
        // component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录'
        }
    },
	{
		path: '/',
		name: 'layout',
		// component: () => import('@/layout/index.vue'),
		redirect: '/403',
		children: [
		  {
			path: '/403',
			name: '403',
			// component: () => import('@/components/error/403.vue')
		  }
		]
	  },
]

// errorRouter(错误页面路由)
export const errorRouter: any[] = [
	{
		path: "/403",
		name: "403",
		// component: () => import("@/components/error/403.vue"),
		meta: {
			title: "403页面"
		}
	},
	{
		path: "/404",
		name: "404",
		// component: () => import("@/components/error/404.vue"),
		meta: {
			title: "404页面"
		}
	},
	{
		path: "/500",
		name: "500",
		// component: () => import("@/components/error/500.vue"),
		meta: {
			title: "500页面"
		}
	}
];

//notFoundRouter(找不到路由)
export const notFoundRouter = {
	path: "/:pathMatch(.*)*",
	name: "notFound",
	redirect: { name: "404" }
};
