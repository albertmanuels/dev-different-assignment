import { Property, PropertyDetail } from "@/lib/interface";
import { client } from "@/lib/sanity";

export async function getPropertyDetail(slug: string) {
  const query = `
  *[_type == 'property' && slug.current == '${slug}'] {
    title,
    price,
    titleImage,
    description,
    location,
    bathrooms,
    bedrooms,
    published,
    area,
    "currentSlug": slug.current,
    content
  }[0]`;

  const data = await client.fetch(query);

  const publishedProperty = data.published ? data : null;

  return publishedProperty as PropertyDetail;
}

export async function getProperties() {
  const query = `
  *[_type == 'property'] | order(_createdAt desc) {
    title,
    price,
    titleImage,
    location,
    description,
    published,
    "currentSlug": slug.current,
  }`;

  const data = await client.fetch(query);

  const publishedProperties = data.filter((property: Property) => property.published);
  return publishedProperties as Property[];
}