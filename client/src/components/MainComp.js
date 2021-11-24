import React,{useState,useEffect} from 'react'


//importing components
import Login  from './AuthLandingPages/Login'
import Register from './AuthLandingPages/Register'
import UserDashboard from './Pages/UserDashboard'
//redux
import { useDispatch, useSelector } from "react-redux"
import {loadUser,setToken} from '../redux/authUser'

//Router
import { Switch,Route,Redirect} from 'react-router-dom'

const MainComp = () => {
    const dispatch=useDispatch()
    const [userloaded,setuserloaded]  = useState(false)
    const  userauth  = useSelector(state => state.authUser)
    //check when the user is registered or signed in 
    useEffect(() => {
        if(userauth.isAuthenticated)
        setuserloaded(true)
        else setuserloaded(false)
      }, [userauth])
      //check for the user after refreshing
    useEffect(() => {
        dispatch(setToken())
        const checkUser =async ()=>{
          try {
             await dispatch(loadUser())
           } catch (err) {
            console.log(err);
           }
         }
          checkUser()
       // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])


    return (
      //protecting the routes
      <>
        <Switch >
                <Route exact path="/">
                    {userloaded ? (
                    <>
                        <UserDashboard/>
                    </>
                    ) : (
                    <Redirect to="register" />
                    )}
                </Route>
                <Route exact path="/register">
                    {userloaded ? (
                    <>
                        <Redirect to="/" />
                    </>
                    ) : (
                    <Register />
                    )}   
                </Route>
                <Route exact path="/login">
                    {userloaded ? (
                    <>
                        <Redirect to="/" />
                    </>
                    ) : (
                    <Login />
                    )}
                </Route>
                <Redirect from='*' to='/'/>
        </Switch>
     </>
    )
}

export default MainComp
