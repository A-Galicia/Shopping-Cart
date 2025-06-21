import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  return (
    <div>
      <nav>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>About Us</Link>
        </li>
      </nav>
    </div>
  );
}
