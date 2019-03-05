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
	let n = 0; 
	for( i in localStorage){
		if( n < localStorage.length){
		  bookmarksContainer = document.getElementById("bookmarks");
          bookmark = "<div><a href='"+localStorage.getItem(i)+"'>"+
                     i +"</a></div>";
          bookmarksContainer.innerHTML += bookmark
		  console.log(localStorage.getItem(i))

	    }
	    n++;
	}
}


update_page()