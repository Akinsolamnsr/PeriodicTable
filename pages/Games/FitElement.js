import NavWrap2 from "../../components/PageThree/NavWrap2";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import ElementFit from "../../components/PageThree/Games/ElemFit/ElemFit";






export default function FitElement(){

    return(
        <NavWrap2 >
            <DndProvider backend={HTML5Backend}>
              <ElementFit />
            </DndProvider>
        </NavWrap2>
        )
}