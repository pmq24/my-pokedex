import { Outlet } from '@remix-run/react';
import TopAppBar from 'app/components/top-app-bar';

export default function IndexLayout() {
  return (
    <main>
      <TopAppBar />
      <Outlet />
    </main>
  );
}
