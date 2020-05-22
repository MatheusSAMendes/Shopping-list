<template>
  <div>
    <h1>Shopping List</h1>
    <p v-if="loading" >Loading...</p>
    <Ul v-else >
        <li v-for="product in products" v-bind:key="product.id" >{{product.title}} ${{product.price}}</li>
    </Ul>
  </div>
</template>
<script>
import store from '../store';

export default {
    name: 'ShoppingList',
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        products() {
            return store.getters.availableProducts;
        }
    },
    created () {
        this.loading = true;
        store.dispatch('fetchProducts')
            .then(() => this.loading = false);
    }
}
</script>