<template>
  <div class="home">
    Home
    <!-- <p ref="p">my {{titleRef.name}} and my age is {{titleRef.age}}</p> -->
        <!-- <p>my {{titleRef.name}} and my age is {{titleRef.age}}</p> -->
    <!-- <button @click="handleClick">Click</button>
    <button @click="age++">Add one age</button>
    <input type="text" v-model="name"> -->
    <!-- <button @click="updateTitleref"> update</button>
    <br>
    <h3>Reactive</h3>
    <p>{{titleReactive.name}} and my age is {{titleReactive.age}}</p>
     <button @click="updateReactive"> update with reactive</button><br>
     <h3>with computed function</h3>
     <input type="text" v-model="seacrh">
     <p>{{seacrh}}</p>
     <br>
     <div v-for="name in matchingName" :key="name">{{name}}</div>
     <br>
     <button @click="handleClick">Stop watch</button>
     <br> -->
     <h3>props with composition API</h3>
     <h4 v-if="error">{{error}}</h4>
     <div v-if="postArticle.length" class="layout">
        <!-- <PostList v-if="showPosts" :posts="postArticle"/> -->
       <PostList  :posts="postArticle"/>
       <TagCLoud :posts="postArticle"/>
     </div>
     <div v-else>
       <Spinner/>
     </div>
     
     <!-- <button @click="showPosts  = !showPosts">Toggle post</button>
     <button @click="posting.pop()">Delete post</button> -->
  </div>
</template>

<script>
// import {ref, reactive , computed, watch, watchEffect} from 'vue'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner'
import TagCLoud from '../components/TagsCloud'
export default {
  name:'Home',
  components:{
    PostList,
    Spinner,
    TagCLoud
  },
  setup(){
  //   const titleRef = ref ({name:'edwin', age:28})
  //    const titleReactive = reactive ({name:'nurul', age:28})

  //   //  const name = ref('edwin')
  //   // const age = ref(21)

  //   //const p = ref(null)

  //   // const handleClick = () => {
  //   //   titleRef.value.name = 'nurul',
  //   //   titleRef.value.age = 25
  //   //   //console.log(p, p.value)
  //   //   // p.value.classList.add('test')
  //   //   // p.value.textContent= 'Hallo Edwin'
  //   // }

  //   const updateTitleref = () =>{
  //     titleRef.value.age=30
  //   }


  //    const updateReactive = () =>{
  //     titleReactive.age=33
  //   }
  //   const seacrh=ref('')
  //   const names = ref(['edwin','penangsang','nurul','fitria','puspitasari'])
  //    const posting = ref(
  //      [
  //       {title: 'article one', body:'this article one', id:1},
  //        {title: 'article two', body:'this article two', id:2}
  //      ]
  //    )

  //   const matchingName = computed(() => {
  //     return names.value.filter((name) => name.includes(seacrh.value))
  //   })
  //   const stopWatch = watch(seacrh, () => {
  //     console.log('wacth is run')
  //   })

  //   const stopeffect =  watchEffect(() => {
  //     console.log('watcheffect is run', seacrh.value)
  //   })

  //     const handleClick = () => {
  //    stopWatch()
  //    stopeffect()

  //   }

  //  const showPosts = ref(true)

   const {load, error, postArticle} = getPosts()

   load()

   

    return { postArticle, error}
  }
}
</script>

<style>
.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
