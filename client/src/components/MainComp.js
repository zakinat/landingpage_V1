import React,{useState} from 'react'


//importing components
import Login  from './AuthLandingPages/Login'
import Register from './AuthLandingPages/Register'
import UserDashboard from './Pages/UserDashboard'

//Router
import { Switch,Route,Redirect} from 'react-router-dom'

const MainComp = () => {
    
    const [userloaded,setuserloaded]  = useState(false)

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
                    <Redirect to="login" />
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
