<template>
    <div class="previewCard">
        <div class="previewItem" v-for="(item,i) in $store.getters.getBaskets" :key="(item,i)">
            <div class="image">
                <img :src="item.image">
            </div>

            <div class="content">
                <div class="title">{{item.title}}</div>
                <div class="price">{{ item.price }} TL</div>
            </div>
        </div>
    </div>

    <div class="total">Toplam fiyat:{{ $store.getters.getBasketsTotalPrice}}</div>
  
  </template>
  
  <script>
  export default{
      name:'BasketPreview'
  }
  </script>
  
  <style scoped>

  .previewCard{
    background-color: #fff;
    border:1px solid #d9dde0;
    border-radius: 20px;
    display: flex;
    padding: 20px;
    flex-direction: column;
  }

  .previewItem{
    display: flex;
  }

  .image{
    margin-right: 20px;
  }
  
  .image> img{
    width: 150px;
    height: auto;
    object-fit: fill;
  }

  .content{
    font-weight: 500;
    display: flex;
    flex-direction: column;
  }

  .price{
    margin-top: 4px;
    color:#1874ff;
    font-size: 12px;
}

  .total{
    color:#374051;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
}
  </style>