import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";
const PasswordFld = ({label,inpt_plcholder,inpt_name,register,errorobj,showPass,icon, ...rest}) => {
    let isError = false
    let errorMessage = ""
    if (errorobj && errorobj.hasOwnProperty(inpt_name)) {
        isError = true
        errorMessage=errorobj[inpt_name].message
        console.log(errorMessage)
      }
    

    let type_Pass=showPass.showPassword ? 'text' : 'password'
    
    
  
    return (
        <>
         <label htmlFor={inpt_name}>{label}</label><br></br>
         <div className="passInput">
                <input name={inpt_name}  ref={register} type={type_Pass} placeholder={inpt_plcholder} {...rest}/>
                {icon? (
                    <span>
                    {
                        showPass.showPassword?(
                            <>
                                <FontAwesomeIcon icon={faEyeSlash} onClick={()=>showPass.setShowPassword(false)}/>

                            </>
                        ):(
                            <>
                                <FontAwesomeIcon icon={faEye} onClick={()=>showPass.setShowPassword(true)}/>
                            </>
                        )
                    }
                </span>
                ):(
                    <>
                    </>
                )}
         </div>
         <p>{isError && (errorMessage)}</p>
        </>
    )
}

export default PasswordFld
