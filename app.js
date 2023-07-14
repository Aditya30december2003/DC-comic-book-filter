comics=[
    {
       id:1,
       img:"../Filter4/imgs/batman1.avif",
       category:"Batman",
    },
    {
        id:2,
        img:"../Filter4/imgs/flash2.avif",
        category:"Flash"
     },
     {
        id:3,
        img:"../Filter4/imgs/jl3.avif",
        category:"Justice League"
     },
     {
        id:4,
        img:"../Filter4/imgs/superman2.avif",
        category:"Superman"
     },
     {
         id:5,
         img:"../Filter4/imgs/ss1.avif",
         category:"Suicide Squad"
      },
      {
         id:6,
         img:"../Filter4/imgs/ss3.avif",
         category:"Suicide Squad"
      },
      {
        id:7,
        img:"../Filter4/imgs/batman3.avif",
        category:"Batman"
     },
     {
         id:8,
         img:"../Filter4/imgs/flash1.avif",
         category:"Flash"
      },
      {
         id:9,
         img:"../Filter4/imgs/superman3.avif",
         category:"Superman"
      },
      {
        id:10,
        img:"../Filter4/imgs/jl1.avif",
        category:"Justice League"
     },
     {
         id:11,
         img:"../Filter4/imgs/batman2.avif",
         category:"Batman"
      },
      {
         id:12,
         img:"../Filter4/imgs/flash3.avif",
         category:"Flash"
      },
      {
        id:13,
        img:"../Filter4/imgs/superman1.avif",
        category:"Superman"
     },
     {
         id:14,
         img:"../Filter4/imgs/jl2.avif",
         category:"Justice League"
      },
      {
         id:15,
         img:"../Filter4/imgs/ss2.avif",
         category:"Suicide Squad"
      },
]

window.addEventListener("DOMContentLoaded",()=>{
      displayComicItems(comics);
})

const container=document.querySelector(".container")
function displayComicItems(comics){
    let displayComics=comics.map((item)=>{
        return `<div class="comics">
        <img src=${item.img} alt="" class="flash2" height="300px" width="200px">
      </div>`
    })
    displayComics=displayComics.join("");
    container.innerHTML=displayComics;
}

let button =document.querySelectorAll(".button")

button.forEach((button)=>{
      button.addEventListener("click",(e)=>{
        let category=e.currentTarget.dataset.id;
        let filterComics=comics.filter((comicItems)=>{
             if(category===comicItems.category){
                return comicItems
        }
        })
        if(category=="All"){
            displayComicItems(comics)
        }
        else{
            displayComicItems(filterComics)
        }
      })
})

let search=document.querySelector(".searchbar")
let searchButton=document.querySelector(".searchButton")

searchButton.addEventListener("click",()=>{
    let Searchcategory=search.value;
    let filterComicsSearch=comics.filter((comicItems)=>{
        if(Searchcategory===comicItems.category){
            return comicItems
        }
    })
    if(Searchcategory=="All"){
        displayComicItems(comics)
    }
    else{
        displayComicItems(filterComicsSearch)
    }
})