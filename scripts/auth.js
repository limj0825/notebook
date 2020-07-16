function getCookie(name) {
    var value = `; ${document.cookie}`;
    var pairs = value.split("; " + name + "=");
    if (pairs.length == 2) {
        return pairs.pop().split(";").shift()
    }
    else{
        return null;
    }
}
  
if (document.location.host == 'gitcourse.kfcoding.com') {
    var token=getCookie('token');
    if (token == null) {
        window.location.href = "http://kfcoding.com/user/login?redirect=" + window.location.href;
    }
    else{
        window.env=[`token=${token}`]
    }
}
