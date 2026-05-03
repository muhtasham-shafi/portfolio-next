import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://muhtashamshafi.com',
      lastModified: new Date(),
    },
  ];
}
