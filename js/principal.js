
var lits= [ 
["flor blanca de cactus.jpg" ,"Colección Flores y Fachadas","A.flor blanca de cactus.jpg",125,"SI","P flor blanca de cactus.jpg",140,"SI","C.flor blanca de cactus.jpg",240,"SI",505],
["F.rosa y menta.JPG"        ,"Colección Flores y Fachadas","none.jpg"                    , 0,"NO","P.F rosa y menta.jpg"       ,160,"SI","C.F.rosa y menta.jpg"       ,260,"SI",420],
["F.verde agua.JPG"          ,"Colección Flores y Fachadas","A.F.verde agua.jpg"         ,100,"SI","P.F.verde agua.jpg"         ,130,"SI","C.F.verde agua.jpg"         ,230,"SI",460],
["flor mirasol naranja.jpg"  ,"Colección Flores y Fachadas","A.flor mirasol naranja.jpg" ,125,"SI","P.flor mirasol naranja.jpg" ,130,"SI","C.flor mirasol naranja.jpg" ,240,"SI",495],
["flor violetas.JPG"         ,"Colección Flores y Fachadas","A.flor violetas.jpg"        ,115,"SI","P.flor violetas.jpg"        ,140,"SI","C.flor violetas.jpg"        ,310,"SI",565],
["pompom rosa.jpg"           ,"Colección Flores y Fachadas","A.pompon rosa.jpg"          ,260,"SI","P.pompon rosa.jpg"          ,135,"SI","C.pompon rosa.jpg"          ,265,"SI",660],
["F.NaranjaIntenso.JPG"       ,"Colección Flores y Fachadas","A.NaranjaIntenso.jpg"       ,  0,"SI","P.NaranjaIntenso.jpg"       ,  0,"SI","C.NaranjaIntenso.jpg"       ,  0,"SI",  0],
["F.azul agua negro.JPG"      ,"Colección Flores y Fachadas","A.azul agua negros.jpg"     ,  0,"SI","P.azul agua negro.jpg"      ,  0,"SI","C.azul agua negro.jpg"      ,  0,"SI",  0],
["F.azul con mota.JPG"        ,"Colección Flores y Fachadas","A.azul con mota.jpg"        ,  0,"SI","P.azul con mota.jpg"        ,  0,"SI","C.azul con mota.jpg"        ,  0,"SI",  0],
["F.chiapas.JPG"              ,"Colección Flores y Fachadas","A. chiapas.jpg"             ,  0,"SI","none.jpg"                   ,  0,"NO","C. chiapas.jpg"             ,  0,"SI",  0],
["F.cupula azul.JPG"          ,"Colección Flores y Fachadas","A.cupula azul.jpg"          ,  0,"SI","P.cupula azul.jpg"          ,  0,"SI","C.Cupula azul.jpg"          ,  0,"SI",  0],
["F.griega.JPG"               ,"Colección Flores y Fachadas","A.griega.jpg"               ,  0,"SI","none.jpg"                   ,  0,"NO","C.griega.jpg"               ,  0,"SI",  0],
["F.negra gala.PNG"           ,"Colección Flores y Fachadas","A.negra gala.jpg"           ,  0,"SI","P.negra gala.jpg"           ,  0,"SI","C. negra gala.jpg"          ,  0,"SI",  0],
["F.rosa cactasea.JPG"        ,"Colección Flores y Fachadas","A.rosa cactasea.jpg"        ,  0,"SI","P.rosa cactasea.jpg"        ,  0,"SI","C.rosa cactasea.jpg"        ,  0,"SI",  0],
["F.verde liston.JPG"         ,"Colección Flores y Fachadas","none.jpg"                   ,  0,"NO","P.verde liston.jpg"         ,  0,"SI","C.verde liston.jpg"         ,  0,"SI",  0],
["F.verde ojo de tigre.jpg"   ,"Colección Flores y Fachadas","A.verde ojo de tigre.jpg"   ,  0,"SI","P.verde ojo de tigre.jpg"   ,  0,"SI","C.verde ojo de tigre.jpg"   ,  0,"SI",  0],
["Fachada azul.JPG"           ,"Colección Flores y Fachadas","none.jpg"                   ,  0,"NO","none.jpg"                   ,  0,"NO","none.jpg"                   ,  0,"NO",  0],
["F.Rosa.agua.JPG"            ,"Colección Flores y Fachadas","none.jpg"                   ,  0,"NO","none.jpg"                   ,  0,"NO","none.jpg"                   ,  0,"NO",  0]

]





function isEven(n) { 
   return n % 2 == 0;
}

function generaECAP(){

	var L01 ='<div class = "row">'
	var L02 ='<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 mar15" >' + '<img src="Col_FyF/Paisaje/s'
	var L03 ='" width ="100%"  align="center" class="cover" >' + '<span class= "cop">&copy;<i>Fotografía: </i> ENRIQUE RIVERA</span>' + '<a href="Col_FyF/a/' 
	var L03b='" ><img src="Col_FyF/a/s'
	var L04 ='" width ="20%" class="a_css "> </a>' + '<a href="Col_FyF/c/' 
	var L04b='" ><img src="Col_FyF/c/s'
	var L05 ='" width ="40%" class="c_css " > </a>' + '<a href="Col_FyF/p/' 
	var L05b='" ><img src="Col_FyF/p/s'
	var L06 ='" width ="20%" class="p_css "> </a>' 
	var L07 ='</div>'+'</div>'


	var lineas ="<br>" 
	for (var rr = 0; rr < lits.length   ; rr ++){  
		       /// decina rr+1   de esta forma se reordena el consecutivo de modelos
		var consec= rr 
		var lineahead= '<hr><br><br> <div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15">  <p class="title" >Mexicana Mía</p></div> </div><div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15"> <table><tr><td><img src="Col_FyF/icono.png" height="35px"></td> <td> <p class = "pcent"> <b> &nbsp ' + lits[rr][1] +' </b></p> </td> </tr></table>'+'</div>    </div>'
		if(isEven(rr)){
			var lineahead= '<hr><br><br> <div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15">  <p class="title" >Mexicana Mía</p></div> </div><div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15"> <table><tr><td><img src="Col_FyF/Mexicana Etiquetas.png" height="35px"></td> <td> <p class = "pcent"> <b> &nbsp ' + lits[rr][1] +' </b></p> </td> </tr></table>'+'</div>    </div>'
			
		}
		var lineatail= '<p style="position: absolute; top: 101%; left: 25%; "><b>Conjunto $' + (parseInt(lits[rr][9]) + parseInt(lits[rr][3]) +parseInt(lits[rr][6])- parseInt('0'))   + '</b><br>Collar $' + lits[rr][9] + '<br>Arete $'+ lits[rr][3]  + '<br>Pulsera$'+lits[rr][6]  +'</p>' 
		if (rr >5 ){lineatail = "."}
		lineas = lineas +lineahead+L01+L02 + lits[rr][0]+ L03 + lits[rr][2] + L03b+ lits[rr][2] + L04 + lits[rr][8] +L04b + lits[rr][8]+L05 + lits[rr][5]+L05b + lits[rr][5]+L06 + lineatail +L07+"<br><br><br><br><br><br><br><br<br><br><hr class='st13'>"
		
	};


	$('#contenido').append(lineas);

};
