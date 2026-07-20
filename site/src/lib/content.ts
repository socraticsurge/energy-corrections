/**
 * Every piece of copy and configuration for the site lives here.
 *
 * To change the site's wording, phone number, or testimonials, edit this file
 * only. Nothing in `components/` needs to be touched.
 *
 * COPY RULES for anyone editing this file:
 *   1. No em dashes. Use a full stop, a comma, or a colon instead.
 *   2. Short sentences. If one runs past about 18 words, split it.
 *   3. One idea per sentence. Readers scan; they do not parse.
 *   4. VOICE: the site speaks *for* Koundinya, not *as* him. He is reserved and
 *      does not talk about himself in "I" terms, so the page introduces him in
 *      the third person and addresses the reader as "you". Write "the assessment
 *      begins with readings", not "I begin by taking readings". The only first
 *      person on the page belongs to clients, inside their own quotes.
 *   5. Avoid stranding a single short word on its own line at the end of a
 *      heading. Where a heading is at risk, bind the last two words with  .
 */

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------

/**
 * Injected at build time by vite.config.ts, derived from static/CNAME.
 * To move the site to a custom domain, create that file. Nothing here changes.
 */
export const site = {
	url: __SITE_URL__
};

export const business = {
	name: 'Koundinya Nemana',
	practice: 'Energy Corrections',
	tagline: 'Your place. Your peace.',
	// Digits only, including country code. This is what wa.me expects.
	whatsapp: '919886693868',
	whatsappDisplay: '+91 98866 93868',
	whatsappMessage:
		"Hello Koundinya, I'd like to book an assessment for my place.",
	email: 'contact.koundinya@gmail.com',
	linkedin: 'https://www.linkedin.com/in/koundinyanemana/',
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
	headlineAccent: 'Without breaking a single wall.',
	body: 'You followed Vastu carefully. So why does the place still feel stuck? Modern homes leak energy in ways the old texts never described. Those leaks can be measured, and corrected. No demolition. No renovation.',
	cta: 'Book an assessment',
	stats: [
		{ value: '330+', label: 'Places corrected' },
		{ value: 'Zero', label: 'Walls broken' },
		{ value: '2018', label: 'Full-time since' },
		{ value: 'India + abroad', label: 'Clients served' }
	]
};

// ---------------------------------------------------------------------------
// The problem
// ---------------------------------------------------------------------------

export const problem = {
	eyebrow: 'The hidden problem',
	heading: 'The limits of ancient texts in a modern world.',
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
	// Three phrases, three lines. Rendered as separate blocks so the rhythm
	// survives every screen width instead of breaking mid-phrase.
	headingLines: ['Measured first.', 'Corrected second.', 'Never demolished.'],
	body: 'Nothing here is guessed at. Every correction follows from a reading taken in your space.',
	steps: [
		{
			number: '01',
			title: 'Measured with a Lecher antenna',
			body: 'A Lecher antenna is a calibrated instrument for taking energy readings at specific points in a space. It maps what is out of balance in yours. Some imbalances are physical. Some are not. Both get recorded.'
		},
		{
			number: '02',
			title: 'Explained, then quoted',
			body: 'Every imbalance found gets explained to you, along with why it is there. The exact cost of correcting it follows. You decide after that, not before.'
		},
		{
			number: '03',
			title: 'Corrected without touching the structure',
			body: 'No wall comes down. Nothing gets remodelled. Because no construction is involved, it costs a fraction of conventional Vastu correction.'
		}
	]
};

// ---------------------------------------------------------------------------
// Audiences
// ---------------------------------------------------------------------------

export const audiences = {
	eyebrow: 'Who this is for',
	heading: 'Homes, businesses, and the land they sit on.',
	items: [
		{
			title: 'Homes in India',
			body: 'Apartments, independent houses and plots. Most enquiries start with health, relationships, or a feeling that nothing is moving. And a wish to address it without tearing up the house.'
		},
		{
			title: 'Homes overseas',
			body: 'Distance is not an obstacle. Homes in the USA and elsewhere have been assessed and corrected remotely, worked out from details their owners sent across.'
		},
		{
			title: 'Businesses and factories',
			body: 'Offices, shops, commercial spaces, factories and land. The same assessment, applied where stagnation shows up in revenue rather than wellbeing.'
		}
	]
};

// ---------------------------------------------------------------------------
// Testimonials. Quotes are reproduced as given, with permission.
// Client wording is left untouched, including its long sentences and its "I".
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
// Questions. Also emitted as FAQPage structured data for search results.
// ---------------------------------------------------------------------------

export const faq = {
	eyebrow: 'Before you ask',
	heading: 'The questions that come up most.',
	items: [
		{
			q: 'My home is already Vastu compliant. Is anything left to do?',
			a: 'Usually there is. Vastu compliance covers layout and direction. It does not cover concealed drainage or electromagnetic fields. Neither existed when the texts were written, so neither is addressed in them.'
		},
		{
			q: 'Does Koundinya need to visit the property?',
			a: 'Not necessarily. Homes in the USA and elsewhere have been corrected remotely, worked out from details the owner sends across. On-site visits are available too. Both routes work.'
		},
		{
			q: 'Will anything be broken or rebuilt?',
			a: 'No. Not a wall, not a floor, not a fitting. Every correction is non-structural. That is the whole basis of the practice.'
		},
		{
			q: 'What does it cost?',
			a: 'The exact figure comes after the assessment, and before any correction starts. Because no construction is involved, it costs far less than traditional Vastu remodelling.'
		},
		{
			q: 'Are businesses covered as well as homes?',
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
	// Kept deliberately short and plain. He is a reserved person who would not
	// present himself by listing past achievements, so the background gets one
	// quiet sentence that explains the method, and no company names. Anyone who
	// wants the full history can follow the LinkedIn link in the footer.
	paragraphs: [
		'Since 2018, correcting the Vastu and the energy of a place has been Koundinya Nemana’s full-time work. More than 330 of them so far. Homes, businesses, factories, commercial spaces and land, in India and abroad.',
		'The work sits where two things meet. The spatial logic of traditional Vastu, and the way we actually live now, with concealed plumbing, constant connectivity, and homes that double as workplaces. Attend to one and ignore the other, and the job is only half done.',
		'He came to it after two decades in Six Sigma and quality improvement. That work teaches one habit above all others: measure before you conclude, and correct the cause rather than the symptom. He approaches a place the same way.',
		'What he promises is narrow and concrete. An honest assessment. A clear explanation of what it finds. The exact cost, before you decide anything.'
	],
	cta: 'Talk to Koundinya'
};

// ---------------------------------------------------------------------------
// Closing call to action
// ---------------------------------------------------------------------------

export const closing = {
	heading: 'Find out what your place is losing.',
	body: 'Book an assessment. Your space gets measured, the imbalances get explained, and the cost of correcting them is confirmed. All of it before you commit to anything.',
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
