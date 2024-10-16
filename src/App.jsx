

import './App.css'
import Granpa from './components/Granpa/Granpa'
// import HookForm from './components/HookForm/HookForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
//   const handleSignUpSubmit = data =>{
//     //e.preventDefault()
//     console.log('sign up data',data)
//  }

//  const handleUpdateProfile = data =>{
//   console.log('update profile data',data)
//   //e.preventDefault()
// }


  return (
    <>
    <h1>Form Master</h1>

      <Granpa></Granpa>

     {/* <SimpleForm></SimpleForm> */}
     {/* <StateFullForm></StateFullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}

     {/* <ReusableForm 
     formTitle={'Sign Up'}
     handleSubmit={handleSignUpSubmit}>
      <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
      </div>
     </ReusableForm>
     <ReusableForm 
     formTitle={'Profile Update'} 
     submitBtnText='Update' 
     handleSubmit={handleUpdateProfile}>
      <div>
        <h2>Update profile</h2>
        <p>Always keep your profile update</p>
      </div>
     </ReusableForm> */}
     
    </> 
  )
}

export default App
