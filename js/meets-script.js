/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

/***
 * The global variable are list and page. 
 * list holds the list of students referencd by their classname
 * page holds the starting index of pages, which is 0
 */

const list = document.getElementsByClassName('student-item cf');
const page = 0;

/***
 * The showPage function determines which page to show and which list of 10 students to include on that page
 * The first student on the page is determined in the firstIndex variable by taking the page number, 
 multipyling by 10 and then subtracting 10. So if the page is index 0 then the first student will be
 index 0, if the page is 2 the first student will be index 10.
 * The lastIndex variable works in the same manner to get the last student for the page
 * We then loop through the list of students to get groups of 10 as long as the index of the students
 is less than the list length.
 */
function showPage(list, page) {
         let firstIndex = (page * 10) - 10;
         let lastIndex = page * 10;
            for (i = 0; i < list.length; i ++) {
               if (i >= firstIndex && i < lastIndex) {
                  list[i].style.display = '';
               } else {
                  list[i].style.display = 'none'
               }
            }         
         }

// Calling the showPage function below produces our first page and list of 10 students
showPage(list, 1);

/***
 * The appendPageLinks function will produce links for every page of students that can be navigated through.
 * The numPages variable calculates the total number of pages by dividing the total number of 
 students in the list by the number per page.
 * We then create a div, style it with a classname of pagination and append it to the page.
 * Then we create a ul and append it to the div.
 * The for loop cycles through the number of pages stored in the numPages variable,
 creates an li and and a element for each page. A gets appended to the li and the li gets appended to the ul.
 * The link href is set by referencing the the textContent, which is the page number
 * An event listener is added to make the links clickable, showing the requested page 
 and applying the active style to the selected page link.
 * Once a new link is clicked the active class is removed from the previously selected a element with classList.remove
 */
const appendPageLinks = (list) => {
   
   const numPages = Math.floor(list.length / 10);
   let div = document.createElement('div');
   div.className = 'pagination';
   let page = document.querySelector('.page');
   page.appendChild(div);
   let ul = document.createElement('ul')
   div.appendChild(ul);

   for(j = 0; j <= numPages; j += 1) {
      let li = document.createElement('li');
      let a = document.createElement('a')
      li.appendChild(a);
      ul.appendChild(li);
      a.href = '#'
      a.textContent = j + 1;
      a.addEventListener('click', (event) => {
         let links = document.getElementsByTagName('a')
         for (i = 0; i <= numPages; i++) {
            let link = links[i];
            link.classList.remove('active');
         }
         event.target.className = "active";
         showPage(list, a.textContent)
      });
   }
}

// The appendPageLinks function is called to append the links to the bottom of the page
appendPageLinks(list);

let searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
let pageHeader = document.querySelector('.page-header');
pageHeader.appendChild(searchDiv);
let inputArea = document.createElement('input');
inputArea.className = 'student-search input';
inputArea.placeholder = 'Search for students...';
searchDiv.appendChild(inputArea);
let searchButton = document.createElement('button');
searchButton.className = 'student-search button';
searchDiv.insertBefore(searchButton, searchDiv.lastChild);
searchButton.textContent = 'Search';
let studentNames = document.getElementsByTagName('h3');
let inputValue = inputArea.value.toUpperCase();


const search = (inputValue, list) => {
for (i = 0; i < studentNames.length; i++) {
   if (inputArea.value.toUpperCase() > -1) {
     list[i].style.display = "";
   } else {
     list[i].style.display = "none";
   }
   }
}

searchButton.addEventListener('click', (event) => {
   event.preventDefault();
   inputArea.inputValue;
   search(inputValue, list);
})