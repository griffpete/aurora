import {defineField, defineType} from 'sanity'

export const cardType = defineType({
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'lucideIconName',
      title: 'Lucide Icon Name',
      description: 'Find icon names at - https://lucide.dev/icons/',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
