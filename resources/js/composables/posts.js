import axios from 'axios'
import { ref } from 'vue'

export default function usePosts() {
    const posts = ref([])

    const getPosts = async () => {
        axios.get('/api/posts')
        .then(response => {
            debugger;
            posts.value = response.data.data;
        })
    }

    return { posts, getPosts }
}