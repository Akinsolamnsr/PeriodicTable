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
                case "DROPSTATUS2":
                const tempS=action.payload
                state.dropS.push(...tempS)
                return  {...state}
                case "DROPSTATUS3":
                const tempT=action.payload
                state.dropT.push(...tempT)
                return  {...state}
              case"FLIP":
              return {...state,flip:action.payload}
              case"PERIODFLIP":
              return {...state,PeriodFlip:action.payload}
              case"MODAL":
              return {...state,modal:action.payload}
              case"DRAG":
              return {...state,drag:action.payload}
              case"SPDF":
                state.spdf.push(action.payload)
                return  {...state}
                case "DROP2":
                const temp2=action.payload
                state.drop2.push(...temp2)
                return  {...state}
                case"CONFIG":
                return {...state,config:action.payload}
                case"CONSPDF":
                return {...state,spdfConfig:action.payload}
                case "FIG":
                const tempo=Array.from(new Set(action.payload))   
                state.double.push(...tempo)
                return  {...state}
                case "SPDFBOX":
                const temp3=action.payload
                state.spdfBox.push(...temp3)
                return  {...state}
                case"ONOFF":
                return {...state,onoff:action.payload}
                case"FITELEMENT":
              return {...state,fitELement:action.payload}
              case"CHECK":
              return {...state,check:action.payload}
              case "DROP3":
                const temp4=action.payload
                state.drop3.push(...temp4)
                return  {...state}
              case "DROP4":
                  const temp5=action.payload
                  state.drop4.push(...temp5)
                  return  {...state}
              case  "TIMER":
                  return {...state,timer:action.payload}
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
    dropS:[],
    dropT:[],
    flip:false,
    PeriodFlip:"Full",
    modal:false,
    drag:"",
    spdf:[],
    drop2:[],
    config:"",
    double:[],
    spdfConfig:"",
    spdfBox:[],
    onoff:"",
    fitELement:"full",
    check:false,
    drop3:[],
    drop4:[],
    timer:false
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