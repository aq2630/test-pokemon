import React from "react";
import "./pagination.css";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, limit }) => {
  return (
    <>
      <div className="pagination_controls">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
