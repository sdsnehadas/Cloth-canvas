import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SubCategoryContentcard = () => {
  const subcategoryData = useSelector(
    (store) => store.category.selectedcategory.subcategories
  );
  console.log("inside subcategory", subcategoryData);
  return (
    <div className="bg-white w-screen h-screen mt-20 p-4 ml-[25%]">
      <div className="grid grid-cols-2 p-4 w-1/2">
        {subcategoryData.map((item) => {
          return (
            <div key={item.name} className="flex flex-row items-center p-4 border rounded-lg shadow-md">
              <img
                src={item.image}
                alt="category-image"
                className="w-12 h-12 object-cover rounded-md m-4"
              />
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubCategoryContentcard;
