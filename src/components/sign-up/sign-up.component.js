import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { createUserProfileDocument,auth} from '../../firebase/firebase.utils'
export default function SignUp() {
    const [userdata, setUserdata] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
const {name,email,password,confirmPassword}=userdata
   function onSubmit(e) {
        e.preventDefault()

        if(password !== confirmPassword){
        alert("Passwords donot match")
        }
        else{
         try{
             const {user}= auth.createUserWithEmailAndPassword(email,password)
             createUserProfileDocument(user,{name})
         }
         catch(error){
             console.error(error)
         }
        }
    }
    async function handleChange(e){
      setUserdata((prev)=>({
          ...prev,
          [e.target.name]:e.target.value,
      }
      ))
    }

  return (
    <div className='sign-up'>
        <h1 className='title'>I don't have an Account</h1>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={onSubmit}>
            <FormInput 
                type='text'
                name='name'
                value={name}
                label='Name'
                onChange={handleChange}
                required
            />
            <FormInput 
                type='email'
                name='email'
                value={email}
                label='Email'
                onChange={handleChange}
                required
            />
            <FormInput 
                type='password'
                name='password'
                value={password}
                label='Pasword'
                onChange={handleChange}
                required
            />
            <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                label='Confirm Password'
                onChange={handleChange}
                required
            />
            <CustomButton type='submit'>Sign Up</CustomButton>
            </form>

            
           
    </div>
  )
}
