function vrwaff_addListener(obj,type,listener){if (obj.addEventListener){obj.addEventListener(type,listener,false);return true;}else if(obj.attachEvent){obj.attachEvent("on"+type,listener);return true;}return false;}
vrwaff_addListener(window,"scroll",function(){vrwaff_show();})
vrwaff_addListener(window,"resize",function(){vrwaff_show();})
vrwaff_addListener(window,"DOMContentLoaded",function(){vrwaff_show();})
function vrwaff_getCoords(elem){
	var box=elem.getBoundingClientRect();
	var body=document.body;
	var docElem=document.documentElement;
	var scrollTop=window.pageYOffset || docElem.scrollTop || body.scrollTop;
	var scrollLeft=window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
	var clientTop=docElem.clientTop || body.clientTop || 0;
	var clientLeft=docElem.clientLeft || body.clientLeft || 0;
	return {top: Math.round(box.top+scrollTop-clientTop),left: Math.round(box.left+scrollLeft-clientLeft)};
}
function vrwaff_isVisible(elem){
	var coords=vrwaff_getCoords(elem);
	coords.bottom=coords.top+elem.offsetHeight;
	var windowTop=(window.pageYOffset || document.documentElement.scrollTop)-100;
	var windowBottom=windowTop+document.documentElement.clientHeight+300;
	return (coords.top<windowBottom && coords.bottom>windowTop);
}
var vrwaff_t=0;
function vrwaff_show(){if(vrwaff_t==0){vrwaff_t=setTimeout("vrwaff_show2()",200)}}
function vrwaff_show2(){
	var tgs=document.getElementsByTagName("iframe");vrwaff_t=0;
	for(var i=0;i<tgs.length;i++){tgt=tgs[i];var src1=tgt.getAttribute("data-src");if(src1!=undefined && src1!="" && vrwaff_isVisible(tgt)){tgt.src=src1;tgt.setAttribute("data-src","");}}
}
