<template>
  <UserList></UserList>
  <NewUser></NewUser>
</template>

<script>
import UserList from "@/components/UserList"
import NewUser from "@/components/NewUser"

export default {
  name: 'App',
  components: {
    UserList,
    NewUser
  }
};
</script>

