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
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block" },
      ] 
    },
    {
      name: 'isPublished',
      type: 'boolean',
      title: 'Is Published'
    },
  ]
}