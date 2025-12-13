import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coloredTitle',
      title: 'Colored Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      description: 'Small floating text above main title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyTitle',
      title: 'Company Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'CTAText',
      title: 'Call to Action Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondCTAText',
      title: 'Secondary Call to Action Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
