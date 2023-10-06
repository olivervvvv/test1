let wet=[];

fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-D843B008-810B-42F2-AE7B-5943A6DFF424")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(data);
//     wet=data;
    
// })
.then(response=>response.json())
.then(data=>{
    console.log(data);
    wet=data;
})
.catch(error=>{
    console.log(error);
})

//===============================================================主要區域===============================================================

function main() {

    const selectloc= document.getElementById("selectloc");
    const numberlabel= document.getElementById("umberlabel");
    numberlabel.textContent="";
    
    for (let i = 0; i <=21; i++) {
            if (selectloc.value==wet.records.location[i].locationName) {
                console.log("for迴圈找到地點了")
                numberlabel.textContent=numberlabel.textContent+wet.records.location[i].locationName+"  ,  " ;
                numberlabel.textContent=numberlabel.textContent+"從  "+wet.records.location[i].weatherElement[3].time[2].startTime+"開始"+" , ";
                numberlabel.textContent=numberlabel.textContent+"到  "+wet.records.location[i].weatherElement[3].time[2].endTime+"結束"+" , "
                numberlabel.textContent=numberlabel.textContent+wet.records.location[i].weatherElement[0].time[2].parameter.parameterName+" , "
                numberlabel.textContent=numberlabel.textContent+"最低溫  "+wet.records.location[i].weatherElement[2].time[2].parameter.parameterName+"℃"+" , ";
                numberlabel.textContent=numberlabel.textContent+"最高溫  "+wet.records.location[i].weatherElement[4].time[2].parameter.parameterName+"℃"+" , ";
                numberlabel.textContent=numberlabel.textContent+"降雨機率"+wet.records.location[i].weatherElement[1].time[2].parameter.parameterName+"%"+" , ";
                numberlabel.textContent=numberlabel.textContent+wet.records.location[i].weatherElement[3].time[2].parameter.parameterName;
            }
        }
    }
//================================================當下拉式選單的值改變時觸發================================================
document.getElementById("selectloc").addEventListener("change", function() {
    main()
});
//================================================當下拉式選單的值改變時觸發================================================

//===============================================================主要區域===============================================================


//================================================測試區================================================
function test() {
    const selectloc= document.getElementById("selectloc");
    const numberlabel= document.getElementById("umberlabel");
    const testbtn= document.getElementById("testbtn");
console.log(wet.records.location[0].locationName);
console.log(wet.records.location[0].weatherElement[0].time[2].parameter.parameterName);
console.log("最低溫"+wet.records.location[0].weatherElement[2].time[2].parameter.parameterName+"℃");
console.log("最高溫"+wet.records.location[0].weatherElement[4].time[2].parameter.parameterName+"℃");
for (let i = 0; i <=21; i++) {
    //console.log(wet.records.location[i].locationName)
    if (selectloc.value==wet.records.location[i].locationName) {
        
        console.log("xxxxxx")
        numberlabel.textContent=numberlabel.textContent+wet.records.location[i].locationName;
        numberlabel.textContent=numberlabel.textContent+wet.records.location[i].weatherElement[0].time[2].parameter.parameterName;
        numberlabel.textContent=numberlabel.textContent+"最低溫"+wet.records.location[i].weatherElement[2].time[2].parameter.parameterName+"℃";
        numberlabel.textContent=numberlabel.textContent+"最高溫"+wet.records.location[i].weatherElement[4].time[2].parameter.parameterName+"℃";
        numberlabel.textContent=numberlabel.textContent+"降雨機率"+wet.records.location[i].weatherElement[1].time[2].parameter.parameterName+"%";
    }
}
}
//================================================測試區================================================



//================================================測試按鈕================================================
document.getElementById("testbtn").addEventListener('click', function() {
    test()
});
//================================================測試按鈕================================================
