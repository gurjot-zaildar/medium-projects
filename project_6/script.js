fetch("https://api.github.com/users/gurjot-zaildar")
.then(raw=>raw.json())
.then((data)=>{ console.log(data) })


