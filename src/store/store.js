import { createStore } from "vuex"

const store = createStore({
    state: {
        data: 'This is from store',
        users: [
            {
                id: 1,
                name: "Danii",
                hobby: "Walk"
            },
            {
                id: 2,
                name: "Danieeeei",
                hobby: "Walkeeee"
            },
            {
                id: 3,
                name: "Danaaaaaasdsasii",
                hobby: "Falksdadasdsad"
            },
        ]
    },
    mutations:{
        addUser(state){
            state.users.push({id: 4, name: 'Rick', hobby: "Sigsfsd"})
        }
    }
})

export default store