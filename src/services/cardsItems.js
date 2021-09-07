import Axios from 'axios'

const url = "https://memo-vue-18e62-default-rtdb.europe-west1.firebasedatabase.app/"

export default  {
   listCategories() {
      //  console.log(`${url}categories.json`)
       return Axios({
        url: `${url}categories.json`,
           method: "get"
       })
       .then((response) => {
        let categoriesArray = []
        //console.log(typeof(response.data))
       // console.log(response.data)
        //converion objet d'objets en array d'objets
        for(let property in response.data) {
          response.data[property].index = property
          categoriesArray.push(response.data[property])
        }
        return categoriesArray
    })
   },
   add(category) {
    return Axios({
        url: `${url}categories.json`,
        method: 'post',
        data: category
    })
    .then(response => response.data)
  },
  deleteCategory(index) {
    return Axios({
        url: `${url}/categories/${index}.json`,
        method: 'delete',
    })
    .then(response => response.data)
}
}