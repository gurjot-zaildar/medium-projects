let button = document.querySelector("button");
let box= document.querySelector(".box")
let usernameinp= document.querySelector(".usernameinp")

 function profiledata(details){
    let data=  ` <div class="img">           
            <img class=" h-30 w-30  rounded-full  " src="${details.avatar_url}" alt="photo">
            </div>
            <div class="info ml-10 leading-6.3 ">
                <h1 class="font-bold text-3xl ">${details.name ? details.name :"N/A"} </h1>
                <h2>@${details.login}</h2>
                <p>${details.bio ? details.bio : "N/A"}</p>
                <div class="reach flex gap-6 leading-10">
                    <h1 class="font-semibold">Public Repos: ${details.public_repos}</h1>
                     <h1 class="font-semibold">Followers: ${details.followers}</h1>
                      <h1 class="font-semibold">Following: ${details.following}</h1>
                </div>
                <div class="end flex gap-3">
                    <h1>Location: ${details.location ? details.location : "N/A"}</h1>
                    <h1>Company: ${details.company ? details.company : "N/A"}</h1>
                    <h1>Blog: ${details.blog ? details.blog : "N/A"}</h1>
                </div>
            </div> `;

            box.innerHTML = data;
 }

button.addEventListener("click",function(){
    let username = usernameinp.value.trim()
    if(username.length>0){
        fetch(`https://api.github.com/users/${username}`)
        .then(raw=>raw.json())
        .then((data)=>{ console.log(data);
            profiledata(data);
         }) 

        
    }else{
        alert("enter username...")
    }

})

