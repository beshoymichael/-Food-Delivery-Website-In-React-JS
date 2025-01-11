/* eslint-disable react/prop-types */
// import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'



const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Exploer our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, mollitia obcaecati voluptatibus iure reiciendis optio iusto quos labore facilis non omnis culpa vitae impedit sequi delectus cupiditate! Necessitatibus modi repellendus, quisquam impedit assumenda iusto error neque asperiores obcaecati ratione odit, laudantium molestiae deleniti, dignissimos nostrum. Maiores, suscipit. Veniam, culpa iste.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                       <img className={category===item.menu_name ? "active":''} src={item.menu_image} alt=''/>
                       <p>{item.menu_name}</p>
                     </div>
                )
              
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExploreMenu
