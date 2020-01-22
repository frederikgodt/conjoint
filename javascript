<script>

// Start of JavaScript



// Define the Dimensions
var attRaw = ["Academic achievement (grades)", "Parental satisfaction",

"Social wellbeing","Distribution of grades","Equity","Fairness", "Teachers in the school are warm individuals", "Teachers in the scholl genuinely care about students"];

var att = ["Academic achievement (grades)", "Parental satisfaction",

"Social wellbeing","Distribution of grades","Equity","Fairness", "Teachers in the school are warm individuals", "Teachers in the scholl genuinely care about students"];

var attributes = ["","","","","","","",""];



// Randomize the Order of Dimensions (avoid recency and primacy)

for (i=0; i<attRaw.length;i++ ){

var rand1 = Math.floor(Math.random()*((attRaw.length-i)-0));

attributes[i] = att[rand1];

att.splice(rand1,1);}



// Create Variables for Traits associated with each dimension

var achievement_raw = ["Top 5% in the country","Average in the country","Bottom 5% in the country"];

var satisfaction_raw = ["69% of parents are satisfied","82% of parents are satisfied","95% of parents are satisfied"];

var wellbeing_raw = ["Students never harass, bully, or initimidate other students","Students rarely harass, bully, or initimidate other students","Students sometimes harass, bully, or initimidate other students"];

var dgrades_raw = ["Almost equal grades regardless of socio-economic status","Somewhat worse grades for students with low socio-economic status","Significantly worse for students with low socio-economic status"];

var equity_raw = ["Teachers almost always treat students from different cultures or backgrounds equally","Teachers most of the time treat students from different cultures or backgrounds equally","Teachers sometimes treat students from different cultures or backgrounds equally"];


var fairness_raw = ["Teachers treat students fairly almost always"," Teachers treat students fairly most of the time","Teachers treat students unfair sometimes"];


var warmth_raw = ["Strongly agree","Somewhat agree","Somewhat disagree"];
var benevolence_raw = ["Strongly agree","Somewhat agree","Somewhat disagree"];



//Use math.random to randomly select traits for each dimension for both candidates

var achievement_a = achievement_raw[Math.floor(Math.random()*achievement_raw.length)];

var satisfaction_a = satisfaction_raw[Math.floor(Math.random()*satisfaction_raw.length)];

var wellbeing_a = wellbeing_raw[Math.floor(Math.random()*wellbeing_raw.length)];

var dgrades_a = dgrades_raw[Math.floor(Math.random()*dgrades_raw.length)];

var equity_a = equity_raw[Math.floor(Math.random()*equity_raw.length)];


var fairness_a = fairness_raw[Math.floor(Math.random()*fairness_raw.length)];


var warmth_a = warmth_raw[Math.floor(Math.random()*warmth_raw.length)];


var benevolence_a = benevolence_raw[Math.floor(Math.random()*benevolence_raw.length)];



var achievement_b = achievement_raw[Math.floor(Math.random()*achievement_raw.length)];

var satisfaction_b = satisfaction_raw[Math.floor(Math.random()*satisfaction_raw.length)];

var wellbeing_b = wellbeing_raw[Math.floor(Math.random()*wellbeing_raw.length)];

var dgrades_b = dgrades_raw[Math.floor(Math.random()*dgrades_raw.length)];

var equity_b = equity_raw[Math.floor(Math.random()*equity_raw.length)];


var fairness_b = fairness_raw[Math.floor(Math.random()*fairness_raw.length)];


var warmth_b = warmth_raw[Math.floor(Math.random()*warmth_raw.length)];


var benevolence_b = benevolence_raw[Math.floor(Math.random()*benevolence_raw.length)];



// Create array for first and second candidate's traits

var att_a_traits = [1,2,3,4,5,6,7,8];

var att_b_traits = [1,2,3,4,5,6,7,8];



// Take indexOf the Dimension variable. This is the order of the Dimension variable

var achievement_index = attributes.indexOf("Academic achievement (grades)");

var satisfaction_index = attributes.indexOf("Parental satisfaction");

var wellbeing_index = attributes.indexOf("Social wellbeing");

var dgrades_index = attributes.indexOf("Distribution of grades");

var equity_index = attributes.indexOf("Equity");

var fairness_index = attributes.indexOf("Fairness");
var warmth_index = attributes.indexOf("Teachers in the school are warm individuals");

var benevolence_index = attributes.indexOf("Teachers in the scholl genuinely care about students");

// Use IndexOf Dimension and replace with appropriate trait for Candidate A

// For instance, if "Gender" is the 3rd element in the Dimension variable, 

//this will place Male/Female as the 3rd element of the first candidate's attributes



att_a_traits[achievement_index] = achievement_a;

att_a_traits[satisfaction_index] = satisfaction_a;

att_a_traits[wellbeing_index] = wellbeing_a;

att_a_traits[dgrades_index] = dgrades_a;

att_a_traits[equity_index] = equity_a;

att_a_traits[fairness_index] = fairness_a;
att_a_traits[warmth_index] = warmth_a;
att_a_traits[benevolence_index] = benevolence_a;



// Do the same for the second candidate

att_b_traits[achievement_index] = achievement_b;

att_b_traits[satisfaction_index] = satisfaction_b;

att_b_traits[wellbeing_index] = wellbeing_b;

att_b_traits[dgrades_index] = dgrades_b;

att_b_traits[equity_index] = equity_b;

att_b_traits[fairness_index] = fairness_b;
att_b_traits[warmth_index] = warmth_b;
att_b_traits[benevolence_index] = benevolence_b;

// Create list of variables in the for loop

att_list = ["att1","att2","att3","att4","att5","att6","att7","att8"];

a_list = ["a1","a2","a3","a4","a5","a6","a7","a8"]; 

b_list = ["b1","b2","b3","b4","b5","b6","b7","b8"]; 



// For elements 1 to 6 in the Dimensions, First Candidate and Second Candidate variables. 

// The first line assigns Dimensions to each "id" tag in the first column of the HTML table

// The second line assigns first candidate traits to each "id" tag in the second 

//column of the HTML table

// The third line assigns second candidate traits to each "id" tag in the third 

//column of the HTML table

for(i=0;i<8;i++){
    
document.getElementById(att_list[i]).innerHTML= attributes[i];
    
document.getElementById(a_list[i]).innerHTML= att_a_traits[i];    
    
document.getElementById(b_list[i]).innerHTML= att_b_traits[i];    }




</script>





