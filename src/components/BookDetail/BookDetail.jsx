import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddToDb';

const BookDetail = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)

    const data = useLoaderData()
    // console.log(data)
    
    const book = data.find(b => b.bookId === id)
    // console.log(book)

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }

    const {image} = book
    return (
        <div className='my-12'>
            <h1>book detail : {bookId}</h1>
            <img className='w-36 ' src={image} alt="" />
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-accent btn-outline'>Mark as Read</button>
            <button className='btn btn-accent ml-3'>Whish List</button>
        </div>
    );
};

export default BookDetail;