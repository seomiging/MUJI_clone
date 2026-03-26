import React from 'react'
import './css/footer.css'

const Footer_muji = () => {
  return (
    <footer>
      <div className='footerinner'>
    <ul className='footerul'>
    <li>AboutMUJI</li>
    <li>채용공고</li>
    <li>매장안내</li>
    <li>이용약관</li>
    <li className='footer_li_private'>개인정보처리방침</li>
    </ul>
    <div>
      <div className='footer_logobox'><img src='./footer/logo.svg'/></div>
      <div className='footer_text_innerbox'>
        <div className='footertext1'>
          <ul>
            <li>고객센터</li>
            <li>공지사항</li>
            <li>1:1문의</li>
            <li>제휴문의</li>
          </ul>
        </div>
        <div className='footertext2'>
          <p>상호명 : 무인양품㈜</p>
          <p>대표 : NINOMIYA KENICHIRO,김진엽</p>
          <p>주소 : 서울 중랑구 서소문로 50 10층</p>
          <p>(중림동,CENTRALPLACE)</p>
          <p>사업자 번호 105-86-73836</p>
          <p>통신판매업신고 : 2024-서울중구-1904</p>
          <div className='footertext2_imgbox'>
           <div> <img src='./footer/play.webp'alt='play'/></div>
            <div><img src='./footer/apple.svg' alt='apple'/></div>
            <div><img src='./footer/insta.svg' alt='insta'/></div>
            <div><img src='./footer/facebook.svg' alt='facebook'/></div>
           <div><img src='./footer/youtube.svg' alt='youtube'/></div>
          </div>
        </div>
        
        <div className='footertext3'>
          <p>고객만족센터 : 1551-3780</p>
          <p>운영시간 : 평일 09:30 ~ 18:30(주말, 공휴일 휴무)</p>
          <p>점심시간 : 12:30 ~ 13:30</p>
          <br/>
          <p>고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액의 전액에<br/>
          대해 저희 쇼핑몰에서 가입한 소비자 피해 보상보험 서비스를 <br/>
          이용하실 수 있습니다.</p>
          <br/>
          <p className='footertext3_check'>임직원 인증</p>

          <div className='footerbtn'>
            <button className='footer_btn'><p>GLOBAL SITE　＞</p></button>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='footertext_mob'>
    <p>무인양품㈜ 사업자정보 ∨</p>
    <p>COPYRIGHT ㈜무인양품 ALL RIGHTS RESERVED.</p>
    </div>
    </footer>
  )
}

export default Footer_muji
