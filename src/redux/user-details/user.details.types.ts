// Eylem türleri
export enum USER_TYPE_DETAILS{
    SET_USER_DETAILS= "SET_USER_DETAILS",
    FETCH_USER_DATA= "FETCH_USER_DATA",
    FETCH_USER_DATA_SUCCESS= "FETCH_USER_DATA_SUCCESS",
    FETCH_USER_DATA_FAILURE= "FETCH_USER_DATA_FAILURE",
};  

export interface userDetailsInterface{
    readonly email:string;
    readonly name:string;
    readonly password:string;
    readonly surname:string;
    readonly _v:number;
    readonly _id:string;
};


export interface userDetailsSelectorInterfaceTS{
    userDetails:{
        data:userDetailsInterface[]|null;
    };
};
export interface userDetailsReducerInterfaceTS{
    type:string;
    payload?:any;  
};

export interface SetUserDetailsAction{
    type :typeof USER_TYPE_DETAILS.SET_USER_DETAILS;
    payload:userDetailsInterface|{}
}

export interface FetchUserDataSuccessAction{
    type:typeof USER_TYPE_DETAILS.FETCH_USER_DATA_SUCCESS;
    payload:userDetailsInterface
}

export interface FetchUserDataFailureAction{
    type:typeof USER_TYPE_DETAILS.FETCH_USER_DATA_FAILURE;
    payload:string;
}