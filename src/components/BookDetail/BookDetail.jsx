import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddToDb';
import { Helmet } from 'react-helmet';

const BookDetail = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    
    const book = data.find(b => b.bookId === id)

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }

    const {image, bookName} = book
    return (
        <div className='my-12'>
            <Helmet>
                <title>Book detail | {bookName}</title>
            </Helmet>
            <h1>book detail : {bookId}</h1>
            <img className='w-36 ' src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-accent btn-outline'>Mark as Read</button>
            <button className='btn btn-accent ml-3'>Whish List</button>
        </div>
    );
};

export default BookDetail;