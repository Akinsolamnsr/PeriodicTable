import React from "react"
import dynamic from "next/dynamic";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import ElementArrange from "../../components/PageThree/Games/Arrangement/Arrange";
import NavWrap2 from "../../components/PageThree/NavWrap2";


export default function Arragement(){

  return (
      <NavWrap2>
        <DndProvider backend={HTML5Backend}>
        <ElementArrange />
        </DndProvider>
      </NavWrap2>
  );
}