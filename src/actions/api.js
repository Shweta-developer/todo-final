import axios from "axios";

const baseUrl = "https://shwetajson.herokuapp.com/todo"



export default {

    todo(url = baseUrl ) {
        return {
            fetchAll: () => axios.get(url),
            
            create: newRecord => axios.post(url, newRecord),
           
        }
    }
   
}
