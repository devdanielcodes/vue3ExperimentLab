import { reactive, toRefs } from 'vue'

const state = reactive({
    myName: 0,
    melo: 'rico',
    nu: null
    
})

export default function manage(){
    state.myName
    state.melo
    state.nu

    function add(){
        state.myName++
    }

    function getTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            state.nu = data
        })
    }

    return{
        ...toRefs(state),
        add,
        getTodo,
    }
}