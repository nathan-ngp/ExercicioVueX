<template>
  <div id="toDoForm">
      <input type="text" placeholder="Nova Tarefa?" id="txt" v-model="texto">
      <button id="botao" @click="adicionaTarefa">OK</button>
  </div>
</template>

<script>
export default {
    name:"ToDoForm",
    data:function(){
        return{
            texto:''
        }
    },
    methods:{
        adicionaTarefa:function(){
            this.$store.commit('alteraTexto', { 
                descricao: this.texto
            })
        }
    }
}
</script>

<style>
    #toDoForm{
        background-color: #191919;
        width: 300px;
        height: 150px;
        margin-left: 700px;
        margin-top: 200px;
        border-radius: 10%;
        text-align: center;
    }

    #txt{
        margin: 40px 0 10px auto;
        height: 30px;
        width: 250px;
        border: #3498db 2px solid;
        background: none;
        outline: none;
        color: white;
        border-radius: 24px;
        transition: 2s;
        text-align: center;
    }

    #txt:focus{
        border-color: #2ecc71;
    }

    #botao{
        width: 50px;
        height: 50px;
        border-radius: 20%;
        background: none;
        border: 2px solid #2ecc71;
        cursor: pointer;
        outline: none;
        color: white;
        transition: 1s;
    }

    #botao:focus{
        background: #2ecc71;
    }
</style>