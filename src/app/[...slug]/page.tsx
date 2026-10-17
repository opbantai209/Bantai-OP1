import ClientWrapper from '../../ClientWrapper';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<any> {
  const { slug } = await params;
  const [type, id] = slug;
  if (!type || !id) return {};
  
  try {
    const res = await fetch(`http://localhost:3000/api/${type}/${id}`);
    if (!res.ok) return {};
    const data = await res.json();
    return {
      title: data.title || data.name,
      description: data.description || data.bio || '',
      openGraph: { title: data.title || data.name, description: data.description || data.bio || '' }
    };
  } catch (e) {
    return {};
  }
}

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const [type, id] = slug;
  let initialData: Record<string, any> = {};

  try {
    if (type && id) {
      const res = await fetch(`http://localhost:3000/api/${type}/${id}`);
      if (res.ok) {
        const data = await res.json();
        initialData[type] = [data]; // Pass the entity under its type key
      }
    }
  } catch (e) {
    console.error('SSR fetch error', e);
  }

  return <ClientWrapper initialData={initialData} />;
}
