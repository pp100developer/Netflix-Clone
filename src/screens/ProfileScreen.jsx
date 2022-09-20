import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'
import './profileScreen.css'

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className='profile'>
      <Navbar />
      <div className="profile_body">
        <h1>프로필 수정</h1>
        <div className="profile_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profile_details">
            <h2>{user.email}</h2>
          <div className="profile_plans">
            <h3>멤버쉽</h3>
            <PlansScreen />
            <button onClick={() => auth.signOut()} className="profile_signOut">로그아웃</button>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  )
}

export default ProfileScreen