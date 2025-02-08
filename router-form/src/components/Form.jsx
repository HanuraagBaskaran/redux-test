import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const Form = ()=>{
    const [name, setName] = useState("")
    const [dirty, setDirty] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        const handleUnload=(event)=>{
            if(dirty){
                event.preventDefault();
                event.returnValue= "Are you sure you want to proceed? You have changes that might not be saved"
            }
        }

        window.addEventListener("beforeunload", handleUnload)
        return ()=>window.removeEventListener("beforeunload", handleUnload)
    }, [dirty])


    const saveButton =()=>{
        setDirty(false)
    }
    const proceedButton =()=>{
        if(!dirty|| window.confirm("Are you sure you want to proceed?")){
            navigate("/success")
        }
    }
    return(
        <>
        <div>FORM</div>
        <input value={name} onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>saveButton()}>SAVE</button>
        <button onClick={()=>proceedButton()}>PROCEED</button>
        </>
    )
}

export default Form