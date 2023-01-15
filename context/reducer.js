import { ACTIONS } from "./action";

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ACTIONS.ADD_CAMPGROUND: {
      let res = state.campgrounds.find(
        (item) => item._id == action.payload._id
      );
      if (res) {
        return state;
      } else {
        return {
          ...state,
          campgrounds: [...state.campgrounds, action.payload],
        };
      }
    }
    case ACTIONS.REMOVE_CAMPGROUND: {
      let campgrounds = state.campgrounds.filter(
        (item) => item._id != action.payload
      );
      return { ...state, campgrounds };
    }
    case ACTIONS.UPDATE_STEP: {
      return { ...state, currentStep:action.payload };
    }
    case ACTIONS.UPDATE_OPTIONS: {
      console.log(action)
      let res=state.campgrounds.find(item=>item._id==action.payload.camp_id);
      let opt=res.options.find(item=>item==action.payload.option_id);
      
      return state;
    }
    case ACTIONS.SELECT_CHECK_IN:{
      return {
        ...state,
        checkIn:action.payload
      }
    }
    case ACTIONS.SELECT_CHECK_OUT:{
      return {
        ...state,
        checkOut:action.payload
      }
    }
    case ACTIONS.SELECT_DATES:{
      return {
        ...state,
        checkIn:null,
        checkOut:null,
        selectedDate:action.payload
      }
    }
    default:
      return state;
  }
};
