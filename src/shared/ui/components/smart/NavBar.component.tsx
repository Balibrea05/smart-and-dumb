'use client';

import { useState } from 'react';
import NavBarLinks from '@/shared/ui/components/dumb/NavBarLinks.component';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <button onClick={() => setMenuOpen(!menuOpen)}>menu</button>
      {menuOpen && <NavBarLinks />}
    </nav>
  );
}
