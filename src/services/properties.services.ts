import { client } from "@/lib/sanity";

export async function getPropertyDetail(slug: string) {
  const query = `
  *[_type == 'property' && slug.current == '${slug}'] {
    title,
    price,
    titleImage,
    description,
    location,
    "currentSlug": slug.current,
    content
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

export async function getProperties() {
  const query = `
  *[_type == 'property'] | order(_createdAt desc) {
    title,
    price,
    titleImage,
    location,
    description,
    "currentSlug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
}