import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRouter, errorRouter, notFoundRouter } from '@/router/modules/staticRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter]
  
})

export default router