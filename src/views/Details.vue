<template>
    
    <div v-if="error">{{error}}</div>
    
    <div v-if="post" class="post">
          <h3>{{post.title}}</h3>
          <p class="pre"> {{post.body}}</p>
          <button @click="handleClick" class="delete">Delete</button>
          <br>
          <div v-for="tag in post.tags" :key="tag">#{{tag}}</div>
    </div>
      <div v-else>
        <Spinner />
    </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner'
import { useRoute, useRouter } from 'vue-router'
import { projectFirestore } from '../firebase/config'

export default {
    props:['id'],
    components:{
        Spinner,
    },
    setup(props){

        
        const route = useRoute()
        //Without useRouter
       //const {post, error, load} =  getPost(props.id)

       //With useRouter
       const {post, error, load} =  getPost(route.params.id)
       const router = useRouter()

        load()

        const handleClick = async () => {
            await projectFirestore.collection('posts')
            .doc(props.id)
            .delete()

            router.push('/')
        }

        return {post, error, handleClick}

    }

}
</script>

<style>
.post{
    max-width:1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}
.pre{
    white-space: pre-wrap;
}
button.delete{
    margin: 10px auto;
}
</style>