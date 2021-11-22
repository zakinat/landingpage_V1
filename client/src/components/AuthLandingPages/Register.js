import React from 'react'
import { useForm } from "react-hook-form"
import { Link} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

//copmonents
import  TxtFld  from '../_control/TxtFld'
import Select from '../_control/Select'



//helper
import {lan_opt} from '../_helper/selectionArray'
import {validationRegisterForm} from '../_services/validateForm'
const Register = () => {

    const {register, handleSubmit, formState ,errors} = useForm({
        mode: "onChange",
        resolver: yupResolver(validationRegisterForm)
      });

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
