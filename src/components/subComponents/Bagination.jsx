import ReactPaginate from 'react-paginate';



/* eslint-disable react/prop-types */
const Bagination = ({ getPage, PagesCound }) => {

    const handlePageClick = (page) => {
        getPage(page.selected + 1);
    }

    return (
        <div className="pb-10">
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={PagesCound}
                breakLabel="..."
                nextLabel="next "
                previousLabel="prev"
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                containerClassName={"pagination flex justify-center p-3"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

        </div>
    )
}

export default Bagination