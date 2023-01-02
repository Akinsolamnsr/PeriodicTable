import NavWrap from "../../components/PageThree/NavWrap";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import FamilyFit from "../../components/PageThree/Games/family/FamilyFit";




export default function Family(){

    return(
        <NavWrap>
            <DndProvider backend={HTML5Backend}>
              <FamilyFit />
            </DndProvider>
        </NavWrap>
        )
}