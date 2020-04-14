<template>
  <div id="app">
    <to-do-form/>
    <to-do-list/>
  </div>
</template>

<script>
import ToDoForm from "./components/ToDoForm.vue"
import ToDoList from "./components/ToDoList.vue"
export default {
  name: 'App',
  components: {
    ToDoForm,
    ToDoList
  }, data: function(){
    return{
      tarefas:[
        {descricao:"Matemática"},
        {descricao:"Biologia"},
      ]
    }
  }
}
</script>

<style>
</style>
