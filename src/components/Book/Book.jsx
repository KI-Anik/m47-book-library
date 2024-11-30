import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, tags, category } = book
    return (
        <div>
            <Link to={`books/${bookId}`}>
                <div className="card bg-base-100 w-96 shadow-xl p-6">
                    <figure className='bg-slate-200  py-8 rounded-2xl'>
                        <img
                            className='h-[166px]'
                            src={image}
                            alt={bookName} />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-center gap-4'>
                            {
                                tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>by : {author}</p>
                        <div className="border-t-2 border-dashed"></div>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;