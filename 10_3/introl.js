const dropdown = document.getElementById('dropdown');
const displaytext = document.getElementById('displaytext');
const apiUrl = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-EE814AF5-1872-4547-9812-56205EFF3126';

var wet;
function test(){
    console.log(wet);
}
test();

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // 迭代 API 返回的数据中的地点信息
    wet=data;
    console.log(data)
    data.records.location.forEach(location => {
      const option = document.createElement('option');
      const locationName = location.locationName; // 获取地点名称
      option.value = locationName; // 选项的值
      option.text = locationName;   // 选项的显示文本
      dropdown.appendChild(option);
    });
  })
.catch(error => console.error('API 請求失敗：', error));

// 添加事件监听器，当用户选择不同的选项时触发
dropdown.addEventListener('change', function(event) {
  const selectedOptionValue = event.target.value; // 获取用户选择的选项值

  // 使用API数据进行比对，假设API返回的数据在变量 wet 中
  const matchingLocation = wet.records.location.find(location => location.locationName === selectedOptionValue);

  if (matchingLocation) {
    // 找到匹配的数据，将其显示在屏幕上
    displaytext.textContent = `${matchingLocation.locationName}`;
  } else {
    // 没有找到匹配的数据，显示错误消息或执行其他操作
    displaytext.textContent = '未找到匹配的数据';
  }
});

