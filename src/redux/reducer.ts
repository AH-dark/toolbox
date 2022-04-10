import { Reducer } from "redux";
import { SET_APPBAR_KEY, SET_TITLE } from "./actions";

export interface MyState {
    navbar: {
        key: string[];
    };
    title: string | null;
}

const initState: MyState = {
    navbar: {
        key: [window.location.pathname],
    },
    title: null,
};

const reducer: Reducer<MyState> = (state: MyState = initState, action) => {
    switch (action.type) {
        case SET_APPBAR_KEY:
            return {
                ...state,
                navbar: {
                    ...state.navbar,
                    key: action.key,
                },
            };
        case SET_TITLE:
            return {
                ...state,
                title: action.title,
            };
        default:
            return state;
    }
};

export default reducer;
