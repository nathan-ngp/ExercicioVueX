<template>
  <div id="toDoList">
       <div class="tarefas" v-for="(toDoList, index) in tarefas" :key="index">
            {{toDoList.descricao}}
        </div>
  </div>
</template>

<script>
export default {
    name:"ToDoList",
    computed:{
        tarefas(){ 
            return this.$store.state.tarefas
        }
    }
}
</script>

<style>
    #toDoList{
        background-color: #191919;
        width: 400px;
        height: 150px;
        margin-left: 650px;
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
    }

    .tarefas{
        width: (tarefas);
        height: 50px;
        border:2px solid #df49a6;
        color: white;
        margin: 5px 20px 0 20px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        border-radius: 10%;
    }

    #toDoList::-webkit-scrollbar{
        width: 10px;
    }

    #toDoList::-webkit-scrollbar-thumb{
    background: #6649b8;
    }

    #toDoList::-webkit-scrollbar-track{
    background: #1e1e24
    }
</style>