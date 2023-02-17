class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(this.BASE_URL + "/characters")
      .then((response) => {
        console.log("data: ", response.data);
        return response.data;
      })
      .catch((err) => console.log(err));
  }

  getOneRegister (id) {
    return axios
    .get(this.BASE_URL + "/characters/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  }

  createOneRegister ({name, occupation, cartoon, weapon}) {
    const variable = {name, occupation, cartoon, weapon};
    console.log(variable)
    return axios
    .post(this.BASE_URL + "/characters", variable)
         
  } 

  updateOneRegister ( {id, name, occupation, cartoon, weapon}) {
    /* const variable = {name, occupation, cartoon, weapon}; */
    
    return axios
    .put(this.BASE_URL + "/characters/" + id, {name, occupation, cartoon, weapon})
  }

  deleteOneRegister (id) {
    return axios
    .delete(this.BASE_URL + "/characters/" + id)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  }
}
