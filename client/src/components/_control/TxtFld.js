import React from 'react'

const TxtFld = ({label,inpt_plcholder,inpt_type,inpt_name,register,errorobj, ...rest}) => {
    let isError = false
    let errorMessage = ""
    if (errorobj && errorobj.hasOwnProperty(inpt_name)) {
        isError = true
        errorMessage=errorobj[inpt_name].message
        console.log(errorMessage)
      }
      
    return (
        <>
         <label htmlFor={inpt_name}>{label}</label><br></br>
         <input name={inpt_name}  ref={register} type={inpt_type} placeholder={inpt_plcholder} {...rest}/>
         <p>{isError && (errorMessage)}</p>
        </>
    )
}

export default TxtFld
