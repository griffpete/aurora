import {defineField, defineType} from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer Bar',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
  fields: [
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
