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
      return { ...state, currentStep: state.currentStep + action.payload };
    }
    case ACTIONS.UPDATE_OPTIONS: {
        let res=state.campgrounds.find(item=>item._id==action.payload.id);
        if(action.payload.option in res.options){
            let abc=res.option.filter(item=>item!=action.payload.option);
            return {...state,campgrounds:[
              ...state.campgrounds,
              {
                ...res,
                options:[...abc]
              }
            ]}
        }else{
          res={
            
          }
          return {
            ...state,
            campgrounds:[
              ...state.campgrounds,
              {
                ...res,
              }
            ]
          }
        }
        
      return state;
    }
    default:
      return state;
  }
};
