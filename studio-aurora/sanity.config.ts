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
            // Singleton - Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            // Singleton - Metadata
            S.listItem()
              .title('Metadata')
              .id('metadata')
              .child(S.document().schemaType('metadata').documentId('metadata')),
            S.divider(),
            // All other document types
            ...S.documentTypeListItems().filter((item) => {
              const id = item.getId()
              return id && !['metadata', 'homePage'].includes(id)
            }),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
