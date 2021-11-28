import React, { useState } from "react";




function Filter({onCategoryChange}){
    return (
        <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter;


























// import React, { useState } from "react";

// function Filter({changeCat}){
// return(

// <div className="Filter">
//         <select name="filter" onChange={changeCat}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
// )
// }

// export default Filter;