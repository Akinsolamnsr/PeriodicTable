import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import NavWrap from '../../components/PageThree/NavWrap'
import BlockFit from '../../components/PageThree/Games/BlockFit'

export default function Block(){

    return(
        <NavWrap>
        <DndProvider backend={HTML5Backend}>
       	<BlockFit />
        </DndProvider>
        </NavWrap>
        )
}  