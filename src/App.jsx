import React, { useContext, useEffect, useState } from 'react'
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import AuthProvider, { AuthContext } from './Context/AuthProvider';


function App() {
 
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        const userdata = JSON.parse(loggedInUser)
      setUser(userdata.role)
      setloggedInUserData(userdata.data)
    }

  },[]);
  const handlelogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == 123) {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
      setUser('admin')

    }
    else if (authData) {
      const employee=authData.employee.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee',data: employee}));
      }
    }
    else {
      console.log('invalid credentials');
    }
  }


  return (

    <>
      {!user && <Login handlelogin={handlelogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser}/>}
      {user=='employee' && <EmployeeDashboard  data={loggedInUserData} changeUser={setUser}/>}
    </>
  )
}

export default App
