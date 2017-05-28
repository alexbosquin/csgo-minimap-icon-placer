function LoadJSFile(filename)
{
	let fileref = document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src","/javascript/"+filename);
	$("head").append(fileref);
}