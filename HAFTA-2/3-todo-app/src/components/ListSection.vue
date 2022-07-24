<template>
    <TodoList @delete-todo-item="$emit('delete-todo-item', $event)" :myData="todoList" />
    <ResultBar :itemCount="provideData.todoList.length"/>
</template>

<script>
 
import TodoList from "@/components/TodoList.vue";
import ResultBar from "@/components/ResultBar.vue"

export default {    
    inject: ["provideData"],
    props: {
        todoList: {
            type: Array,
            required: true
        }
    },
    components: {
        TodoList,
        ResultBar
    },
}
</script>