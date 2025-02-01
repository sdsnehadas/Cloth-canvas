import React from 'react'
import VideoSlides from './VideoSlides'
import { useSelector } from 'react-redux';
import MenuList from './MenuList';
import Popularcategories from './Popularcategories';
import SubCategoryContentcard from './SubCategoryContentcard';

const MainContainer = () => {
    const currentCategory =  useSelector(store=>store.category.selectedcategory);
    const showContent = useSelector(store=>store.category.showSubCategoryContent);
    console.log("showContent", showContent);

  return (
    <div className='absolute'>
        {!showContent? <VideoSlides videoData={currentCategory}/> : <SubCategoryContentcard/>}
        <MenuList />
        <Popularcategories/>
    </div>
  )
}

export default MainContainer