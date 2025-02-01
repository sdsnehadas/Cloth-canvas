import React from 'react'

const CategoryButton = () => {
  
  const categories = ["Women", "Men", "Kids", "All Products"]
  return (
    <div className="flex mx-30">
     {categories.map((item, i)=>{
        return <div key={i}>
            <button className="px-10 py-4 p-2 m-4 bg-gray-200 rounded-lg">{item}</button>
   
        </div>
    })}
    </div>
   
  )
}

export default CategoryButton