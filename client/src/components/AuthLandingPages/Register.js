import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import { Link} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

//copmonents
import  TxtFld  from '../_control/TxtFld'
import Select from '../_control/Select'
import PasswordFld from '../_control/PasswordFld'
//helper
import {lan_opt} from '../_helper/selectionArray'
import {validationRegisterForm} from '../_services/validateForm'


const Register = () => {
    //handling  form validation
    const {register, handleSubmit, formState ,errors} = useForm({
        mode: "onChange",
        resolver: yupResolver(validationRegisterForm)
      });

      //handling showing Password
      const [showPassword,setShowPassword]=useState(false)
      const showPass={showPassword,setShowPassword}
    //handling sumbting form
    const onSubmit= (userInfo)=>{
        
        console.log(userInfo)
          
      }
    return (
        <>
            <div className="hero-title">
                <h1>Регистрация</h1>
                <small>уже есть аккаунт? <Link className="linkto" to="/login">Войти</Link></small>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control">
                        <TxtFld register={register} label={'Имя'} inpt_plcholder={'Введите Ваше имя'} inpt_type={'text'} inpt_name={'name'} errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <TxtFld register={register} label={'Email'} inpt_plcholder={'Введите Ваш email'} inpt_type={'email'} inpt_name={'email'} errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <TxtFld register={register} label={'Номер телефона'} inpt_plcholder={'Введите номер телефона'} inpt_type={'tel'} inpt_name={'tel'} errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <PasswordFld register={register} label={'Пароль'} inpt_plcholder={'Введите пароль'}  inpt_name={'pass1'} showPass={showPass} icon={true}  errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <PasswordFld register={register} label={'Пароль'} inpt_plcholder={'Введите пароль'}  inpt_name={'confpass1'} showPass={showPass} icon={false}  errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <Select register={register} slt_plcholder={'Язык'} label={'Язык'} name={'lan'} options={lan_opt}/>
                    </div>
                    <div className="form-control checkbox-control">
                        <input type="checkbox" name='usageCondition' ref={register} errorobj={errors}/>
                        <label htmlFor="usageCondition">Принимаю <Link className="linkto" to="#">условия</Link> использования</label>
                    </div>
                    <button className={formState.isValid ? "btn-active": "btn-NotActive"} onClick={handleSubmit(onSubmit)}>
                        зарегистрироваться
                    </button>
           </form>
        </>
    )
}

export default Register
