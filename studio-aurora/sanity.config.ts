import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Aurora',

  projectId: 'vyi2ka9l',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('Metadata')
              .id('metadata')
              .child(S.document().schemaType('metadata').documentId('metadata')),
            S.listItem()
              .title('Nav')
              .id('nav')
              .child(S.document().schemaType('nav').documentId('nav')),
            S.listItem()
              .title('Footer')
              .id('footer')
              .child(S.document().schemaType('footer').documentId('footer')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => {
              const id = item.getId()
              return id && !['metadata', 'homePage', 'nav', 'footer'].includes(id)
            }),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
