import api from "./apiservices";
import { ref } from "vue";



const registerUser = async (payload:object) => {

    try {
        const response = await api.post('/account/', payload)
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

const username = ref<string | null>(null);
const token = ref<string | null>(null);

export const isAuthenticated = (): boolean => {
  const storedToken = localStorage.getItem("authToken");
  const storedUsername = localStorage.getItem("username");

  if (!storedToken) {
    console.log("Aucun token trouvé");
    token.value = null;
    username.value = null;
    return false;
  }

  token.value = storedToken;
  username.value = storedUsername;
  return true;
};

export {registerUser}