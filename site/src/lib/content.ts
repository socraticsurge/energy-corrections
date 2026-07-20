/**
 * Every piece of copy and configuration for the site lives here.
 *
 * To change the site's wording, phone number, or testimonials, edit this file
 * only — nothing in `components/` needs to be touched.
 */

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------

export const business = {
	name: 'Koundinya Nemana',
	practice: 'Energy Corrections',
	tagline: 'Your place. Your peace.',
	// TODO: replace with the real number, digits only, including country code.
	whatsapp: '919999999999',
	whatsappMessage:
		"Hello Koundinya, I'd like to book an assessment for my place.",
	email: 'hello@example.com',
	baseCity: 'Bengaluru, India',
	servingNote: 'Serving clients across India and abroad',
	since: 2018
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
	headlineAccent: 'Without breaking a single wall.',
	body: "Have you aligned your space perfectly to Vastu — and still feel stuck? Modern homes leak energy in ways the ancient texts never had to account for. I find those leaks and correct them, with no demolition and no renovation.",
	cta: 'Book an assessment',
	stats: [
		{ value: '100%', label: 'Non-structural' },
		{ value: 'Zero', label: 'Demolition' },
		{ value: '2018', label: 'Practising since' },
		{ value: 'India + abroad', label: 'Clients served' }
	]
};

// ---------------------------------------------------------------------------
// The problem
// ---------------------------------------------------------------------------

export const problem = {
	eyebrow: 'The hidden problem',
	heading: 'The limits of ancient texts in a modern world.',
	body: "Even if your kitchen and toilets sit exactly where Vastu asks, your place can still carry multiple energy imbalances — ones that quietly affect health, emotions, finances, relationships and growth. In today’s work-from-home culture, you are exposed to them for far more hours than any previous generation.",
	factors: [
		{
			title: 'Concealed drains',
			subtitle: 'The silent leak',
			body: "Older homes kept every drain outside the house, and open. Today we live above a hidden network of piped drains — in toilets, kitchens, balconies, backyards. Every drain carries away more than water; it carries energy with it. Traditional Vastu rarely addresses this, because in its time the problem did not exist."
		},
		{
			title: 'EMF radiation',
			subtitle: 'From everyday devices',
			body: 'Wi-Fi routers, LED televisions, phones, laptops and microwave ovens all generate electromagnetic fields. These affect both the energy of a place and the health of the people in it. The classical texts are silent on this for the obvious reason — and yet it is now present in every room of every home.'
		}
	],
	closing:
		'These are two factors among several. The conclusion is the same either way: a place needs to be compliant with both Vastu principles and energy principles. Only then do you get the full benefit.'
};

// ---------------------------------------------------------------------------
// Method
// ---------------------------------------------------------------------------

export const method = {
	eyebrow: 'The approach',
	heading: 'Assess first. Correct second. Never demolish.',
	body: 'I use scientific methods to identify the energy imbalances in a place — both physical and non-physical — and then correct them without touching the structure.',
	steps: [
		{
			number: '01',
			title: 'Scientific assessment',
			body: 'I measure your place for energy imbalances of both kinds: physical ones you could point to, and non-physical ones you could not. Nothing is guessed at.'
		},
		{
			number: '02',
			title: 'A plain explanation, and the exact cost',
			body: 'I walk you through what is imbalanced and why it is happening. Then I give you the precise cost of correcting it, before you commit to anything.'
		},
		{
			number: '03',
			title: 'Correction without renovation',
			body: 'No broken walls, no remodelling, no structural change. Because nothing is demolished, the cost is a fraction of traditional Vastu correction.'
		}
	]
};

// ---------------------------------------------------------------------------
// Audiences
// ---------------------------------------------------------------------------

export const audiences = {
	eyebrow: 'Who I work with',
	heading: 'Homes, businesses, and everything in between.',
	items: [
		{
			title: 'Homes in India',
			body: 'Apartments, independent houses and land. Most people come to me about health, relationships, or a sense that things are not moving — and want it addressed without tearing up the house.'
		},
		{
			title: 'Homes overseas',
			body: 'I have developed a process for assessing and correcting a place without visiting it in person. Clients in the USA and elsewhere have had their homes corrected remotely, working from the details they provide.'
		},
		{
			title: 'Businesses and factories',
			body: 'Offices, shops, commercial spaces, factories and land. The same assessment, applied where stagnation and growth are measured in revenue rather than wellbeing.'
		}
	]
};

// ---------------------------------------------------------------------------
// Testimonials — quotes are reproduced as given, with permission.
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
				'Mr. Koundinya has done energy and scientific Vastu corrections to my home and my relatives’ homes. I have seen positive results in my house — my son started to study better, and the overall energy of my house became highly positive. The best part of his approach is that there is no need for any alterations in the house, which makes these corrections cost effective.'
		},
		{
			name: 'Arunachalam Karthikeyan',
			title: 'Founder & Board Director, Alliance of Indian MSMEs',
			image: 'arunachalam-karthikeyan.jpg',
			quote:
				'I am a firm believer of modern science and interested to know how the energies affect lives of the people at homes and work places. We found positive and progressive results after his intervention, which motivated me and my family to consult him and recommend him to our family and friends — without making any changes in the building. I found Koundinya Ji as a highly knowledgeable person with down to earth attitude and strong value systems.'
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
// About
// ---------------------------------------------------------------------------

export const about = {
	eyebrow: 'About',
	heading: 'Koundinya Nemana',
	paragraphs: [
		'Since 2018 I have corrected the Vastu and the energies of residences, businesses, factories, commercial spaces and land — in India and abroad.',
		'My work sits at the meeting point of two things: the spatial principles of traditional Vastu, and the energetic realities of how we actually live now — concealed plumbing, constant connectivity, and homes that are also workplaces. Attending to one without the other leaves the job half done.',
		'Clients have shared feedback about improvements in their overall wellbeing, relationships and professional growth, and in some cases resolution of long-pending personal matters. What I can promise you directly is narrower and more concrete: an honest assessment, a clear explanation of what I find, and the exact cost before you decide anything.'
	],
	cta: "Let's discuss your space"
};

// ---------------------------------------------------------------------------
// Closing call to action
// ---------------------------------------------------------------------------

export const closing = {
	heading: 'Ready to find the leaks?',
	body: 'Book an initial assessment. I will identify the imbalances in your place, explain why they are there, and give you a clear, renovation-free path to correcting them — with the cost known upfront.',
	cta: 'Book an assessment',
	reassurance: 'No demolition · No renovation · Cost confirmed before you commit'
};

export const nav = [
	{ label: 'The problem', href: '#problem' },
	{ label: 'The approach', href: '#approach' },
	{ label: 'Clients', href: '#clients' },
	{ label: 'About', href: '#about' }
];
