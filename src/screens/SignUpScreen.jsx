import React, { useRef } from 'react'
import { auth } from '../firebase';
import './signUpScreen.css'

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
      alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div className='signup'>
      <form>
        <h1>로그인</h1>
        <input ref={emailRef} type="email" placeholder='이메일' />
        <input ref={passwordRef} type="password" placeholder='비밀번호'  />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
          <span className='signup_gray'>넷플릭스에 처음이신가요?</span>
          <span className='signup_link' onClick={register}>가입하기</span> 
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen