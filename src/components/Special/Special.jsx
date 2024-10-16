import { useContext } from "react";
import { AssetContext } from "../Granpa/Granpa";

const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Spectial</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
            
        </div>
    );
};

export default Special;