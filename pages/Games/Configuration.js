import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import NavWrap from "../../components/PageThree/NavWrap";
import Config from '../../components/PageThree/Games/Config/Config';




export default function Configuration(){
    
    return(
        <NavWrap>
            <Config />
        </NavWrap>
        )
}