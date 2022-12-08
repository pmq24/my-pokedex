import { Outlet } from '@remix-run/react';
import TopAppBar from 'app/components/top-app-bar';

export default function IndexLayout() {
  return (
    <>
      <TopAppBar />
      <main className="m-auto p-4 w-screen lg:w-10/12">
        <Outlet />
      </main>
    </>
  );
}
