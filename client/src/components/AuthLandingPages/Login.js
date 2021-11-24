import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form"
import { Link, useHistory} from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'

//copmonents
import  TxtFld  from '../_control/TxtFld'
import PasswordFld from '../_control/PasswordFld'
//redux
import {signinUser} from '../../redux/authUser'
import {clearErrors} from '../../redux/error'
import { useDispatch, useSelector } from "react-redux"
import * as ActionTypes from '../../redux/actionTypes'
//helper
import {validationLoginForm} from '../_services/validateForm'


const Login = () => {
    //holders of functions
    const history=useHistory()
    const dispatch = useDispatch()

    //redux state
    const  error  = useSelector(state => state.error)
    const  userauth  = useSelector(state => state.authUser)
    //handling  form validation
    const {register, handleSubmit, formState ,errors,reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(validationLoginForm)
      });
      //checking when the user is in the state of the programe to leave the register page
      useEffect(() => {
        if(userauth?.isAuthenticated){
          reset()
          history.push('/')
        } 
      }, [userauth])
      //handling showing Password
      const [showPassword,setShowPassword]=useState(false)
      const showPass={showPassword,setShowPassword}
    //handling sumbting form
    const onSubmit= async (dataForm)=>{
        dispatch(clearErrors())
        const {email,password}=dataForm
        const userInfo={email,password}
        await dispatch(signinUser(userInfo))
        console.log(userInfo)
      }
    return (
        <>
            <div className="hero-title">
                <h1>Регистрация</h1>
                <small>пока нет аккаунта? <Link className="linkto" to="/register">зарегистрироваться</Link></small>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} onReset={reset} >
                    <div className="form-control">
                        <TxtFld register={register} label={'Email'} inpt_plcholder={'Введите Ваш email'} inpt_type={'email'} inpt_name={'email'} errorobj={errors}/>
                    </div>
                    <div className="form-control">
                        <PasswordFld register={register} label={'Пароль'} inpt_plcholder={'Введите пароль'}  inpt_name={'password'} showPass={showPass} icon={true}  errorobj={errors}/>
                    </div>
                    <button className={formState.isValid ? "btn-active": "btn-NotActive"} onClick={handleSubmit(onSubmit)}>
                        вход
                    </button>
           </form>
        </>
    )
}

export default Login
