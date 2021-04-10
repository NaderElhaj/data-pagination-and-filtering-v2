
function displayPage(list , page){
   const startIndex = (page*9)-9;
   const endIndex = page*9;
   const ul = document.querySelector(".student-list")
   ul.innerHTML =""
   for (let i=startIndex ; i<endIndex ;i++){
      if (i >= startIndex){
         const li = document.createElement('li') ;

//Creating A lis Item
         li.classList.add('student-item') ; 
         li.classList.add('cf')
         
//creating the First Div Of The List Item
         const div =  document.createElement('div') ; 
         div.classList.add('student-details') ; 
         li.appendChild(div);
//Getting the Image
         const img = document.createElement('IMG');
         img.src= list[i].picture.medium  ; 
         img.alt ="Profile Picture"
         img.classList.add('avatar');
         div.appendChild(img);
//Displaying the Name
         const h3 = document.createElement('h3') ; 
         h3.textContent  = `${list[i].name.first}  ${list[i].name.last}`;
         div.appendChild(h3);
//Displaying the Email
         const span = document.createElement('span') ; 
         span.classList.add('email');
         span.textContent = list[i].name.email ; 
         div.appendChild(span) ; 
// Creating the Second div
         joinedDiv = document.createElement('div') ;
         joinedDiv.classList.add('joined-details'); 
         li.appendChild(joinedDiv); 
//Getting the date 
         const joinedSpan = document.createElement('span') ; 
         joinedSpan.classList.add('date');
         joinedSpan.textContent = `joined ${list[i].registered.date}` ; 
         joinedDiv.appendChild(joinedSpan);

         ul.insertAdjacentElement('beforeend',li) ; 
         
      }
   }
}

//The Buttons of Navigations 
function paginationButtons(list){
   const buttonsNumber = (Math.ceil(list.length))/9 
   const ul = document.querySelector('.link-list') ;
   ul.innerHTML = "" ;
   for (let i=1 ; i < buttonsNumber + 1 ; i++){
      const li = document.createElement('li') ; 

       const button = document.createElement('button');
       button.type = "button" ; 
       button.textContent = i
       li.appendChild(button);
       ul.insertAdjacentElement('beforeend' ,li );
       ul.firstChild.firstChild.classList.add('active')
  
       li.addEventListener('click' , (e)=> {
         const btn= document.querySelectorAll('button');
         for ( let i=0 ; i<btn.length ; i++){
              btn[i].classList.remove('active')    
         }
         
        e.target.classList.add('active')
         displayPage(list,i);
      

       })
   }

}

//Calling The Functions
displayPage(data,1);
paginationButtons(data);