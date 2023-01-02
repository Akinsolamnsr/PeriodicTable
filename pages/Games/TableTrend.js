import NavWrap from "../../components/PageThree/NavWrap";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import TrendFit from "../../components/PageThree/Games/trend/Trend";





export default function TableTrend(){

    return(
        <NavWrap>
       <DndProvider backend={HTML5Backend}>
       <TrendFit />
       </DndProvider>
        </NavWrap>
        )
}