import { createRouter,createWebHistory } from "vue-router"
import Home from '../view/HomeView.vue'
import ProductDetail from '../view/ProductDetailView.vue'
import BasketPreview from '../view/BasketPreviewView.vue'


const routes=[
   
    {
        
        path:'/',
        component:Home
    },
    {
        
        path:'/product-detail/:id',
        component:ProductDetail
    },
    {
      
        path:'/basket-preview',
        component:BasketPreview
    }
]


const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
