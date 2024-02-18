import {createStore} from "vuex";

const store=createStore(
    {
        mutations:{
            setBasket(state,p){
                state.baskets.push(p)
            },
            removeBaskets(state,p){
                const arr=[...state.baskets]
                state.baskets=arr.filter((s)=>s.id!==p.id)
            }

        },
        getters:{
            getBaskets(state){
                return state.baskets
            },
            getBasketsLength(state){
                return state.baskets.length
            },
            getBasketsTotalPrice(state){
                let count=0
                state.baskets.forEach((x) => {
                    count+=x.price
                })
                return count
            }

        },
        actions:{
            addBaskets(state,payload){
                state.commit("setBasket",payload)
            },
            removeBaskets(state,payload){
                state.commit("removeBaskets",payload)
            }


        },
        state(){
            return{
                baskets:[]
            }
        }
    }
)

export default store