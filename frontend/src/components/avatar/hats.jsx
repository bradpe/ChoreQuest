/* ── Hats ──
   Enhanced with subtle shading/highlights for depth. */

/* ── Helmet lighting ──
   Shared gradients/overlays that give the full-face helmets a lit, 3D look.
   Overlays are white/black with alpha, so they work over any hat colour.
   (Same ids + same content everywhere, so repeated avatars on a page are fine.) */
function HelmetDefs() {
  return (
    <defs>
      <radialGradient id="hl-sphere" gradientUnits="userSpaceOnUse" cx="12" cy="6.5" r="19" fx="11" fy="5">
        <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
        <stop offset="0.3" stopColor="#fff" stopOpacity="0.1" />
        <stop offset="0.55" stopColor="#000" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.42" />
      </radialGradient>
      <radialGradient id="hl-spec" gradientUnits="objectBoundingBox" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#fff" stopOpacity="0.85" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hl-metal" gradientUnits="userSpaceOnUse" x1="7.5" y1="0" x2="24.5" y2="0">
        <stop offset="0" stopColor="#000" stopOpacity="0.28" />
        <stop offset="0.28" stopColor="#fff" stopOpacity="0.05" />
        <stop offset="0.42" stopColor="#fff" stopOpacity="0.3" />
        <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.8" stopColor="#fff" stopOpacity="0.08" />
        <stop offset="1" stopColor="#000" stopOpacity="0.32" />
      </linearGradient>
      <linearGradient id="hl-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#bfe9ff" stopOpacity="0.5" />
        <stop offset="0.28" stopColor="#bfe9ff" stopOpacity="0.14" />
        <stop offset="0.34" stopColor="#fff" stopOpacity="0.38" />
        <stop offset="0.42" stopColor="#bfe9ff" stopOpacity="0.06" />
        <stop offset="1" stopColor="#000" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  );
}

function HelmetShade({ d, metal = false }) {
  return (
    <g>
      <path d={d} fill="url(#hl-sphere)" />
      {metal && <path d={d} fill="url(#hl-metal)" />}
      <ellipse cx="11.6" cy="5.8" rx="3.8" ry="1.9" transform="rotate(-28 11.6 5.8)" fill="url(#hl-spec)" />
      <path d={d} fill="none" stroke="#000" strokeWidth="0.4" opacity="0.4" />
    </g>
  );
}

export function renderHat(style, color) {
  switch (style) {
    case 'crown':
      return (
        <g>
          <polygon points="10,8 11,4 13,7 16,3 19,7 21,4 22,8" fill={color} />
          <rect x="10" y="7" width="12" height="2" rx="0.5" fill={color} />
          {/* Gem highlights */}
          <circle cx="13" cy="6" r="0.5" fill="white" opacity="0.4" />
          <circle cx="16" cy="4" r="0.5" fill="white" opacity="0.4" />
          <circle cx="19" cy="6" r="0.5" fill="white" opacity="0.4" />
        </g>
      );
    case 'wizard':
      return (
        <g>
          <polygon points="16,0 10,9 22,9" fill={color} />
          <ellipse cx="16" cy="9" rx="7" ry="1.5" fill={color} />
          <text x="16" y="7" textAnchor="middle" fill="#f9d71c" fontSize="3" fontFamily="sans-serif">&#9733;</text>
          <line x1="12" y1="7" x2="14" y2="3" stroke="white" strokeWidth="0.3" opacity="0.15" />
        </g>
      );
    case 'beanie':
      return (
        <g>
          <ellipse cx="16" cy="8" rx="7.5" ry="4" fill={color} />
          <rect x="8.5" y="7" width="15" height="2.5" rx="1" fill={color} opacity="0.7" />
          <circle cx="16" cy="4" r="1.2" fill={color} />
          <path d="M10,9 Q13,8 16,9" stroke="white" strokeWidth="0.3" opacity="0.1" fill="none" />
        </g>
      );
    case 'cap':
      return (
        <g>
          <ellipse cx="16" cy="8" rx="7.5" ry="3.5" fill={color} />
          <ellipse cx="10" cy="9" rx="5" ry="1.2" fill={color} />
          <line x1="6" y1="9" x2="10" y2="8.5" stroke="white" strokeWidth="0.3" opacity="0.15" />
        </g>
      );
    case 'pirate':
      return (
        <g>
          <ellipse cx="16" cy="7.5" rx="8" ry="3" fill="#1a1a2e" />
          <rect x="8" y="7" width="16" height="1.5" fill={color} />
          <text x="16" y="7" textAnchor="middle" fill="white" fontSize="3" fontFamily="sans-serif">&#9760;</text>
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M9,12 Q9,5 16,5 Q23,5 23,12" stroke={color} strokeWidth="1.5" fill="none" />
          <rect x="7" y="11" width="3" height="4" rx="1" fill={color} />
          <rect x="22" y="11" width="3" height="4" rx="1" fill={color} />
          <rect x="7.5" y="12" width="2" height="2" rx="0.5" fill="white" opacity="0.15" />
          <rect x="22.5" y="12" width="2" height="2" rx="0.5" fill="white" opacity="0.15" />
        </g>
      );
    case 'tiara':
      return (
        <g>
          <path d="M10,8 L12,5 L14,7 L16,4 L18,7 L20,5 L22,8" stroke={color} strokeWidth="0.8" fill="none" />
          <circle cx="16" cy="4" r="0.8" fill={color} />
          <circle cx="12" cy="5" r="0.4" fill={color} />
          <circle cx="20" cy="5" r="0.4" fill={color} />
          <rect x="10" y="7.5" width="12" height="1" rx="0.3" fill={color} />
        </g>
      );
    case 'horns':
      return (
        <g>
          <path d="M10,10 Q8,4 11,5" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M22,10 Q24,4 21,5" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      );
    case 'bunny_ears':
      return (
        <g>
          <ellipse cx="12" cy="3" rx="2" ry="5" fill={color} />
          <ellipse cx="12" cy="3" rx="1" ry="4" fill="#ffb6c1" opacity="0.5" />
          <ellipse cx="20" cy="3" rx="2" ry="5" fill={color} />
          <ellipse cx="20" cy="3" rx="1" ry="4" fill="#ffb6c1" opacity="0.5" />
        </g>
      );
    case 'cat_ears':
      return (
        <g>
          <polygon points="9,9 10,2 14,8" fill={color} />
          <polygon points="10,8 11,4 13,8" fill="#ffb6c1" opacity="0.5" />
          <polygon points="23,9 22,2 18,8" fill={color} />
          <polygon points="22,8 21,4 19,8" fill="#ffb6c1" opacity="0.5" />
        </g>
      );
    case 'halo':
      return (
        <ellipse cx="16" cy="4" rx="6" ry="1.5" fill="none" stroke="#f9d71c" strokeWidth="1" opacity="0.8" />
      );
    case 'viking':
      return (
        <g>
          <ellipse cx="16" cy="8" rx="8" ry="3.5" fill={color} />
          <path d="M8,8 Q6,3 9,5" stroke="#c0c0c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M24,8 Q26,3 23,5" stroke="#c0c0c0" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <rect x="8" y="7" width="16" height="2" rx="0.5" fill={color} opacity="0.8" />
        </g>
      );
    case 'rebel_pilot':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#ececec" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={false} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M13.8,2.4 L18.2,2.4 L18.6,9.4 L13.4,9.4 Z" fill={color} />
          <path d="M13.1,2.5 L12.9,9.4 M18.9,2.5 L19.1,9.4" stroke="#1d1d1d" strokeWidth="0.5" />
          <path d="M14.6,3 L14.9,9 M17.4,3 L17.1,9" stroke="#fff" strokeWidth="0.3" opacity="0.4" />
          <path d="M8.2,9.6 Q16,7.4 23.8,9.6 L23.8,10.8 Q16,8.7 8.2,10.8 Z" fill={color} />
          <circle cx="20.8" cy="6" r="1.4" fill="#d9482b" />
          <path d="M19.7,6.8 L20.8,5 L21.9,6.8 M20.2,6.4 L20.8,7.4 L21.4,6.4 M19.9,5.8 L21.7,5.8" stroke="#fff" strokeWidth="0.35" fill="none" strokeLinecap="round" />
          <rect x="8.8" y="10.2" width="14.4" height="6.2" rx="2.9" fill="#101012" />
          <rect x="9.5" y="10.9" width="13" height="4.8" rx="2.4" fill="#1d2733" />
          <path d="M12,10.9 L20,10.9 Q22.5,10.9 22.5,13.3 Q22.5,15.7 20,15.7 L12,15.7 Q9.5,15.7 9.5,13.3 Q9.5,10.9 12,10.9 Z" fill="url(#hl-glass)" />
          <path d="M15.2,11 L16.8,11 L16.4,12.3 L15.6,12.3 Z" fill="#101012" />
          <path d="M10.6,11.8 Q12.4,11 15,11.3" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round" />
          <circle cx="8.5" cy="13.4" r="1.7" fill={color} />
          <circle cx="8.5" cy="13.4" r="0.85" fill="#000" opacity="0.3" />
          <circle cx="23.5" cy="13.4" r="1.7" fill={color} />
          <circle cx="23.5" cy="13.4" r="0.85" fill="#000" opacity="0.3" />
          <path d="M12,17 L20,17 L19.4,21.2 Q16,22 12.6,21.2 Z" fill="#c4c9cf" />
          <rect x="12.6" y="17.5" width="6.8" height="3" rx="0.8" fill="#8b929b" />
          <path d="M13.6,17.9 L13.6,20.1 M14.8,17.9 L14.8,20.1 M16,17.9 L16,20.1 M17.2,17.9 L17.2,20.1 M18.4,17.9 L18.4,20.1" stroke="#2b2f35" strokeWidth="0.4" />
          <path d="M11.6,16.8 Q10.2,19.4 11.4,21.4 M20.4,16.8 Q21.8,19.4 20.6,21.4" stroke="#5b626c" strokeWidth="0.6" fill="none" />
          <circle cx="10.6" cy="9.1" r="0.28" fill="#000" opacity="0.35" />
          <circle cx="21.4" cy="9.1" r="0.28" fill="#000" opacity="0.35" />
          <circle cx="11.4" cy="5.6" r="0.28" fill="#000" opacity="0.35" />
        </g>
      );
    case 'trooper':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f7f7f7" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={false} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M16,2.4 L16,8.4" stroke="#b8bec6" strokeWidth="0.4" />
          <path d="M9.2,9 Q16,7.2 22.8,9 L22.8,10 Q16,8.4 9.2,10 Z" fill="#c8cdd4" />
          <path d="M9.4,9.9 L15.2,9.9 L14.8,13.4 L13.2,14.4 L10.4,13.8 Z" fill="#101010" />
          <path d="M22.6,9.9 L16.8,9.9 L17.2,13.4 L18.8,14.4 L21.6,13.8 Z" fill="#101010" />
          <path d="M9.4,9.9 L15.2,9.9 L14.8,13.4 L13.2,14.4 L10.4,13.8 Z" fill="url(#hl-glass)" />
          <path d="M22.6,9.9 L16.8,9.9 L17.2,13.4 L18.8,14.4 L21.6,13.8 Z" fill="url(#hl-glass)" />
          <path d="M10.4,10.8 L13.4,10.8 M21.6,10.8 L18.6,10.8" stroke="white" strokeWidth="0.4" opacity="0.35" strokeLinecap="round" />
          <path d="M15,10.2 L17,10.2 L16.6,16.6 L15.4,16.6 Z" fill="#a4aab2" />
          <path d="M15.4,12 L16.6,12 M15.4,13.6 L16.6,13.6" stroke="#2a2d32" strokeWidth="0.4" />
          <path d="M11.4,14.4 L11.6,17.8" stroke="#101010" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M20.6,14.4 L20.4,17.8" stroke="#101010" strokeWidth="0.9" strokeLinecap="round" />
          <path d="M12.2,17.8 Q16,16.6 19.8,17.8 L18.8,21.2 Q16,21.8 13.2,21.2 Z" fill="#26262a" />
          <path d="M13.6,18.6 L13.8,20.8 M14.8,18.2 L14.9,21 M16,18.2 L16,21.2 M17.2,18.2 L17.1,21 M18.4,18.6 L18.2,20.8" stroke="#a6acb4" strokeWidth="0.45" />
          <path d="M11.2,18.4 L12.2,19.6 L11.2,20.2 Z M20.8,18.4 L19.8,19.6 L20.8,20.2 Z" fill="#26262a" />
          <circle cx="8.5" cy="14" r="1.35" fill="#d4d8de" />
          <circle cx="8.5" cy="14" r="0.6" fill="#2a2d32" opacity="0.8" />
          <circle cx="23.5" cy="14" r="1.35" fill="#d4d8de" />
          <circle cx="23.5" cy="14" r="0.6" fill="#2a2d32" opacity="0.8" />
          <path d="M9.4,16 Q10,19.2 12,20.8 M22.6,16 Q22,19.2 20,20.8" stroke="#aab0b8" strokeWidth="0.45" fill="none" />
          <circle cx="11.2" cy="5.2" r="0.28" fill="#8a8f98" opacity="0.6" />
          <circle cx="20.8" cy="5.2" r="0.28" fill="#8a8f98" opacity="0.6" />
          <circle cx="9.8" cy="8.4" r="0.28" fill="#8a8f98" opacity="0.6" />
          <circle cx="22.2" cy="8.4" r="0.28" fill="#8a8f98" opacity="0.6" />
        </g>
      );
    case 'bounty_hunter':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#506b45" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={true} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <ellipse cx="10.8" cy="5.6" rx="1.8" ry="1.1" fill="#000" opacity="0.14" />
          <ellipse cx="21.2" cy="7" rx="1.3" ry="0.9" fill="#000" opacity="0.14" />
          <path d="M10,4.6 L12.4,6.8 M19.4,4.4 L22,7 M9.4,16.8 L11.4,19.6 M20.8,16.4 L22.4,18.4" stroke="#cdd8a8" strokeWidth="0.3" opacity="0.45" fill="none" />
          <path d="M14.9,2.4 L17.1,2.4 L16.9,9.8 L15.1,9.8 Z" fill={color} />
          <path d="M15.2,3.6 L16.8,3.6 M15.2,5.4 L16.8,5.4 M15.2,7.2 L16.8,7.2" stroke="#000" strokeWidth="0.3" opacity="0.4" />
          <path d="M9.5,9.8 L22.5,9.8 L22,13 L18.2,13 L18.2,19.8 L13.8,19.8 L13.8,13 L10,13 Z" fill="#0a0a0d" />
          <path d="M10.4,10.4 L21.6,10.4 L21.2,12.4 L17.6,12.4 L17.6,19.2 L14.4,19.2 L14.4,12.4 L10.8,12.4 Z" fill="#15171c" />
          <path d="M10.4,10.4 L21.6,10.4 L21.2,12.4 L17.6,12.4 L17.6,19.2 L14.4,19.2 L14.4,12.4 L10.8,12.4 Z" fill="url(#hl-glass)" />
          <path d="M11,10.9 L15,10.9" stroke="white" strokeWidth="0.4" opacity="0.35" strokeLinecap="round" />
          <path d="M10.8,11.6 L21.2,11.6" stroke="#d63b2e" strokeWidth="0.4" opacity="0.55" />
          <rect x="8" y="12.6" width="2.2" height="5.2" rx="0.7" fill={color} opacity="0.85" />
          <rect x="21.8" y="12.6" width="2.2" height="5.2" rx="0.7" fill={color} opacity="0.7" />
          <path d="M11,14.6 L12.8,14.8 M11,15.8 L12.8,16 M11,17 L12.8,17.2 M21,14.6 L19.2,14.8 M21,15.8 L19.2,16 M21,17 L19.2,17.2" stroke="#1d2b18" strokeWidth="0.4" opacity="0.8" />
          <path d="M12.6,20.2 L14,21.6 M19.4,20.2 L18,21.6" stroke="#1d2b18" strokeWidth="0.4" opacity="0.6" />
          <line x1="24.2" y1="11" x2="25.8" y2="2.2" stroke="#8a8f98" strokeWidth="0.55" />
          <rect x="25" y="1" width="1.6" height="1.6" rx="0.4" fill="#2b2f35" />
          <circle cx="25.8" cy="1.8" r="0.55" fill="#e23b2e" />
          <circle cx="10.4" cy="8.2" r="0.28" fill="#2a3a24" opacity="0.7" />
          <circle cx="21.6" cy="8.2" r="0.28" fill="#2a3a24" opacity="0.7" />
          <circle cx="11.8" cy="4.6" r="0.28" fill="#2a3a24" opacity="0.7" />
        </g>
      );
    case 'sith_hood':
      return (
        <g>
          <path d="M7,15 Q6,2 16,2 Q26,2 25,15 L22,15 Q23,8 16,7 Q9,8 10,15 Z" fill={color} />
          <path d="M16,2 Q12,5 11,10" stroke="white" strokeWidth="0.3" fill="none" opacity="0.12" />
          <path d="M16,7 Q11,8 10.5,13" stroke="#000" strokeWidth="0.6" fill="none" opacity="0.4" />
        </g>
      );
    case 'jedi_hood':
      return (
        <g>
          <path d="M7.5,15 Q6.5,2.5 16,2.5 Q25.5,2.5 24.5,15 L22,15 Q22.5,8.5 16,7.5 Q9.5,8.5 10,15 Z" fill={color} />
          <path d="M16,2.5 Q12.5,5 11.5,10" stroke="white" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M10,9 Q12,7.5 16,7.5" stroke="#000" strokeWidth="0.4" fill="none" opacity="0.2" />
        </g>
      );
    case 'princess_buns':
      return (
        <g>
          <circle cx="8" cy="9" r="3.2" fill={color} />
          <circle cx="24" cy="9" r="3.2" fill={color} />
          <path d="M5.5,8 Q8,6 10.5,8" stroke="#000" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M21.5,8 Q24,6 26.5,8" stroke="#000" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M9,5 Q16,0 23,5 L23,8 Q16,4 9,8 Z" fill={color} />
        </g>
      );
    case 'mandalorian':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#b9c1ca" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={true} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M16,2.4 L16,9.4" stroke="#000" strokeWidth="0.4" opacity="0.3" />
          <path d="M15.3,2.6 L15.3,9.2 M16.7,2.6 L16.7,9.2" stroke="#fff" strokeWidth="0.35" opacity="0.4" />
          <path d="M8.6,9.2 Q16,6.4 23.4,9.2" stroke="#000" strokeWidth="0.45" fill="none" opacity="0.3" />
          <path d="M9.6,6.8 Q16,4.2 22.4,6.8" stroke="#000" strokeWidth="0.3" fill="none" opacity="0.18" />
          <path d="M9.2,9.6 L22.8,9.6 L22.2,13.2 L18.2,13.2 L18.2,19.8 L13.8,19.8 L13.8,13.2 L9.8,13.2 Z" fill="#08080b" />
          <path d="M9.8,10.1 L22.2,10.1 L21.7,12.7 L17.7,12.7 L17.7,19.3 L14.3,19.3 L14.3,12.7 L10.3,12.7 Z" fill="#14161c" />
          <path d="M9.8,10.1 L22.2,10.1 L21.7,12.7 L17.7,12.7 L17.7,19.3 L14.3,19.3 L14.3,12.7 L10.3,12.7 Z" fill="url(#hl-glass)" />
          <path d="M10.6,10.7 Q13,10.2 15.4,10.5" stroke="white" strokeWidth="0.45" fill="none" opacity="0.4" strokeLinecap="round" />
          <path d="M9.8,14.6 L12.4,16 M9.8,16 L12.4,17.4 M9.9,17.4 L12.3,18.8 M22.2,14.6 L19.6,16 M22.2,16 L19.6,17.4 M22.1,17.4 L19.7,18.8" stroke="#000" strokeWidth="0.35" opacity="0.4" />
          <circle cx="8.4" cy="12.8" r="1.2" fill="#000" opacity="0.2" />
          <circle cx="23.6" cy="12.8" r="1.2" fill="#000" opacity="0.2" />
          <path d="M10.4,19.8 L13.2,21.4 M21.6,19.8 L18.8,21.4 M13.4,20.2 L18.6,20.2" stroke="#000" strokeWidth="0.4" opacity="0.32" />
          <path d="M10.6,5.2 l1,1 M21.4,5.2 l-1,1 M17.4,7 l1.2,0.4" stroke="#fff" strokeWidth="0.25" opacity="0.3" />
          <circle cx="10.2" cy="8.2" r="0.28" fill="#000" opacity="0.35" />
          <circle cx="21.8" cy="8.2" r="0.28" fill="#000" opacity="0.35" />
          <circle cx="9" cy="14.2" r="0.28" fill="#000" opacity="0.35" />
          <circle cx="23" cy="14.2" r="0.28" fill="#000" opacity="0.35" />
        </g>
      );
    case 'sith_lord':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.9,13 Q7.5,1.8 16,1.6 Q24.5,1.8 24.1,13 L25.4,18.6 Q25.6,23 16,23.2 Q6.4,23 6.6,18.6 Z" fill="#15151b" />
          <HelmetShade d="M7.9,13 Q7.5,1.8 16,1.6 Q24.5,1.8 24.1,13 L25.4,18.6 Q25.6,23 16,23.2 Q6.4,23 6.6,18.6 Z" metal={true} />
          <path d="M7.4,18.6 Q7.8,22.4 16,22.6 Q24.2,22.4 24.6,18.6 Q22,21 16,21.2 Q10,21 7.4,18.6 Z" fill="#000" opacity="0.35" />
          <path d="M9.8,12 Q9.4,3.6 14.6,2.6" stroke="white" strokeWidth="0.55" fill="none" opacity="0.4" strokeLinecap="round" />
          <path d="M16,1.8 L16,8" stroke="#000" strokeWidth="0.5" opacity="0.45" />
          <path d="M14.8,2 L14.8,7.6 M17.2,2 L17.2,7.6" stroke="#fff" strokeWidth="0.3" opacity="0.2" />
          <path d="M8.8,9.2 Q16,6.6 23.2,9.2 L23.2,10.8 Q16,8.4 8.8,10.8 Z" fill="#050506" />
          <path d="M9.4,10.6 Q12.6,9.6 14.9,11.4 Q14.7,14.8 11.6,14.8 Q9,13.6 9.4,10.6 Z" fill="#0c0405" />
          <path d="M22.6,10.6 Q19.4,9.6 17.1,11.4 Q17.3,14.8 20.4,14.8 Q23,13.6 22.6,10.6 Z" fill="#0c0405" />
          <path d="M10.2,11.2 Q12,10.7 13.6,11.6 Q13.4,13 12,13.2 Q10.4,12.6 10.2,11.2 Z" fill="#7a1018" opacity="0.7" />
          <path d="M21.8,11.2 Q20,10.7 18.4,11.6 Q18.6,13 20,13.2 Q21.6,12.6 21.8,11.2 Z" fill="#7a1018" opacity="0.7" />
          <path d="M10.6,11.5 Q11.6,11.1 12.6,11.5 M21.4,11.5 Q20.4,11.1 19.4,11.5" stroke="#ff8a8a" strokeWidth="0.35" opacity="0.7" fill="none" strokeLinecap="round" />
          <path d="M15,12.8 L17,12.8 L16.5,16.6 L15.5,16.6 Z" fill="#3c3c44" />
          <path d="M9.2,14.6 Q8.6,18 10.2,21 M22.8,14.6 Q23.4,18 21.8,21" stroke="#000" strokeWidth="0.5" opacity="0.5" fill="none" />
          <path d="M11.6,16.8 L20.4,16.8 L19.2,21.6 Q16,22.2 12.8,21.6 Z" fill="#232328" />
          <path d="M11.9,17.2 L20.1,17.2" stroke="#6a6a76" strokeWidth="0.35" />
          <path d="M13,18.2 L19,18.2 M13.4,19.6 L18.6,19.6" stroke="#6a6a76" strokeWidth="0.3" />
          <path d="M13.8,17.6 L13.8,21.2 M14.9,17.6 L14.9,21.4 M16,17.6 L16,21.5 M17.1,17.6 L17.1,21.4 M18.2,17.6 L18.2,21.2" stroke="#8a8a96" strokeWidth="0.4" />
          <path d="M14.4,14.2 L17.6,14.2 L16,17 Z" fill="#2c2c33" />
          <circle cx="8.6" cy="16.4" r="0.45" fill="#c1121f" opacity="0.8" />
          <circle cx="23.4" cy="16.4" r="0.45" fill="#c1121f" opacity="0.8" />
        </g>
      );
    case 'clone_trooper':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f6f6f6" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={false} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M16,2.4 L16,9" stroke="#b8bec6" strokeWidth="0.4" />
          <path d="M8.6,8.6 Q16,6.2 23.4,8.6 L23.4,9.8 Q16,7.6 8.6,9.8 Z" fill="#cdd2d9" />
          <path d="M9.4,9.2 L22.6,9.2 L22.2,13.4 L18.2,13.4 L18.2,19.8 L13.8,19.8 L13.8,13.4 L9.8,13.4 Z" fill="#0b0b10" />
          <path d="M10,9.8 L22,9.8 L21.7,13 L17.7,13 L17.7,19.3 L14.3,19.3 L14.3,13 L10.3,13 Z" fill="#171a22" />
          <path d="M10,9.8 L22,9.8 L21.7,13 L17.7,13 L17.7,19.3 L14.3,19.3 L14.3,13 L10.3,13 Z" fill="url(#hl-glass)" />
          <path d="M10.8,10.4 Q13,10 15.4,10.3" stroke="white" strokeWidth="0.45" fill="none" opacity="0.45" strokeLinecap="round" />
          <path d="M8.2,13.6 L10.8,13.6 L10.8,17.8 Q9.4,18.4 8.2,17.2 Z" fill={color} opacity="0.9" />
          <path d="M23.8,13.6 L21.2,13.6 L21.2,17.8 Q22.6,18.4 23.8,17.2 Z" fill={color} opacity="0.9" />
          <path d="M11.2,14.8 L12.8,15.2 M11.2,16 L12.8,16.4 M20.8,14.8 L19.2,15.2 M20.8,16 L19.2,16.4" stroke="#8a8f98" strokeWidth="0.35" />
          <path d="M11.2,18.6 L12.8,20.2 M12,20.2 L13.4,21.2 M20.8,18.6 L19.2,20.2 M20,20.2 L18.6,21.2" stroke="#8a8f98" strokeWidth="0.45" />
          <path d="M14.3,19.8 L17.7,19.8" stroke="#8a8f98" strokeWidth="0.4" />
          <circle cx="8.3" cy="11.8" r="1.15" fill="#c8ced6" />
          <circle cx="8.3" cy="11.8" r="0.45" fill="#3a3d42" opacity="0.7" />
          <circle cx="23.7" cy="11.8" r="1.15" fill="#c8ced6" />
          <circle cx="23.7" cy="11.8" r="0.45" fill="#3a3d42" opacity="0.7" />
          <path d="M9.6,5.6 Q12,3.4 14.6,3 M22.4,5.6 Q20,3.4 17.4,3" stroke="#c2c8d0" strokeWidth="0.35" fill="none" />
          <circle cx="10.8" cy="8.2" r="0.28" fill="#8a8f98" opacity="0.6" />
          <circle cx="21.2" cy="8.2" r="0.28" fill="#8a8f98" opacity="0.6" />
        </g>
      );
    case 'ewok_hood':
      return (
        <g>
          <circle cx="10.5" cy="4.5" r="2.2" fill={color} />
          <circle cx="21.5" cy="4.5" r="2.2" fill={color} />
          <circle cx="10.5" cy="4.5" r="1.1" fill="#3b2a1a" opacity="0.6" />
          <circle cx="21.5" cy="4.5" r="1.1" fill="#3b2a1a" opacity="0.6" />
          <path d="M7.5,15 Q6.5,3.5 16,3.5 Q25.5,3.5 24.5,15 L22,15 Q22.5,8.5 16,7.5 Q9.5,8.5 10,15 Z" fill={color} />
          <path d="M9,9 L10.5,10 M12,6 L13,7.5 M20,6 L19,7.5 M23,9 L21.5,10" stroke="#3b2a1a" strokeWidth="0.35" opacity="0.5" />
        </g>
      );
    case 'masters_ears':
      return (
        <g>
          <polygon points="9.3,10.5 1.5,8.5 9.3,15.5" fill={color} />
          <polygon points="22.7,10.5 30.5,8.5 22.7,15.5" fill={color} />
          <polygon points="8.3,11 4,9.8 8.3,14" fill="#000" opacity="0.12" />
          <polygon points="23.7,11 28,9.8 23.7,14" fill="#000" opacity="0.12" />
        </g>
      );
    case 'grievous_mask':
      return (
        <g>
          <polygon points="8.4,8 5.6,1.4 10.6,5.8" fill="#c8c1ac" />
          <polygon points="23.6,8 26.4,1.4 21.4,5.8" fill="#c8c1ac" />
          <polygon points="11,5.4 10.2,-0.4 14,3.6" fill="#d6cfba" />
          <polygon points="21,5.4 21.8,-0.4 18,3.6" fill="#d6cfba" />
          <polygon points="8.4,8 5.6,1.4 10.6,5.8" fill="#000" opacity="0.18" />
          <polygon points="23.6,8 26.4,1.4 21.4,5.8" fill="#000" opacity="0.18" />
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#e8e2d0" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={false} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <path d="M8.4,9.4 Q16,6.6 23.6,9.4 L23.6,10.8 Q16,8.2 8.4,10.8 Z" fill="#cfc8b3" />
          <path d="M8.6,9.8 Q16,7.4 23.4,9.8" stroke="#000" strokeWidth="0.3" fill="none" opacity="0.35" />
          <path d="M9,10.4 Q12.4,9.8 14.8,12 Q14.6,14.6 11.6,14.6 Q8.8,13.2 9,10.4 Z" fill="#1a1a1e" />
          <path d="M23,10.4 Q19.6,9.8 17.2,12 Q17.4,14.6 20.4,14.6 Q23.2,13.2 23,10.4 Z" fill="#1a1a1e" />
          <ellipse cx="12.2" cy="12.4" rx="1.8" ry="0.95" transform="rotate(18 12.2 12.4)" fill="#f4c20d" />
          <ellipse cx="19.8" cy="12.4" rx="1.8" ry="0.95" transform="rotate(-18 19.8 12.4)" fill="#f4c20d" />
          <ellipse cx="12.6" cy="12.6" rx="0.5" ry="0.8" fill="#1a1a1e" />
          <ellipse cx="19.4" cy="12.6" rx="0.5" ry="0.8" fill="#1a1a1e" />
          <path d="M11,11.8 Q12.2,11.4 13.4,12" stroke="#fff6b0" strokeWidth="0.3" opacity="0.7" fill="none" />
          <path d="M9.2,9 L10.6,10.4 M22.8,9 L21.4,10.4 M15.4,7.6 L15.4,10 M16.6,7.6 L16.6,10" stroke="#8d8575" strokeWidth="0.35" opacity="0.7" />
          <path d="M15.2,12.4 L16.8,12.4 L16.4,16.2 L15.6,16.2 Z" fill="#8d8575" />
          <path d="M15.8,12.8 L15.8,16" stroke="#3b372f" strokeWidth="0.3" />
          <path d="M9.6,14.8 L9.6,19.6 M10.8,15 L10.8,20 M12,15.4 L12,20.4 M22.4,14.8 L22.4,19.6 M21.2,15 L21.2,20 M20,15.4 L20,20.4" stroke="#7a7262" strokeWidth="0.45" />
          <path d="M13,17 L19,17 L18.4,21.4 Q16,22 13.6,21.4 Z" fill="#5a5446" />
          <path d="M14.2,17.6 L14.2,21 M15.4,17.6 L15.4,21.3 M16.6,17.6 L16.6,21.3 M17.8,17.6 L17.8,21" stroke="#d8d1bd" strokeWidth="0.4" />
          <path d="M10.4,6 L11.6,7.4 M21.6,6.4 L20.6,7.8 M12.6,5.4 L13.4,6.6" stroke="#8d8575" strokeWidth="0.3" opacity="0.7" />
          <circle cx="12" cy="7.4" r="0.2" fill="#8d8575" /><circle cx="20" cy="7.2" r="0.2" fill="#8d8575" /><circle cx="14" cy="6" r="0.2" fill="#8d8575" />
        </g>
      );
    case 'rex_helmet':
      return (
        <g>
          <HelmetDefs />
          <ellipse cx="16" cy="23.2" rx="6" ry="1.2" fill="#000" opacity="0.28" />
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f6f6f6" />
          <HelmetShade d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" metal={false} />
          <path d="M8.6,17 Q8.8,21.6 16,21.9 Q23.2,21.6 23.4,17 Q22,20.4 16,20.6 Q10,20.4 8.6,17 Z" fill="#000" opacity="0.14" />
          <path d="M8.4,12.5 Q8.1,4 15,2.9" stroke="white" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
          <rect x="14.8" y="2.3" width="2.4" height="7.2" fill="#1f5fd6" />
          <path d="M12.6,2.9 Q11.6,6 11.4,9.4 L12.4,9.4 Q12.6,6 13.4,3 Z" fill="#1f5fd6" />
          <path d="M19.4,2.9 Q20.4,6 20.6,9.4 L19.6,9.4 Q19.4,6 18.6,3 Z" fill="#1f5fd6" />
          <path d="M8.2,12.6 L8.2,6.4 Q8.7,4.6 10.6,3.9 L10.4,12.6 Z" fill="#1f5fd6" />
          <path d="M23.8,12.6 L23.8,6.4 Q23.3,4.6 21.4,3.9 L21.6,12.6 Z" fill="#1f5fd6" />
          <path d="M23.8,12.6 L23.8,6.4 Q23.3,4.6 21.4,3.9 L21.6,12.6 Z" fill="#000" opacity="0.16" />
          <path d="M14.8,3.6 L17.2,3.6 M14.8,5.4 L17.2,5.4" stroke="#fff" strokeWidth="0.3" opacity="0.4" />
          <path d="M8.6,9.2 Q16,6.8 23.4,9.2 L23.4,10.2 Q16,8 8.6,10.2 Z" fill="#1f5fd6" />
          <path d="M9.4,9.7 L22.6,9.7 L22.2,13.6 L18.2,13.6 L18.2,19.8 L13.8,19.8 L13.8,13.6 L9.8,13.6 Z" fill="#0b0b10" />
          <path d="M10,10.3 L22,10.3 L21.7,13.2 L17.7,13.2 L17.7,19.3 L14.3,19.3 L14.3,13.2 L10.3,13.2 Z" fill="#171a22" />
          <path d="M10,10.3 L22,10.3 L21.7,13.2 L17.7,13.2 L17.7,19.3 L14.3,19.3 L14.3,13.2 L10.3,13.2 Z" fill="url(#hl-glass)" />
          <path d="M10.8,10.9 Q13,10.5 15.4,10.8" stroke="white" strokeWidth="0.45" fill="none" opacity="0.45" strokeLinecap="round" />
          <path d="M8.2,13.8 L10.8,13.8 L10.8,18.4 Q9.4,19 8.2,17.8 Z" fill="#1f5fd6" />
          <path d="M23.8,13.8 L21.2,13.8 L21.2,18.4 Q22.6,19 23.8,17.8 Z" fill="#1f5fd6" />
          <path d="M23.8,13.8 L21.2,13.8 L21.2,18.4 Q22.6,19 23.8,17.8 Z" fill="#000" opacity="0.16" />
          <path d="M11.2,14.8 L12.8,15.2 M11.2,16 L12.8,16.4 M20.8,14.8 L19.2,15.2 M20.8,16 L19.2,16.4" stroke="#8a8f98" strokeWidth="0.35" />
          <path d="M11.2,18.8 L12.8,20.4 M20.8,18.8 L19.2,20.4" stroke="#8a8f98" strokeWidth="0.45" />
          <circle cx="8.3" cy="12" r="1.1" fill="#c8ced6" />
          <circle cx="8.3" cy="12" r="0.45" fill="#3a3d42" opacity="0.7" />
          <path d="M12.4,5 L13.4,6 M18.6,5 L19.4,6.2 M9.4,7 L10.4,7.6" stroke="#6b7280" strokeWidth="0.3" opacity="0.7" />
          <circle cx="10.6" cy="9.0" r="0.28" fill="#8a8f98" opacity="0.6" />
          <circle cx="21.4" cy="9.0" r="0.28" fill="#8a8f98" opacity="0.6" />
        </g>
      );
    case 'none':
    default:
      return null;
  }
}
