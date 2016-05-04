var main = function() {
  var availableCities = [
      "Newcastle upon Tyne", "Norwich", "Nottingham", "Oxford", "Peterborough", "Plymouth", 
        "Preston", "Ripon", "Salford", "Salisbury", "Sheffield", "Southampton", "St Albans",
        "Stoke-on-Trent", "Sunderland", "Truro", "Wakefield", "Wells", "City of Westminister", 
        "Wolverhampton", "Worcester", "York"
    ];
  cities.sort();
    $( "#citySearchBox" ).autocomplete({
      source: availableCities
    });
}
 
$(document).ready(main);