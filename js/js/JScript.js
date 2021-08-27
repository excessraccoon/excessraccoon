function acceptTems()
{
	var chk = document.getElementById("chkTerms");
	var sub = document.getElementById("btnSub");
	
	if (chk.checked)
	{
		sub.disabled =false;
		
	}
	else	
	{
	 sub.disabled=true;	 
	}
	
}
		
	