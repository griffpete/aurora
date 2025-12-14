import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
  fieldsets: [
    {
      name: 'topFold',
      title: 'Top Fold',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'features',
      title: 'Features',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'solutions',
      title: 'Solutions',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'demo',
      title: 'Demo',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'about',
      title: 'About',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'contact',
      title: 'Contact',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    // Top Fold
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coloredTitle',
      title: 'Colored Title',
      type: 'string',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      description: 'Small floating text above main title',
      type: 'string',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'CTAText',
      title: 'Call to Action Text',
      type: 'string',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondCTAText',
      title: 'Secondary Call to Action Text',
      type: 'string',
      fieldset: 'topFold',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stats',
      type: 'array',
      description: 'Simple title + description field, I recommend having 2-5',
      of: [{type: 'stat'}],
      fieldset: 'topFold',
    }),

    // Features
    defineField({
      name: 'featureTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'features',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'features',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureCard',
      title: 'Card',
      type: 'array',
      of: [{type: 'card'}],
      fieldset: 'features',
      validation: (rule) => rule.required(),
    }),

    // Solutions
    defineField({
      name: 'solutionTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'solutions',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'solutionDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'solutions',
      validation: (rule) => rule.required(),
    }),

    // Demo
    defineField({
      name: 'demoTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'demo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'demoDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'demo',
      validation: (rule) => rule.required(),
    }),

    // Learn More
    defineField({
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'about',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutDescription',
      title: 'Description',
      type: 'text',
      fieldset: 'about',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutColorOptions',
      title: 'Color Options',
      type: 'string',
      fieldset: 'about',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutBenefitList',
      title: 'Benefit List',
      type: 'array',
      fieldset: 'about',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'aboutButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'about',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutSlug',
      title: 'Slug',
      type: 'slug',
      description: 'this goes on url (ex: trimlight.com/slug_title)',
      options: {source: 'title'},
      fieldset: 'about',
      validation: (rule) => rule.required(),
    }),

    // Contact
    defineField({
      name: 'contactTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactDescription',
      title: 'Description',
      type: 'string',
      fieldset: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactCard',
      title: 'Card',
      type: 'array',
      of: [{type: 'card'}],
      fieldset: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactCTAText',
      title: 'CTA Text',
      type: 'string',
      fieldset: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactPullBack',
      title: 'Pull Back',
      description:
        'small text under CTA (EX: No obligation • Free quote • Professional installation)',
      type: 'string',
      fieldset: 'contact',
      validation: (rule) => rule.required(),
    }),
  ],
})
