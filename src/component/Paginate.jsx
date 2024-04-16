import React, { useState } from "react";

function Paginate({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  //   calculate thr total pages
  const totalPage = Math.ceil(data.length / 2);
  //   Start Index
  const startIndex = (currentPage - 1) * currentPage;

  // End Index
  const endIndex = startIndex + currentPage;
  console.log(startIndex, "startagibate");
  console.log(endIndex, "pagibate");
  const paginateData =data.slice(startIndex,endIndex)
  console.log(paginateData); 
  return <div>Paginate</div>;
}

export default Paginate;
