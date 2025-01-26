// WIDTHF FUNCTION ;

function widthf()
{
    
    let widt = document.getElementById("width");
    let widtv = widt.value;
    let w = widtv;
    console.log("the width is",w);


    let lent = document.getElementById("length");
    let lenth = lent.value;
    console.log("The length is", lenth);

    let tl = document.getElementById("tool");
    tol = tl.value;
    console.log("The toll is", tol);

    let uf = document.getElementById("uframe");
    ufram = uf.value;
    console.log("The uframe is", ufram);

    let ruf = document.getElementById("ruframe");
    rufram = ruf.value;
    console.log("The Refer U frame is", rufram);

    let nuf = document.getElementById("nuframe");
    nufram = nuf.value;
    console.log("The Non Refer Uframe is", nufram);
 
}


// LS FILE ;

function lssk ()
{
	pname = document.getElementById("pname").value;
	widthf ();
	let uf = ufram;
	let ut = tol;
	let rf = rufram;
	let nf = nufram; 

ls = `/PROG ${pname}
/ATTR
OWNER		= MNEDITOR;
PROG_SIZE       = 0;
LINE_COUNT	= 245;
MEMORY_SIZE	= 0;
PROTECT		= READ_WRITE;
TCD:	STACK_SIZE	= 0,
		TASK_PRIORITY	= 50,
		TIME_SLICE	= 0,
		BUSY_LAMP_OFF	= 0,
		ABORT_REQUEST	= 0,
		PAUSE_REQUEST	= 0;
DEFAULT_GROUP	= 1,*,*,*,*;
CONTROL_CODE	= 00000000 00000000;
/MN
	0: job index 1;
	1: UFRAME_NUM=${uf} ;
	2: UTOOL_NUM=${ut} ;
	3:J P[1] 50% CNT30 ;
	4:L P[2] 1500 mm/sec CNT0 ;
	5:L P[3] 1500 mm/sec CNT0 ;
	6:L P[4] 1500 mm/sec CNT0 ;
	7: WELD_ON;
	8:L P[5] 15 mm/sec CNT40 ;
	9:L P[6] 15 mm/sec CNT20 ;
	10:L P[7] 15 mm/sec CNT0 ;
	11: WELD_OFF;
	12:L P[8] 1500 mm/sec CNT80 ;
	13:L P[9] 1500 mm/sec CNT80 ;
	14:J P[10] 50% CNT30 ;
	15:L P[11] 1500 mm/sec CNT80 ;
	16:L P[12] 1500 mm/sec CNT80 ;
	17: WELD_ON;
	18:L P[13] 15 mm/sec CNT40 ;
	19:L P[14] 15 mm/sec CNT20 ;
	20:L P[15] 15 mm/sec CNT0 ;
	21: WELD_OFF;
	22:L P[16] 1500 mm/sec CNT80 ;
	23:L P[17] 1500 mm/sec CNT0 ;
	23: job index 2;
	24:J P[18] 50% CNT30 ;
	25:L P[19] 1500 mm/sec CNT80 ;
	26:L P[20] 1500 mm/sec CNT80 ;
	27:L P[21] 1500 mm/sec CNT80 ;
	28: WELD_ON;
	29:L P[22] 30 mm/sec CNT40 ;
	30:L P[23] 30 mm/sec CNT40 ;
	31:L P[24] 30 mm/sec CNT0 ;
	32: WELD_OFF;
	33:L P[25] 1500 mm/sec CNT80 ;
	34:L P[26] 1500 mm/sec CNT80 ;
	35:J P[27] 50% CNT30 ;
	36:L P[28] 1500 mm/sec CNT80 ;
	37:L P[29] 1500 mm/sec CNT80 ;
	38: WELD_ON;
	39:L P[30] 30 mm/sec CNT40 ;
	40:L P[31] 30 mm/sec CNT40 ;
	41:L P[32] 30 mm/sec CNT0 ;
	42: WELD_OFF;
	43:L P[33] 1500 mm/sec CNT80 ;
	44:L P[34] 1500 mm/sec CNT80 ;
	45:J P[35] 50% CNT30 ;
	46:L P[36] 1500 mm/sec CNT80 ;
	47:L P[37] 1500 mm/sec CNT80 ;
	48: WELD_ON;
	49:L P[38] 30 mm/sec CNT40 ;
	50:L P[39] 30 mm/sec CNT40 ;
	51:L P[40] 30 mm/sec CNT0 ;
	52: WELD_OFF;
	53:L P[41] 1500 mm/sec CNT80 ;
	54:L P[42] 1500 mm/sec CNT0 ;
	54:job index 3;
	55:J P[43] 50% CNT30 ;
	56:L P[44] 1500 mm/sec CNT80 ;
	57:L P[45] 1500 mm/sec CNT80 ;
	58:L P[46] 1500 mm/sec CNT80 ;
	59: WELD_ON;
	60:L P[47] 10 mm/sec CNT40 ;
	61:L P[48] 10 mm/sec CNT80 ;
	62:L P[49] 10 mm/sec CNT80 ;
	63:L P[50] 10 mm/sec CNT20 ;
	64:L P[51] 10 mm/sec CNT0 ;
	65: WELD_OFF;
	66:L P[52] 1500 mm/sec CNT80 ;
	67:L P[53] 1500 mm/sec CNT0 ;
	67: job index 1;
	68: UFRAME_NUM=${rf} ;
	69:J P[54] 50% CNT30 ;
	70:L P[55] 1500 mm/sec CNT80 ;
	71:L P[56] 1500 mm/sec CNT80 ;
	72:L P[57] 1500 mm/sec CNT80 ;
	73: WELD_ON;
	74:L P[58] 17 mm/sec CNT40 ;
	75:L P[59] 17 mm/sec CNT20 ;
	76:L P[60] 17 mm/sec CNT0 ;
	77: WELD_OFF;
	78:L P[61] 1500 mm/sec CNT80 ;
	79:L P[62] 1500 mm/sec CNT80 ;
	80:J P[63] 50% CNT30 ;
	81:L P[64] 1500 mm/sec CNT80 ;
	82:L P[65] 1500 mm/sec CNT80 ;
	83: WELD_ON;
	84:L P[66] 17 mm/sec CNT40 ;
	85:L P[67] 17 mm/sec CNT20 ;
	86:L P[68] 17 mm/sec CNT0 ;
	87: WELD_OFF;
	88:L P[69] 1500 mm/sec CNT80 ;
	89:L P[70] 1500 mm/sec CNT0 ;
	89: job index 1;
	90: UFRAME_NUM=${uf} ;
	91:J P[71] 50% CNT30 ;
	92:L P[72] 1500 mm/sec CNT80 ;
	93:L P[73] 1500 mm/sec CNT80 ;
	94:L P[74] 1500 mm/sec CNT80 ;
	95: WELD_ON;
	96:L P[75] 15 mm/sec CNT40 ;
	97:L P[76] 15 mm/sec CNT20 ;
	98:L P[77] 15 mm/sec CNT0 ;
	99: WELD_OFF;
	100:L P[78] 1500 mm/sec CNT80 ;
	101:L P[79] 1500 mm/sec CNT80 ;
	102:J P[80] 50% CNT30 ;
	103:L P[81] 1500 mm/sec CNT80 ;
	104:L P[82] 1500 mm/sec CNT80 ;
	105: WELD_ON;
	106:L P[83] 15 mm/sec CNT40 ;
	107:L P[84] 15 mm/sec CNT20 ;
	108:L P[85] 15 mm/sec CNT0 ;
	109: WELD_OFF;
	110:L P[86] 1500 mm/sec CNT80 ;
	111:L P[87] 1500 mm/sec CNT0 ;
	111: job index 2;
	112:J P[88] 50% CNT30 ;
	113:L P[89] 1500 mm/sec CNT80 ;
	114:L P[90] 1500 mm/sec CNT80 ;
	115:L P[91] 1500 mm/sec CNT80 ;
	116: WELD_ON;
	117:L P[92] 30 mm/sec CNT40 ;
	118:L P[93] 30 mm/sec CNT40 ;
	119:L P[94] 30 mm/sec CNT0 ;
	120: WELD_OFF;
	121:L P[95] 1500 mm/sec CNT80 ;
	122:L P[96] 1500 mm/sec CNT80 ;
	123:J P[97] 50% CNT30 ;
	124:L P[98] 1500 mm/sec CNT80 ;
	125:L P[99] 1500 mm/sec CNT80 ;
	126: WELD_ON;
	127:L P[100] 30 mm/sec CNT40 ;
	128:L P[101] 30 mm/sec CNT40 ;
	129:L P[102] 30 mm/sec CNT0 ;
	130: WELD_OFF;
	131:L P[103] 1500 mm/sec CNT80 ;
	132:L P[104] 1500 mm/sec CNT80 ;
	133:J P[105] 50% CNT30 ;
	134:L P[106] 1500 mm/sec CNT80 ;
	135:L P[107] 1500 mm/sec CNT80 ;
	136: WELD_ON;
	137:L P[108] 30 mm/sec CNT40 ;
	138:L P[109] 30 mm/sec CNT40 ;
	139:L P[110] 30 mm/sec CNT0 ;
	140: WELD_OFF;
	141:L P[111] 1500 mm/sec CNT80 ;
	142:L P[112] 1500 mm/sec CNT0 ;
	142: job index 3;
	143:J P[113] 50% CNT30 ;
	144:L P[114] 1500 mm/sec CNT80 ;
	145:L P[115] 1500 mm/sec CNT80 ;
	146:L P[116] 1500 mm/sec CNT80 ;
	147: WELD_ON;
	148:L P[117] 10 mm/sec CNT40 ;
	149:L P[118] 10 mm/sec CNT80 ;
	150:L P[119] 10 mm/sec CNT80 ;
	151:L P[120] 10 mm/sec CNT20 ;
	152:L P[121] 10 mm/sec CNT0 ;
	153: WELD_OFF;
	154:L P[122] 1500 mm/sec CNT80 ;
	155:L P[123] 1500 mm/sec CNT0 ;
	155: job index 1;
	156: UFRAME_NUM=${nf} ;
	157:J P[124] 50% CNT30 ;
	158:L P[125] 1500 mm/sec CNT80 ;
	159:L P[126] 1500 mm/sec CNT80 ;
	160:L P[127] 1500 mm/sec CNT80 ;
	161: WELD_ON;
	162:L P[128] 17 mm/sec CNT40 ;
	163:L P[129] 17 mm/sec CNT20 ;
	164:L P[130] 17 mm/sec CNT0 ;
	165: WELD_OFF;
	166:L P[131] 1500 mm/sec CNT80 ;
	167:L P[132] 1500 mm/sec CNT80 ;
	168:J P[133] 50% CNT30 ;
	169:L P[134] 1500 mm/sec CNT80 ;
	170:L P[135] 1500 mm/sec CNT80 ;
	171: WELD_ON;
	172:L P[136] 17 mm/sec CNT40 ;
	173:L P[137] 17 mm/sec CNT20 ;
	174:L P[138] 17 mm/sec CNT0 ;
	175: WELD_OFF;
	176:L P[139] 1500 mm/sec CNT80 ;
	177:L P[140] 1500 mm/sec CNT0 ;
	177: job index 1;
	178: UFRAME_NUM=${uf} ;
	179:J P[141] 50% CNT30 ;
	180:L P[142] 1500 mm/sec CNT80 ;
	181:L P[143] 1500 mm/sec CNT80 ;
	182:L P[144] 1500 mm/sec CNT80 ;
	183: WELD_ON;
	184:L P[145] 17 mm/sec CNT40 ;
	185:L P[146] 17 mm/sec CNT20 ;
	186:L P[147] 17 mm/sec CNT0 ;
	187: WELD_OFF;
	188:L P[148] 1500 mm/sec CNT80 ;
	189:L P[149] 1500 mm/sec CNT0 ;
	189: job index 1;
	190:J P[150] 50% CNT30 ;
	191:L P[151] 1500 mm/sec CNT80 ;
	192:L P[152] 1500 mm/sec CNT80 ;
	193:L P[153] 1500 mm/sec CNT80 ;
	194: WELD_ON;
	195:L P[154] 17 mm/sec CNT40 ;
	196:L P[155] 17 mm/sec CNT20 ;
	197:L P[156] 17 mm/sec CNT0 ;
	198: WELD_OFF;
	199:L P[157] 1500 mm/sec CNT80 ;
	200:L P[158] 1500 mm/sec CNT0 ;
	200: job index 1;
	201:J P[159] 50% CNT30 ;
	202:L P[160] 1500 mm/sec CNT80 ;
	203:L P[161] 1500 mm/sec CNT80 ;
	204:L P[162] 1500 mm/sec CNT80 ;
	205: WELD_ON;
	206:L P[163] 17 mm/sec CNT40 ;
	207:L P[164] 17 mm/sec CNT20 ;
	208:L P[165] 17 mm/sec CNT0 ;
	209: WELD_OFF;
	210:L P[166] 1500 mm/sec CNT80 ;
	211:L P[167] 1500 mm/sec CNT0 ;
	211: job index 1;
	212:J P[168] 50% CNT30 ;
	213:L P[169] 1500 mm/sec CNT80 ;
	214:L P[170] 1500 mm/sec CNT80 ;
	215:L P[171] 1500 mm/sec CNT80 ;
	216: WELD_ON;
	217:L P[172] 17 mm/sec CNT40 ;
	218:L P[173] 17 mm/sec CNT20 ;
	219:L P[174] 17 mm/sec CNT0 ;
	220: WELD_OFF;
	221:L P[175] 1500 mm/sec CNT80 ;
	222:L P[176] 1500 mm/sec CNT0 ;
	222: PAUSE;
	222: job index 1;
	223:J P[177] 50% CNT30 ;
	224:L P[178] 1500 mm/sec CNT80 ;
	225:L P[179] 1500 mm/sec CNT80 ;
	226:L P[180] 1500 mm/sec CNT80 ;
	227: WELD_ON;
	228:L P[181] 15 mm/sec CNT40 ;
	229:L P[182] 15 mm/sec CNT20 ;
	230:L P[183] 15 mm/sec CNT0 ;
	231: WELD_OFF;
	232:L P[184] 1500 mm/sec CNT80 ;
	233:L P[185] 1500 mm/sec CNT0 ;
	233: job index 1;
	234:J P[186] 50% CNT30 ;
	235:L P[187] 1500 mm/sec CNT80 ;
	236:L P[188] 1500 mm/sec CNT80 ;
	237:L P[189] 1500 mm/sec CNT80 ;
	238: WELD_ON;
	239:L P[190] 15 mm/sec CNT40 ;
	240:L P[191] 15 mm/sec CNT20 ;
	241:L P[192] 15 mm/sec CNT0 ;
	242: WELD_OFF;
	243:L P[193] 1500 mm/sec CNT80 ;
	244:L P[194] 1500 mm/sec CNT0 ;
	245:J P[195] 50% CNT30 ;
/POS
P[1]{
 GP1:
	UF : ${uf}, UT : ${ut},
	J1 = 070.990 deg,	J2 = 023.792 deg,	J3 = -024.519 deg,
	J4 = 026.016 deg,	J5 = -074.774 deg,	J6 = 065.046 deg
};
P[2]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 037.756 mm,	Y = 049.917 mm,	Z = 200.000 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[3]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 037.756 mm,	Y = 049.917 mm,	Z = -007.500 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[4]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 010.054 mm,	Y = 010.355 mm,	Z = -020.441 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[5]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 009.500 mm,	Y = 009.563 mm,	Z = -020.700 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[6]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 009.500 mm,	Y = 009.563 mm,	Z = -045.700 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[7]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 010.054 mm,	Y = 010.355 mm,	Z = -045.441 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[8]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 037.756 mm,	Y = 049.917 mm,	Z = -032.500 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};
P[9]{
 GP1:
	UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	X = 037.756 mm,	Y = 049.917 mm,	Z = 200.000 mm,
	W = -174.958 deg,	P = -074.940 deg,	R = -130.221 deg
};

P[10]{
 GP1:
	UF : ${uf}, UT : ${ut},
	J1 = 071.858 deg,	J2 = 043.005 deg,	J3 = -013.964 deg,
	J4 = 008.294 deg,	J5 = -053.541 deg,	J6 = 159.607 deg
};`;
}

// POSITION CALCULATE ;


function Postion ()
{
	lssk ();
	// USER FRAME DECLARATION ;
    let ufram = document.getElementById("uframe");
    uf = ufram.value;

	let rufram = document.getElementById("ruframe");
    ruf = rufram.value;

	let nufram = document.getElementById("nuframe");
    nuf = nufram.value;

	// USER TOOL DECLARATION ;

	let tl = document.getElementById("tool");
    ut = tl.value;


	// POSTION REFER CORNERS;
    // P11 ;

 widf = document.getElementById("width").value; 
 len = document.getElementById("length").value;


let p11 = [  550.147 ,	  37.819 ,	  -7.500 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p11[0] = widf - 49.853;
pos11 = `P[11]{
 GP1:
       UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
       X = ${p11[0]} mm,	Y = ${p11[1]} mm,	Z = ${p11[2]} mm,
       W = ${p11[3]} deg,	P = ${p11[4]} deg,	R = ${p11[5]} deg
   };`;

    // P12 ;
 let p12 = [  589.709 ,	  10.117 ,	  -20.441 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
 p12[0] =  widf - 10.291;
 pos12 = `P[12]{
  GP1:
        UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
        X = ${p12[0]} mm,	Y = ${p12[1]} mm,	Z = ${p12[2]} mm,
        W = ${p12[3]} deg,	P = ${p12[4]} deg,	R = ${p12[5]} deg
    };`;

// P13 ;
let p13 = [  590.500 ,	  9.563 ,	  -20.700 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p13[0] =  widf - 9.5;
pos13 = `P[13]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p13[0]} mm,	Y = ${p13[1]} mm,	Z = ${p13[2]} mm,
	   W = ${p13[3]} deg,	P = ${p13[4]} deg,	R = ${p13[5]} deg
   };`;	

// P14 ;
let p14 = [  590.500 ,	 9.563 ,	  -45.700 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p14[0] =  widf - 9.5;
pos14 = `P[14]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p14[0]} mm,	Y = ${p14[1]} mm,	Z = ${p14[2]} mm,
	   W = ${p14[3]} deg,	P = ${p14[4]} deg,	R = ${p14[5]} deg
   };`;	

// P15 ;
let p15 = [  589.709 ,	  10.117 ,	  -45.441 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p15[0] =  widf - 10.291;
pos15 = `P[15]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p15[0]} mm,	Y = ${p15[1]} mm,	Z = ${p15[2]} mm,
	   W = ${p15[3]} deg,	P = ${p15[4]} deg,	R = ${p15[5]} deg
   };`;	

   // P16 ;
let p16 = [  550.147 ,	  37.819 ,	  -32.500 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p16[0] =  widf - 49.853;
pos16 = `P[16]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p16[0]} mm,	Y = ${p16[1]} mm,	Z = ${p16[2]} mm,
	   W = ${p16[3]} deg,	P = ${p16[4]} deg,	R = ${p16[5]} deg
   };`;	

 // P17 ;
let p17 = [  550.147 ,	  37.819 ,	  200.001 , 	  -175.692 ,	  -74.957 ,	  -39.460 ];
p17[0] =  widf - 49.853;
pos17 = `P[17]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p17[0]} mm,	Y = ${p17[1]} mm,	Z = ${p17[2]} mm,
	   W = ${p17[3]} deg,	P = ${p17[4]} deg,	R = ${p17[5]} deg
   };`;	  

// POSITION FOR REFER TACK

pos18 =`P[18]{
 GP1:
	   UF : ${uf}, UT : ${ut},
	   J1 = 067.946 deg,	J2 = 065.485 deg,	J3 = 003.600 deg,
	   J4 = -002.313 deg,	J5 = -093.608 deg,	J6 = 090.120 deg
   };`;


 // P19 ;
let p19 = [  529.700 ,	  44.397 ,	  150.001 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p19[0] =  widf - 70.3;
pos19 = `P[19]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p19[0]} mm,	Y = ${p19[1]} mm,	Z = ${p19[2]} mm,
	   W = ${p19[3]} deg,	P = ${p19[4]} deg,	R = ${p19[5]} deg
   };`;   

// P20 ;
let p20 = [  529.700 ,	  44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p20[0] =  widf - 70.3;
pos20 = `P[20]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p20[0]} mm,	Y = ${p20[1]} mm,	Z = ${p20[2]} mm,
	   W = ${p20[3]} deg,	P = ${p20[4]} deg,	R = ${p20[5]} deg
   };`;   

 //P21 ;

let p21 = [  516.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p21[0] =  widf - 83.241;
pos21 = `P[21]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p21[0]} mm,	Y = ${p21[1]} mm,	Z = ${p21[2]} mm,
	   W = ${p21[3]} deg,	P = ${p21[4]} deg,	R = ${p21[5]} deg
   };`;  

 //P22 ;

 let p22 = [  516.500 ,	  9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
 p22[0] =  widf - 83.241;
 pos22 = `P[22]{
  GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p22[0]} mm,	Y = ${p22[1]} mm,	Z = ${p22[2]} mm,
		W = ${p22[3]} deg,	P = ${p22[4]} deg,	R = ${p22[5]} deg
	};`;  

//P23 ;

let p23 = [  512.500 ,	 9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p23[0] =  widf - 87.5;
pos23 = `P[23]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p23[0]} mm,	Y = ${p23[1]} mm,	Z = ${p23[2]} mm,
	   W = ${p23[3]} deg,	P = ${p23[4]} deg,	R = ${p23[5]} deg
   };`; 


//P24 ;

let p24 = [  512.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p24[0] =  widf - 87.241;
pos24 = `P[24]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p24[0]} mm,	Y = ${p24[1]} mm,	Z = ${p24[2]} mm,
	   W = ${p24[3]} deg,	P = ${p24[4]} deg,	R = ${p24[5]} deg
   };`; 
   
   
   //P25 ;

let p25 = [  525.700 ,	  44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p25[0] =  widf - 74.3;
pos25 = `P[25]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p25[0]} mm,	Y = ${p25[1]} mm,	Z = ${p25[2]} mm,
	   W = ${p25[3]} deg,	P = ${p25[4]} deg,	R = ${p25[5]} deg
   };`; 
   

     //P26 ;

let p26 = [  525.700 ,	  44.397 ,	  150.001 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p26[0] =  widf - 74.3;
pos26 = `P[26]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p26[0]} mm,	Y = ${p26[1]} mm,	Z = ${p26[2]} mm,
	   W = ${p26[3]} deg,	P = ${p26[4]} deg,	R = ${p26[5]} deg
   };`; 

// REFER TACK 2 :
   //P27
pos27 = `P[27]{
 GP1:
	   UF : 1, UT : 3,
	   J1 = 064.555 deg,	J2 = 040.369 deg,	J3 = -016.513 deg,
	   J4 = -002.400 deg,	J5 = -073.648 deg,	J6 = 094.335 deg
   };`;


   // P28
let p28 = [  314.700 ,	  44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p28[0] =  widf / 1.819 ;
pos28 = `P[28]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p28[0]} mm,	Y = ${p28[1]} mm,	Z = ${p28[2]} mm,
	   W = ${p28[3]} deg,	P = ${p28[4]} deg,	R = ${p28[5]} deg
   };`; 


     // P29
let p29 = [  301.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ];
p29[0] =  widf / 1.98;
pos29 = `P[29]{
 GP1:
	   UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	   X = ${p29[0]} mm,	Y = ${p29[1]} mm,	Z = ${p29[2]} mm,
	   W = ${p29[3]} deg,	P = ${p29[4]} deg,	R = ${p29[5]} deg
   };`; 

 // P30 
let p30 =[  301.500 ,	  9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
p30[0] =  widf / 1.98;
pos30 = `P[30]{ 
 GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p30[0]} mm,	Y = ${p30[1]} mm,	Z = ${p30[2]} mm,
		W = ${p30[3]} deg,	P = ${p30[4]} deg,	R = ${p30[5]} deg
};`;

 // P31 
 let p31 = [  297.500 ,	  9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
 p31[0] =  widf / 2.01;
pos31 = `P[31]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p31[0]} mm,	Y = ${p31[1]} mm,	Z = ${p31[2]} mm,
		W = ${p31[3]} deg,	P = ${p31[4]} deg,	R = ${p31[5]} deg
};`;

 // P32 
 let p32 = [  297.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
 p32[0] =  widf / 2.01;
pos32 = `P[32]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p32[0]} mm,	Y = ${p32[1]} mm,	Z = ${p32[2]} mm,
		W = ${p32[3]} deg,	P = ${p32[4]} deg,	R = ${p32[5]} deg
};`;

 // P33 
 let p33 = [  310.700 ,	  44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
 p33[0] =  widf / 1.93;
pos33 = `P[33]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p33[0]} mm,	Y = ${p33[1]} mm,	Z = ${p33[2]} mm,
		W = ${p33[3]} deg,	P = ${p33[4]} deg,	R = ${p33[5]} deg
};`;

 
 // P34 
 let p34 = [  310.700 ,	  44.397 ,	  150.001 , 	  -177.763 ,	  -46.880 ,	  -113.817 ]; 
 p34[0] =  widf / 1.93 ;
pos34 = `P[34]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p34[0]} mm,	Y = ${p34[1]} mm,	Z = ${p34[2]} mm,
		W = ${p34[3]} deg,	P = ${p34[4]} deg,	R = ${p34[5]} deg
};`;

// REFER TACK 3 :
// P35

pos35 = `P[35]{
	GP1:
	   UF : 1, UT : 3,
	   J1 = 059.850 deg,	J2 = 024.985 deg,	J3 = -024.754 deg,
	   J4 = -002.508 deg,	J5 = -065.603 deg,	J6 = 099.404 deg
   };`;
  
 // P36 
 let p36 = [  90.700 ,	 44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
pos36 = `P[36]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p36[0]} mm,	Y = ${p36[1]} mm,	Z = ${p36[2]} mm,
		W = ${p36[3]} deg,	P = ${p36[4]} deg,	R = ${p36[5]} deg
};`;


 // P37 
 let p37 = [  77.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos37 = `P[37]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p37[0]} mm,	Y = ${p37[1]} mm,	Z = ${p37[2]} mm,
		W = ${p37[3]} deg,	P = ${p37[4]} deg,	R = ${p37[5]} deg
};`;

 // P38 
 let p38 = [  77.500 ,	 9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos38 = `P[38]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p38[0]} mm,	Y = ${p38[1]} mm,	Z = ${p38[2]} mm,
		W = ${p38[3]} deg,	P = ${p38[4]} deg,	R = ${p38[5]} deg
};`;


 // P39 
 let p39 = [  73.500 ,	  9.563 ,	  -59.500 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos39 = `P[39]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p39[0]} mm,	Y = ${p39[1]} mm,	Z = ${p39[2]} mm,
		W = ${p39[3]} deg,	P = ${p39[4]} deg,	R = ${p39[5]} deg
};`;


 // P40 
 let p40 = [  73.759 ,	  10.246 ,	  -58.817 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos40 = `P[40]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p40[0]} mm,	Y = ${p40[1]} mm,	Z = ${p40[2]} mm,
		W = ${p40[3]} deg,	P = ${p40[4]} deg,	R = ${p40[5]} deg
};`;

 // P41 
 let p41 = [  86.700 ,	  44.397 ,	  -24.666 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos41 = `P[41]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p41[0]} mm,	Y = ${p41[1]} mm,	Z = ${p41[2]} mm,
		W = ${p41[3]} deg,	P = ${p41[4]} deg,	R = ${p41[5]} deg
};`;


 // P42 
 let p42 = [  86.700 ,	  44.397 ,	  150.001 , 	  -177.763 ,	  -46.880 ,	  -113.817 ] ; 
  
pos42 = `P[42]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p42[0]} mm,	Y = ${p42[1]} mm,	Z = ${p42[2]} mm,
		W = ${p42[3]} deg,	P = ${p42[4]} deg,	R = ${p42[5]} deg
};`;


// REFER SIDEFRAME WELDING : 
//P43

pos43 = `P[43]{
	GP1:
	   UF : ${uf}, UT : ${ut},
	   J1 = 068.378 deg,	J2 = 057.046 deg,	J3 = -004.352 deg,
	   J4 = -001.964 deg,	J5 = -078.780 deg,	J6 = 084.184 deg
   };`;


 // P44 
  let p44 = [  554.700 ,	  44.397 ,	  150.001 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  p44[0] =  widf - 45.3;
pos44 = `P[44]{ 
GP1:
 		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p44[0]} mm,	Y = ${p44[1]} mm,	Z = ${p44[2]} mm,
		W = ${p44[3]} deg,	P = ${p44[4]} deg,	R = ${p44[5]} deg
};`;

 // P45 
 let p45 = [  554.700 ,	  44.397 ,	  -24.366 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
 p45[0] =  widf - 45.3;
pos45 = `P[45]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p45[0]} mm,	Y = ${p45[1]} mm,	Z = ${p45[2]} mm,
		W = ${p45[3]} deg,	P = ${p45[4]} deg,	R = ${p45[5]} deg
};`;

 // P46 
 let p46 = [  541.759 ,	  10.246 ,	  -58.517 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
 p46[0] =  widf - 58.241;
pos46 = `P[46]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p46[0]} mm,	Y = ${p46[1]} mm,	Z = ${p46[2]} mm,
		W = ${p46[3]} deg,	P = ${p46[4]} deg,	R = ${p46[5]} deg
};`;


 // P47 
 let p47 = [  541.500 ,	  9.563 ,	  -59.200 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
 p47[0] =  widf - 58.5;
pos47 = `P[47]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
	    X = ${p47[0]} mm,	Y = ${p47[1]} mm,	Z = ${p47[2]} mm,
		W = ${p47[3]} deg,	P = ${p47[4]} deg,	R = ${p47[5]} deg
};`;


 // P48 
 let p48 = [  58.500 ,	  9.563 ,	  -59.200 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  
pos48 = `P[48]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p48[0]} mm,	Y = ${p48[1]} mm,	Z = ${p48[2]} mm,
		W = ${p48[3]} deg,	P = ${p48[4]} deg,	R = ${p48[5]} deg
};`;


 // P49 
 let p49 = [  58.500 ,	  9.563 ,	  -59.200 , 	  -168.397 ,	  -45.792 ,	  -126.737] ; 
  
pos49 = `P[49]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p49[0]} mm,	Y = ${p49[1]} mm,	Z = ${p49[2]} mm,
		W = ${p49[3]} deg,	P = ${p49[4]} deg,	R = ${p49[5]} deg
};`;


 // P50 
 let p50 = [  58.500 ,	  9.563 ,	  -59.200 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  
pos50 = `P[50]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p50[0]} mm,	Y = ${p50[1]} mm,	Z = ${p50[2]} mm,
		W = ${p50[3]} deg,	P = ${p50[4]} deg,	R = ${p50[5]} deg
};`;


 // P51 
 let p51 = [  58.759 ,	  10.246 ,	  -58.517 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  
pos51 = `P[51]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p51[0]} mm,	Y = ${p51[1]} mm,	Z = ${p51[2]} mm,
		W = ${p51[3]} deg,	P = ${p51[4]} deg,	R = ${p51[5]} deg
};`;


 // P52 
 let p52 = [  71.700 ,	  44.397 ,	  -24.366 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  
pos52 = `P[52]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p52[0]} mm,	Y = ${p52[1]} mm,	Z = ${p52[2]} mm,
		W = ${p52[3]} deg,	P = ${p52[4]} deg,	R = ${p52[5]} deg
};`;


 // P53 
 let p53 = [  71.700 ,	  44.397 ,	  150.001 , 	  -168.397 ,	  -45.792 ,	  -126.737 ] ; 
  
pos53 = `P[53]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p53[0]} mm,	Y = ${p53[1]} mm,	Z = ${p53[2]} mm,
		W = ${p53[3]} deg,	P = ${p53[4]} deg,	R = ${p53[5]} deg
};`;


// REFER STICH WELDING :  
// STICH 1 :  

pos54 =`P[54]{
	GP1:
	   UF : 2, UT : 1,
	   J1 = 073.481 deg,	J2 = 040.182 deg,	J3 = -016.902 deg,
	   J4 = 002.124 deg,	J5 = -071.467 deg,	J6 = -051.456 deg
};`;


 // P55 
 let p55 = [  409.700 ,	  164.232 ,	  150.001 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p55[0] =  widf / 1.46 ;
 p55[1] =  len / 2.74 ;
pos55 = `P[55]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p55[0]} mm,	Y = ${p55[1]} mm,	Z = ${p55[2]} mm,
		W = ${p55[3]} deg,	P = ${p55[4]} deg,	R = ${p55[5]} deg
};`;


 // P56 
 let p56 = [  409.700 ,	  164.232 ,	  -25.364 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p56[0] =  widf / 1.46;
 p56[1] =  len/ 2.74 ;
pos56 = `P[56]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p56[0]} mm,	Y = ${p56[1]} mm,	Z = ${p56[2]} mm,
		W = ${p56[3]} deg,	P = ${p56[4]} deg,	R = ${p56[5]} deg
};`;


 // P57 
 let p57 = [  396.759 ,	  198.380 ,	  -59.517 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p57[0] =  widf / 1.512;
 p57[1] =  len / 2.268;
pos57 = `P[57]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p57[0]} mm,	Y = ${p57[1]} mm,	Z = ${p57[2]} mm,
		W = ${p57[3]} deg,	P = ${p57[4]} deg,	R = ${p57[5]} deg
};`;


 // P58 
 let p58 = [  396.500 ,	  199.063 ,	  -60.200 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p58[0] =  widf / 1.513;
 p58[1] =  len / 2.260;
pos58 = `P[58]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p58[0]} mm,	Y = ${p58[1]} mm,	Z = ${p58[2]} mm,
		W = ${p58[3]} deg,	P = ${p58[4]} deg,	R = ${p58[5]} deg
};`;


 // P59 
 let p59 = [  357.533 ,	  199.063 ,	  -60.200 , 	  177.594 ,	  -46.869 ,	  114.050   ] ; 
 p59[0] =  widf / 1.678;
 p59[1] =  len / 2.260;
pos59 = `P[59]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p59[0]} mm,	Y = ${p59[1]} mm,	Z = ${p59[2]} mm,
		W = ${p59[3]} deg,	P = ${p59[4]} deg,	R = ${p59[5]} deg
};`;

 // P60 
 let p60 = [  357.792 ,	  198.380 ,	  -59.517 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p60[0] =  widf / 1.678;
 p60[1] =  len / 2.268;
pos60 = `P[60]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p60[0]} mm,	Y = ${p60[1]} mm,	Z = ${p60[2]} mm,
		W = ${p60[3]} deg,	P = ${p60[4]} deg,	R = ${p60[5]} deg
};`;


 // P61 
 let p61 = [  370.733 ,	  164.232 ,	  -25.364 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p61[0] =  widf / 1.618;
 p61[1] =  len / 2.74 ;
pos61 = `P[61]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p61[0]} mm,	Y = ${p61[1]} mm,	Z = ${p61[2]} mm,
		W = ${p61[3]} deg,	P = ${p61[4]} deg,	R = ${p61[5]} deg
};`;


 // P62 
 let p62 = [  370.733 ,	  164.232 ,	  150.001 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 p62[0] =  widf / 1.618;
 p62[1] =  len / 2.74 ;
pos62 = `P[62]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p62[0]} mm,	Y = ${p62[1]} mm,	Z = ${p62[2]} mm,
		W = ${p62[3]} deg,	P = ${p62[4]} deg,	R = ${p62[5]} deg
};`;


// Stich 2 : 

pos63 = `P[63]{
 GP1:
	UF : 2, UT : 1,
	J1 = 069.051 deg,	J2 = 019.133 deg,	J3 = -027.244 deg,
	J4 = 002.151 deg,	J5 = -060.979 deg,	J6 = -047.394 deg
};`;


 // P64 
 let p64 = [  115.700 ,	  164.232 ,	  -25.364 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 
 p64[1] =  len / 2.74 ;
pos64 = `P[64]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p64[0]} mm,	Y = ${p64[1]} mm,	Z = ${p64[2]} mm,
		W = ${p64[3]} deg,	P = ${p64[4]} deg,	R = ${p64[5]} deg
};`;


 // P65 
 let p65 = [  102.759 ,	  198.380 ,	  -59.517 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 

 p65[1] =  len / 2.268;
pos65 = `P[65]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p65[0]} mm,	Y = ${p65[1]} mm,	Z = ${p65[2]} mm,
		W = ${p65[3]} deg,	P = ${p65[4]} deg,	R = ${p65[5]} deg
};`


 // P66 
 let p66 = [  102.500 ,	  199.063 ,	  -60.200 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 
 
 p66[1] =  len / 2.260;
pos66 = `P[66]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p66[0]} mm,	Y = ${p66[1]} mm,	Z = ${p66[2]} mm,
		W = ${p66[3]} deg,	P = ${p66[4]} deg,	R = ${p66[5]} deg
};`;


 // P67 
 let p67 = [  64.116 ,	  199.063 ,	  -60.200 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 

 p67[1] =  len / 2.260;
pos67 = `P[67]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p67[0]} mm,	Y = ${p67[1]} mm,	Z = ${p67[2]} mm,
		W = ${p67[3]} deg,	P = ${p67[4]} deg,	R = ${p67[5]} deg
};`;


 // P68 
 let p68 = [  64.375 ,	  198.380 ,	  -59.517 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 

 p68[1] =  len / 2.268;
pos68 = `P[68]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p68[0]} mm,	Y = ${p68[1]} mm,	Z = ${p68[2]} mm,
		W = ${p68[3]} deg,	P = ${p68[4]} deg,	R = ${p68[5]} deg
};`;



 // P69 
 let p69 = [  77.316 ,	  164.232 ,	  -25.364 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 

 p69[1] =  len / 2.74 ;
pos69 = `P[69]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p69[0]} mm,	Y = ${p69[1]} mm,	Z = ${p69[2]} mm,
		W = ${p69[3]} deg,	P = ${p69[4]} deg,	R = ${p69[5]} deg
};`;



 // P70 
 let p70 = [  77.316 ,	  164.232 ,	  150.001 , 	  177.594 ,	  -46.869 ,	  114.050 ] ; 

 p70[1] =  len / 2.74 ;
pos70 = `P[70]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p70[0]} mm,	Y = ${p70[1]} mm,	Z = ${p70[2]} mm,
		W = ${p70[3]} deg,	P = ${p70[4]} deg,	R = ${p70[5]} deg
};`;


// Non Refer CORNER WELD 1 : 

pos71 = `P[71]{
 GP1:
	UF : ${uf}, UT : ${ut},
	J1 = 075.988 deg,	J2 = 044.948 deg,	J3 = -016.587 deg,
	J4 = -024.440 deg,	J5 = -066.717 deg,	J6 = -101.776 deg
};`;


 // P72 
 let p72 = [  562.244 ,	  400.210 ,	  150.001 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p72[0] =  widf - 37.756 ; 
 p72[1] = len - 49.79 ;
pos72 = `P[72]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p72[0]} mm,	Y = ${p72[1]} mm,	Z = ${p72[2]} mm,
		W = ${p72[3]} deg,	P = ${p72[4]} deg,	R = ${p72[5]} deg
};`;


 // P73 
 let p73 = [  562.244 ,	  400.210 ,	  -7.500 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p73[0] =  widf - 37.756;
 p73[1] = len - 49.79 ;
pos73 = `P[73]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p73[0]} mm,	Y = ${p73[1]} mm,	Z = ${p73[2]} mm,
		W = ${p73[3]} deg,	P = ${p73[4]} deg,	R = ${p73[5]} deg
};`;


 // P74 
 let p74 = [  589.946 ,	  439.772 ,	  -20.441 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p74[0] =  widf - 10.054 ;
 p74[1] = len -  10.228 ;
pos74 = `P[74]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p74[0]} mm,	Y = ${p74[1]} mm,	Z = ${p74[2]} mm,
		W = ${p74[3]} deg,	P = ${p74[4]} deg,	R = ${p74[5]} deg
};`;


 // P75 
 let p75 = [  590.500 ,	  440.563 ,	  -20.700 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p75[0] =  widf - 9.5;
 p75[1] =  len - 9.437 ;
pos75 = `P[75]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p75[0]} mm,	Y = ${p75[1]} mm,	Z = ${p75[2]} mm,
		W = ${p75[3]} deg,	P = ${p75[4]} deg,	R = ${p75[5]} deg
};`;


 // P76 
 let p76 = [  590.500 ,	  440.563 ,	  -45.700 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p76[0] =  widf - 9.5;
 p76[1] =  len - 9.437 ;
pos76 = `P[76]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p76[0]} mm,	Y = ${p76[1]} mm,	Z = ${p76[2]} mm,
		W = ${p76[3]} deg,	P = ${p76[4]} deg,	R = ${p76[5]} deg
};`;

 // P77 
 let p77 = [  589.946 ,	  439.772 ,	  -45.441 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p77[0] =  widf - 10.054 ;
 p77[1] =  len - 10.228 ;
pos77 = `P[77]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p77[0]} mm,	Y = ${p77[1]} mm,	Z = ${p77[2]} mm,
		W = ${p77[3]} deg,	P = ${p77[4]} deg,	R = ${p77[5]} deg
};`;


 // P78 
 let p78 = [  562.244 ,	  400.210 ,	  -32.500 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p78[0] =  widf - 37.756;
 p78[1] = len - 49.79 ;
pos78 = `P[78]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p78[0]} mm,	Y = ${p78[1]} mm,	Z = ${p78[2]} mm,
		W = ${p78[3]} deg,	P = ${p78[4]} deg,	R = ${p78[5]} deg
};`;


 // P79 
 let p79 = [  562.244 ,	  400.210 ,	  150.001 , 	  174.906 ,	  -74.939 ,	  60.275 ] ; 
 p79[0] =  widf - 37.756;
 p79[1] = len -49.79 ;
pos79 = `P[79]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p79[0]} mm,	Y = ${p79[1]} mm,	Z = ${p79[2]} mm,
		W = ${p79[3]} deg,	P = ${p79[4]} deg,	R = ${p79[5]} deg
};`;


// NON REFER CORNER WELD 2 :  

pos80 = `P[80]{
 GP1:
	UF : ${uf}, UT : ${ut},
	J1 = 071.296 deg,	J2 = 023.629 deg,	J3 = -028.652 deg,
	J4 = -014.791 deg,	J5 = -083.111 deg,	J6 = -030.905 deg
};`;

 // P81 
 let p81 = [  39.756 ,	  401.210 ,	  -7.500 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p81[1] =  len - 48.79 ;
pos81 = `P[81]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p81[0]} mm,	Y = ${p81[1]} mm,	Z = ${p81[2]} mm,
		W = ${p81[3]} deg,	P = ${p81[4]} deg,	R = ${p81[5]} deg
};`;


 // P82 
 let p82 = [  12.054 ,	  440.772 ,	  -20.441 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p82[1] =  len - 9.228 ;
pos82 = `P[82]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p82[0]} mm,	Y = ${p82[1]} mm,	Z = ${p82[2]} mm,
		W = ${p82[3]} deg,	P = ${p82[4]} deg,	R = ${p82[5]} deg
};`;


 // P83 
 let p83 = [  11.500 ,	  441.563 ,	  -20.700 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p83[1] =  len - 8.437 ;
pos83 = `P[83]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p83[0]} mm,	Y = ${p83[1]} mm,	Z = ${p83[2]} mm,
		W = ${p83[3]} deg,	P = ${p83[4]} deg,	R = ${p83[5]} deg
};`;


 // P84 
 let p84 = [  11.500 ,	  441.563 ,	  -45.700 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p84[1] = len - 8.437 ;
pos84 = `P[84]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p84[0]} mm,	Y = ${p84[1]} mm,	Z = ${p84[2]} mm,
		W = ${p84[3]} deg,	P = ${p84[4]} deg,	R = ${p84[5]} deg
};`;


 // P85 
 let p85 = [  12.054 ,	  440.772 ,	  -45.441 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p85[1] =  len - 9.228 ;
pos85 = `P[85]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p85[0]} mm,	Y = ${p85[1]} mm,	Z = ${p85[2]} mm,
		W = ${p85[3]} deg,	P = ${p85[4]} deg,	R = ${p85[5]} deg
};`;


 // P86 
 let p86 = [  39.756 ,	  401.210 ,	  -32.500 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p86[1] =  len - 48.79 ;
pos86 = `P[86]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p86[0]} mm,	Y = ${p86[1]} mm,	Z = ${p86[2]} mm,
		W = ${p86[3]} deg,	P = ${p86[4]} deg,	R = ${p86[5]} deg
};`;

 // P87 
 let p87 = [  39.756 ,	  401.210 ,	  150.001 , 	  174.274 ,	  -74.923 ,	  130.928 ] ; 
 p87[1] = len - 48.79 ;
pos87 = `P[87]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p87[0]} mm,	Y = ${p87[1]} mm,	Z = ${p87[2]} mm,
		W = ${p87[3]} deg,	P = ${p87[4]} deg,	R = ${p87[5]} deg
};`;



// NON REFER TACK 1 :  

pos88 = `P[88]{
 GP1:
	UF : 1, UT : 1,
	J1 = 084.025 deg,	J2 = 046.563 deg,	J3 = -012.677 deg,
	J4 = 002.346 deg,	J5 = -076.089 deg,	J6 = -061.896 deg
};`;




 // P89 
 let p89 = [  529.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p89[0] =  widf - 70.3;
 p89[1] = len - 44.27 ;
pos89 = `P[89]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p89[0]} mm,	Y = ${p89[1]} mm,	Z = ${p89[2]} mm,
		W = ${p89[3]} deg,	P = ${p89[4]} deg,	R = ${p89[5]} deg
};`;


 // P90 
 let p90 = [  529.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p90[0] =  widf - 70.3;
 p90[1] = len - 44.27 ;
pos90 = `P[90]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p90[0]} mm,	Y = ${p90[1]} mm,	Z = ${p90[2]} mm,
		W = ${p90[3]} deg,	P = ${p90[4]} deg,	R = ${p90[5]} deg
};`;


 // P91 
 let p91 = [  516.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p91[0] =  widf - 83.241 ;
 p91[1] = len - 10.12 ;
pos91 = `P[91]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p91[0]} mm,	Y = ${p91[1]} mm,	Z = ${p91[2]} mm,
		W = ${p91[3]} deg,	P = ${p91[4]} deg,	R = ${p91[5]} deg
};`;


 // P92 
 let p92 = [  516.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p92[0] =  widf - 83.5;
 p92[1] = len - 9.437 ;
pos92 = `P[92]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p92[0]} mm,	Y = ${p92[1]} mm,	Z = ${p92[2]} mm,
		W = ${p92[3]} deg,	P = ${p92[4]} deg,	R = ${p92[5]} deg
};`;


 // P93 
 let p93 = [  512.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p93[0] =  widf - 87.5;
 p93[1] = len - 9.437 ;
pos93 = `P[93]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p93[0]} mm,	Y = ${p93[1]} mm,	Z = ${p93[2]} mm,
		W = ${p93[3]} deg,	P = ${p93[4]} deg,	R = ${p93[5]} deg
};`;


 // P94 
 let p94 = [  512.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p94[0] =  widf - 87.241 ;
 p91[1] = len - 10.12 ;
pos94 = `P[94]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p94[0]} mm,	Y = ${p94[1]} mm,	Z = ${p94[2]} mm,
		W = ${p94[3]} deg,	P = ${p94[4]} deg,	R = ${p94[5]} deg
};`;


 // P95 
 let p95 = [  525.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p95[0] =  widf - 74.3;
 p95[1] = len - 44.27 ;
pos95 = `P[95]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p95[0]} mm,	Y = ${p95[1]} mm,	Z = ${p95[2]} mm,
		W = ${p95[3]} deg,	P = ${p95[4]} deg,	R = ${p95[5]} deg
};`;


 // P96 
 let p96 = [  525.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p96[0] =  widf - 74.3;
 p96[1] = len - 44.27 ;
pos96 = `P[96]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p96[0]} mm,	Y = ${p96[1]} mm,	Z = ${p96[2]} mm,
		W = ${p96[3]} deg,	P = ${p96[4]} deg,	R = ${p96[5]} deg
};`;


// NON REFER TACK 2 :

pos97 = `P[97]{
 GP1:
	UF : 1, UT : 1,
	J1 = 082.926 deg,	J2 = 028.824 deg,	J3 = -023.518 deg,
	J4 = 002.482 deg,	J5 = -065.215 deg,	J6 = -061.272 deg
};`;


 // P98 
 let p98 = [  314.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p98[0] =  widf / 1.90 ;
 p98[1] = len - 44.27 ;
pos98 = `P[98]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p98[0]} mm,	Y = ${p98[1]} mm,	Z = ${p98[2]} mm,
		W = ${p98[3]} deg,	P = ${p98[4]} deg,	R = ${p98[5]} deg
};`;


 // P99 
 let p99 = [  301.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p99[0] =  widf / 1.98 ;
 p99[1] = len - 10.12 ;
pos99 = `P[99]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p99[0]} mm,	Y = ${p99[1]} mm,	Z = ${p99[2]} mm,
		W = ${p99[3]} deg,	P = ${p99[4]} deg,	R = ${p99[5]} deg
};`;

 // P100 
 let p100 = [  301.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p100[0] =  widf / 1.99 ;
 p100[1] = len - 9.437 ;
pos100 = `P[100]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p100[0]} mm,	Y = ${p100[1]} mm,	Z = ${p100[2]} mm,
		W = ${p100[3]} deg,	P = ${p100[4]} deg,	R = ${p100[5]} deg
};`;


 // P101 
 let p101 = [  297.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p101[0] =  widf / 2.016 ;
 p101[1] = len - 9.437 ;
pos101 = `P[101]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p101[0]} mm,	Y = ${p101[1]} mm,	Z = ${p101[2]} mm,
		W = ${p101[3]} deg,	P = ${p101[4]} deg,	R = ${p101[5]} deg
};`;



 // P102 
 let p102 = [  297.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p102[0] =  widf / 2.015 ;
 p102[1] = len - 10.12 ;
pos102 = `P[102]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p102[0]} mm,	Y = ${p102[1]} mm,	Z = ${p102[2]} mm,
		W = ${p102[3]} deg,	P = ${p102[4]} deg,	R = ${p102[5]} deg
};`;



 // P103 
 let p103 = [  310.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p103[0] =  widf / 1.93;
 p103[1] = len - 44.27 ;
pos103 = `P[103]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p103[0]} mm,	Y = ${p103[1]} mm,	Z = ${p103[2]} mm,
		W = ${p103[3]} deg,	P = ${p103[4]} deg,	R = ${p103[5]} deg
};`;


 // P104 
 let p104 = [  310.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p104[0] =  widf / 1.93;
 p104[1] = len - 44.27 ;
pos104 = `P[104]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p104[0]} mm,	Y = ${p104[1]} mm,	Z = ${p104[2]} mm,
		W = ${p104[3]} deg,	P = ${p104[4]} deg,	R = ${p104[5]} deg
};`;


// 	NON REFER TACK 3 :


pos105 = `P[105]{
 GP1:
	UF : 1, UT : 1,
	J1 = 081.290 deg,	J2 = 012.976 deg,	J3 = -029.110 deg,
	J4 = 002.569 deg,	J5 = -059.564 deg,	J6 = -059.897 deg
};`;


 // P106 
 let p106 = [  90.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 
 p106[1] = len - 44.27 ;
pos106 = `P[106]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p106[0]} mm,	Y = ${p106[1]} mm,	Z = ${p106[2]} mm,
		W = ${p106[3]} deg,	P = ${p106[4]} deg,	R = ${p106[5]} deg
};`;


 // P107 
 let p107 = [  77.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p107[1] = len - 10.12 ;
pos107 = `P[107]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p107[0]} mm,	Y = ${p107[1]} mm,	Z = ${p107[2]} mm,
		W = ${p107[3]} deg,	P = ${p107[4]} deg,	R = ${p107[5]} deg
};`;


 // P108 
 let p108 = [  77.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p108[1] = len - 9.437 ;
pos108 = `P[108]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p108[0]} mm,	Y = ${p108[1]} mm,	Z = ${p108[2]} mm,
		W = ${p108[3]} deg,	P = ${p108[4]} deg,	R = ${p108[5]} deg
};`;


 // P109 
 let p109 = [  73.500 ,	  440.563 ,	  -59.500 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p109[1] = len - 9.437 ;
pos109 = `P[109]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p109[0]} mm,	Y = ${p109[1]} mm,	Z = ${p109[2]} mm,
		W = ${p109[3]} deg,	P = ${p109[4]} deg,	R = ${p109[5]} deg
};`;


 // P110 
 let p110 = [  73.759 ,	  439.880 ,	  -58.817 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p110[1] = len - 10.12 ;
pos110 = `P[110]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p110[0]} mm,	Y = ${p110[1]} mm,	Z = ${p110[2]} mm,
		W = ${p110[3]} deg,	P = ${p110[4]} deg,	R = ${p110[5]} deg
};`;


 // P111 
 let p111 = [  86.700 ,	  405.730 ,	  -24.666 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p111[1] = len - 44.27 ;
pos111 = `P[111]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p111[0]} mm,	Y = ${p111[1]} mm,	Z = ${p111[2]} mm,
		W = ${p111[3]} deg,	P = ${p111[4]} deg,	R = ${p111[5]} deg
};`;

 // P112 
 let p112 = [  86.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ;
 p112[1] = len - 44.27 ;
pos112 = `P[112]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p112[0]} mm,	Y = ${p112[1]} mm,	Z = ${p112[2]} mm,
		W = ${p112[3]} deg,	P = ${p112[4]} deg,	R = ${p112[5]} deg
};`;



// NON REFER SIDEFRAME : 


pos113 = `P[113]{
 GP1:
	UF : 1, UT : 1,
	J1 = 084.133 deg,	J2 = 049.124 deg,	J3 = -010.773 deg,
	J4 = 002.330 deg,	J5 = -077.997 deg,	J6 = -061.924 deg
};`;


 // P114 
 let p114 = [  554.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p114[0] =  widf - 45.3;
 p114[1] = len - 44.27 ;
pos114 = `P[114]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p114[0]} mm,	Y = ${p114[1]} mm,	Z = ${p114[2]} mm,
		W = ${p114[3]} deg,	P = ${p114[4]} deg,	R = ${p114[5]} deg
};`;


 // P115 
 let p115 = [  554.700 ,	  405.730 ,	  -24.366 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p115[0] =  widf - 45.3;
 p115[1] = len - 44.27 ;
pos115 = `P[115]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p115[0]} mm,	Y = ${p115[1]} mm,	Z = ${p115[2]} mm,
		W = ${p115[3]} deg,	P = ${p115[4]} deg,	R = ${p115[5]} deg
};`;


 // P116 
 let p116 = [  541.759 ,	  439.880 ,	  -58.517 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p116[0] =  widf - 58.241;
 p116[1] = len - 10.12 ;

pos116 = `P[116]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p116[0]} mm,	Y = ${p116[1]} mm,	Z = ${p116[2]} mm,
		W = ${p116[3]} deg,	P = ${p116[4]} deg,	R = ${p116[5]} deg
};`;


 // P117 
 let p117 = [  541.500 ,	  440.563 ,	  -59.200 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p117[0] =  widf - 58.5;
 p117[1] = len - 9.437 ;
pos117 = `P[117]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p117[0]} mm,	Y = ${p117[1]} mm,	Z = ${p117[2]} mm,
		W = ${p117[3]} deg,	P = ${p117[4]} deg,	R = ${p117[5]} deg
};`;


 // P118 
 let p118 = [   58.500 ,	  440.563 ,	  -59.200 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p118[1] = len - 9.437 ;
pos118 = `P[118]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p118[0]} mm,	Y = ${p118[1]} mm,	Z = ${p118[2]} mm,
		W = ${p118[3]} deg,	P = ${p118[4]} deg,	R = ${p118[5]} deg
};`;


 // P119 
 let p119 = [  58.500 ,	  440.563 ,	  -59.200 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p119[1] = len - 9.437 ;
pos119 = `P[119]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p119[0]} mm,	Y = ${p119[1]} mm,	Z = ${p119[2]} mm,
		W = ${p119[3]} deg,	P = ${p119[4]} deg,	R = ${p119[5]} deg
};`;



 // P120 
 let p120 = [  58.500 ,	  440.563 ,	  -59.200 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p120[1] = len - 9.437 ;
pos120 = `P[120]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p120[0]} mm,	Y = ${p120[1]} mm,	Z = ${p120[2]} mm,
		W = ${p120[3]} deg,	P = ${p120[4]} deg,	R = ${p120[5]} deg
};`;



 // P121 
 let p121 = [  58.500 ,	  440.563 ,	  -59.200 , 	  177.594 ,	  -46.873 ,	  114.049   ] ; 
 p121[1] = len - 9.437 ;
pos121 = `P[121]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p121[0]} mm,	Y = ${p121[1]} mm,	Z = ${p121[2]} mm,
		W = ${p121[3]} deg,	P = ${p121[4]} deg,	R = ${p121[5]} deg
};`;


 // P122 
 let p122 = [  71.700 ,	  405.730 ,	  -24.366 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p122[1] = len - 44.27 ;
pos122 = `P[122]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p122[0]} mm,	Y = ${p122[1]} mm,	Z = ${p122[2]} mm,
		W = ${p122[3]} deg,	P = ${p122[4]} deg,	R = ${p122[5]} deg
};`;

 // P123 
 let p123 = [  71.700 ,	  405.730 ,	  150.001 , 	  177.594 ,	  -46.873 ,	  114.049 ] ; 
 p123[1] = len - 44.27 ;
pos123 = `P[123]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p123[0]} mm,	Y = ${p123[1]} mm,	Z = ${p123[2]} mm,
		W = ${p123[3]} deg,	P = ${p123[4]} deg,	R = ${p123[5]} deg
};`;


// NON REFER STICH 1  :


pos124 = `P[124]{
 GP1:
	UF : 3, UT : 1,
	J1 = 076.744 deg,	J2 = 056.482 deg,	J3 = -004.702 deg,
	J4 = -002.288 deg,	J5 = -084.960 deg,	J6 = 081.663 deg
};`;


 // P125 
 let p125 = [  561.000 ,	  285.899 ,	  150.001 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p125[0] =  widf / 1.06;
 p125[1] = len / 1.573 ;
pos125 = `P[125]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p125[0]} mm,	Y = ${p125[1]} mm,	Z = ${p125[2]} mm,
		W = ${p125[3]} deg,	P = ${p125[4]} deg,	R = ${p125[5]} deg
};`;


 // P126 
 let p126 = [  561.000 ,	  285.899 ,	  -25.368 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p126[0] =  widf / 1.06;
 p126[1] = len / 1.573 ;
pos126 = `P[126]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p126[0]} mm,	Y = ${p126[1]} mm,	Z = ${p126[2]} mm,
		W = ${p126[3]} deg,	P = ${p126[4]} deg,	R = ${p126[5]} deg
};`;


 // P127 
 let p127 = [  548.059 ,	  251.746 ,	  -59.517 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p127[0] =  widf / 1.09;
 p127[1] = len / 1.787 ;
pos127 = `P[127]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p127[0]} mm,	Y = ${p127[1]} mm,	Z = ${p127[2]} mm,
		W = ${p127[3]} deg,	P = ${p127[4]} deg,	R = ${p127[5]} deg
};`;



 // P128 
 let p128 = [  547.800 ,	  251.063 ,	  -60.200 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p128[0] =  widf - 1.09;
 p128[1] = len / 1.787 ;
pos128 = `P[128]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p128[0]} mm,	Y = ${p128[1]} mm,	Z = ${p128[2]} mm,
		W = ${p128[3]} deg,	P = ${p128[4]} deg,	R = ${p128[5]} deg
};`;


 // P129 
 let p129 = [  503.800 ,	  251.063 ,	  -60.200 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p129[0] =  widf / 1.19 ;
 p129[1] = len / 1.787 ;
pos129 = `P[129]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p129[0]} mm,	Y = ${p129[1]} mm,	Z = ${p129[2]} mm,
		W = ${p129[3]} deg,	P = ${p129[4]} deg,	R = ${p129[5]} deg
};`;



 // P130 
 let p130 = [  504.059 ,	  251.746 ,	  -59.517 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p130[0] =  widf / 1.19;
 p130[1] = len / 1.787 ;
pos130 = `P[130]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p130[0]} mm,	Y = ${p130[1]} mm,	Z = ${p130[2]} mm,
		W = ${p130[3]} deg,	P = ${p130[4]} deg,	R = ${p130[5]} deg
};`;


 // P131 
 let p131 = [  517.000 ,	  285.899 ,	  -25.368 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p131[0] =  widf / 1.160 ;
 p131[1] = len / 1.573 ;
pos131 = `P[131]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p131[0]} mm,	Y = ${p131[1]} mm,	Z = ${p131[2]} mm,
		W = ${p131[3]} deg,	P = ${p131[4]} deg,	R = ${p131[5]} deg
};`;


 // P132 
 let p132 = [  517.000 ,	  285.899 ,	  150.001 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p132[0] =  widf / 1.160;
 p132[1] = len / 1.573 ;
pos132 = `P[132]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p132[0]} mm,	Y = ${p132[1]} mm,	Z = ${p132[2]} mm,
		W = ${p132[3]} deg,	P = ${p132[4]} deg,	R = ${p132[5]} deg
};`;



// NON REFER STICH 2 : 

pos133 = `P[133]{
 GP1:
	UF : 3, UT : 1,
	J1 = 073.493 deg,	J2 = 029.392 deg,	J3 = -023.050 deg,
	J4 = -002.498 deg,	J5 = -066.758 deg,	J6 = 085.702 deg
};`;


 // P134 
 let p134 = [  260.700 ,	  285.899 ,	  25.368 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p134[0] =  widf / 2.301;
 p134[1] = len / 1.573 ;
pos134 = `P[134]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p134[0]} mm,	Y = ${p134[1]} mm,	Z = ${p134[2]} mm,
		W = ${p134[3]} deg,	P = ${p134[4]} deg,	R = ${p134[5]} deg
};`;



 // P135 
 let p135 = [  247.759 ,	  251.746 ,	  -59.517 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p135[0] =  widf / 2.421;
 p135[1] = len / 1.787 ;
pos135 = `P[135]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p135[0]} mm,	Y = ${p135[1]} mm,	Z = ${p135[2]} mm,
		W = ${p135[3]} deg,	P = ${p135[4]} deg,	R = ${p135[5]} deg
};`;


 // P136 
 let p136 = [  247.500 ,	  251.063 ,	  -60.200 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p136[0] =  widf / 2.421 ;
 p136[1] = len / 1.787 ;
pos136 = `P[136]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p136[0]} mm,	Y = ${p136[1]} mm,	Z = ${p136[2]} mm,
		W = ${p136[3]} deg,	P = ${p136[4]} deg,	R = ${p136[5]} deg
};`;


 // P137 
 let p137 = [  203.500 ,	  251.063 ,	  -60.200 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p137[0] =  widf / 2.948 ;
 p137[1] = len / 1.787 ;
pos137 = `P[137]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p137[0]} mm,	Y = ${p137[1]} mm,	Z = ${p137[2]} mm,
		W = ${p137[3]} deg,	P = ${p137[4]} deg,	R = ${p137[5]} deg
};`;


 // P138 
 let p138 = [  203.759 ,	  251.746 ,	  -59.517 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p138[0] =  widf / 2.948 ;
 p138[1] = len / 1.787 ;
pos138 = `P[138]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p138[0]} mm,	Y = ${p138[1]} mm,	Z = ${p138[2]} mm,
		W = ${p138[3]} deg,	P = ${p138[4]} deg,	R = ${p138[5]} deg
};`;


 // P139 
 let p139 = [  216.700 ,	  285.899 ,	  -25.368 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p139[0] =  widf / 2.768;
 p139[1] = len / 1.573 ;
pos139 = `P[139]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p139[0]} mm,	Y = ${p139[1]} mm,	Z = ${p139[2]} mm,
		W = ${p139[3]} deg,	P = ${p139[4]} deg,	R = ${p139[5]} deg
};`;


 // P140 
 let p140 = [  216.700 ,	  285.899 ,	  150.001 , 	  -177.763 ,	  -46.883 ,	  -113.816 ] ; 
 p140[0] =  widf / 2.768 ;
 p140[1] = len / 1.573 ;
pos140 = `P[140]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p140[0]} mm,	Y = ${p140[1]} mm,	Z = ${p140[2]} mm,
		W = ${p140[3]} deg,	P = ${p140[4]} deg,	R = ${p140[5]} deg
};`;


// INCLINED WELD 1 :  

pos141 = `P[141]{
 GP1:
	UF : 1, UT : 1,
	J1 = 070.747 deg,	J2 = 054.683 deg,	J3 = -006.823 deg,
	J4 = -013.104 deg,	J5 = -079.311 deg,	J6 = -105.544 deg
};`;


 // P142 
 let p142 = [  563.744 ,	  166.444 ,	  150.001 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p142[0] =  widf - 36.256 ;
 p142[1] = len / 2.703 ;

pos142 = `P[142]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p142[0]} mm,	Y = ${p142[1]} mm,	Z = ${p142[2]} mm,
		W = ${p142[3]} deg,	P = ${p142[4]} deg,	R = ${p142[5]} deg
};`;


 // P143 
 let p143 = [  563.744 ,	  166.444 ,	  -22.522 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p143[0] =  widf - 36.256;
 p143[1] = len / 2.703 ;
pos143 = `P[143]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p143[0]} mm,	Y = ${p143[1]} mm,	Z = ${p143[2]} mm,
		W = ${p143[3]} deg,	P = ${p143[4]} deg,	R = ${p143[5]} deg
};`;



 // P144 
 let p144 = [  591.446 ,	  202.155 ,	  -43.907 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p144[0] =  widf - 8.3;
 p144[1] = len / 2.237 ;
pos144 = `P[144]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p144[0]} mm,	Y = ${p144[1]} mm,	Z = ${p144[2]} mm,
		W = ${p144[3]} deg,	P = ${p144[4]} deg,	R = ${p144[5]} deg
};`;


 // P145 
 let p145 = [  592.000 ,	  202.870 ,	  -44.334 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p145[0] =  widf - 8.3;
 p145[1] = len / 2.218 ;
pos145 = `P[145]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p145[0]} mm,	Y = ${p145[1]} mm,	Z = ${p145[2]} mm,
		W = ${p145[3]} deg,	P = ${p145[4]} deg,	R = ${p145[5]} deg
};`;


 // P146 
 let p146 = [  592.000 ,	  200.307 ,	  -55.615 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p146[0] =  widf - 8.3;
 p146[1] = len / 2.246 ;
pos146 = `P[146]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p146[0]} mm,	Y = ${p146[1]} mm,	Z = ${p146[2]} mm,
		W = ${p146[3]} deg,	P = ${p146[4]} deg,	R = ${p146[5]} deg
};`;


 // P147 
 let p147 = [  591.446 ,	  199.592 ,	  -55.187 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p147[0] =  widf - 8.3;
 p147[1] = len / 2.254 ;
pos147 = `P[147]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p147[0]} mm,	Y = ${p147[1]} mm,	Z = ${p147[2]} mm,
		W = ${p147[3]} deg,	P = ${p147[4]} deg,	R = ${p147[5]} deg
};`;


 // P148 
 let p148 = [  563.744 ,	  163.881 ,	  -33.803 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p148[0] =  widf - 36.256;
 p148[1] = len / 2.745 ;
pos148 = `P[148]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p148[0]} mm,	Y = ${p148[1]} mm,	Z = ${p148[2]} mm,
		W = ${p148[3]} deg,	P = ${p148[4]} deg,	R = ${p148[5]} deg
};`;



 // P149 
 let p149 = [  563.744 ,	  163.881 ,	  150.001 , 	  177.029 ,	  -64.643 ,	  55.486 ] ; 
 p149[0] =  widf - 36.256 ;
 p149[1] = len / 2.745 ;
pos149 = `P[149]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p149[0]} mm,	Y = ${p149[1]} mm,	Z = ${p149[2]} mm,
		W = ${p149[3]} deg,	P = ${p149[4]} deg,	R = ${p149[5]} deg
};`;


// INCLINED WELD 2 :  


pos150 = `P[150]{
	GP1:
	   UF : 1, UT : 1,
	   J1 = 081.212 deg,	J2 = 048.268 deg,	J3 = -012.058 deg,
	   J4 = 010.198 deg,	J5 = -068.223 deg,	J6 = 133.285 deg
   };`;



 // P151 
 let p151 = [  563.744 ,	  283.683 ,	  150.001 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p151[0] =  widf - 36.256;
 p151[1] = len / 1.586 ;
pos151 = `P[151]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p151[0]} mm,	Y = ${p151[1]} mm,	Z = ${p151[2]} mm,
		W = ${p151[3]} deg,	P = ${p151[4]} deg,	R = ${p151[5]} deg
};`;


 // P152 
 let p152 = [  563.744 ,	  283.683 ,	  -22.522 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p152[0] =  widf - 36.256;
 p152[1] = len / 1.586 ;
pos152 = `P[152]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p152[0]} mm,	Y = ${p152[1]} mm,	Z = ${p152[2]} mm,
		W = ${p152[3]} deg,	P = ${p152[4]} deg,	R = ${p152[5]} deg
};`;


 // P153 
 let p153 = [  591.446 ,	  247.971 ,	  -43.907 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p153[0] =  widf - 8.3;
 p153[1] = len / 1.814 ;
pos153 = `P[153]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p153[0]} mm,	Y = ${p153[1]} mm,	Z = ${p153[2]} mm,
		W = ${p153[3]} deg,	P = ${p153[4]} deg,	R = ${p153[5]} deg
};`;


 // P154 
 let p154 = [  592.000 ,	  247.257 ,	  -44.334 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p154[0] =  widf - 8.3;
 p154[1] = len / 1.819 ;

pos154 = `P[154]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p154[0]} mm,	Y = ${p154[1]} mm,	Z = ${p154[2]} mm,
		W = ${p154[3]} deg,	P = ${p154[4]} deg,	R = ${p154[5]} deg
};`;


 // P155 
 let p155 = [  592.000 ,	  249.820 ,	  -55.615 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p155[0] =  widf - 8.3;
 p155[1] = len / 1.801 ;
pos155 = `P[155]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p155[0]} mm,	Y = ${p155[1]} mm,	Z = ${p155[2]} mm,
		W = ${p155[3]} deg,	P = ${p155[4]} deg,	R = ${p155[5]} deg
};`;



 // P156 
 let p156 = [  591.446 ,	  250.534 ,	  -55.187 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p156[0] =  widf - 8.3;
 p156[1] = len / 1.796 ;
 
pos156 = `P[156]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p156[0]} mm,	Y = ${p156[1]} mm,	Z = ${p156[2]} mm,
		W = ${p156[3]} deg,	P = ${p156[4]} deg,	R = ${p156[5]} deg
};`;


 // P157 
 let p157 = [  563.744 ,	  286.246 ,	  -33.803 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p157[0] =  widf - 36.256;
 p157[1] = len / 1.572 ;
pos157 = `P[157]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p157[0]} mm,	Y = ${p157[1]} mm,	Z = ${p157[2]} mm,
		W = ${p157[3]} deg,	P = ${p157[4]} deg,	R = ${p157[5]} deg
};`;

 // P158 
 let p158 = [  563.744 ,	  286.246 ,	  150.001 , 	  -176.590 ,	  -64.631 ,	  -55.973 ] ; 
 p158[0] =  widf - 36.256;
 p158[1] = len / 1.572 ;
pos158 = `P[158]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p158[0]} mm,	Y = ${p158[1]} mm,	Z = ${p158[2]} mm,
		W = ${p158[3]} deg,	P = ${p158[4]} deg,	R = ${p158[5]} deg
};`;


// INCLINED WELD 3 :  


pos159 = `P[159]{
 GP1:
	UF : 1, UT : 1,
	J1 = 077.993 deg,	J2 = 017.910 deg,	J3 = -028.501 deg,
	J4 = 015.226 deg,	J5 = -069.281 deg,	J6 = 057.627 deg
};`;


 // P160 
 let p160 = [  36.256 ,	  283.683 ,	  150.001 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p160[1] = len / 1.586 ;
pos160 = `P[160]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p160[0]} mm,	Y = ${p160[1]} mm,	Z = ${p160[2]} mm,
		W = ${p160[3]} deg,	P = ${p160[4]} deg,	R = ${p160[5]} deg
};`;



 // P161 
 let p161 = [  36.256 ,	  283.683 ,	  -22.522 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p161[1] = len / 1.586 ;
pos161 = `P[161]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p161[0]} mm,	Y = ${p161[1]} mm,	Z = ${p161[2]} mm,
		W = ${p161[3]} deg,	P = ${p161[4]} deg,	R = ${p161[5]} deg
};`;



 // P162 
 let p162 = [  8.554 ,	  247.971 ,	  -43.907 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p162[1] = len / 1.814 ;;
pos162 = `P[162]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p162[0]} mm,	Y = ${p162[1]} mm,	Z = ${p162[2]} mm,
		W = ${p162[3]} deg,	P = ${p162[4]} deg,	R = ${p162[5]} deg
};`;


 // P163 
 let p163 = [  8.554 ,	  247.257 ,	  -44.334 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p163[1] = len / 1.819 ;;
pos163 = `P[163]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p163[0]} mm,	Y = ${p163[1]} mm,	Z = ${p163[2]} mm,
		W = ${p163[3]} deg,	P = ${p163[4]} deg,	R = ${p163[5]} deg
};`;



 // P164 
 let p164 = [  8.554 ,	  249.820 ,	  -55.615 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p164[1] = len / 1.801 ;;
pos164 = `P[164]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p164[0]} mm,	Y = ${p164[1]} mm,	Z = ${p164[2]} mm,
		W = ${p164[3]} deg,	P = ${p164[4]} deg,	R = ${p164[5]} deg
};`;


 // P165 
 let p165 = [  8.554 ,	  250.534 ,	  -55.187 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p165[1] = len / 1.796 ;
pos165 = `P[165]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p165[0]} mm,	Y = ${p165[1]} mm,	Z = ${p165[2]} mm,
		W = ${p165[3]} deg,	P = ${p165[4]} deg,	R = ${p165[5]} deg
};`;


 // P166 
 let p166 = [  36.256 ,	  286.246 ,	  -33.803 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p166[1] = len / 1.572 ;
pos166 = `P[166]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p166[0]} mm,	Y = ${p166[1]} mm,	Z = ${p166[2]} mm,
		W = ${p166[3]} deg,	P = ${p166[4]} deg,	R = ${p166[5]} deg
};`;



 // P167 
 let p167 = [  36.256 ,	  286.246 ,	  150.001 , 	  -177.086 ,	  -64.644 ,	  -131.025 ] ; 
 p167[1] = len / 1.572 ;
pos167 = `P[167]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p167[0]} mm,	Y = ${p167[1]} mm,	Z = ${p167[2]} mm,
		W = ${p167[3]} deg,	P = ${p167[4]} deg,	R = ${p167[5]} deg
};`;



// INCLINED WELD 4 :  



pos168 = `P[168]{
	GP1:
	   UF : 1, UT : 1,
	   J1 = 063.126 deg,	J2 = 024.120 deg,	J3 = -025.998 deg,
	   J4 = -006.487 deg,	J5 = -078.369 deg,	J6 = -022.162 deg
   };`;


 // P169 
 let p169 = [  36.256 ,	  166.444 ,	  150.001 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p169[1] = len / 2.703 ;
pos169 = `P[169]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p169[0]} mm,	Y = ${p169[1]} mm,	Z = ${p169[2]} mm,
		W = ${p169[3]} deg,	P = ${p169[4]} deg,	R = ${p169[5]} deg
};`;


 // P170 
 let p170 = [  36.256 ,	  166.444 ,	  -22.522 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p170[1] = len / 2.703 ;
pos170 = `P[170]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p170[0]} mm,	Y = ${p170[1]} mm,	Z = ${p170[2]} mm,
		W = ${p170[3]} deg,	P = ${p170[4]} deg,	R = ${p170[5]} deg
};`;



 // P171 
 let p171 = [  8.554 ,	  202.155 ,	  -43.907 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p171[1] = len / 2.237 ;
pos171 = `P[171]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p171[0]} mm,	Y = ${p171[1]} mm,	Z = ${p171[2]} mm,
		W = ${p171[3]} deg,	P = ${p171[4]} deg,	R = ${p171[5]} deg
};`;


 // P172 
 let p172 = [   8.554 ,	  202.870 ,	  -44.334 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p172[1] = len / 2.218 ;
pos172 = `P[172]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p172[0]} mm,	Y = ${p172[1]} mm,	Z = ${p172[2]} mm,
		W = ${p172[3]} deg,	P = ${p172[4]} deg,	R = ${p172[5]} deg
};`;



 // P173 
 let p173 = [   8.554 ,	  200.307 ,	  -55.615 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p173[1] = len / 2.246 ;
pos173 = `P[173]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p173[0]} mm,	Y = ${p173[1]} mm,	Z = ${p173[2]} mm,
		W = ${p173[3]} deg,	P = ${p173[4]} deg,	R = ${p173[5]} deg
};`;



 // P174 
 let p174 = [  8.554 ,	  199.592 ,	  -55.187 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p174[1] = len / 2.254 ;
pos174 = `P[174]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p174[0]} mm,	Y = ${p174[1]} mm,	Z = ${p174[2]} mm,
		W = ${p174[3]} deg,	P = ${p174[4]} deg,	R = ${p174[5]} deg
};`;



 // P175 
 let p175 = [  36.256 ,	  163.881 ,	  -33.803 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p175[1] = len / 2.745 ;
pos175 = `P[175]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p175[0]} mm,	Y = ${p175[1]} mm,	Z = ${p175[2]} mm,
		W = ${p175[3]} deg,	P = ${p175[4]} deg,	R = ${p175[5]} deg
};`;


 // P176 
 let p176 = [  36.256 ,	  163.881 ,	  150.001 , 	  176.641 ,	  -64.633 ,	  131.517 ] ; 
 p176[1] = len / 2.745 ;
pos176 = `P[176]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p176[0]} mm,	Y = ${p176[1]} mm,	Z = ${p176[2]} mm,
		W = ${p176[3]} deg,	P = ${p176[4]} deg,	R = ${p176[5]} deg
};`;


// UPWELD 1 : 


pos177= `P[177]{
 GP1:
	UF : 1, UT : 1,
	J1 = 083.237 deg,	J2 = 044.682 deg,	J3 = -018.880 deg,
	J4 = 026.602 deg,	J5 = -059.510 deg,	J6 = -138.333 deg
};`;



 // P178 
 let p178 = [  557.167 ,	  193.364 ,	  150.001 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p178[0] =  widf - 42.833;
 p178[1] = len / 2.327 ;
pos178 = `P[178]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p178[0]} mm,	Y = ${p178[1]} mm,	Z = ${p178[2]} mm,
		W = ${p178[3]} deg,	P = ${p178[4]} deg,	R = ${p178[5]} deg
};`;



 // P179 
 let p179 = [  557.167 ,	  193.364 ,	  -3.359 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p179[0] =  widf - 42.833 ;
 p179[1] = len / 2.327 ;
pos179 = `P[179]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p179[0]} mm,	Y = ${p179[1]} mm,	Z = ${p179[2]} mm,
		W = ${p179[3]} deg,	P = ${p179[4]} deg,	R = ${p179[5]} deg
};`;


 // P180 
 let p180 = [  591.317 ,	  206.304 ,	  -37.509 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p180[0] =  widf - 8.683;
 p180[1] = len / 2.181 ;
pos180 = `P[180]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p180[0]} mm,	Y = ${p180[1]} mm,	Z = ${p180[2]} mm,
		W = ${p180[3]} deg,	P = ${p180[4]} deg,	R = ${p180[5]} deg
};`;


 // P181 
 let p181 = [  592.000 ,	  206.563 ,	  -38.192 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p181[0] =  widf - 8.683;
 p181[1] = len / 2.178 ;
pos181 = `P[181]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p181[0]} mm,	Y = ${p181[1]} mm,	Z = ${p181[2]} mm,
		W = ${p181[3]} deg,	P = ${p181[4]} deg,	R = ${p181[5]} deg
};`;



 // P182 
 let p182 = [  592.000 ,	  243.563 ,	  -38.192 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p182[0] =  widf - 8.683;
 p182[1] = len / 1.847 ;
pos182 = `P[182]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p182[0]} mm,	Y = ${p182[1]} mm,	Z = ${p182[2]} mm,
		W = ${p182[3]} deg,	P = ${p182[4]} deg,	R = ${p182[5]} deg
};`;



 // P183 
 let p183 = [  591.317 ,	  243.304 ,	  -37.509 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p183[0] =  widf - 8.683;
 p183[1] = len / 1.849 ;
pos183 = `P[183]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p183[0]} mm,	Y = ${p183[1]} mm,	Z = ${p183[2]} mm,
		W = ${p183[3]} deg,	P = ${p183[4]} deg,	R = ${p183[5]} deg
};`;



 // P184 
 let p184 = [  557.167 ,	  230.364 ,	  -3.359 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p184[0] =  widf - 42.833;
 p184[1] = len / 1.953 ;
pos184 = `P[184]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p184[0]} mm,	Y = ${p184[1]} mm,	Z = ${p184[2]} mm,
		W = ${p184[3]} deg,	P = ${p184[4]} deg,	R = ${p184[5]} deg
};`;



 // P185 
 let p185 = [  557.167 ,	  230.364 ,	  150.001 , 	  147.510 ,	  -35.928 ,	  68.097 ] ; 
 p185[0] =  widf - 42.833;
 p185[1] = len / 1.953 ;
pos185 = `P[185]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p185[0]} mm,	Y = ${p185[1]} mm,	Z = ${p185[2]} mm,
		W = ${p185[3]} deg,	P = ${p185[4]} deg,	R = ${p185[5]} deg
};`;


// UPWELD 2 :

pos186 = `P[186]{
 GP1:
	UF : 1, UT : 1,
	J1 = 069.267 deg,	J2 = 011.745 deg,	J3 = -023.514 deg,
	J4 = -001.034 deg,	J5 = -065.425 deg,	J6 = 041.877 deg
};`;


 // P187 
 let p187 = [  42.833 ,	  256.763 ,	  220.001 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p187[1] = len / 1.752 ;
pos187 = `P[187]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p187[0]} mm,	Y = ${p187[1]} mm,	Z = ${p187[2]} mm,
		W = ${p187[3]} deg,	P = ${p187[4]} deg,	R = ${p187[5]} deg
};`;


 // P188 
 let p188 = [  42.833 ,	  256.763 ,	  -3.359 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p188[1] = len / 1.752 ;
pos188 = `P[188]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p188[0]} mm,	Y = ${p188[1]} mm,	Z = ${p188[2]} mm,
		W = ${p188[3]} deg,	P = ${p188[4]} deg,	R = ${p188[5]} deg
};`;



 // P189 
 let p189 = [  8.683 ,	  243.822 ,	  -37.509 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p189[1] = len / 1.845 ;
pos189 = `P[189]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p189[0]} mm,	Y = ${p189[1]} mm,	Z = ${p189[2]} mm,
		W = ${p189[3]} deg,	P = ${p189[4]} deg,	R = ${p189[5]} deg
};`;


 // P190 
 let p190 = [  8.683 ,	  243.563 ,	  -38.192 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p189[1] = len / 1.847 ;
pos190 = `P[190]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p190[0]} mm,	Y = ${p190[1]} mm,	Z = ${p190[2]} mm,
		W = ${p190[3]} deg,	P = ${p190[4]} deg,	R = ${p190[5]} deg
};`;



 // P191 
 let p191 = [  8.683 ,	  206.563 ,	  -38.192 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p191[1] = len / 2.178 ;
pos191 = `P[191]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p191[0]} mm,	Y = ${p191[1]} mm,	Z = ${p191[2]} mm,
		W = ${p191[3]} deg,	P = ${p191[4]} deg,	R = ${p191[5]} deg
};`;


 // P192 
 let p192 = [  8.683 ,	  206.822 ,	  -37.509 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p192[1] = len / 2.175 ;
pos192 = `P[192]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p192[0]} mm,	Y = ${p192[1]} mm,	Z = ${p192[2]} mm,
		W = ${p192[3]} deg,	P = ${p192[4]} deg,	R = ${p192[5]} deg
};`;



 // P193 
 let p193 = [  42.833 ,	  219.763 ,	  -3.359 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p193[1] = len / 2.047 ;
pos193 = `P[193]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p193[0]} mm,	Y = ${p193[1]} mm,	Z = ${p193[2]} mm,
		W = ${p193[3]} deg,	P = ${p193[4]} deg,	R = ${p193[5]} deg
};`;


 // P194 
 let p194 = [  42.833 ,	  219.763 ,	  220.001 , 	  -179.341 ,	  -46.917 ,	  -160.149 ] ; 
 p193[1] = len / 2.047 ;
pos194 = `P[194]{ 
GP1:
		UF : ${uf}, UT : ${ut}, CONFIG : 'N U T, 0, 0, 0',
		X = ${p194[0]} mm,	Y = ${p194[1]} mm,	Z = ${p194[2]} mm,
		W = ${p194[3]} deg,	P = ${p194[4]} deg,	R = ${p194[5]} deg
};`;


// HOME POSITION :  

pos195 = `P[195]{
 GP1:
	UF : 1, UT : 1,
	J1 = 000.000 deg,	J2 = -045.000 deg,	J3 = 000.000 deg,
	J4 = 000.000 deg,	J5 = -090.000 deg,	J6 = 000.000 deg
};
/END`;



    lss = ls + "\n" + pos11 + "\n" + pos12 + "\n" + pos13  + "\n" + pos14  + "\n" + pos15  + "\n" + pos16  + "\n" + pos17  + "\n" + pos18+ "\n" + pos19 + "\n" + pos20 + "\n" + pos21 + "\n" + pos22 + "\n" + pos23 + "\n" + pos24 + "\n" + pos25 + "\n" + pos26 + "\n" + pos27 + "\n" + pos28 + "\n" + pos29 + "\n" + pos30 + "\n" + pos31 + "\n" + pos32 + "\n" + pos33 + "\n" + pos34 + "\n" + pos35 + "\n" + pos36 + "\n" + pos37 + "\n" + pos38 + "\n" + pos39 + "\n" + pos40 + "\n" + pos41 + "\n" + pos42 + "\n" + pos43 + "\n" + pos44 + "\n" + pos45 + "\n" + pos46 + "\n" + pos47 + "\n" + pos48 + "\n" + pos49 + "\n" + pos50 + "\n" + pos51 + "\n" + pos52 + "\n" + pos53  + "\n" +pos54 + "\n" +pos55 +"\n"  +pos56 +"\n"  +pos57 + "\n" +pos58 + "\n" +pos59 +"\n" +pos60 +"\n" +pos61 +"\n" +pos62 + "\n"+pos63 + "\n"+pos64 +"\n" +pos65 +"\n" +pos66 +"\n" +pos67 +"\n" +pos68 +"\n" +pos69 +"\n" +pos70 +"\n" +pos71 +"\n" +pos72 + "\n"+pos73 +"\n" +pos74 +"\n" +pos75 +"\n" +pos76 + "\n"+pos77 +"\n" +pos78 + "\n"+pos79 +"\n" +pos80 +"\n" +pos81 + "\n"+pos82 +"\n" +pos83 +"\n" +pos84 + "\n"+pos85 + "\n"+pos86 + "\n"+pos87 +"\n" +pos88 + "\n"+pos89 + "\n"+pos90 + "\n"+pos91 +"\n" +pos92 + "\n"+pos93 + "\n"+pos94 + "\n"+pos95 +"\n" +pos96 + "\n"+pos97 +"\n" +pos98 +"\n" +pos99 +"\n" +pos100 + "\n"+pos101 + "\n"+pos102 + "\n"+pos103 + "\n"+pos104 +"\n" +pos105 +"\n" +pos106 + "\n"+pos107 +"\n" +pos108 + "\n"+pos109 + "\n"+pos110 + "\n"+pos111 +"\n" +pos112 + "\n"+pos113 +"\n" +pos114 +"\n" +pos115 +"\n" +pos116 + "\n"+pos117 +"\n" +pos118 +"\n" +pos119 + "\n"+pos120 + "\n"+pos121 + "\n"+pos122 + "\n"+pos123 +"\n" +pos124 + "\n"+pos125 + "\n" +pos126 + "\n"+pos127 +"\n" +pos128 +"\n" +pos129 + "\n"+pos130 + "\n"+pos131 + "\n"+pos132 + "\n"+pos133 +"\n" +pos134 +"\n" +pos135 + "\n"+pos136 +"\n"+pos137 +"\n" +pos138 +"\n" +pos139 +"\n" +pos140 +"\n" +pos141 + "\n"+pos142 +"\n" +pos143 + "\n"+pos144 +"\n" +pos145 + "\n" +pos146 +"\n" +pos147 + "\n"+pos148 + "\n" +pos149 + "\n"+pos150 +"\n" +pos151 + "\n"+pos152 + "\n"+pos153 + "\n"+pos154 + "\n"+pos155 + "\n"+pos156 + "\n"+pos157 + "\n"+pos158 + "\n"+pos159 +"\n" +pos160 + "\n"+pos161 + "\n"+pos162 + "\n"+pos163 + "\n"+pos164 + "\n"+pos165 +"\n" +pos166 +"\n" +pos167 + "\n"+pos168 + "\n" +pos169 +"\n" +pos170 +"\n" +pos171 +"\n" +pos172 +"\n" +pos173 + "\n"+pos174 + "\n"+pos175 + "\n"+pos176 +"\n" +pos177 +"\n" +pos178 +"\n" +pos179 + "\n"+pos180 +"\n" +pos181 + "\n"+pos182 + "\n" + pos183 +"\n" +pos184 +"\n" +pos185 + "\n"+ pos186 ;
	lss2 = "\n" + pos187 +"\n" +pos188 + "\n"+pos189 + "\n"+pos190 +"\n" +pos191 +"\n" +pos192 +"\n" +pos193 + "\n"+ pos194 +"\n" + pos195 ;
}



function downloadTxtFile() {

	widthf ();
	lssk ();
    Postion ();
	
    
    // Get the user input from the textarea
    
    const userInputt = lss + lss2;
	let end = "/END" ;
    let usertwo = document.getElementById("width").value;
    
    
    userInput = userInputt + "\n" + end  ;
    // Create a Blob with the user input
    const blob = new Blob([userInput], { type: 'text/plain' });

    // Create a link element
    const link = document.createElement('a');

    // Set the download attribute with a filename
    link.download = `${pname}.ls`;

    // Create a URL for the Blob and set it as the href attribute
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

