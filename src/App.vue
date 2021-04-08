  <template>
    <div id="app" class="container-fluid">
        
      <h2 class="text-center my-4">Productos</h2>
      <ProductList/>    
      <ShoppingCart/>
    </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  components: { ProductList, ShoppingCart }
}
</script>
