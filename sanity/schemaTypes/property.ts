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
      title: 'Slug',
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
      name: 'bathrooms',
      type: 'number',
      title: 'Bathrooms'
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms'
    },
    {
      name: 'area',
      type: 'number',
      title: 'Area (in m²)'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price (in USD)'
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        { type: "block" },
      ] 
    },
    {
      name: 'published',
      type: 'boolean',
      title: 'Published'
    },
  ]
}