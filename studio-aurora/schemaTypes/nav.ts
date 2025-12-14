import {defineField, defineType} from 'sanity'

export const navType = defineType({
  name: 'nav',
  title: 'Nav Bar',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Nav Bar',
      }
    },
  },
  fields: [
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
  ],
})
