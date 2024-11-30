const getStoredList = () => {
    const storedListString = localStorage.getItem('read-list')
    if(storedListString){
        const storedList = JSON.parse(storedListString)
        return storedList
    }
    else{
        return[]
    }
}

const addToStoredList = id => {
    const storedList = getStoredList()
    if (storedList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedList.push(id)
        const storedListString = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListString)
    }
}

export default addToStoredList