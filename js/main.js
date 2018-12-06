var aretes = [
"TX011As35_89.jpg",
"TX001As04_89.jpg",
"TX002As05_89.jpg",
"TX003As08_89.jpg",
"TX004As11_89.jpg",
"TX005As16_89.jpg",
"TX006As19_89.jpg",
"TX007As22_89.jpg",
"TX008As25_89.jpg",
"TX009As28_89.jpg",
"TX010As31_89.jpg",

"TX012As37_89.jpg",
"TX013As41_89.jpg",
"TX014As43_89.jpg",
"TX015As46_89.jpg",
"TX016As49_89.jpg",
"TX017As51_89.jpg",
"TX018As56_89.jpg",
"TX019As58_89.jpg",
"TX020As62_89.jpg",
"TX021As65_89.jpg",
"TX022As67_89.jpg",
"TX023As71_89.jpg",
"TX024As74_89.jpg",
"TX024As75_89.jpg",
"TX025As80_89.jpg",
"TX026As83_89.jpg",
"TX027As86_89.jpg",
"TX028As88_89.jpg"];

var collares = [
"TX011Cs34_89.jpg",
"TX001Cs02_89.jpg",
"TX002Cs06_89.jpg",
"TX003Cs10_89.jpg",
"TX004Cs14_89.jpg",
"TX005Cs17_89.jpg",
"TX006Cs20_89.jpg",
"TX007Cs23_89.jpg",
"TX008Cs26_89.jpg",
"TX009Cs29_89.jpg",
"TX010Cs30_89.jpg",

"TX012Cs38_89.jpg",
"TX013Cs40_89.jpg",
"TX014Cs44_89.jpg",
"TX015Cs47_89.jpg",
"TX016Cs50_89.jpg",
"TX017Cs53_89.jpg",
"TX018Cs54_89.jpg",
"TX019Cs57_89.jpg",
"TX020Cs60_89.jpg",
"TX021Cs63_89.jpg",
"TX022Cs66_89.jpg",
"TX023Cs69_89.jpg",
"TX024Cs72_89.jpg",
"TX024Cs73_89.jpg",
"TX025Cs76_89.jpg",
//"TX025Cs78_89.jpg",
//"TX025Cs79_89.jpg",
"TX026Cs84_89.jpg",
"TX027Cs85_89.jpg",
"TX028Cs89_89.jpg"];

var pulseras =[
"TX011Ps33_89.jpg",
"TX001Ps01_89.jpg",
"TX002Ps07_89.jpg",
"TX003Ps09_89.jpg",
//"TX004Ps12_89.jpg", // duplicado
"TX004Ps13_89.jpg",  
"TX005Ps15_89.jpg",
"TX006Ps18_89.jpg",
"TX007Ps21_89.jpg",
"TX008Ps24_89.jpg",
"TX009Ps27_89.jpg",
"TX010Ps32_89.jpg",

"TX012Ps36_89.jpg",
"TX013Ps39_89.jpg",
"TX014Ps42_89.jpg",
"TX015Ps45_89.jpg",
"TX016Ps48_89.jpg",
"TX017Ps52_89.jpg",
"TX018Ps55_89.jpg",
"TX019Ps59_89.jpg",
"TX020Ps61_89.jpg",
"TX021Ps64_89.jpg",
"TX022Ps68_89.jpg",
"TX023Ps70_89.jpg",
"",
"",  //reemplaza 24 que no existe (imagen en  blanco)
"TX025Ps77_89.jpg",
"TX026Ps81_89.jpg",
"TX027Ps82_89.jpg",
"TX028Ps87_89.jpg"];


var paisajes = [
"IMG_7119.JPG", //11
"IMG_1722.jpg", //1
"IMG_1936.jpg", //2
"7550.jpg", //3
"FF3096.jpg",//4
"IMG_7826.JPG", //5
"IMG_1722.jpg", //6
"FF3096.jpg", //7
"IMG_8352.JPG", //8
"IMG_1928.JPG", //9
"IMG_1928.JPG", //10
"FF3096.jpg", //12
"IMG_7920.JPG", //13
"IMG_7119.JPG", //14
"IMG_001 050.jpg", //15
"IMG_5123.JPG", //16
"IMG_7157.JPG", //17
"IMG_8352.JPG", //18
"IMG_1821.JPG", //19
"IMG_1462.JPG", //20
"8143.jpg", //21
"IMG_001 085b.png", //22
"IMG_7119.JPG", //23
"7550.jpg", //24
"7550.jpg", //24
"8143.jpg", //25
"01799.JPG", //26
"IMG_7200.JPG", //27
"IMG_7826c.png"]; //28


function generaECAP(){




var linea01 = '<hr> <div class = "row"><div class="col-sm-6 col-md-6 col-xl-6 mb-6"><img src="img2018/paisaje/' 
var linea02 = '"  class="cover"><span class= "cop">&copy;ENRIQUE RIVERA</span></div><div class="col-sm-6 col-md-6 col-xl-6 mb-6"><div class = "row"><div class="col-sm-9 col-md-9 col-xl-9 mb-9"><a href="img2018/c/'
var linea03 = '"><img src="img2018/c/'  //width="100%"
var linea04 ='" width= "100%" class= "imag"></a></div><div class="col-sm-3 col-md-3 col-xl-3 mb-3"><a href="img2018/a/'
var linea05 = '"><img src="img2018/a/'
var linea06 = '" width= "100%"   class= "imag"/></a><br><br><a href="img2018/p/'
var linea07 = '"><img src="img2018/p/'
var linea08 = '" width= "100%"   class= "imag"/></a></div></div><div class = "row"><h5></h5></div></div></div>'

var lineas ="<br>"


for (var rr = 0; rr < 28; rr ++){
	var consec= rr +1
	lineas = lineas + "<hr><p>"+consec+"</p>"+linea01 +  paisajes[rr] +linea02 + collares[rr] + linea03 + collares[rr] + linea04 + aretes[rr] +linea05 + aretes[rr] + linea06 + pulseras[rr] + linea07 + pulseras[rr] + linea08
}


$('#contenido').append(lineas);

};
