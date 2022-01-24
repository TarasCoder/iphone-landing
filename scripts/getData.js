const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error ("Данні були получені з помилкою")
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error.message)
    })
    .finally(()=>{
        console.log("finally!")
    })
}

getData()