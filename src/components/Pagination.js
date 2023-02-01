import React from 'react';
import '../styles/pagination.css'
// import { FaGreaterThan } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ usersPerPage, totalObjects, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalObjects / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    const nextPage = () => {
        if (currentPage !== pageNumbers)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage !== 1)
            setCurrentPage(currentPage - 1)
    }

    return (
        <nav>
            <ul className="pagination">
                <li>
                    {currentPage!==1&&<a onClick={prevPage} href="#"><FontAwesomeIcon  icon={faChevronLeft}/></a>}
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={number === currentPage ? "active" : "inactive"}>
                        <a onClick={() => setCurrentPage(number)} href="#">
                            {number}
                        </a>
                    </li>
                ))}

                <li>
                   {currentPage!==Math.ceil(totalObjects / usersPerPage)&& <a onClick={nextPage} href="#"><FontAwesomeIcon  icon={faChevronRight}/></a>}
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;