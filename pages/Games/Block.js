import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import NavWrap2 from '../../components/PageThree/NavWrap2'
import BlockFit from '../../components/PageThree/Games/BlockFit'

export default function Block(){

    return(
        <NavWrap2>
        <DndProvider backend={HTML5Backend}>
       	<BlockFit />
        </DndProvider>
        </NavWrap2>
        )
}  