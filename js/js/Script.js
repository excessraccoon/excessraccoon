

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

	if (chk.checked)
	{
		sub.disabled =false;

	}
	else
	{
	 sub.disabled=true;
	}

}
