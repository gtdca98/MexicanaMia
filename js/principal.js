
var lits= [ 
["flor blanca de cactus.jpg" ,"Colección flores y fachadas","A.flor blanca de cactus.jpg",123,"SI","P flor blanca de cactus.jpg",187,"SI","C.flor blanca de cactus.jpg",366,"SI",316],
["F.rosa y menta.JPG"        ,"Colección flores y fachadas","none.jpg"                      ,128,"NO","P.F rosa y menta.jpg"       ,197,"SI","C.F.rosa y menta.jpg"       ,384,"SI",334],
["F.verde agua.JPG"          ,"Colección flores y fachadas","A.F.verde agua.jpg"		 ,133,"SI","P.F.verde agua.jpg"         ,207,"SI","C.F.verde agua.jpg"         ,402,"SI",352],
["flor mirasol naranja.jpg"  ,"Colección flores y fachadas","A.flor mirasol naranja.jpg" ,138,"SI","P.flor mirasol naranja.jpg" ,217,"SI","C.flor mirasol naranja.jpg" ,420,"SI",370],
["flor violetas.JPG"         ,"Colección flores y fachadas","A.flor violetas.jpg"        ,143,"SI","P.flor violetas.jpg"        ,227,"SI","C.flor violetas.jpg"        ,438,"SI",388],
["pompom rosa.jpg"			 ,"Colección flores y fachadas","A.pompon rosa.jpg"          ,148,"SI","P.pompon rosa.jpg"          ,237,"SI","C.pompon rosa.jpg"          ,456,"SI",406]
]



function generaECAP(){

	var L01 ='<div class = "row">'
	var L02 ='<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 mar15" >' + '<img src="Col_FyF/Paisaje/'
	var L03 ='" width ="100%"  align="center" class="cover" >' + '<span class= "cop">&copy;<i>Fotografía: </i> ENRIQUE RIVERA</span>' + '<a href="Col_FyF/a/' 
	var L03b='" ><img src="Col_FyF/a/'
	var L04 ='" width ="20%" class="a_css "> </a>' + '<a href="Col_FyF/c/' 
	var L04b='" ><img src="Col_FyF/c/'
	var L05 ='" width ="40%" class="c_css " > </a>' + '<a href="Col_FyF/p/' 
	var L05b='" ><img src="Col_FyF/p/'
	var L06 ='" width ="20%" class="p_css "> </a>' 
	var L07 ='</div>'+'</div>'


	var lineas ="<br>" 
        /// decina rr=0   de esta forma salta el primer modelo
	for (var rr = 0; rr < lits.length   ; rr ++){  
		       /// decina rr+1   de esta forma se reordena el consecutivo de modelos
		var consec= rr 
		var lineahead= '<hr><br><br> <div class= "row">  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 mar15"><h5>Mexicana Mía</h5></div> <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 "><img class="etiqueta" src="Col_FyF/Mexicana Etiquetas.jpg" height="40px"></div></div><div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15"> <table><tr><td><img src="Col_FyF/icono.png" height="35px"></td><td>░▒▓█</td> <td> <p class = "pcent"> <b> &nbsp : ' + lits[rr][1] +' </b></p> </td> </tr></table>'+'</div>    </div>'
		var lineatail= '<p style="position: absolute; top: 101%; left: 25%; color: transparent;"><b>Conjunto $' + (parseInt(lits[rr][9]) + parseInt(lits[rr][3]) +parseInt(lits[rr][6])- parseInt('120'))   + '</b><br>Collar $' + lits[rr][9] + '<br>Arete $'+ lits[rr][3]  + '<br>Pulsera$'+lits[rr][6]  +'</p>' 
		lineas = lineas +lineahead+L01+L02 + lits[rr][0]+ L03 + lits[rr][2] + L03b+ lits[rr][2] + L04 + lits[rr][8] +L04b + lits[rr][8]+L05 + lits[rr][5]+L05b + lits[rr][5]+L06 + lineatail +L07+"<br><br><br><br><br><br><br><br<br><br><hr class='st13'>"
		
	};


	$('#contenido').append(lineas);

};
