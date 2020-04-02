const counters = document.querySelectorAll('.counter');
const speed = 80; // The lower the slower
// const api_url = "https://pythondb-bfd79.firebaseio.com/"

var i = 0;
var test;
var something = 0;
text_list = ["'Mild'", "'Serious'", "'Recovered'", "'Deaths'", "'Active'", "'Closed'", "'Total'"];
var element_List = ["'cas'", "'ded'", "'rec'", "'mild'", "'srs'", "'act'", "'clo'"];

var firebaseConfig = { 
	apiKey: "AIzaSyAaYscy0rKtegr8YXF5Yg55CxBWV3fhukM",
    authDomain: "pythondb-bfd79.firebaseapp.com",
    databaseURL: "https://pythondb-bfd79.firebaseio.com",
    projectId: "pythondb-bfd79",
    storageBucket: "pythondb-bfd79.appspot.com",
    messagingSenderId: "1062085483064",
    appId: "1:1062085483064:web:73beca85cbdc18b9c564cd",
    measurementId: "G-8895CT8MHZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function goldenRetriever(){
	

	var database = firebase.database();

	var starCountRef = firebase.database().ref('/' + text_list[i]);
	starCountRef.on('value', function(snapshot) {
	updateStarCount(postElement, snapshot.val());
	});

	var updateStarCount = function(element, value) {
		something = value;
		element.textContent = value.toLocaleString();
		// console.log(value)
		// console.log(element_List[i]);
		return something;
	};

	console.log(element_List[i]);
	var postElement = document.getElementById('cas');



}

window.onload = function Start(){
	for (i = 0; i < text_list.length; i++) {

		test = element_List[0];

		// console.log(test);

		// more statements
		goldenRetriever();
	}
}

console.log("something:", something)


chartFunction();


// function myTimer() {
// 	getData();
// 	if( flag == 1){
// 		chartFunction();
	
// 	}

// } 


function chartFunction(){
// Bar Graph
	// console.log(something)

	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: ['Mild Conditions', 'Critical Conditions', 'Recovered/Discharged', 'Deaths'],
			datasets: [{
				label: '# of Votes',
				data: [1, 1, 1, 1],
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
