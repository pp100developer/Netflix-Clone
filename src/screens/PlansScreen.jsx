import React from 'react'
import './plansScreen.css'

const PlansScreen = () => {
  return (
    <div className='plansScreen'>
      <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>기본 플랜</h5>
          <h6>플랜 설명</h6>
        </div>
        <button>구독하기</button>
    </div>
    
    <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>프리미엄 플랜</h5>
          <h6>플랜 설명</h6>
        </div>
        <button>구독하기</button>
    </div>

    <div className="plansScreen_plan">
        <div className="plansScreen_info">
          <h5>슈퍼 플랜</h5>
          <h6>플랜 설명</h6>
        </div>
        <button>구독하기</button>
    </div>

   
    </div>
  )
}

export default PlansScreen