<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr>
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo"/>
    <ListSection/>
    <!-- <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length"/> -->
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import ListSection from "@/components/ListSection.vue";
// import TodoList from "@/components/TodoList.vue";
// import ResultBar from "@/components/ResultBar.vue"
export default {
  components : {
    AddSection,
    ListSection
},
  created() {
    // setTimeout(() => {
    //   this.todoList = [
    //     {id : 1, text : "Bootcamp #2"},
    //     {id : 2, text : "Bootcamp #2.1"},
    //     {id : 3, text : "Bootcamp #2.2"},
    //     {id : 4, text : "Bootcamp #2.3"},
    //     {id : 5, text : "Bootcamp #2.4"},
    // ]
    // },2000);
   
  },
  data(){
    return {
      provideData: {
        todoList: [
          {id : 1, text : "Bootcamp #2"},
          {id : 2, text : "Bootcamp #2.1"},
          {id : 3, text : "Bootcamp #2.2"},
          {id : 4, text : "Bootcamp #2.3"},
          {id : 5, text : "Bootcamp #2.4"},
        ]
      }
    };
  },

  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem
    };
  },

  methods : {
    deleteItem(todoItem){
      this.provideData.todoList = this.provideData.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(todo){
      this.provideData.todoList.push({
        id : new Date().getTime(),
        text : todo
      });
    },
    testEvent(data){
      alert(data);
    }
  },
}
</script>