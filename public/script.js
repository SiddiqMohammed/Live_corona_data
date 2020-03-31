const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower
const api_url = "https://corona.lmao.ninja/all"

var myVar = setInterval(myTimer, 1000);

var cases_read = 0;
var deaths_read = 0;
var recovered_read = 0;
var flag = 0;

async function getData(){
	const response = await fetch(api_url)
	const data = await response.json();
	const { cases, deaths, recovered} = data;

	

	document.getElementById('cas').textContent = cases.toLocaleString();
	document.getElementById('ded').textContent = deaths.toLocaleString();
	document.getElementById('rec').textContent = recovered.toLocaleString();


	if(flag < 1){
		flag++;
	}else{
		flag = 6;
	}

	cases_read = cases;
	deaths_read = deaths;
	recovered_read = recovered;
	// console.log(flag)
}

function myTimer() {
	getData();
	if( flag == 1){
		chartFunction();
	
	}

} 





function chartFunction(){
// Bar Graph
	console.log(cases_read)

	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Mild Conditions', 'Critical Conditions', 'Recovered/Discharged', 'Deaths'],
			datasets: [{
				label: '# of Votes',
				data: [1, 1, recovered_read, deaths_read],
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(255, 99, 132, 0.2)',

				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(255, 99, 132, 1)',
	
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
}


// var x = 0;
// var ID_of_element = "";

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		if(x == 0){
// 			ID_of_element = cas;
// 		}
// 		else if(x == 1){
// 			ID_of_element = ded;
// 		}
// 		else{
// 			ID_of_element = rec;
// 		}
// 		const target = +counter.getElementById(ID_of_element);
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = Math.ceil(count + inc);
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 		x++
// 		if(x == 3){
// 			x = 0;
// 		}
// 	};

// 	updateCount();
// });
