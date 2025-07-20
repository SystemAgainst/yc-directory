import React from "react";
import Navbar from '../components/Navbar';


export default function Layout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};