function includeHTML(){var t,e,n,i,s;for(t=document.getElementsByTagName("*"),e=0;e<t.length;e++)if(i=(n=t[e]).getAttribute("w3-include-html"))return(s=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&(200==this.status&&(n.innerHTML=this.responseText),404==this.status&&(n.innerHTML="Page not found."),n.removeAttribute("w3-include-html"),includeHTML())},s.open("GET",i,!0),void s.send()}