import api from "./apiservices";


const registerUser = async (payload:object) => {

    try {
        const response = await api.post('/account/', payload)
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

export {registerUser}