<template>
  <div id="app">
    <ShoppingList/>
    <ShoppingCart/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList';
import ShoppingCart from './components/ShoppingCart';

export default {
  name: 'App',
  components: {
    ShoppingList,
    ShoppingCart,
  }
}
</script>