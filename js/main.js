function add_bookmark(){
  let bookmarkTitle;
  let bookmarkUrl;
  bookmarkTitle = document.getElementById("bookmark_title").value;
  bookmarkUrl = document.getElementById("bookmark_url").value;
  if(bookmarkTitle){
    if(!(bookmarkTitle in localStorage)){
      localStorage.setItem(bookmarkTitle,bookmarkUrl);
      update_page(bookmarkTitle, bookmarkUrl);
    }
    else{
      alert(bookmarkTitle+" already in bookmarks!")
    }
  }
  else{
    document.getElementById("bookmark_title").placeholder = "Please enter a title";
  }
}


function inital_bookmark_loading(){
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
        bookmarkHtml += create_bookmark_div(i,localStorage.getItem(i));
      }
	    n++;
	  }
    bookmarksContainer.innerHTML += bookmarkHtml;
    bindButton();
  }
}


function bindButton(){
  function innerFunction(){
    let n = 0;
    for( let i in localStorage){
      if(n < localStorage.length){
      bookmarkTitle = i.replace(' ', '_');
      bookmark = document.getElementById("delete_bookmark_"+bookmarkTitle);
      bookmark.addEventListener('click', delete_bookmark);
      n++;
      }
    }
  }
  innerFunction()
}


function delete_bookmark(){
  let answer;
  let bookmarkTitle;
  let child_node;
  bookmarkTitle = this.id.slice(16);
  let child_id = bookmarkTitle
  bookmarkTitle = bookmarkTitle.replace('_', ' ')
	answer = confirm("Do you want to delete "+ bookmarkTitle+"?");
	if(answer){
    localStorage.removeItem(bookmarkTitle);
    child_node = document.getElementById("bookmark"+child_id)
    console.log(child_node)
    if(child_node.parentNode){
      child_node.parentNode.removeChild(child_node);
    }
  }  
}


function clear_localstorage(){
  let answer = confirm("Are you sure you want to clear local storage?")
  if(answer){
    localStorage.clear()
    bookmarks = document.getElementById("bookmarks")
    bookmarks.innerHTML = "";
  }
}


function update_page(bookmarkTitle, bookmarkUrl){
  bookmarksContainer = document.getElementById("bookmarks");
  bookmarkHtml = create_bookmark_div(bookmarkTitleId, bookmarkUrl);
  bookmarksContainer.innerHTML += bookmarkHtml;
}


function create_bookmark_div(bookmarkTitle, bookmarkUrl){
  bookmarkTitle = bookmarkTitle.replace(' ', '_');
  return "<div id='bookmark"+bookmarkTitle+"'><a href='"+bookmarkUrl+"'>"+
                  bookmarkTitle +"</a>"+
                 "<input type='button' value='Delete' id='delete_bookmark_"+bookmarkTitle+"'>"+
                 "</div>";
}


inital_bookmark_loading()