import api from "./api";


export const ACTION_TYPES = {
    CREATE: 'CREATE',
    FETCHALL: 'FETCHALL'
}

export const fetchAll = () => dispatch => {
  
            api.todo().fetchAll()
            .then(res => {
                dispatch({
                    type: ACTION_TYPES.FETCHALL,
                    payload: res.data
                })
                
            })
            .catch(err => console.log(err))
  };


export const create = (data, onSuccess) => dispatch => {

    api.todo().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}
