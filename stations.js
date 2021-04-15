const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(sta) {
  let goodStations = [];
  for(let i = 0 ; i < sta.length; i++) {
    if(sta[i][1] > 19 && (sta[i][2] == "school" || sta[i][2] == "community centre")){
      goodStations.push(sta[i][0]);
    }
  }
  return goodStations;
}


console.log(chooseStations(stations));