import React, { useState, useEffect } from 'react'
import './styles/pagination.css'

const Pagination = ({ page, pagesLength, setPage }) => {

    const pagesPerBlock = 5
    const currentBlock = Math.ceil(page / pagesPerBlock)  //Redondear hacia arriba
    const maxBlocks = Math.ceil(pagesLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    // currentBlock * pagesPerBlock
    const limitPage = maxBlocks === currentBlock ? pagesLength : initialPage + pagesPerBlock - 1

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePage = (e) => {
        setPage(e)
    }

    const handlePrevBlock = () => {
        setPage((currentBlock - 1) * 5)
    }

    const handleNextBlock = () => {
        setPage((currentBlock * 5 + 1))
    }

    return (
        <div className='pagination'>
            {
                page > 1 && <div onClick={handlePrev} className='pagination__prev pagination__active'>&#60;</div>
            }
            {
                page > 5 && <div className='block-prev' onClick={handlePrevBlock}>...</div>
            }
            <ul className='pagination__container'>
                {
                    arrPages.map(e => (
                        <li onClick={() => handlePage(e)} className={`pagination__page ${page === e && 'pagination__active'}`} key={e}>{e}</li>
                    ))
                }
            </ul>
            {
                page < pagesLength - 4 && <div className='block-next' onClick={handleNextBlock}>...</div>
            }
            {
                page < pagesLength && <div onClick={handleNext} className='pagination__next pagination__active'>&#62;</div>
            }
        </div>
    )
}

export default Pagination