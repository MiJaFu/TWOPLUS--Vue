<template>
        <div>
            <div>
            <h2>{{msg}}</h2>
            <h3>{{$store.state.count}}</h3>
            <h3>{{$store.getters.count}}</h3>
        </div>
          <div>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
        <p>
          <button @click="addAction">+</button>
          <button @click="reduceAction">-</button>
        </p>
        <p @click="tonext">去下一层A</p>
    </div>
        </div>
 </template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed: {
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["add", "reduce","tonext"]),
    ...mapActions(["addAction", "reduceAction"]),
    tonext(){
       this.$store.commit('tonext', "来吧")
    }
  }
};
</script>