import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granpa.css'

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Granpa = () => {
    const [money, setMoney] = useState(1000)
    

    const asset = 'diamond'
    return (
        <div className="granpa">
        
            <h2>Grandpa</h2>
            <h2>Net money: {money}</h2>
                <MoneyContext.Provider value={[money,setMoney]}>
                    <AssetContext.Provider value="gold">
                        <section className="flex">
                            <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </section> 
                    </AssetContext.Provider>
               </MoneyContext.Provider>
        </div>
    );
}; 

export default Granpa;

/*
1. create a context and export it
2. add provider for the context with a value ,value could be anything
3. useContext to access value in the context API
*/