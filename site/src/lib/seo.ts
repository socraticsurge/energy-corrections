import { about, business, faq, site, testimonials } from './content';

/**
 * Structured data for search engines.
 *
 * Three graphs are emitted:
 *   ProfessionalService — the business itself, so it can qualify for a local /
 *                         knowledge panel and carry the service area.
 *   Person             — Koundinya as the named practitioner.
 *   FAQPage            — makes the questions eligible to appear as expandable
 *                        results directly under the listing.
 *
 * Deliberately omitted: AggregateRating. Google requires ratings to come from a
 * verifiable review process, and self-declared stars on your own site are a
 * manual-action risk. The testimonials appear as Review nodes without scores.
 */
export function buildJsonLd() {
	const graph = [
		{
			'@type': 'ProfessionalService',
			'@id': `${site.url}/#business`,
			name: `${business.practice} by ${business.name}`,
			alternateName: business.name,
			description:
				'Vastu and energy corrections for homes, businesses and factories, carried out without demolition or structural change. Assessment uses a Lecher antenna to measure energy imbalances.',
			url: site.url,
			telephone: `+${business.whatsapp}`,
			email: business.email,
			sameAs: [business.linkedin],
			founder: { '@id': `${site.url}/#person` },
			foundingDate: String(business.since),
			priceRange: '$$',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Hyderabad',
				addressRegion: 'Telangana',
				addressCountry: 'IN'
			},
			areaServed: [
				{ '@type': 'Country', name: 'India' },
				{ '@type': 'Place', name: 'Worldwide (remote assessment)' }
			],
			knowsAbout: [
				'Vastu Shastra',
				'Energy correction',
				'Lecher antenna measurement',
				'Non-structural Vastu remedies',
				'Geopathic stress',
				'EMF in residential spaces'
			],
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Services',
				itemListElement: [
					'Residential Vastu and energy assessment',
					'Commercial and factory energy correction',
					'Remote assessment for overseas properties',
					'Land and plot assessment'
				].map((n) => ({
					'@type': 'Offer',
					itemOffered: { '@type': 'Service', name: n }
				}))
			},
			review: testimonials.items.map((t) => ({
				'@type': 'Review',
				author: { '@type': 'Person', name: t.name, jobTitle: t.title },
				reviewBody: t.quote
			}))
		},
		{
			'@type': 'Person',
			'@id': `${site.url}/#person`,
			name: business.name,
			jobTitle: 'Vastu and energy correction consultant',
			description: about.paragraphs[0],
			image: `${site.url}/koundinya.webp`,
			// Ties the page to a real, established identity. This is the single
			// strongest signal available for entity disambiguation.
			sameAs: [business.linkedin],
			alumniOf: {
				'@type': 'CollegeOrUniversity',
				name: 'Andhra University'
			},
			// The Six Sigma background is what makes the measurement-led approach
			// credible, so it belongs in the entity description too.
			knowsAbout: [
				'Vastu Shastra',
				'Energy correction',
				'Lecher antenna measurement',
				'Lean Six Sigma',
				'Root cause analysis'
			],
			worksFor: { '@id': `${site.url}/#business` },
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Hyderabad',
				addressCountry: 'IN'
			}
		},
		{
			'@type': 'FAQPage',
			'@id': `${site.url}/#faq`,
			mainEntity: faq.items.map((item) => ({
				'@type': 'Question',
				name: item.q,
				acceptedAnswer: { '@type': 'Answer', text: item.a }
			}))
		}
	];

	return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
