import { Action } from "redux";
import log from "./log";

export const SET_APPBAR_KEY = "SET_APPBAR_KEY";

export interface ActionSetAppbarKey extends Action {
    key: string[];
}

export const setAppbarKey: (key: string[]) => ActionSetAppbarKey = (
    key: string[]
) => {
    log("Set Appbar Key:", key);
    return {
        type: SET_APPBAR_KEY,
        key: key,
    };
};

export const SET_TITLE = "SEI_TITLE";

export interface ActionSetTitle extends Action {
    title: string;
}

export const setTitle = (title: string) => {
    log("Set Title:", title);
    window.document.title = `${title} - AHdark Toolbox`;
    return {
        type: SET_TITLE,
        title: title,
    };
};
