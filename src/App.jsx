import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './Appwrite/auth'
import {login,logout} from './store/authSlice'
import './App.css'
import {Header,Footer} from './components/index'

function App() {

  const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()

   useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  if (loading) {
    return <div>Loading...</div>
  } else {
    return (
      <>
      <div className='bg-gray-700 min-h-screen w-full m-0 p-0'>
        <div>
          <Header />
          <main>
            // Outlet here 
            <h1>Outlet</h1>
          </main>
          <Footer />
        </div>
      </div>
      </>
    )
  }
}

export default App
