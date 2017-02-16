/*var apiData{
	'北京':90,
	'上海':40
}*/

var apiData = {};

function addApiData(){
	var city = document.getElementById('aqi-city-input');
	var index = document.getElementById('aqi-value-input');
	var cityName = city.value;
	var indexNum = index.value;

	apiData[cityName] = indexNum;
}

/*clean input data*/
function cleanInput() {
	var city = document.getElementById('aqi-city-input');
	var index = document.getElementById('aqi-value-input');
	city.value = '';
	index.value = '';
}

function renderApiData() {
	var table = document.getElementById('aqi-table');
	table.innerHTML='<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>';

	for(var city in apiData) {
		var tr = document.createElement('tr');
		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');

		td1.innerHTML = city;
		tr.appendChild(td1);

		td2.innerHTML = apiData[city];
		tr.appendChild(td2);

		var button = document.createElement('button');
		button.id = 'del-btn';
		button.innerHTML="删除";
		td3.appendChild(button);
		tr.appendChild(td3);

		table.appendChild(tr);
	}
}

/*添加按钮的监听*/
function addBtnHanlde(){
	addApiData();
	renderApiData();
	cleanInput();
}


function delBtnHandle(target) {
    var tr = target.parentElement.parentElement;
    var strCity = tr.children[0].innerHTML;
    console.log('cityName = '+ strCity);
    delete apiData[strCity];
    console.log(apiData);
    renderApiData();
}

function init(){

	var btn = document.getElementById('add-btn');
	btn.onclick = addBtnHanlde;

	// 利用JS的DOM事件流原理来进行对所有的btn进行监听
    var table = document.getElementById("aqi-table");
    table.addEventListener("click", function(e) {
    	console.log(e.target.nodeName);
        if (e.target && e.target.nodeName === "BUTTON") {
            delBtnHandle(e.target);
        }
    })
}

init();
