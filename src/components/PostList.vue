<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from '../components/SinglePost'
export default {
    props:['posts'],
    components:{
        SinglePost
    },
    setup(props){
        onMounted(()=> {
            console.log('composnent mounted')
        })
        onUnmounted(()=> {
            console.log('composnent onUnmounted')
        })
        onUpdated(()=>{
            console.log('composnent updatated')
        })
    }
}
</script>

<style>

</style>