<template>
  <div>
    <h1>Hello word!!!!!!!!!!!!!!!</h1>
    <!-- <p v-for="(todos,index) in $store.state.todos" :key="index">{{todos.number}}</p> -->
    <div>
      <input type="text" placeholder="insert name..." v-model="newItem">
      <button @click="summit">summit</button>
    </div >
    <table id="customers">
      <th>Name</th>
      <th>Gender</th>
      <th>Age</th>
      <th>Photo</th>
      <th>Function</th>
      <tr v-for="(datas, index) in data" :key="index">
        <td>{{datas.name}}</td>
        <td>{{datas.gender}}</td>
        <td>{{datas.age}}</td>
        <td><img :src='datas.image'></td>
        <td>
          <button @click="removeIndex(index)">X</button>
        </td>
      </tr>
    </table>

    <!-- <div v-for="(datas, index) in data" :key="index">
        {{ datas.name }}
    </div>-->

    <!-- <p>Data Prop to component</p> -->

    <!-- <todo v-for="(todo, index) in todos" :key="index" :dataTodo="todo" />  -->

    <!-- <li v-for="(DataArray, index) in datas" :key="index">
        {{DataArray.name}} .
        {{ DataArray.gender }}
    </li> -->

  </div>
</template>

<script>
// import { mapState } from "vuex";
// import Todo from "./Todo";

export default {
  data () {
    return{
      newItem: "",
    }
  },
  components: {
    // Todo
  },

  computed: {
    // ...mapState({
    //   todos: "todos",
    //   datas:"datas",
    // })

    data() {
      return this.$store.state.datas;
    },
    
  },
  methods: {
    removeIndex(index) {
      //   alert(index);
      this.data.splice(index, 1);
    },
    summit(){
      this.$store.dispatch('insert',this.newItem)
    }
  }
};
</script>

<style>
img{
  width: 100px;
}
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: goldenrod;
  color: white;
}
</style>