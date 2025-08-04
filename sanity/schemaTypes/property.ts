export default {
  name: 'property',
  type: 'document',
  title: 'Property',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the property',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'isPublished',
      type: 'boolean',
      title: 'Is Published'
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block" },
      ] 
    }
  ]
}