import React from "react";
import "./Pager.css";

const Pager = ({ metadata, onPageChange }) => {
  const { pageNumber, pageCount } = metadata;

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageClick(i)} className={pageNumber === i ? "active" : ""}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pager">
      <button onClick={() => handlePageClick(pageNumber - 1)} disabled={pageNumber === 1}>
        Prev
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageClick(pageNumber + 1)} disabled={pageNumber === pageCount}>
        Next
      </button>
    </div>
  );
};

export default Pager;