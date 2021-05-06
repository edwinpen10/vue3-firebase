import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post = ref([null])
    const error = ref(null)
    const load = async () => {
    try{
        
        // delay
        // await new Promise(resolve => {
        //     setTimeout(resolve,2000)
        // })

        // let data = await fetch('http://localhost:3000/posts/'+ id)
        // if(!data.ok){
        //     throw Error('Data not exist')
        // }
        // post.value= await data.json()


        let res = await projectFirestore.collection('posts').doc(id).get()
        
        if(!res.exists){
            throw Error('That article dont exist')
        }
        post.value= {...res.data(), id: res.id}
    }
        catch(err){
            error.value = err.message
        }
    }

return { load, post, error}
}

export default getPost