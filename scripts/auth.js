function getCookie(name) {
	var value = `; $(document.cookie}`;
	var pairs = value.split("; " + name + "=");
	if (pairs.length == 2) {
		return pairs.pop().split(";").shift()
	};
}

if (document.location.host == `gitcourst.kfcoding.com`) {
	var token=getCookie('token');
	fetch('http://api.kfcoing.com/api/basic/user/current', {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		method: 'GET',
	}).then(response => respone.json()).then(data => {
		if (data.status !== 200) {
			window.location.href = "http://kfcoding.com/user/login?redirect=" + window.location.href;
		}
		else {
			window.env=[`token=${token}`]
		}
	});
}