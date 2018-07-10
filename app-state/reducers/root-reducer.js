
import * as OB_ACTION from "../actions/root-action";


const ob_initState = {

    arr_data: [],

};


const func_FetchinDataReducer = (ob_state = ob_initState, ob_action) => {

    switch (ob_action.type) {

        case OB_ACTION.LOAD_DATA:
            return {
                ...ob_state,
                arr_data: []
            };

        case OB_ACTION.LOAD_DATA_SUCC:
            return {
                ...ob_state,
            };

        case OB_ACTION.LOAD_DATA_ERROR:
            return {
                ...ob_state
            };

        default:
            return ob_state;
    }
};

export default func_FetchinDataReducer;

