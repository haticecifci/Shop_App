/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'HomeApp',
created() {
this.getAllCategories();
this.getAllProducts();
},
methods: {
getProductsByCategory(category) {
fetch('https://fakestoreapi.com/products/category/' + category + "sort=" + this.sortMode)
.then(res => res.json())
.then(json => {
this.data = json;
});
},
getAllCategories() {
fetch('https://fakestoreapi.com/products/categories')
.then(res => res.json())
.then(json => {
this.categories = json;
});
},
getAllProducts() {
fetch('https://fakestoreapi.com/products?sort=' + this.sortMode)
.then(res => res.json())
.then(json => {
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
this.getAllProducts();
} else {
this.getProductsByCategory(this.activeCategory.toLowerCase());
}
},
activeCategory(newVal, oldVal) {
if (newVal === "") {
this.getAllProducts;
} else {
this.getProductsByCategory(newVal.toLowerCase());
}
console.log(newVal, oldVal);
}
}
});
