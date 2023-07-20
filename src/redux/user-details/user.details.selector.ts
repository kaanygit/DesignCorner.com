import RootState from "../root-reducer";
import { userDetailsSelectorInterfaceTS } from "./user.details.types";

export const selectUserData = (state:RootState) => state.userDetails.data;

