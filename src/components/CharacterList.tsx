import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom";
import ICharacter  from '../assets/model/Character'
import CharacterSheet from './CharacterSheet';

const charData=[
    {
      name: "Kilain Giliak",
      race:"Dwarf",
      age:98,
      sex:"Male",
      class:"Fighter",
      level:1,
      str:18,
      int:8,
      wis:10,
      cha:8,
      dex:14,
      con:18,
      bio:" Kilain is a sturdy fighter.He presses on with the memory of his dead family to give him strength",
      image: "dwarf1"  

    },
    {
        name: "Amarii",
        race:"Human",
        age:23,
        sex:"Female",
        class:"Barbarian",
        level:1,
        str:18,
        int:8,
        wis:10,
        cha:10,
        dex:12,
        con:18,
        bio:"Amarii is a powerful warrior and looks to destroy her enemies.",
        image: "barb1"  
  
      },
      {
        name: "Ren Quickfoot",
        race:"hafling",
        age:22,
        sex:"Male",
        class:"Rouge",
        level:1,
        str:14,
        int:14,
        wis:10,
        cha:10,
        dex:18,
        con:14,
        bio:"Ren grew up on the streets and had to steal to survive aan dsupport his brothers and sisters.",
        image: "halfling1"  
  
      },
      {
        name: "Talastar Osprem",
        race:"Elf",
        age:134,
        sex:"Male",
        class:"Wizard",
        level:1,
        str:8,
        int:18,
        wis:10,
        cha:14,
        dex:14,
        con:12,
        bio:"Talastar discovered his talent while hiding from goblins. He uses his powerful evocations to eleminate his enenimes.",
        image: "elf1"  
  
      },
      {
        name: "Haelum Goode",
        race:"Human",
        age:26,
        sex:"Male",
        class:"Cleric",
        level:1,
        str:10,
        int:10,
        wis:18,
        cha:14,
        dex:12,
        con:12,
        bio:" Haelum Goode is proud cleric of Paladine.",
        image: "human1"  
  
      }
]






const CharacterList=()=> {
  const [character ,setChar] = useState<ICharacter>();  
  return(
    <><div id="left">
      <ListGroup>
        {charData.map((char) => (
          <ListGroupItem id="charList" action onClick={() => setChar(char)}>{char.name}
          </ListGroupItem>
        )
        )}
      </ListGroup>
    </div>
    <div id="right">
        {character && <CharacterSheet item={character} />}
      </div></>
  )
}
export default CharacterList