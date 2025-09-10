import api from "./apiservices";

const token = localStorage.getItem('authToken');

const registerSchool = async (payload: object) => {
  try {
    const response = await api.post(
      "/school/",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'école :", error);
    throw error;
  }
};

const getOwnerSchool = async ()  => {
  try {
    const response = await api.get('/school/',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response.data.schools)
    return response;
  } catch (error) {
    console.log("Requête non effectuée !!!", error);
    throw error;
  }
}

const createClasse = async(payload:object) => {
  try{
    const response = await api.post('/school/classes',
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log("Requête non effectuée !!!", error);
    throw error;
  }
}

export {registerSchool, getOwnerSchool, createClasse}