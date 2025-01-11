import  {useState} from 'react'
import './Home.css'
import Header from '../../componetes/Header/Header'
import ExploreMenu from '../../componetes/ExploreMenu/ExploreMenu' 
import FoodDisplay from '../../componetes/FoodDisplay/FoodDisplay'
import AppDownload from '../../componetes/AppDownload/AppDownload'
// import React from 'react'
const Home = () => {
  const[category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu
       category={category}
        setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
