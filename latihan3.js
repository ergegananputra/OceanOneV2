document.getElementById("input1").addEventListener("input", updateYearlyConsumption);
document.getElementById("input2").addEventListener("input", updateYearlyConsumption);
document.getElementById("input3").addEventListener("input", updateYearlyConsumption);
document.getElementById("input4").addEventListener("input", updateYearlyConsumption);
document.getElementById("input5").addEventListener("input", updateYearlyConsumption);
document.getElementById("input6").addEventListener("input", updateYearlyConsumption);
document.getElementById("input7").addEventListener("input", updateYearlyConsumption);
document.getElementById("input8").addEventListener("input", updateYearlyConsumption);
document.getElementById("input9").addEventListener("input", updateYearlyConsumption);
document.getElementById("input10").addEventListener("input", updateYearlyConsumption);

function updateYearlyConsumption() {
    var input1 = parseInt(document.getElementById("input1").innerHTML) || 0;
    var input2 = parseInt(document.getElementById("input2").innerHTML) || 0;
    var input3 = parseInt(document.getElementById("input3").innerHTML) || 0;
    var input4 = parseInt(document.getElementById("input4").innerHTML) || 0;
    var input5 = parseInt(document.getElementById("input5").innerHTML) || 0;
    var input6 = parseInt(document.getElementById("input6").innerHTML) || 0;
    var input7 = parseInt(document.getElementById("input7").innerHTML) || 0;
    var input8 = parseInt(document.getElementById("input8").innerHTML) || 0;
    var input9 = parseInt(document.getElementById("input9").innerHTML) || 0;
    var input10 = parseInt(document.getElementById("input10").innerHTML) || 0;

    input1 = input1 >= 0 ? input1 : 0;
    input2 = input2 >= 0 ? input2 : 0;
    input3 = input3 >= 0 ? input3 : 0;
    input4 = input4 >= 0 ? input4 : 0;
    input5 = input5 >= 0 ? input5 : 0;
    input6 = input6 >= 0 ? input6 : 0;
    input7 = input7 >= 0 ? input7 : 0;
    input8 = input8 >= 0 ? input8 : 0;
    input9 = input9 >= 0 ? input9 : 0;
    input10 = input10 >= 0 ? input10 : 0;

    document.getElementById("input1").innerHTML = input1;
    document.getElementById("input2").innerHTML = input2;
    document.getElementById("input3").innerHTML = input3;
    document.getElementById("input4").innerHTML = input4;
    document.getElementById("input5").innerHTML = input5;
    document.getElementById("input6").innerHTML = input6;
    document.getElementById("input7").innerHTML = input7;
    document.getElementById("input8").innerHTML = input8;
    document.getElementById("input9").innerHTML = input9;
    document.getElementById("input10").innerHTML = input10;
    
    var output1 = input1 * 365;
    var output2 = input2 * 365;
    var output3 = input3 * 365;
    var output4 = input4 * 365;
    var output5 = input5 * 365;
    var output6 = input6 * 365;
    var output7 = input7 * 365;
    var output8 = input8 * 365;
    var output9 = input9 * 365;
    var output10 = input10 * 365;
    
    document.getElementById("output1").innerHTML = output1;
    document.getElementById("output2").innerHTML = output2;
    document.getElementById("output3").innerHTML = output3;
    document.getElementById("output4").innerHTML = output4;
    document.getElementById("output5").innerHTML = output5;
    document.getElementById("output6").innerHTML = output6;
    document.getElementById("output7").innerHTML = output7;
    document.getElementById("output8").innerHTML = output8;
    document.getElementById("output9").innerHTML = output9;
    document.getElementById("output10").innerHTML = output10;
    

    document.getElementById("result").innerHTML = output1 + output2 + output3+ output4 + output5 + output6 + output7 + output8 + output9 +output10;
}