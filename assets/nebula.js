(function($){
    $(document).ready(function(){
	$('#submit').click(function() {
	    $('#text').empty();
	    var drug = $('#drug').val();
	    var symptom = $('#symptom').val();
	    var url;
	    
	    if(drug.length){
		url = 'https://api.fda.gov/drug/event.json?api_key=rv4OOon6fPJOHBbFHClUOs3BRGSbAEUdg3ACp2pu&search="' + drug + '"&count=patient.reaction.reactionmeddrapt.exact';
	    }
	    
	    if(symptom.length){
		url = 'https://api.fda.gov/drug/event.json?api_key=rv4OOon6fPJOHBbFHClUOs3BRGSbAEUdg3ACp2pu&search="' + symptom + '"&count=patient.drug.medicinalproduct.exact';
	    }
	    
	    if(drug.length && symptom.length){
		url = 'https://api.fda.gov/drug/event.json?api_key=rv4OOon6fPJOHBbFHClUOs3BRGSbAEUdg3ACp2pu&search="' + drug + '"+AND+"' + symptom + '"&count=patient.drug.medicinalproduct.exact';
		
	    }	    
	    
	    $.get(
		url,
		function(data) {
		    var reactions = data.results		
		    for (i = 0; i < reactions.length; i++) {
			$('#text').append('<div id=drug"' + i + '">' + reactions[i]['term'] + ' |  Reports: ' + reactions[i]['count'] +'</div>');
			
		    }
		    console.log(data);
		    
		});	    
	})
    })
})(jQuery);