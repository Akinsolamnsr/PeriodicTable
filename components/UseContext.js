import { createContext, useContext, useReducer } from 'react';


function user(state, action) {
  switch (action.type) {
    case "UPDATE":
      const temper=action.payload.toFixed(0)
      return { ...state, Temp:temper };
    case "PROPERTIES":
     return  {...state,dataList:action.payload}
     case "DATA":
      return  {...state,data:action.payload}
      case "STATUS":
        return  {...state,status:action.payload}
        case "PROP":
        return  {...state,PropElement:action.payload}
        case "SLIDE":
        return  {...state,slide:action.payload}
        case "TEMP":
        return  {...state,slide:action.payload}
        case "TEMPCHANGE":
        return  {...state,temp:action.payload}
        case "MARGIN":
        return  {...state,margin:action.payload}
        case "SWITCH":
          return  {...state,switch:action.payload}
          case "ELEMENTPROP":
            return  {...state,elemrntProp:action.payload}
            case "SIGN":
              return  {...state,sign:action.payload}
              case "DROPSTATUS":
                const temp=action.payload
                state.drop.push(...temp)
                return  {...state}
              case"FLIP":
              return {...state,flip:action.payload}
    default:
      return state;
  }
}

const AppContext = createContext();
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};
export function AppWrapper({ children }) {
  let sharedState = {
    dataList:{},
    Properties:{},
    Temp:0,
    data:{},
    status:false,
    PropElement:"",
    slide:false,
    temp:0,
    margin:false,
    switch:true,
    elemrntProp:"",
    sign:false,
    drop:[],
    flip:false,
  }

  const [state, dispatch] = useReducer(combineReducers(user), sharedState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}