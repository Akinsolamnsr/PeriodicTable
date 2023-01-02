import NavWrap from "../../components/PageThree/NavWrap";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Energy from "../../components/PageThree/Games/EnergyFit/Energy";




export default function Arragement(){

    return(
        <NavWrap>
      <DndProvider backend={HTML5Backend}>
        <Energy />
      </DndProvider>
        </NavWrap>
        )
}