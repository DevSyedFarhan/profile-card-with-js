//card infromation
let arr=[
    {name : "John Smith", img : "https://images.unsplash.com/photo-1631588310958-dec1630f8df5?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , status :"Freind"},
    {name : "Julia Bennete", img : "https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , status :"Stranger"},
    {name : "Mark Adam", img : "https://images.unsplash.com/photo-1624835567150-0c530a20d8cc?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , status :"Influencer"},
];
function print(){
    let clutter = ""

arr.forEach(function(val, index){
    clutter += `<div id="card">
            <div id="img">
                <img src= "${val.img}"></img>
            </div>
            <h3>${val.name}</h3>
            <h5>${val.status}</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quia ea nulla, nihil iure saepe!</p>
            <button id="${index}" class ="follow-btn">Follow</button>
        </div>`;
})

document.querySelector("#main").innerHTML = clutter;
}

print();

document.querySelector("#main");
addEventListener("click", function(details){
    arr[details.target.id].status = "freinds";
    print();
})



// let buttons = document.querySelectorAll(".follow-btn");
// //follow & following function
// buttons.forEach(function(button){
//     button.addEventListener("click", function(){
//         if(this.textContent === "Follow"){
//             this.textContent = "Following";
//             this.style.backgroundColor = "Red";
//         }else{
//             this.textContent = "Follow";
//             this.style.backgroundColor = "";
            
//         }
//     })
// });