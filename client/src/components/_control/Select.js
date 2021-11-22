import React from 'react'

const Select = ({ register, options, name,label,slt_plcholder, ...rest }) => {
  
    return (
        <>
                 <label htmlFor={name}>{label}</label><br></br>     
                  <select ref={register} {...rest} defaultValue={'DEFAULT'} className="placeholder_select" name={name}>
                    <option value='DEFAULT' disabled  hidden>{slt_plcholder}</option>
                    {options.map(my_option=>(<option key={my_option[0]} value={my_option[0]}>{my_option[1]}</option>))}
                  </select> 
        </>
    )
}

export default Select
