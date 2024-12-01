import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListString = localStorage.getItem('read-list')
    if(storedListString){
        const storedList = JSON.parse(storedListString)
        return storedList;
    }
    else{
        return[];
    }
}

const addToStoredReadList = id => {
    const storedList = getStoredReadList()
    if (storedList.includes(id)){
        toast( 'already exists')
    }
    else{
        storedList.push(id)
        const storedListString = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListString)
        toast('added to read list')
    }
}

export  {addToStoredReadList, getStoredReadList}