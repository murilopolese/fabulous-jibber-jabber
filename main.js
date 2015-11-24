validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz()_/!$";

tab0 = new Array(
	"Dear friends, ",
	"On the other hand, ",
	"Even so, ",
	"However, we must not forget that ",
	"In the same way, ",
	"The daily practice proves that ",
	"It is worth remembering the weight and significance of these problems, since ",
	"The accumulated experience shows that ",
	"Above all, it is essential to point out that ",
	"The encouragement of technological advancement, as well as ",
	"Regardless of, ",
	"All these questions, properly considered, raises doubts about whether ",
	"Thinking longer term, ",
	"What we must always keep in mind is that ",
	"Still, there are doubts regarding how ",
	"I would like to emphasize that ",
	"However, ",
	"On the organizational level, ",
	"The effort to analyze ",
	"We realized increasingly that ",
	"In today's world, ",
	"It is important to question how much ",
	"In this sense, ",
	"Evidently, ",
	"Therefore, ",
	"Of course ",
	"We can already glimpse the way ",
	"In this way, ",
	"The care to identify critical points on ",
	"The certification methodologies that help us deal with "
);

tab1 = new Array(
	"the execution of the program points ",
	"the complexity of studies completed ",
	"the continued expansion of our activity, ",
	"the current structure of the organization ",
	"the new structural model advocated here ",
	"the continued development of different forms of action ",
	"the constant dissemination of information ",
	"the consolidation of the structures ",
	"consultation with several militants ",
	"the beginning of the general activity of formation of attitudes ",
	"the challenging global scenario, ",
	"the mobility of international capital ",
	"the internet phenomenon ",
	"hegemony of the political environment ",
	"the expansion of global markets ",
	"an increased dialogue between the different productive sectors ",
	"the growing influence of the media ",
	"the need for procedural renovation ",
	"competitiveness in commercial transactions ",
	"the emergence of e-commerce ",
	"the revolution of morals ",
	"the monitoring of consumer preferences ",
	"the commitment between the teams, ",
	"the clear definition of objectives ",
	"the adoption of decentralization policies ",
	"appreciation of subjective factors ",
	"perception of the difficulties ",
	"the understanding of the proposed goals ",
	"the consensus on the need for qualification ",
	"the fair trial of eventualities "
);

tab2 = new Array(
	"obliges us to analyze ",
	"plays an essential role in shaping ",
	"requires the precision and definition ",
	"helps the preparation and composition ",
	"ensures the contribution of an important group in determining ",
	"assume important positions in the establishment ",
	"facilitates the creation ",
	"hinders the appreciation of the importance ",
	"offers an interesting opportunity to check ",
	"entails a process of reform and modernization ",
	"can lead us to consider restructuring ",
	"is an opening for the improvement ",
	"has not yet demonstrated convincingly that will participate in change, ",
	"may turn out to highlight the relativity ",
	"prepares us to face atypical situations arising ",
	"maximizes the possibilities because ",
	"defies the equalizing capacity ",
	"adds value to the establishment ",
	"It is one of the consequences ",
	"promotes leverage ",
	"I can not dissociate ",
	"provides a better overview ",
	"encourages standardization ",
	"points to improve ",
	"It is part of a management process ",
	"cause indirect impact on revaluation ",
	"presents trends in order to approve a maintenance ",
	"extends the scope and importance, ",
	"must undergo changes regardless ",
	"positively affects the correct prediction "
);

tab3 = new Array(
	"the financial and administrative requirements. ",
	"the development of guidelines for the future. ",
	"the general participation system. ",
	"postures of the governing bodies with regard to its responsibilities. ",
	"of the new proposals. ",
	"the preferred directions towards progress. ",
	"the staff training system that meets the needs. ",
	"undeniably the appropriate conditions. ",
	"the desired indexes. ",
	"forms of action. ",
	"corporate paradigms. ",
	"the vertical relationships between the hierarchies. ",
	"the communication process as a whole. ",
	"the methods used in the evaluation of results. ",
	"of all functional resources involved. ",
	"the departmental levels of motivation. ",
	"innovative management to which we belong. ",
	"conventional operation modes. ",
	"alternatives to orthodox solutions. ",
	"procedures normally adopted. ",
	"the strategic knowledge to achieve excellence. ",
	"information flow. ",
	"lifting of the variables involved. ",
	"the various schools of thought. ",
	"the impact on decision-making agility. ",
	"normative rules of conduct. ",
	"the budget sector. ",
	"return expected long term. ",
	"technique in the recycling investment. ",
	"the relocation of staffs. "
);

Array.prototype.shuffle = function() {
	var temp;
	var a, b;

	if (this.length < 2) {
		return;
	}

	for (i=0; i < 20; i++) {
		a = Math.floor(Math.random() * this.length);
		b = Math.floor(Math.random() * this.length);
		temp = this[a];
		this[a] = this[b];
		this[b] = temp;
	}
}

Array.prototype.chr = function(index, pos) {
	return this[index].charAt(pos);
}

function jibberJabber( paragraphs, size ) {
	size = size || 4;
	var text = [];

	for( var i = 0; i < paragraphs; i++ ) {
		tab0.shuffle();
		tab1.shuffle();
		tab2.shuffle();
		tab3.shuffle();

		var paragraphSize = Math.max( size - Math.floor( Math.random() * 3 ), 1 );
		var paragraph = '';
		for( var j = 0; j < paragraphSize; j++ ) {
			paragraph += tab0[ j ] + tab1[ j ] + tab2[ j ] + tab3[ j ];
		}
		text.push( paragraph );
	}

	return text;
}

window.onload = function() {
	var formContainer = document.getElementById( 'form-container' );
	var form = document.getElementById( 'form' );
	var templateRaw = document.getElementById( 'content-template' );
	var contentContainer = document.getElementById( 'content-container' );

	var template = Handlebars.compile( templateRaw.innerHTML );

	form.onsubmit = function( e ) {
		e.preventDefault()
		var paragraph1 = jibberJabber( parseInt( form.paragraphs.value / 2 ), form.paragraphSize.value );
		var paragraph2 = jibberJabber( parseInt( form.paragraphs.value / 2 ), form.paragraphSize.value );
		var data = {
			title: form.title.value,
			subtitle: jibberJabber( 1, 1 )[ 0 ],
			paragraph1: paragraph1,
			quote: jibberJabber( 1, 1 )[ 0 ],
			paragraph2: paragraph2
		};
		console.log( data );
		contentContainer.innerHTML = template( data );
		return false;
	}
}
