(function(){
  var  link = document.getElementsByTagName('a')[0];
  link.onclick=function(){
    // XHT object
    var xhr=new XMLHttpRequest();
    // hand the "on readystatechange " event
    // xhr.readyState property value
    // 0= uninitialized
    // 1= loading
    // 2= loaded
    // 3= Interactive
    // 4= complete
    xhr.onreadystatechange= function(){
      if ((xhr.readyState==4) && (xhr.status==200||xhr.status==304))  {
          xhr.responseText;
          var body =document.getElementsByTagName('body')[0];
          var p = document.createElement("p");
          var pText = document.createTextNode(xhr.responseText);
          p.appendChild(pText);
          body.appendChild(p );
      }
    }
    // open the request
    xhr.open("GET", "files/ajax.txt", true);
    // send the request
    xhr.send(null);
    return false;
    // this is test
  }

})();

