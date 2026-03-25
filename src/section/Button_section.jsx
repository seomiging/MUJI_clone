import React from 'react'
import '../css/buttonsection.css'

let button =[
  {id:1, name:'신상품',img:'./buttonimg/new.png'},
  {id:2, name:'남성',img:'./buttonimg/man.png'},
  {id:3, name:'여성',img:'./buttonimg/woman.png'},
  {id:4, name:'아동',img:'./buttonimg/kid.png'},
  {id:5, name:'패션잡화',img:'./buttonimg/fashion.png'},
  {id:6, name:'생활용품',img:'./buttonimg/clean.png'},
  {id:7, name:'주방용품',img:'./buttonimg/kitchen.png'},
  {id:8, name:'패브릭',img:'./buttonimg/fabric.png'},
  {id:9, name:'수납/정리',img:'./buttonimg/box.png'},
  {id:10, name:'가구',img:'./buttonimg/furniture.png'},
  {id:11, name:'뷰티',img:'./buttonimg/beauty.png'},
  {id:12, name:'반려동물',img:'./buttonimg/pet.png'},
  {id:13, name:'문구',img:'./buttonimg/fancy.png'},
  {id:14, name:'간편조리',img:'./buttonimg/cook.png'},
  {id:15, name:'스낵',img:'./buttonimg/snack.png'},
  {id:16, name:'가전/디지털',img:'./buttonimg/digital.png'},
  {id:17, name:'숏클립',img:'./buttonimg/shorts.png'},
  {id:18, name:'SNS 인기템',img:'./buttonimg/sns.png'},
  {id:19, name:'MUJI GIFT CARD',img:'./buttonimg/giftcard.png'},
  {id:20, name:'Labo',img:'./buttonimg/labo.jpg'}
]

const Button_section = () => {
  return (
 <div className='btn_section'>
  <div className='btn_list'>
    {button.map((item)=>(
      <li key={item.id} className='button_item'>
        <img src={item.img} alt={item.name}/>
        <span>{item.name}</span>
      </li>
    ))}
  </div>
  </div>
  )
}

export default Button_section
