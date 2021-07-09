import {detailsActionType, Action, DetailsData} from "../_types/detailsTypes"
import {Dispatch} from "redux"

export const loadDetails = (DetailsData: DetailsData) =>{
  return(dispatch:Dispatch<Action>) =>{
    dispatch(
      {
        type: detailsActionType.FETCH_SUCCESSFUL,
        payload: DetailsData
      }
    )
  }
}
