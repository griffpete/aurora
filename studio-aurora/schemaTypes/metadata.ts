import {defineField, defineType} from 'sanity'

export const metadataType = defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Metadata',
      }
    },
  },
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
  ],
})
