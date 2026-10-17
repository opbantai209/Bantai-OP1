import ClientWrapper from '../../ClientWrapper';
import * as DatabaseService from '../../services/DatabaseService';

export const dynamic = 'force-dynamic';

export default async function CatchAllPage() {
  const initialData = {
    users: DatabaseService.Users,
    gigs: DatabaseService.Gigs,
    projects: DatabaseService.Projects,
    orders: DatabaseService.Orders,
  };
  return <ClientWrapper initialData={initialData} />;
}
