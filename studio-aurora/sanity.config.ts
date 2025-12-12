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
            // Singleton metadata document
            S.listItem()
              .title('Metadata')
              .id('metadata')
              .child(S.document().schemaType('metadata').documentId('metadata')),
            // All other document types
            S.divider(),
            ...S.documentTypeListItems().filter((item) => item.getId() !== 'metadata'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
