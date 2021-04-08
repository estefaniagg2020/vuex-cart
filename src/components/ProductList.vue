<template>
  <div class="container-fluid row justify-content-center">
    <b-toast
      id="toast"
      class="alert alert-success"
      variant="success"
      solid
      autoHideDelay="1000"
    >
      <template v-slot:toast-title class="alert alert-success">
        <div>
          Producto añadido correctamente
        </div>
      </template>
    </b-toast>

    <!--  <b-button
      class="mb-2"
      variant="primary"
      @click="$bvToast.show('example-toast')"
    >
      Show toast
    </b-button> -->

    <table class="table col-10">
      <!--   - {{ product.price | currency }}> -->
      <thead class="thead-dark">
        <tr class="">
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col" class="text-right">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="justify-content-center"
          v-for="product in products"
          :key="product.id"
        >
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}€</td>
          <td v-if="product.inventory === 0" class="text-success">Sin stock</td>
          <td v-else>{{ product.inventory }}</td>
          <td class=" text-right ">
            <div
              v-if="product.inventory"
              :disabled="!product.inventory"
              class="btn btn-transparent "
              @click="addProductToCart(product), $bvToast.show('toast')"
            >
              <i class="fas fa-shopping-cart text-secondary"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  components: {
   
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions("cart", ["addProductToCart"]),
  makeToast() {
    this.$bvToast.toast(`hello`, {
      title: "Producto añadido correctamente",
      toaster: "b-toaster-top-center",
    });
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
<style scoped>
.fas {
  font-size: 1.5em;
}
</style>
