function add_bookmark(){
  let bookmarkTitle;
  let bookmarkUrl;
  bookmarkTitle = document.getElementById("bookmark_title").value;
  bookmarkUrl = document.getElementById("bookmark_url").value;
  if(bookmarkTitle){
    localStorage.setItem(bookmarkTitle,bookmarkUrl);
    update_page();
  }
  else{
    document.getElementById("bookmark_title").placeholder = "Please enter a title";
  }
}


function update_page(){
  // if statement is necessary because without it ,it will print methods as well
  let bookmark;
  let bookmarksContainer;
  let bookmarkHtml = "";
  let bookmarkTitle;
  let n = 0; 
  if(localStorage.length >= 1){
    for( i in localStorage){
      if( n < localStorage.length){
        bookmarksContainer = document.getElementById("bookmarks");
        bookmarkTitle = i.replace(' ', '_')
        bookmarkHtml += "<div><a href='"+localStorage.getItem(i)+"'>"+
                        i +"</a>"+
                        "<input type='button' value='Delete' id='delete_bookmark_"+bookmarkTitle+"'>"+
                        "</div>";      
      }
	    n++;
	  }
    bookmarksContainer.innerHTML += bookmarkHtml;
    bindButton();
  }
}


function bindButton(){
  function a(){
    let n = 0;
    for( let i in localStorage){
      console.log(i)
      bookmarkTitle = i.replace(' ', '_');
      bookmark = document.getElementById("delete_bookmark_"+bookmarkTitle);
      bookmark.addEventListener('click', delete_bookmark);
      n++;
    }
  }
  a()
}


function delete_bookmark(){
  let answer;
  let bookmarkTitle = this.id.slice(16);
  bookmarkTitle = bookmarkTitle.replace('_', ' ')
	answer = confirm("Do you want to delete "+ bookmarkTitle+"?");
	if(answer){
    localStorage.removeItem(bookmarkTitle);
  }  
}


update_page()