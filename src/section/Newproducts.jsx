import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import '../css/newproducts.css'

const products = {
  남성: [
    { id: 1, name: '남성 양면 파일 타월 반소매 파자마', price: 49900, rating: 5.0, reviews: 1, img: './newproducts/man1.webp' },
    { id: 2, name: 'UV 컷 건조가 빠른 와플 헨리넥 반소매 티셔츠', price: 29900, rating: 0.0, reviews: 0, img: './newproducts/man2.webp' },
    { id: 3, name: '워싱 코튼 이지 팬츠', price: 19900, rating: 5.0, reviews: 24, img: './newproducts/man3.webp' },
    { id: 4, name: '저지 크루넥 반소매 티셔츠', price: 12900, rating: 4.7, reviews: 7, img: './newproducts/man4.webp' },
    { id: 5, name: 'UV 컷 건조가 빠른 와플 크루넥 긴소매 티셔츠', price: 29900, rating: 5.0, reviews: 9, img: './newproducts/man5.webp' },
    { id: 6, name: '발수 집업 블루종', price: 69900, rating: 5.0, reviews: 11, img: './newproducts/man6.webp' },
    { id: 7, name: '시원한 반소매 우븐 셔츠', price: 39900, rating: 5.0, reviews: 1, img: './newproducts/man7.webp' },
    { id: 8, name: '워싱 브로드 반소매 셔츠', price: 24900, rating: 0.0, reviews: 0, img: './newproducts/man8.webp' },
    { id: 9, name: '워싱 데님 이지 팬츠', price: 29900, rating: 4.7, reviews: 0, img: './newproducts/man9.webp' },
    { id: 10, name: '건조가 빠른 원턱 와이드 팬츠', price: 49900, rating: 5.0, reviews: 1, img: './newproducts/man10.webp' },
  ],
  여성:[
    { id: 1, name: '여성 이중 가제 반소매 룸 웨어 세트', price: 39900, rating: 4.8, reviews: 6, img: './newproducts/woman1.webp' },
    { id: 2, name: '여성 사이드 심리스 이중가제 긴소매 파자마', price: 59900, rating:4.8, reviews: 49, img: './newproducts/woman2.webp' },
    { id: 3, name: '저지 크루넥 반소매 티셔츠', price: 12900, rating: 5.0, reviews: 8, img: './newproducts/woman3.webp' },
    { id: 4, name: '워싱 코튼 이지 팬츠', price: 19900, rating: 4.9, reviews: 15, img: './newproducts/woman4.webp' },
    { id: 5, name: '워싱 데님 이지 팬츠', price: 19900, rating: 4.9, reviews: 0, img: './newproducts/woman5.webp' },
    { id: 6, name: '시원하고 땀에 강한 크루넥 반소매 티셔츠', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/woman6.webp' },
    { id: 7, name: '강연 저지 크루넥 반소매 티셔츠', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/woman7.webp' },
    { id: 8, name: 'UV 컷 강연 크루넥 가디건', price: 29900, rating: 5.0, reviews: 7, img: './newproducts/woman8.webp' },
    { id: 9, name: '건조가 빠른 브로드 7부소매 원피스', price: 59900, rating: 5.0, reviews: 5, img: './newproducts/woman9.webp' },
    { id: 10, name: '시원한 UV 컷 크루넥 와이드 반소매 티셔츠', price: 24900, rating: 5.0, reviews: 2, img: './newproducts/woman10.webp' },
  ],
  아동:[
    { id: 1, name: '베이비 저지 크루넥 반소매 튜닉', price: 11900, rating: 0.0, reviews: 0, img: './newproducts/kid1.webp' },
    { id: 2, name: '키즈 크레이프 가제 7부 와이드 팬츠', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/kid2.webp' },
    { id: 3, name: '키즈 시원한 UV 컷 와이드 반소매 티셔츠', price: 12900, rating: 0.0, reviews: 0, img: './newproducts/kid3.webp' },
    { id: 4, name: '키즈 산뜻한 면 크루넥 반소매 티셔츠', price: 9900, rating: 0.0, reviews: 0, img: './newproducts/kid4.webp' },
    { id: 5, name: '베이비 산뜻한 면 탱크톱', price: 9900, rating: 0.0, reviews: 0, img: './newproducts/kid5.webp' },
    { id: 6, name: '키즈 와플 니트 크루넥 반소매 티셔츠', price: 11900, rating: 0.0, reviews: 0, img: './newproducts/kid6.webp' },
    { id: 7, name: '키즈 저지 크루넥 반소매 티셔츠', price: 9900, rating: 0.0, reviews: 0, img: './newproducts/kid7.webp' },
    { id: 8, name: '베이비 와플 니트 크루넥 반소매 티셔츠', price: 11900, rating: 0.0, reviews: 0, img: './newproducts/kid8.webp' },
    { id: 9, name: '베이비 크레이프 가제 프릴 슬리브 블라우스', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/kid9.webp' },
    { id: 10, name: '키즈 크레이프 가제 프릴 슬리브 블라우스', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/kid10.webp' },
  ],
  패션잡화:[
    { id: 1, name: '스니커 샌들', price: 49900, rating: 5.0, reviews: 2, img: './newproducts/fashion1.webp' },
    { id: 2, name: '테이프 벨트 샌들', price: 39900, rating: 0.0, reviews: 0, img: './newproducts/fashion2.webp' },
    { id: 3, name: '높이 조절이 가능한 하드 캐리어 105L', price: 369000, rating: 0.0, reviews: 0, img: './newproducts/fashion3.webp' },
    { id: 4, name: '높이 조절이 가능한 하드 캐리어 75L', price: 299000, rating: 0.0, reviews: 0, img: './newproducts/fashion4.webp' },
    { id: 5, name: '높이 조절이 가능한 하드 캐리어 36L', price: 219000, rating: 5.0, reviews: 1, img: './newproducts/fashion5.webp' },
    { id: 6, name: '발수 립 스톱 륙색', price: 49900, rating: 5.0, reviews: 9, img: './newproducts/fashion6.webp' },
    { id: 7, name: '발수 립 스톱 보스턴백', price: 69900, rating: 5.0, reviews: 2, img: './newproducts/fashion7.webp' },
    { id: 8, name: '발수 립 스톱 숄더백', price: 49900, rating: 4.8, reviews: 4, img: './newproducts/fashion8.webp' },
    { id: 9, name: '발수 립 스톱 미니 숄더백', price: 29900, rating: 4.8, reviews: 13, img: './newproducts/fashion9.webp' },
    { id: 10, name: '굿피트 직각 리브 양말 25-27cm', price: 49900, rating: 5.0, reviews: 5, img: './newproducts/fashion10.webp' },
  ],
  주방용품:[
    { id: 1, name: '실리콘 뚜껑 - M', price: 5900, rating: 5.0, reviews: 2, img: './newproducts/kitchen1.webp' },
    { id: 2, name: '실리콘 뚜껑 - S', price: 3900, rating: 5.0, reviews: 1, img: './newproducts/kitchen2.webp' },
    { id: 3, name: '실리콘 뚜껑 - L', price: 7900, rating: 5.0, reviews: 1, img: './newproducts/kitchen3.webp' },
    { id: 4, name: '실리콘 다용도 밴드', price: 49900, rating: 5.0, reviews: 17, img: './newproducts/kitchen4.webp' },
    { id: 5, name: '실리콘 뒤집개 - 슬림 타입', price: 6900, rating: 5.0, reviews: 5, img: './newproducts/kitchen5.webp' },
    { id: 6, name: '실리콘 뒤집개 - 와이드 타입', price: 6900, rating: 5.0, reviews: 16, img: './newproducts/kitchen6.webp' },
    { id: 7, name: '실리콘 국자 - L', price: 6900, rating: 5.0, reviews: 3, img: './newproducts/kitchen7.webp' },
    { id: 8, name: '실리콘 국자 - S', price: 4900, rating: 4.8, reviews: 4, img: './newproducts/kitchen8.webp' },
    { id: 9, name: '인도면 선염 행주 · 차콜그레이 · 6장세트', price: 5900, rating: 5.0, reviews: 9, img: './newproducts/kitchen9.webp' },
    { id: 10, name: '인도면 선염 행주 · 레드 · 6장세트', price: 5900, rating: 5.0, reviews: 10, img: './newproducts/kitchen10.webp' },
  ],
  패브릭:[
    { id: 1, name: '세탁이 가능한 소프트 슬리퍼 M 235-250mm 용', price: 7900, rating:5.0, reviews: 1, img: './newproducts/fabric1.webp' },
    { id: 2, name: '폴리에스터 워셔블 쿠션 43x43cm', price: 6900, rating: 0.0, reviews: 0, img: './newproducts/fabric2.webp' },
    { id: 3, name: '진드기 방지 그레이 덕 깃털 얇은 이불 D', price: 179000, rating: 0.0, reviews: 0, img: './newproducts/fabric3.webp' },
    { id: 4, name: '진드기 방지 그레이 덕 깃털 얇은 이불 SD', price: 149000, rating: 0.0, reviews: 0, img: './newproducts/fabric4.webp' },
    { id: 5, name: 'PCM 냉감 시원한 미니 멀티 쿠션 블루 약 49x22x15cm', price: 29900, rating: 5.0, reviews: 1, img: './newproducts/fabric5.webp' },
    { id: 6, name: 'PCM 냉감 시원한 멀티 쿠션 블루 약 55x40x20cm', price: 39900, rating: 0.0, reviews: 0, img: './newproducts/fabric6.webp' },
    { id: 7, name: '면 서커 이불 커버 블루스트라이프 Q', price: 54900, rating: 0.0, reviews: 0, img: './newproducts/fabric7.webp' },
    { id: 8, name: '면 서커 이불 커버 그린스트라이프 Q', price: 54900, rating: 0.0, reviews: 0, img: './newproducts/fabric8.webp' },
    { id: 9, name: '면 서커 이불 커버 블루스트라이프 S', price: 39900, rating: 0.0, reviews: 0, img: './newproducts/fabric9.webp' },
    { id: 10, name: '면 서커 이불 커버 그린스트라이프 S', price: 39900, rating: 0.0, reviews: 0, img: './newproducts/fabric10.webp' },
  ],
  '수납/정리':[
    { id: 1, name: '부레옥잠 직사각형 바스켓 · L 하프', price: 14900, rating: 0.0, reviews: 0, img: './newproducts/clean1.webp' },
    { id: 2, name: '부레옥잠 직사각형 바스켓 · L', price: 21900, rating: 0.0, reviews: 0, img: './newproducts/clean2.webp' },
    { id: 3, name: '부레옥잠 직사각형 바스켓 · M', price: 16900, rating: 0.0, reviews: 0, img: './newproducts/clean3.webp' },
    { id: 4, name: '부레옥잠 직사각형 바스켓 · S', price: 13900, rating: 0.0, reviews: 0, img: './newproducts/clean4.webp' },
    { id: 5, name: '재생 폴리프로필렌 혼용 메이크 박스 1/4 세로형', price: 2500, rating: 4.8, reviews: 6, img: './newproducts/clean5.webp' },
    { id: 6, name: '재생 폴리프로필렌 혼용 면봉 케이스 뚜껑 포함', price: 1900, rating: 4.7, reviews: 12, img: './newproducts/clean6.webp' },
    { id: 7, name: '폴리프로필렌 접이식 컨테이너 창문형 반투명', price: 34900, rating:4.7, reviews: 7, img: './newproducts/clean7.webp' },
    { id: 8, name: '폴리프로필렌 접이식 컨테이너 창문형 화이트그레이', price: 34900, rating: 5.0, reviews: 6, img: './newproducts/clean8.webp' },
    { id: 9, name: '폴리프로필렌 튼튼한 수납 박스・XL・얕은형', price: 37900, rating: 5.0, reviews: 3, img: './newproducts/clean9.webp' },
    { id: 10, name: '폴리프로필렌 튼튼한 수납 박스・S・얕은형', price:22900, rating: 5.0, reviews: 1, img: './newproducts/clean10.webp' },
  ],
  가구:[
    { id: 1, name: '고무나무 목제다리ㆍ12cm(M8)', price: 20000, rating: 0.0, reviews: 0, img: './newproducts/furniture1.webp' },
    { id: 2, name: '너도밤나무 접이식 로우 테이블', price: 149000, rating: 0.0, reviews: 0, img: './newproducts/furniture2.webp' },
    { id: 3, name: '몸에 피트되는 포근한 초고밀도 포켓코일 매트리스ㆍQ', price: 599000, rating: 0.0, reviews: 0, img: './newproducts/furniture3.webp' },
    { id: 4, name: '몸에 피트되는 포근한 초고밀도 포켓코일 매트리스ㆍD', price: 549000, rating: 5.0, reviews: 1, img: './newproducts/furniture4.webp' },
    { id: 5, name: '몸에 피트되는 포근한 초고밀도 포켓코일 매트리스ㆍSD', price: 499000, rating: 0.0, reviews: 0, img: './newproducts/furniture5.webp' },
    { id: 6, name: '몸에 피트되는 포근한 초고밀도 포켓코일 매트리스ㆍS', price: 449000, rating: 0.0, reviews: 0, img: './newproducts/furniture6.webp' },
    { id: 7, name: '고무나무 목제다리ㆍ20cm(M8)', price: 20000, rating: 5.0, reviews: 1, img: './newproducts/furniture7.webp' },
    { id: 8, name: '고무나무 목제다리ㆍ26cm(M8)', price: 30000, rating: 0.0, reviews: 0, img: './newproducts/furniture8.webp' },
    { id: 9, name: '고무나무 목제다리ㆍ26cm(M8)', price: 30000, rating: 5.0, reviews: 2, img: './newproducts/furniture9.webp' },
    { id: 10, name: '고무나무 목제다리ㆍ20cm(M8)', price: 20000, rating: 0.0, reviews: 0, img: './newproducts/furniture10.webp' },
  ],
  생활용품:[
    { id: 1, name: '폭신한 파일 핸드 타월(고리 타입) 네이비 34x35cm', price: 3500, rating: 0.0, reviews: 0, img: './newproducts/living1.webp' },
    { id: 2, name: '폭신한 파일 페이스 타월(고리 타입) 네이비 34x85cm', price: 4900, rating: 0.0, reviews: 0, img: './newproducts/living2.webp' },
    { id: 3, name: '폭신한 파일 바스 타월(고리 타입) 차콜 60x120cm', price: 12900, rating: 0.0, reviews: 0, img: './newproducts/living3.webp' },
    { id: 4, name: '폭신한 파일 대형 바스 타월(고리 타입) 네이비 70x140cm', price: 17900, rating: 0.0, reviews: 0, img: './newproducts/living4.webp' },
    { id: 5, name: '폭신한 파일 대형 바스 타월(고리 타입) 차콜 70x140cm', price: 17900, rating: 0.0, reviews: 0, img: './newproducts/living5.webp' },
    { id: 6, name: '폭신한 파일 대형 바스 타월(고리 타입) 핑크베이지 70x140cm', price: 17900, rating: 0.0, reviews: 0, img: './newproducts/living6.webp' },
    { id: 7, name: '폭신한 파일 대형 바스 타월(고리 타입) 그린 70x140cm', price: 17900, rating: 0.0, reviews: 0, img: './newproducts/living7.webp' },
  ],
  '가전/디지털':[
    { id: 1, name: '컴팩트 핸디팬 · 그레이', price: 14900, rating: 0.0, reviews: 0, img: './newproducts/digital1.webp' },
    { id: 2, name: '컴팩트 핸디팬 · 화이트', price: 14900, rating: 0.0, reviews: 0, img: './newproducts/digital2.webp' },
    { id: 3, name: 'LED 랜턴 화이트', price: 69900, rating: 0.0, reviews: 0, img: './newproducts/digital3.webp' },
    { id: 4, name: '블루투스 스피커 블랙', price: 19900, rating: 5.0, reviews: 11, img: './newproducts/digital4.webp' },
    { id: 5, name: '줄 꼬임이 없는 USB 케이블 · C to C · 그레이', price: 4900, rating: 5.0, reviews: 7, img: './newproducts/digital5.webp' },
    { id: 6, name: '줄 꼬임이 없는 USB 케이블 · A to C · 그레이', price: 5900, rating: 5.0, reviews: 8, img: './newproducts/digital6.webp' },
    { id: 7, name: '블루투스 스피커 그레이화이트', price: 19900, rating: 4.9, reviews: 72, img: './newproducts/digital7.webp' },
    { id: 8, name: '아날로그 벽시계 · 베이지', price: 29900, rating: 5.0, reviews: 5, img: './newproducts/digital8.webp' },
    { id: 9, name: '아날로그 벽시계 · 그레이', price: 29900, rating: 4.8, reviews: 6, img: './newproducts/digital9.webp' },
    { id: 10, name: '충전식 메이크업 미러 · 미니', price: 19900, rating: 4.5, reviews: 6, img: './newproducts/digital10.webp' },
  ],
  문구:[
    { id: 1, name: '컴팩트 마커펜 그레이쉬시안', price: 1900, rating: 0.0, reviews: 0, img: './newproducts/fancy1.webp' },
    { id: 2, name: '컴팩트 마커펜 체리블로섬핑크', price: 1900, rating: 0.0, reviews: 0, img: './newproducts/fancy2.webp' },
    { id: 3, name: '컴팩트 펜 · 리필심 그린 0.5mm', price: 900, rating: 0.0, reviews: 0, img: './newproducts/fancy3.webp' },
    { id: 4, name: '컴팩트 펜 · 리필심 오렌지 0.5mm', price: 900, rating: 0.0, reviews: 0, img: './newproducts/fancy4.webp' },
    { id: 5, name: '컴팩트 펜 · 리필심 핑크 0.5mm', price: 900, rating: 0.0, reviews: 0, img: './newproducts/fancy5.webp' },
    { id: 6, name: '알루미늄 소품 트레이', price: 9000, rating: 5.0, reviews: 1, img: './newproducts/fancy6.webp' },
    { id: 7, name: '알루미늄 펜 스탠드', price: 6900, rating: 5.0, reviews: 1, img: './newproducts/fancy7.webp' },
    { id: 8, name: '알루미늄 수납 스탠드 · 원통형', price: 12900, rating: 5.0, reviews: 1, img: './newproducts/fancy8.webp' },
    { id: 9, name: '날짜가 없는 스케줄 노트 먼슬리 데일리 A5', price: 7900, rating: 5.0, reviews: 1, img: './newproducts/fancy9.webp' },
    { id: 10, name: '종이 프리 노트 · 무지 A6 · 32매', price: 1200, rating: 5.0, reviews: 1, img: './newproducts/fancy10.webp' },
  ],
  뷰티:[
    { id: 1, name: '면 헤어 터번 타월 블루 25x34cm', price: 5900, rating: 5.0, reviews: 1, img: './newproducts/beauty1.webp' },
    { id: 2, name: '면 헤어 터번 타월 페일그린 25x34cm', price: 5900, rating: 5.0, reviews: 2, img: './newproducts/beauty2.webp' },
    { id: 3, name: '면 헤어 터번 타월 그레이 25x34cm', price: 5900, rating: 0.0, reviews: 0, img: './newproducts/beauty3.webp' },
    { id: 4, name: '미립자비즈 푹신 넥쿠션', price: 19900, rating: 0.0, reviews: 0, img: './newproducts/beauty4.webp' },
    { id: 5, name: '폴리에스터 포켓수 변경이 가능한 전자 소품 파우치 · 슬림', price: 8900, rating: 0.0, reviews: 0, img: './newproducts/beauty5.webp' },
    { id: 6, name: '폴리에스터 가젯 파우치 블랙', price: 14900, rating: 5.0, reviews: 7, img: './newproducts/beauty6.webp' },
    { id: 7, name: '폭신하게 부풀어 오르는 넥쿠션', price: 29900, rating: 5.0, reviews: 3, img: './newproducts/beauty7.webp' },
    { id: 8, name: '자기 마사지 볼ㆍ돌기형', price: 6900, rating: 5.0, reviews: 15, img: './newproducts/beauty8.webp' },
    { id: 9, name: '폴리에틸렌 시트 케이스', price: 6900, rating: 4.7, reviews: 11, img: './newproducts/beauty9.webp' },
    { id: 10, name: '나일론 경량 방수 배낭', price: 24900, rating: 4.3, reviews: 4, img: './newproducts/beauty10.webp' },
  ],
  간편조리:[
    { id: 1, name: '한우사골떡국', price: 4900, rating: 4.9, reviews: 12, img: './newproducts/cook1.webp' },
    { id: 2, name: '장칼국수', price: 5900, rating: 4.3, reviews: 23, img: './newproducts/cook2.webp' },
    { id: 3, name: '초계 국수', price: 5900, rating: 4.9, reviews: 7, img: './newproducts/cook3.webp' },
    { id: 4, name: '국내산 들기름으로 맛을 살린 지리산 흑돼지 비빔국수', price: 7900, rating: 4.7, reviews: 32, img: './newproducts/cook4.webp' },
    { id: 5, name: '제주 해녀가 채취한 보말로 만든 보말 매생이 칼국수', price: 7900, rating: 4.7, reviews: 51, img: './newproducts/cook5.webp' },
    { id: 6, name: '매일 매일 반찬 명이나물', price: 4500, rating: 4.8, reviews: 12, img: './newproducts/cook6.webp' },
    { id: 7, name: '모양을 선별하지 않은 제주청귤 메밀국수', price: 5900, rating: 4.7 ,reviews: 49, img: './newproducts/cook7.webp' },
    { id: 8, name: '강원도 곤드레로 맛을 살린 들기름 막국수', price: 5900, rating: 4.8, reviews: 90, img: './newproducts/cook8.webp' },
    { id: 9, name: '새우 크림 카레', price: 4900, rating: 4.8, reviews: 72, img: './newproducts/cook9.webp' },
    { id: 10, name: '재료의 맛을 살린 청국장', price: 5900, rating: 5.0, reviews: 19, img: './newproducts/cook10.webp' },
  ],
  스낵:[
    { id: 1, name: '벚꽃 모나카', price: 4900, rating: 5.0, reviews:46, img: './newproducts/snack1.webp' },
    { id: 2, name: '벚꽃 양갱', price: 1900, rating: 4.6, reviews: 17, img: './newproducts/snack2.webp' },
    { id: 3, name: '벚꽃 크림소다', price: 3500, rating: 4.9, reviews: 22, img: './newproducts/snack3.webp' },
    { id: 4, name: '벚꽃 라떼', price: 4900, rating: 4.8, reviews: 13, img: './newproducts/snack4.webp' },
    { id: 5, name: '초코 양갱', price: 1900, rating: 4.9, reviews: 8, img: './newproducts/snack5.webp' },
    { id: 6, name: '거봉 구미', price: 2900, rating: 5.0, reviews: 5, img: './newproducts/snack6.webp' },
    { id: 7, name: '백도 구미', price: 2900, rating: 5.0, reviews: 7, img: './newproducts/snack7.webp' },
    { id: 8, name: '과자 슈가 비트 비스킷', price: 2500, rating: 5.0, reviews: 10, img: './newproducts/snack8.webp' },
    { id: 9, name: '비스킷 · 크래커 초콜릿크림 샌드위치 크래커', price: 2900, rating: 5.0, reviews: 11, img: './newproducts/snack9.webp' },
    { id: 10, name: '포도 구미 초콜릿', price: 1900, rating: 5.0, reviews: 93, img: './newproducts/snack10.webp' },
  ]
}

const categories = ['남성','여성','아동','패션잡화','주방용품','패브릭','수납/정리','가구','생활용품','가전/디지털','문구','뷰티','간편조리','스낵']

const Newproducts = () => {
  const [activeCategory, setActiveCategory] = useState('남성')
  return (
      <div className='newproducts_section'>
     <h2>신상품이 입고 되었어요</h2>
      <div className='newproducts_category'>
        {categories.map(category => (
          <li
            key={category}
            className={activeCategory === category ? 'category_item active' : 'category_item'}
            onClick={() => setActiveCategory(category)}
          >{category}
          </li>
          ))}
      </div>


      <div className='newproducts_slider'>
  <Swiper
    modules={[Navigation]}
    navigation={true}
    slidesPerView={6}
    spaceBetween={16}
    className="swiper_2"
  >
    {products[activeCategory]?.map(item => (
      <SwiperSlide key={item.id}>
        <div className='product_card'>
          <img src={item.img} alt={item.name} className='product_imgs'/>
          <p className='product_name'>{item.name}</p>
          <div className='product_textbox'>
          <p className='product_price'>{item.price.toLocaleString()}원</p>
          <div className='star'><img src='./newproducts/star.svg'/><p className='product_rating'> {item.rating}({item.reviews})</p></div>
          </div>
        </div>
      </SwiperSlide>
    ))}
    <SwiperSlide>
      <div className='last_slide'>
        <p>신상품 모아보기</p>
        <span>→</span>
      </div>
    </SwiperSlide>
  </Swiper>
</div>
    </div>
  )
}

export default Newproducts
