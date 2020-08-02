<template>
  <div class="home">
    <AppBar msg="Welcome to Your Vue.js App" />
    <ArticleLayout></ArticleLayout>
    <FormRoom></FormRoom>
    <AppFoot></AppFoot>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/AppBar.vue";
import AppFoot from "@/components/AppFoot.vue";
import ArticleLayout from "@/components/ArticleLayout.vue";
import FormRoom from "@/components/FormRoom.vue";
// import Jitsi from "@/components/Jitsi.vue";

export default {
  name: "Home",
  components: {
    AppBar,
    AppFoot,
    ArticleLayout,
    FormRoom
    // Jitsi,
  }
};
</script>
