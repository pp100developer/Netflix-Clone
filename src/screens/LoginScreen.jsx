import React, { useState } from 'react'
import './loginScreen.css'
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);


  return (
    <div className='login'>
        <div className="login_background">
            <img className='login_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </div>

        <button onClick={() => setSignIn(true)} className='login_button'>로그인</button>

        <div className="login_gradient" />

        <div className="login_body">
            {signIn ? (
                <SignUpScreen />
            ) : (
                <>
                <h1>영화와 시리즈를 <br /> 무제한으로.</h1>
                <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>

                <div className="login_input">
                    <form>
                        <input type="email" placeholder='이메일 주소를 입력하세요.' />
                        <button onClick={() => setSignIn(true)}>시작하기</button>
                    </form>
                </div>
            </>
            )}
            
        </div>
    </div>
  )
}

export default LoginScreen