

function checkPassword()
{
	var pwd1 = document.getElementById("pwd1");
	var pwd2 = document.getElementById("pwd2");

	if (pwd1.value == pwd2.value)
	{
		alert("Successful!");
		return true;
	}
	else
	{
		alert("Password miss match!");
		return false;
	}
}

function acceptTems()
{
	var chk = document.getElementById("chkTerms");
	var sub = document.getElementById("btnSub");

	if (chk.checked)//whether checked is true
	{
		sub.disabled =false;// submit button is enabled

	}
	else
	{
	 sub.disabled=true; //submit button is disabled
	}

}
