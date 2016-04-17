function ajax(url,fnSucc,fnFail){
	//1.创建一个对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');	
	}
	//2.拨号
	oAjax.open('get',url);
	//3.发送
	oAjax.send();
	//4.接收
	oAjax.onreadystatechange = function(){
		//网络状态
		if(oAjax.readyState == 4){
			//通信状态
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==302){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail();	
			}
		}	
	};
	
}