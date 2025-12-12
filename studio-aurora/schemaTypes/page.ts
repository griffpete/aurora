import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'shortTitle',
      title: 'Short Title',
      description: 'For tab bar and buttons',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'longTitle',
      title: 'Long Title',
      description: 'Page title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'this goes on url (ex: trimlight.com/slug_title)',
      options: {source: 'title'},
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{type: 'imageBlock'}],
    }),
  ],
})
