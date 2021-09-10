
interface ICharacter{
    name:string,
    race:string,
    age:number,
    sex:string,
    class:string,
    level:number,
    str:number,
    int:number,
    wis:number,
    cha:number,
    dex:number,
    con:number,
    bio:string,
    image:any,

}
interface IProps{
    item:ICharacter
}

const CharacterSheet=(props:IProps)=> {
   
    
    return (
        <div id="info">
            <div id="myGuy">
                <h1 id="charName">{props.item.name}</h1>
                <h2 id="charClass">{props.item.class}</h2>
                <img src={props.item.image} height="200" width="200" alt="dwarf"/>
                
            </div>
            <div id="vitals">
                <h3>Race: {props.item.race}</h3>
                <h3>Gender: {props.item.sex}</h3>
                <h3>Age: {props.item.age}</h3>
                <h3>Level: {props.item.level}</h3>
            </div>
            <div id="stats">
                <h3>Strength: {props.item.str}  Intelligence: {props.item.int}  </h3>
                <h3>Dexterity: {props.item.dex}     Wisdom: {props.item.wis} </h3>
                <h3>Constitution: {props.item.con}  Charisma: {props.item.cha} </h3>                
            </div>
            <div id="bio">
                <h3>Bio:</h3>
                <p>{props.item.bio}</p>
            </div>
        </div>
    )
}
export default CharacterSheet