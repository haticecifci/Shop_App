<template>
  
  <div class="filterWrapper">
    <div class="flex">
      <div @click="activeCategory=activeCategory===item?'':item" 
      :class="activeCategory===item?'activeCategory':''"
      class="category" v-for="item in categories" :key="item">
        {{ item }}
      </div>
    </div>
    <div @click="sortMode=sortMode==='asc'?'desc':'asc'" class="order">Sırala {{ sortMode==="asc"?"A-Z":"Z-A" }}</div>
  </div>

  <div class="grid">
    <ProductCard @onClickBox="onClickBox($event)" v-for="item in data" :item="item" :key="item"></ProductCard>
    <div v-for="item in data" :key="item">{{ item.id }}</div>
  </div>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default{
    name: 'HomeApp',
    created() {
        this.getAllCategories();
        this.getAllProducts();
    },
    methods: {
      onClickBox(data){
        const basketArr=[...this.$store.getters.getBaskets]
        const isExistInBasket=basketArr.find((b)=>b.id===data.id)
        if(isExistInBasket){
          const idx=this.data.findIndex((i)=>i.id===data.id)
          if(idx>-1){
            this.data[idx].inBox=false
          }
          this.$store.dispatch('removeBaskets',data)
          
        }else{
          const idx=this.data.findIndex((i)=>i.id===data.id)
          if(idx>-1){
            this.data[idx].inBox=true
          }
          this.$store.dispatch('addBaskets',data)
        }

      },
      getProductsByCategory(category) {
            fetch("https://fakestoreapi.com/products/category/" + category + "sort=" + this.sortMode)
                .then(res => res.json())
                .then(json => {
                  json.forEach(el => {
                    const finded=this.$store.getters.getBaskets.find((b)=>b.id===el.id)
                    if(finded){
                      el.inBox=true
                    }
                  });
                this.data = json;
            });
        },
        getAllCategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then(res => res.json())
                .then(json => {
                this.categories = json;
            });
        },
        getAllProducts() {
            fetch("https://fakestoreapi.com/products?sort=" + this.sortMode)
                .then(res => res.json())
                .then(json => {
                  json.forEach(el => {
                    const finded=this.$store.getters.getBaskets.find((b)=>b.id===el.id)
                    if(finded){
                      el.inBox=true
                    }
                  });
                this.data = json;
            });
        }
    },
    data() {
        return {
            data: [],
            activeCategory: "",
            categories: [],
            sortMode: "asc"
        };
    },
    watch: {
        sortMode(newVal) {
            if (this.activeCategory === "") {
                this.getAllProducts(newVal);
            }
            else {
                this.getProductsByCategory(this.activeCategory.toLowerCase());
            }
        },
        activeCategory(newVal, oldVal) {
            if (newVal === "") {
                this.getAllProducts;
            }
            else {
                this.getProductsByCategory(newVal.toLowerCase());
            }
            console.log(newVal, oldVal);
        }
    },
    components: { ProductCard }
}
</script>

<style scoped>
.grid{
   display: grid;
   grid-template-columns: repeat(5,1fr);
   gap:20px;
}

.filterWrapper{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
}

.flex{
  display: flex;
  align-items: center;
  gap:20px;
}

.category{
  cursor: pointer;
  padding: 4px 16px;
  gap:10px;
  background-color: #fafafa;
  border:1px solid #d9dde0;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 16px;
  font-weight: 500;
  margin-top: 8px;
  transition: all .5s;
}

.activeCategory{
  transition: all .5s;
  border:1px solid #96999b;
  font-weight: 600;
}

.order{
  cursor: pointer;
}
</style>