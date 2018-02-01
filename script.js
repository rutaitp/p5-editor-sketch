$(document).ready(function() {
	console.log("hello");

	var main_container = document.getElementById("row");
	var username = "rutakru"; //need to be customized later

	$.get("data/projects.json", function(data){

  		for (var i=0; i<data.length; i++) {
  			console.log(data[i].id);

  			// create container div for each project
  			var container_div = document.createElement("div");
  			container_div.className = "col-sm-3";

  			//create an iframe
  			var iframe = document.createElement("iframe");
  			var iframe_url = "https://alpha.editor.p5js.org/embed/" + data[i].id;
  			iframe.setAttribute("src", iframe_url);

  			// set a span with project name
  			var projectName_span = document.createElement("span");
  			projectName_span.className = "project_name";
  			projectName_span.innerHTML = data[i].name;

  			// set a span with username
  			var username_span = document.createElement("span");
  			username_span.className = "username";
  			username_span.innerHTML = "by " + username;

  			//set a span with project url
  			var projectUrl_span = document.createElement("span");
  			projectUrl_span.className = "url";
  			//create a link
  			var a = document.createElement('a');
  			a.innerHTML = "https://alpha.editor.p5js.org/rutakru/sketches/" + data[i].id;
  			a.href = "https://alpha.editor.p5js.org/rutakru/sketches/" + data[i].id;
  			a.setAttribute("target", "_blank");
  			projectUrl_span.appendChild(a);

  			// append all the elements to parent
  			container_div.appendChild(iframe);
  			container_div.appendChild(username_span);
  			container_div.appendChild(projectName_span);
  			container_div.appendChild(projectUrl_span);
  			main_container.appendChild(container_div);
  		}
	});
});