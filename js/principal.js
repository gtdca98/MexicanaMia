
var lits= [
["IMG_7119.JPG" ,"Colección jacaranda","TX011As35_89.jpg",123,"SI","TX011Ps33_89.jpg",187,"SI","TX011Cs34_89.jpg",366,"SI",316],
["IMG_1722.jpg" ,"Colección flores","TX001As04_89.jpg",128,"SI","TX001Ps01_89.jpg",197,"SI","TX001Cs02_89.jpg",384,"SI",334],
["IMG_1936.jpg" ,"Colección postales","TX002As05_89.jpg",133,"SI","TX002Ps07_89.jpg",207,"SI","TX002Cs06_89.jpg",402,"SI",352],
["7550.jpg" ,"Colección lilas del amanecer","TX003As08_89.jpg",138,"SI","TX003Ps09_89.jpg",217,"SI","TX003Cs10_89.jpg",420,"SI",370],
["FF3096.jpg","Colección suave patria","TX004As11_89.jpg",143,"SI","TX004Ps12_89.jpg" ,227,"SI","TX004Cs14_89.jpg",438,"SI",388],
["IMG_7826.JPG" ,"Colección olivos y amarillos","TX005As16_89.jpg",148,"SI","TX004Ps13_89.jpg",237,"SI","TX005Cs17_89.jpg",456,"SI",406],
["IMG_1722.jpg" ,"Colección raices de cultura","TX006As19_89.jpg",153,"SI","TX005Ps15_89.jpg",247,"SI","TX006Cs20_89.jpg",474,"SI",424],
["FF3096.jpg" ,"Colección luces de la naturaleza","TX007As22_89.jpg",158,"SI","TX006Ps18_89.jpg",257,"SI","TX007Cs23_89.jpg",492,"SI",442],
["IMG_8352.JPG" ,"Colección sentidos del atarceder","TX008As25_89.jpg",163,"SI","TX007Ps21_89.jpg",267,"SI","TX008Cs26_89.jpg",510,"SI",460],
["IMG_1928.JPG" ,"Colección jacaranda","TX009As28_89.jpg",168,"SI","TX008Ps24_89.jpg",277,"SI","TX009Cs29_89.jpg",528,"SI",478],
["IMG_1928.JPG" ,"Colección flores","TX010As31_89.jpg",173,"SI","TX009Ps27_89.jpg",287,"SI","TX010Cs30_89.jpg",546,"SI",496],
["FF3096.jpg" ,"Colección postales","TX012As37_89.jpg",178,"SI","TX010Ps32_89.jpg",297,"SI","TX012Cs38_89.jpg",564,"SI",514],
["IMG_7920.JPG" ,"Colección lilas del amanecer","TX013As41_89.jpg",183,"SI","TX012Ps36_89.jpg",307,"SI","TX013Cs40_89.jpg",582,"SI",532],
["IMG_7119.JPG" ,"Colección suave patria","TX014As43_89.jpg",188,"SI","TX013Ps39_89.jpg",317,"SI","TX014Cs44_89.jpg",600,"SI",550],
["IMG_001 050.jpg" ,"Colección olivos y amarillos","TX015As46_89.jpg",193,"SI","TX014Ps42_89.jpg",327,"SI","TX015Cs47_89.jpg",618,"SI",568],
["IMG_5123.JPG" ,"Colección raices de cultura","TX016As49_89.jpg",198,"SI","TX015Ps45_89.jpg",337,"SI","TX016Cs50_89.jpg",636,"SI",586],
["IMG_7157.JPG" ,"Colección luces de la naturaleza","TX017As51_89.jpg",203,"SI","TX016Ps48_89.jpg",347,"SI","TX017Cs53_89.jpg",654,"SI",604],
["IMG_8352.JPG" ,"Colección sentidos del atarceder","TX018As56_89.jpg",208,"SI","TX017Ps52_89.jpg",357,"SI","TX018Cs54_89.jpg",672,"SI",622],
["IMG_1821.JPG" ,"Colección jacaranda","TX019As58_89.jpg",213,"SI","TX018Ps55_89.jpg",367,"SI","TX019Cs57_89.jpg",690,"SI",640],
["IMG_1462.JPG" ,"Colección flores","TX020As62_89.jpg",218,"SI","TX019Ps59_89.jpg",377,"SI","TX020Cs60_89.jpg",708,"SI",658],
["8143.jpg" ,"Colección postales","TX021As65_89.jpg",223,"SI","TX020Ps61_89.jpg",387,"SI","TX021Cs63_89.jpg",726,"SI",676],
["IMG_001 085b.png" ,"Colección lilas del amanecer","TX022As67_89.jpg",228,"SI","TX021Ps64_89.jpg",397,"SI","TX022Cs66_89.jpg",744,"SI",694],
["IMG_7119.JPG" ,"Colección suave patria","TX023As71_89.jpg",233,"SI","TX022Ps68_89.jpg",407,"SI","TX023Cs69_89.jpg",762,"SI",712],
["7550.jpg" ,"Colección olivos y amarillos","TX024As74_89.jpg",238,"SI","TX023Ps70_89.jpg",417,"SI","TX024Cs72_89.jpg",780,"SI",730],
["7550.jpg" ,"Colección raices de cultura","TX024As75_89.jpg",243,"SI","TX019Ps59_89.jpg",427,"SI","TX024Cs73_89.jpg",798,"SI",748],
["8143.jpg" ,"Colección luces de la naturaleza","TX025As80_89.jpg",248,"SI","TX025Ps77_89.jpg",437,"SI","TX025Cs76_89.jpg",816,"SI",766],
["01799.JPG" ,"Colección sentidos del atarceder","TX026As83_89.jpg",253,"SI","TX026Ps81_89.jpg",447,"SI","TX026Cs84_89.jpg",834,"SI",784],
["IMG_7200.JPG" ,"Colección especial","TX027As86_89.jpg",258,"SI","TX027Ps82_89.jpg",457,"SI","TX027Cs85_89.jpg",852,"SI",802],
["IMG_7826c.png","Colección fantasia","TX028As88_89.jpg",263,"SI","TX028Ps87_89.jpg",467,"SI","TX028Cs89_89.jpg",870,"SI",820]
]



function generaECAP(){

	var L01 ='<div class = "row">'
	var L02 ='<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15" >' + '<img src="img2018/paisaje/'
	var L03 ='" width ="100%"  align="center" class="cover" >' + '<span class= "cop">&copy;<i>Fotografía: </i> ENRIQUE RIVERA</span>' + '<a href="img2018/a/' 
	var L03b='" ><img src="img2018/a/'
	var L04 ='" width ="20%" class="a_css "> </a>' + '<a href="img2018/c/' 
	var L04b='" ><img src="img2018/c/'
	var L05 ='" width ="40%" class="c_css " > </a>' + '<a href="img2018/p/' 
	var L05b='" ><img src="img2018/p/'
	var L06 ='" width ="20%" class="p_css "> </a>' 
	var L07 ='</div>'+'</div>'


	var lineas ="<br>" 
        /// decina rr=0   de esta forma salta el primer modelo
	for (var rr = 0; rr < 28; rr ++){  
		       /// decina rr+1   de esta forma se reordena el consecutivo de modelos
		var consec= rr 
		var lineahead= '<hr> <div class= "row">  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mar15"> <table><tr><td><img src="img2018/icono.png" height="35px"></td><td>░▒▓█</td> <td> <p class = "pcent"> <b> &nbsp : ' + lits[rr][1] +' </b></p> </td></tr></table>'+'</div>    </div>'
		var lineatail= '<p style="position: absolute; top: 101%; left: 25%;"><b>Conjunto $' + (parseInt(lits[rr][9]) + parseInt(lits[rr][3]) +parseInt(lits[rr][6])- parseInt('120'))   + '</b><br>Collar $' + lits[rr][9] + '<br>Arete $'+ lits[rr][3]  + '<br>Pulsera$'+lits[rr][6]  +'</p>' 
		lineas = lineas +lineahead+L01+L02 + lits[rr][0]+ L03 + lits[rr][2] + L03b+ lits[rr][2] + L04 + lits[rr][8] +L04b + lits[rr][8]+L05 + lits[rr][5]+L05b + lits[rr][5]+L06 + lineatail +L07+"<br><br><br><br><br><br<br><br><hr class='st13'>"
		
	};


	$('#contenido').append(lineas);

};
