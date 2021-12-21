const mauX = document.getElementById('mauX');
const mauY = document.getElementById('mauY');

function getValueFromInput(inputValue) {
    var a = inputValue.value;
    var arrayValue = [];

    var b = a.split(' ');
    for (var i=0; i <b.length; i++) {
        if (b[i] !== ""){
            arrayValue[i]=parseInt(b[i]);    
        }       
    }
    return arrayValue;
}

function createValue(text, value) {
    var a = document.createElement("div")
    a.style.marginTop = "10px"
    a.innerText = text+" "+value;
    document.getElementById("ket-qua").appendChild(a);
}

function HeSoTuongQuan(){
    a=getValueFromInput(mauX);
    b=getValueFromInput(mauY);
    var aTB = 0;
    var aTB1 = 0;
    var bTB = 0;
    var bTB1 = 0;
    var abTB = 0;
    for (var i = 0; i < a.length; i++) {
        aTB += a[i];
        bTB += b[i];
        aTB1 += a[i]*a[i];
        bTB1 += b[i]*b[i];
        abTB += a[i]*b[i];
    }
    aTB = aTB/a.length;
    bTB = bTB/a.length;
    aTB1 = aTB1/a.length;
    bTB1 = bTB1/a.length;
    abTB = abTB/a.length;


    var S2a = (a.length/(a.length-1))*(aTB1 - aTB*aTB);
    var S2b = (b.length/(b.length-1))*(bTB1 - bTB*bTB);
    var Sab = (a.length/(a.length-1))*(abTB - aTB*bTB)

    createValue('- Giá trị X ngang = ',Math.round(aTB * 1000) / 1000);
    createValue('- Giá trị Y ngang = ',Math.round(bTB * 1000) / 1000);
    createValue("- Giá trị S^2x =",Math.round(S2a * 1000) / 1000);
    createValue("- Giá trị S^2y =",Math.round(S2b * 1000) / 1000);
    createValue("- Giá trị Sxy =",Math.round(Sab * 1000) / 1000);
    createValue("- Giá trị Sx =",Math.round(Math.sqrt(S2a) * 1000) / 1000)
    createValue("- Giá trị Sy =",Math.round(Math.sqrt(S2b) * 1000) / 1000)
    var r = Sab/(Math.sqrt(S2a)*Math.sqrt(S2b))

    createValue("- Hệ Soosd tương quan r = Sxy/Sx.Sy là: ",Math.round(r * 1000) / 1000);

    createValue("- Phương tr…nh đường hồi quy tuyếnn tính mẫu","")
    var k1 = Sab/S2a;
    var k0 = bTB - k1*aTB
    k0 = Math.round(k0 * 1000) / 1000;
    k1 = Math.round(k1 * 1000) / 1000;
    createValue('- Hệ số K0 : ',k0);
    createValue('- Hệ số K1 = Sxy/S^2x: ',k1);
    var text = "y = "+k0+"( x - "+ (Math.round(aTB * 1000) / 1000) + " ) + " + (Math.round(bTB * 1000) / 1000)+"";
    createValue("- Phương trinh đường hồi quy tuyếnn tính mẫu của Y theo X: ","")
    createValue("+ y = k1(x - x') + y'  <=>  ",text)
    var text = "y = "+k0+" + "+ k1 + "x";
    createValue("- Phương trinh đường hồi quy tuyếnn tính mẫu của X theo Y: ","")
    createValue("+ y = k0 + K1x <=> ",text)
}

