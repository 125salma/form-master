import { useState } from "react"

//make custom hook
const useInputState = (defaultValue = null) =>{
    const [value,setValue] = useState(defaultValue);
    
    // const handleChange = e=>{
    //     setValue(e.target.value);
    // }
    
    // return [value, handleChange]

    //object
    const onChange = e=>{
        setValue(e.target.value);
    }
    
    return {
        value,
        onChange
    }
}
export default useInputState;