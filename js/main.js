        var oNav=document.getElementById("nav");
		var oLi=oNav.getElementsByTagName("li");
		var num=0;
		for (i=0;i<oLi.length;i++){
			oLi[i].index=i;
			oLi[i].onmouseover=function(){
			num=this.index;
			for(j=0;j<oLi.length;j++){
				oLi[j].className="";
			}
			oLi[num].className="on";
			console.log(num);
			var oUl= oLi[num].getElementsByTagName("ul")[0];
			if (oUl!=undefined)
				oUl.style.display="block";
			}
			oLi[i].onmouseout=function(){
			num=this.index;
			var oUl= oLi[num].getElementsByTagName("ul")[0];
			if (oUl!=undefined)
				oUl.style.display="none";
			}
		}