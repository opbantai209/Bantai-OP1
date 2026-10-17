import ClientWrapper from '../ClientWrapper';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let initialData: Record<string, any> = {};

  try {
    // Fetch only essential data for home
    const [gigsRes, projectsRes] = await Promise.all([
      fetch('http://localhost:3000/api/gigs'),
      fetch('http://localhost:3000/api/projects')
    ]);
    
    // Fetch marketplace data for home page
    if (gigsRes.ok) initialData.gigs = await gigsRes.json();
    if (projectsRes.ok) initialData.projects = await projectsRes.json();
  } catch (e) {
    console.error('SSR fetch error', e);
  }

  return <ClientWrapper initialData={initialData} />;
}
