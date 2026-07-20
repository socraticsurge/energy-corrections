/**
 * Every piece of copy and configuration for the site lives here.
 *
 * To change the site's wording, phone number, or testimonials, edit this file
 * only — nothing in `components/` needs to be touched.
 *
 * COPY RULES for anyone editing this file:
 *   1. No em dashes. Use a full stop, a comma, or a colon instead.
 *   2. Short sentences. If one runs past about 18 words, split it.
 *   3. One idea per sentence. Readers scan; they do not parse.
 *   4. Avoid trailing a heading with a single short word on its own line.
 *      Where a heading is at risk, bind the last two words with  .
 */

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------

export const site = {
	url: 'https://socraticsurge.github.io/energy-corrections'
};

export const business = {
	name: 'Koundinya Nemana',
	practice: 'Energy Corrections',
	tagline: 'Your place. Your peace.',
	// Digits only, including country code — this is what wa.me expects.
	whatsapp: '919886693868',
	whatsappDisplay: '+91 98866 93868',
	whatsappMessage:
		"Hello Koundinya, I'd like to book an assessment for my place.",
	email: 'contact.koundinya@gmail.com',
	baseCity: 'Hyderabad, India',
	servingNote: 'Serving clients across India and abroad',
	since: 2018,
	clientsServed: 330
};

export const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
	business.whatsappMessage
)}`;

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export const hero = {
	eyebrow: 'Your place. Your peace.',
	headline: 'Balance your home’s energy.',
	// Bound with a non-breaking space so "wall." never drops to its own line.
	headlineAccent: 'Without breaking a single wall.',
	body: 'You followed Vastu carefully. So why does the place still feel stuck? Modern homes leak energy in ways the old texts never described. I measure those leaks and correct them. No demolition. No renovation.',
	cta: 'Book an assessment',
	stats: [
		{ value: '330+', label: 'Places corrected' },
		{ value: 'Zero', label: 'Walls broken' },
		{ value: '2018', label: 'Practising since' },
		{ value: 'India + abroad', label: 'Clients served' }
	]
};

// ---------------------------------------------------------------------------
// The problem
// ---------------------------------------------------------------------------

export const problem = {
	eyebrow: 'The hidden problem',
	heading: 'The limits of ancient texts in a modern world.',
	body: 'Your kitchen may sit exactly where Vastu asks. Your toilets too. The place can still carry imbalances that affect health, money, sleep and relationships. And you now spend far more hours inside it than any generation before you did.',
	factors: [
		{
			title: 'Concealed drains',
			subtitle: 'The silent leak',
			body: 'Old homes kept their drains outside, and open. Yours run hidden through the walls and floors. Toilets, kitchen, balconies, backyard. Every drain carries water away. It carries energy away with it. The classical texts say nothing about this, because piped drainage did not exist when they were written.'
		},
		{
			title: 'EMF radiation',
			subtitle: 'From everyday devices',
			body: 'Your router runs all day. So does the television, the microwave, the laptop, the phone in your pocket. Each one generates an electromagnetic field. Those fields affect the energy of a place and the people living in it. No ancient text accounts for this. Every modern home needs it accounted for.'
		}
	],
	closing:
		'These are two factors. There are others. The conclusion holds either way. A place has to satisfy Vastu principles and energy principles together. Half the work gives you half the benefit.'
};

// ---------------------------------------------------------------------------
// Method
// ---------------------------------------------------------------------------

export const method = {
	eyebrow: 'The approach',
	heading: 'Measured first. Corrected second. Never demolished.',
	body: 'I do not guess at what is wrong with a place. I take readings, and I work from what they show me.',
	steps: [
		{
			number: '01',
			title: 'I measure with a Lecher antenna',
			body: 'A Lecher antenna is a calibrated instrument for taking energy readings at specific points in a space. I use it to map what is out of balance in yours. Some imbalances are physical. Some are not. Both get recorded.'
		},
		{
			number: '02',
			title: 'I explain, then I quote',
			body: 'I walk you through every imbalance I found and why it is there. Then you get the exact cost to correct it. You decide after that, not before.'
		},
		{
			number: '03',
			title: 'I correct without touching the structure',
			body: 'No wall comes down. Nothing gets remodelled. Because there is no construction involved, it costs a fraction of conventional Vastu correction.'
		}
	]
};

// ---------------------------------------------------------------------------
// Audiences
// ---------------------------------------------------------------------------

export const audiences = {
	eyebrow: 'Who I work with',
	heading: 'Homes, businesses, and the land they sit on.',
	items: [
		{
			title: 'Homes in India',
			body: 'Apartments, independent houses and plots. Most people call me about health, relationships, or a feeling that nothing is moving. They want it addressed without tearing up the house.'
		},
		{
			title: 'Homes overseas',
			body: 'I assess and correct places I have never stood in. Clients in the USA and elsewhere have had their homes corrected remotely, from details they sent me. Distance is not an obstacle.'
		},
		{
			title: 'Businesses and factories',
			body: 'Offices, shops, commercial spaces, factories and land. The same assessment, applied where stagnation shows up in revenue rather than wellbeing.'
		}
	]
};

// ---------------------------------------------------------------------------
// Testimonials — quotes are reproduced as given, with permission.
// Client wording is left untouched, including its long sentences.
// ---------------------------------------------------------------------------

export const testimonials = {
	eyebrow: 'In their words',
	heading: 'What clients have said.',
	items: [
		{
			name: 'Maha Komarivelli',
			title: 'Engineering Manager, Information Technology',
			image: 'maha-komarivelli.jpg',
			quote:
				'Koundinya has performed energy and Vastu assessment and corrections for my home in the USA. What pleased me most was that he has developed a process of conducting the assessment and corrections without the need of his personal visit. His insights were remarkably accurate. The corrections he suggested were simple to implement and did not require any architectural changes to the home.'
		},
		{
			name: 'Vishweshwar Hegde',
			title: 'Partner, PM Power Consulting · Agile & Mindfulness Coach',
			image: 'vishweshwar-hegde.jpg',
			quote:
				'He combines the holistic understanding of energy fields of human beings, the planet and the cosmic objects with the scientific approaches of measuring them with instruments, and then tuning the energy fields without damaging the structures. I have used his services for my homes and recommended him to many of my friends and relatives, and have experienced positive results.'
		},
		{
			name: 'Asha Varma',
			title: 'Technologist, Trainer & Educationalist',
			image: 'asha-varma.jpg',
			quote:
				'Mr. Koundinya has done energy and scientific Vastu corrections to my home and my relatives’ homes. I have seen positive results in my house. My son started to study better, and the overall energy of my house became highly positive. The best part of his approach is that there is no need for any alterations in the house, which makes these corrections cost effective.'
		},
		{
			name: 'Arunachalam Karthikeyan',
			title: 'Founder & Board Director, Alliance of Indian MSMEs',
			image: 'arunachalam-karthikeyan.jpg',
			quote:
				'I am a firm believer of modern science and interested to know how the energies affect lives of the people at homes and work places. We found positive and progressive results after his intervention, which motivated me and my family to consult him and recommend him to our family and friends, without making any changes in the building. I found Koundinya Ji as a highly knowledgeable person with down to earth attitude and strong value systems.'
		},
		{
			name: 'Muralidhar Koteshwar',
			title: 'Co-Founder, SimpliTrain · Uplad Digiconnect',
			image: 'muralidhar-koteshwar.jpg',
			quote:
				'I invited him to review my home and offices. His scientific explanation had all of us convinced, and we did see a big positive difference in the environment post corrections implemented by him. We heartily recommend his services to our friends and relatives, and many have called me and thanked me for the reference.'
		}
	]
};

// ---------------------------------------------------------------------------
// Questions — also emitted as FAQPage structured data for search results.
// ---------------------------------------------------------------------------

export const faq = {
	eyebrow: 'Before you ask',
	heading: 'The questions I get most.',
	items: [
		{
			q: 'My home is already Vastu compliant. Is there anything left to do?',
			a: 'Usually, yes. Vastu compliance covers layout and direction. It does not cover concealed drainage or electromagnetic fields. Neither existed when the texts were written, so neither is addressed in them.'
		},
		{
			q: 'Do you have to visit my home?',
			a: 'Not necessarily. I have corrected homes in the USA and elsewhere without travelling to them, working from details the owner sends me. On-site visits are available too. Both routes work.'
		},
		{
			q: 'Will anything be broken or rebuilt?',
			a: 'No. Not a wall, not a floor, not a fitting. Every correction is non-structural. That is the whole basis of how I work.'
		},
		{
			q: 'What does it cost?',
			a: 'You get the exact figure after the assessment and before any correction starts. Because no construction is involved, it costs far less than traditional Vastu remodelling.'
		},
		{
			q: 'Do you work with businesses as well as homes?',
			a: 'Yes. Offices, shops, factories, commercial buildings and land, alongside residences.'
		}
	]
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
	eyebrow: 'About',
	heading: 'Koundinya Nemana',
	paragraphs: [
		'Since 2018 I have corrected the Vastu and the energies of more than 330 places. Residences, businesses, factories, commercial spaces and land, in India and abroad.',
		'My work sits where two things meet. One is the spatial logic of traditional Vastu. The other is how we actually live now, with concealed plumbing, constant connectivity, and homes that double as workplaces. Attend to one and ignore the other, and the job is half done.',
		'Clients have told me about improvements in wellbeing, in relationships, in professional growth. Some have resolved matters that stayed stuck for years. What I promise you directly is narrower than that, and more concrete. An honest assessment. A clear explanation of what I find. The exact cost, before you decide anything.'
	],
	cta: 'Let’s discuss your space'
};

// ---------------------------------------------------------------------------
// Closing call to action
// ---------------------------------------------------------------------------

export const closing = {
	heading: 'Find out what your place is losing.',
	body: 'Book an assessment. I will measure your space, show you what is out of balance, and explain why. Then I will tell you what correcting it costs, before you commit to anything.',
	cta: 'Book an assessment',
	reassurance: 'No demolition · No renovation · Cost confirmed before you commit'
};

export const nav = [
	{ label: 'The problem', href: '#problem' },
	{ label: 'The approach', href: '#approach' },
	{ label: 'Clients', href: '#clients' },
	{ label: 'Questions', href: '#questions' },
	{ label: 'About', href: '#about' }
];
