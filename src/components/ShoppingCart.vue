<template>
  <div
    class="cart container-fluid row justify-content-center mt-4"
    v-if="products.length"
  >
    <h2 class="text-center col-12">Carrito</h2>
    <table class="table col-10">
      <!--   - {{ product.price | currency }}> -->
      <thead class="thead-dark">
        <tr class="justify-content-center">
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col" class="">Total</th>
          <th scope="col" class="text-right">Acción</th>
        </tr>
      </thead>
      <tbody class="">
        <tr class="" v-for="product in products" :key="product.id">
          <th scope="row">{{ product.title }}</th>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity}}</td>
          <td v-if="product.quantity != 0">
            {{ (product.price * product.quantity).toFixed(2) }}€
          </td>
          <td class="text-right">
            <button class="btn btn-transparent" @click="borrarProducto(product.id)">
              <i class="fas fa-trash text-danger" ></i>
            </button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>          
          <td></td>
          <td class="row justify-content-end">
            <span>Total: {{ total.toFixed(2) }}€ </span>
          </td>
          <td class="row justify-content-end">
         
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState , mapActions} from "vuex";

export default {
  computed: {
    ...mapState({
      totalItem: (state) => state.cart.totalItem,
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
      
    }),
  },
  methods: {
    borrarProducto(id)
    {
        this.$store.dispatch("cart/deleteProductCart", id);
    },
  
   
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
      
    },
  },
};
</script>
