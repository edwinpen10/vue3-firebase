<template>
  <div class="tags">
      <div v-if="error">{{error}}</div>
      <div v-if="postArticle.length" class="layout">
          <Postlist :posts="postsWithTag"/>
           <Tagcloud :posts="postArticle"/>
      </div>
      <div v-else>
          <Spinner/>
      </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import Postlist from '../components/PostList'
import getPosts from '../composables/getPosts'
import Tagcloud from '../components/TagsCloud'
import {useRoute} from 'vue-router'
import { computed } from 'vue'

export default {
    components:{
        Postlist,Spinner, Tagcloud
    },
    setup(){
        const route = useRoute()
        const {postArticle, error, load} = getPosts()

        load()

        const postWithTag = computed(()=>{
            return postArticle.value.filter(p => p.tags.includes(route.params.tag))
        })


    const postsWithTag = computed(() => {
      return postArticle.value.filter(p => p.tags.includes(route.params.tag))
    })

        return {error, postArticle, postWithTag, postsWithTag}
    }
}
</script>

<style>

</style>