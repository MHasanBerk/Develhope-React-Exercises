import { useEffect, useRef } from "react"

export function CarDetails({initialData}){
    const formRef = useRef()

    useEffect(()=>{
        if(initialData) {
            return formRef.current.initialData
        }
        
    },[initialData])

    return (
    <div>
        <form ref={formRef}>
          <label>
            Model:
            <input name="model" defaultValue={initialData.model} />
          </label>
          <label>
            Year:
            <input name="year" defaultValue={initialData.year} />
          </label>
          <label>
            Color:
            <input name="color" defaultValue={initialData.color} />
          </label>
        </form>
    </div>
    )
}