function show() {
    var oDiv = document.getElementById('public_header_more');
    if(oDiv.style.display=='block'){
        oDiv.style.display='none';
    }else{
        oDiv.style.display='block';
    }
}
// 选择城市的学校二级联动
var area = [
    ['花溪一中','花溪清华中学','花溪二中','花溪三中'],
    ['云岩一中','贵州师大附中','云岩二中','云岩三中'],
    ['南明一中','南明中学','南明二中','南明三中'],
    ['贵阳一中','观山外教中学','观山二中','观山三中']
]
function oCity(){
    var selectCity = document.getElementById('city');
    var  opt = '';
    if (selectCity.value == -1){
        document.getElementById('school').innerHTML = opt;
        return;
    }
    for (var i=0, length=area[selectCity.value].length;i<length;i++){
         opt = opt+'<option value="'+ i +'">' + area[selectCity.value][i] + '</option>';
        document.getElementById('school').innerHTML = opt;
    }
}