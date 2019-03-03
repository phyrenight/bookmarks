function add_bookmark(){
    let bookmarkTitle;
    let bookmarkUrl;
	bookmarkTitle = document.getElementById("bookmark_title").value
	bookmarkUrl = document.getElementById("bookmark_url").value
	console.log(bookmarkTitle)
	console.log(bookmarkUrl)
	localStorage.setItem(bookmarkTitle,bookmarkUrl);
    console.log(localStorage)
}