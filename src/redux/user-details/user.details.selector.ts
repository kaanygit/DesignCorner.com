import { userDetailsSelectorInterfaceTS } from "./user.details.types";

export const selectUserData = (state:userDetailsSelectorInterfaceTS) => state.userDetails.data;

