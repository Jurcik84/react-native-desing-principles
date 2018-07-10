import * as OB_ACTION from "../actions/root-action";




const func_fetch_data_start = () => ({

    type: OB_ACTION.LOAD_DATA,
    payload: true
});

const func_fetch_data_succ = () => ({
    type: OB_ACTION.LOAD_DATA_SUCC,
    payload: arr_data
});

const func_fetch_data_err = (ob_error) => ({

    type: OB_ACTION.LOAD_DATA_ERROR,
    payload: ob_error
});



export const func_fetchDataAsyn = () => {

    return async dispatch => {

        dispatch(func_fetch_data_start());

        try {
            const response = await fetch('')

            dispatch(func_fetch_data_succ(response))
        }

        catch (ob_error) {

            dispatch(func_fetch_data_err(ob_error))
        }

    }

}

