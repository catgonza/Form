<script> 
function TaskForm()								 
{ 
	var taskname = document.forms["Form"]["Taskname"];			 
	var assigned = document.forms["Form"]["Assigned"];  
	var status = document.forms["Form"]["Status"]; 
	var duedate = document.forms["Form"]["Duedate"]; 
	var description = document.forms["Form"]["Description"]; 

	if (taskname.value == "")								 
	{ 
		window.alert("Please enter the task name."); 
		taskname.focus(); 
		return false; 
	} 

	if (description.value == "")							 
	{ 
		window.alert("Please enter the task description."); 
		description.focus(); 
		return false; 
	} 
	
	if (assigned.value == "")								 
	{ 
		window.alert("Please enter the assignee."); 
		assigned.focus(); 
		return false; 
	} 

	if (duedate.value == "")					 
	{ 
		window.alert("Please enter the due date"); 
		duedate.focus(); 
		return false; 
	} 

	if (status.selectedIndex < 1)				 
	{ 
		alert("Please enter task status."); 
		status.focus(); 
		return false; 
	} 

	return true; 
}</script> 
