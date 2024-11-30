import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(()=> {
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(list => parseInt(list)) 

        console.log(storedReadList, storedReadListInt, allBooks)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)
    },[])

    return (
        <div>
            <h2 className="text-2xl my-8">Listed Books</h2>

            <Tabs>
                <TabList>
                    <Tab>Read item</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Book I read: {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        readList.map(b => <Book key={b.bookId} book={b}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;