import {ref} from 'vue'
import {projectFirestore} from '../firebase/config'

const getPosts = () => {

        const postArticle = ref([])
        const error = ref(null)
        const load = async () => {
        try{

            // delay
            await new Promise(resolve => {
                setTimeout(resolve,2000)
            })

            // fetch data from json-server-----
            // let data = await fetch('http://localhost:3000/posts')
            // if(!data.ok){
            //     throw Error('Data not available')
            // }
            // postArticle.value= await data.json()

            //fetch data from firebase-----
            const res = await projectFirestore.collection('posts')
            .orderBy('created_at', 'desc')
            .get()
            
            postArticle.value=res.docs.map(doc => {
                //console.log(doc.data())
                return { ...doc.data(), id: doc.id}
            })

        }
            catch(err){
                error.value = err.message
            }
        }

return { load, postArticle, error}

}


export default getPosts