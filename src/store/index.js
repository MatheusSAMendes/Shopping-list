import Vuex from 'vuex';
import Vue from 'vue';

import productsList from '../api/productsList';


Vue.use(Vuex);

export default new Vuex.Store (
  {
    state: {
      products: [],
    },

    getters: {
      availableProducts(state) {
        return state.products.filter(product => product.inventory > 0);
      },
    },
    
    actions: {
      fetchProducts({commit}) {
        return new Promise((resolve) => {
          productsList.getProducts(products => {
            commit('setProducts', products);
          });
          resolve();
        });  
      },
      adddToCart() {

      }
    },

    mutations: {
      setProducts(state, products) {
        state.products = products;        
      }
    }
  }
);