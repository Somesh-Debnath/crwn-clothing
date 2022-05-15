import React from 'react'
import { useState,useEffect } from 'react'
import './signin.styles.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component';
export default function SignIn() {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const {email,password}=formData
    const onSubmit=e=>e.preventDefault()
    onchange=e=>{setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))}
  return (
      
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
    
    <form onSubmit={onSubmit}>
       <FormInput name='email' value={email} onChange={onchange} type='email'label='email' required/>
       <FormInput name='password' value={password} onChange={onchange} type='password' label='password' required/>
       <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
    </form>
    </div>
    
  )
}
