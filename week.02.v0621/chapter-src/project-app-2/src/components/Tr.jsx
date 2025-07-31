import Td from "./Td";

const Tr = ({item}) => {
    return(
        <>
           <tr>
             {Object.values(item).map(value =>(<Td value={value}/>))}
           </tr>
        </>
    )
}

export default Tr;