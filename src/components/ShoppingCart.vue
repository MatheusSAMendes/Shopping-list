<template>
  <div>
    <h1>Shopping Cart</h1>
    <p v-if="loading">Loading...</p>
    <Ul v-else>
      <li v-for="product in products" v-bind:key="product.id">{{product.title}} ${{product.price}}</li>
    </Ul>
  </div>
</template>
<script>
import store from "../store";

export default {
  name: "ShoppingCart",
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    products() {
      return store.getters.availableProducts;
    }
  },
  created() {
    console.log(this.loading);
    this.loading = true;
    console.log(this.loading);
    store.dispatch("fetchProducts").then(() => (this.loading = false));
    setTimeout(() => console.log(this.loading), 5000);
    
  }
};
</script>