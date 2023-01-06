import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '24tjno36',
  dataset: 'production',
  apiVersion: '2022-12-30',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);


export function urlFor(source, string) {
  if (!source) {
      return 'image not found';
  } else {
      return builder.image(source).toString().toLowerCase();
  }
}