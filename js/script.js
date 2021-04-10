
function displayPage(list , page){
   const startIndex = (page*9)-9;
   const endIndex = page*9;
   const ul = document.querySelector(".student-list")
   ul.innerHTML =""
   for (let i=startIndex ; i<endIndex ;i++){
      if (i >= startIndex){
         const li = document.createElement('li') ;


         li.classList.add('student-item') ; 
         li.classList.add('cf')
         

         const div =  document.createElement('div') ; 
         div.classList.add('student-details') ; 
         li.appendChild(div);

         const img = document.createElement('IMG');
         img.src= "https://randomuser.me/api/portraits/women/25.jpg"  ; 
         img.alt ="Profile Picture"
         img.classList.add('avatar');
         div.appendChild(img);

         const h3 = document.createElement('h3') ; 
         h3.textContent  = `${list[i].name.first}  ${list[i].name.last}`;
         div.appendChild(h3);

         const span = document.createElement('span') ; 
         span.classList.add('email');
         span.textContent = list[i].name.email ; 
         div.appendChild(span) ; 

         joinedDiv = document.createElement('div') ;
         joinedDiv.classList.add('joined-details'); 
         li.appendChild(joinedDiv); 

         const joinedSpan = document.createElement('span') ; 
         joinedSpan.classList.add('date');
         joinedSpan.textContent = `joined ${list[i].registered.date}` ; 
         joinedDiv.appendChild(joinedSpan);

         ul.insertAdjacentElement('beforeend',li) ; 
         
      }
   }
}

function paginationButtons(list){
   const buttonsNumber = (Math.ceil(list.length))/9 
   const ul = document.querySelector('.link-list') ;
   ul.innerHTML = "" ;
   for (let i=0 ; i < buttonsNumber ; i++){
      const li = document.createElement('li') ; 

       const button = document.createElement('button');
       button.type = "button" ; 
       button.textContent = "1"
       li.appendChild(button);

       ul.insertAdjacentElement('beforeend' ,li );
       ul.firstChild.firstChild.classList.add('active')

       ul.addEventListener('click' , (e)=> {


         
       })
   }

}

