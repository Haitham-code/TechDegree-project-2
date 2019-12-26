
 
/** the two global variables */

const list = document.getElementsByClassName('student-item cf');
const listNum = 10;

/** student search creation */

const studentSearch = document.createElement('div');
studentSearch.className = 'student-search';
const inputSearch = document.createElement('input');
inputSearch.className = 'input-search';
const searchButton = document.createElement('button');
searchButton.textContent = 'search';
const divPageHeader = document.getElementsByClassName('page-header cf')[0];
const h2 =document.getElementsByTagName('h2')[0];


studentSearch.appendChild(inputSearch);
studentSearch.appendChild(searchButton);
divPageHeader.appendChild(studentSearch);




/** function that shows 10 students each page in relation to the page number
 * pass the list variable and page number as arguments 
 * the calculation is done to get upperindex and lower index to check the correct list items dispalyed 
 * and hide all the rest list items
 */

function showPage (list , page){

   
   const pageNum = parseInt (page);
   const upperIndex = (page*listNum);
   const lowerIndex = (page*listNum)-listNum;

   for (let i=0;i<list.length;i++){

      if (i >= lowerIndex && i< upperIndex){
         list[i].style.display = '';
      }; 

      if(i < lowerIndex || i >= upperIndex ){

         list[i].style.display = 'none';
       };
   };
   
   
};

/** this function creates links, li, ul and div
 * append a under li and append li under ul and append ul under div with class pagination
 * and append this div under the div with class page
 * I added a event listener on ul to cover all click events under this ul (event bubbling)
 * I targeted the click events on links and when the link is clicked, it triggers the show page function
 */

function appendPageLinks (list){

   const ul = document.createElement('ul');
   const div = document.createElement('div');
   div.className = 'pagination';
   const pageDiv = document.querySelector('div.page');
   pageDiv.appendChild(div);
   div.appendChild(ul);
   
   const NumberOfButtons = Math.ceil(list.length /10); 
   
   for (let i =0 ; i<NumberOfButtons ; i++){
      
      
      const button = document.createElement('a')
      button.textContent = i+1;
      button.setAttribute("href","#");
      const li = document.createElement('li');
      li.appendChild(button);
      ul.appendChild(li);
      
   };

   const pagination = document.querySelector('div.pagination');
   pagination.addEventListener('click',(e)=>{

      if(e.target.tagName == 'A'){

         const pageNumber = e.target.textContent;
         showPage(list , pageNumber);
      };

   }); 
};

/** functionality to search component */

inputSearch.addEventListener('keyup',(e)=>{

   const names = document.getElementsByTagName('h3');
   
   
   for (let i = 0; i<names.length; i++){

      const nameText = names[i].textContent;
      
      if(nameText.includes(inputSearch.value)){
      
         list[i].style.display='';
         
                 
      }else {

         list[i].style.display = 'none';

      };

      
   };

  

});










/**this is the initial function to get just 10 students when you open the page */
showPage(list , 1);

/** this is to start all the above code */
appendPageLinks(list);




