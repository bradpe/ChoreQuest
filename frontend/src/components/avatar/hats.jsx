/* ── Hats ──
   Enhanced with subtle shading/highlights for depth. */

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
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#e8e8e8" />
          <path d="M14.5,2.5 L17.5,2.5 L17.8,9 L14.2,9 Z" fill={color} />
          <rect x="9.3" y="10" width="13.4" height="5.2" rx="2.4" fill="#1b1b1b" />
          <path d="M10.5,11.2 Q12.5,10.5 14.5,10.9" stroke="white" strokeWidth="0.5" fill="none" opacity="0.35" strokeLinecap="round" />
          <rect x="9" y="9.6" width="14" height="0.9" rx="0.4" fill={color} opacity="0.9" />
          <rect x="12.6" y="17.4" width="6.8" height="3.6" rx="1" fill="#bfc4ca" />
          <path d="M13.8,18.2 L13.8,20.4 M15,18.2 L15,20.4 M16.2,18.2 L16.2,20.4 M17.4,18.2 L17.4,20.4 M18.4,18.2 L18.4,20.4" stroke="#6b7280" strokeWidth="0.4" />
          <path d="M9,5 Q11,3.2 14,3" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" strokeLinecap="round" />
        </g>
      );
    case 'trooper':
      return (
        <g>
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f6f6f6" />
          <path d="M9.6,9.6 L15,9.6 L14.4,13.6 Q12,14.4 10.2,13.2 Z" fill="#161616" />
          <path d="M22.4,9.6 L17,9.6 L17.6,13.6 Q20,14.4 21.8,13.2 Z" fill="#161616" />
          <path d="M15.2,14 L16.8,14 L16.4,16.6 L15.6,16.6 Z" fill="#9aa0a8" />
          <path d="M12.6,17.4 L19.4,17.4 L18.4,21 L13.6,21 Z" fill="#2a2a2a" />
          <path d="M14.2,18 L14.2,20.4 M16,18 L16,20.4 M17.8,18 L17.8,20.4" stroke="#8a8f98" strokeWidth="0.4" />
          <path d="M11.2,14.6 L11.4,16.8" stroke="#161616" strokeWidth="0.6" />
          <path d="M9,5 Q11,3.2 14,3" stroke="#c7ccd3" strokeWidth="0.5" fill="none" opacity="0.8" strokeLinecap="round" />
        </g>
      );
    case 'bounty_hunter':
      return (
        <g>
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill={color} />
          <path d="M15.4,2.4 L16.6,2.4 L16.6,9.6 L15.4,9.6 Z" fill="#c9a227" />
          <path d="M9.4,10 L22.6,10 L21.6,14.6 L10.4,14.6 Z" fill="#161616" />
          <path d="M10.4,11 L21.6,11" stroke="#c9a227" strokeWidth="0.5" opacity="0.7" />
          <rect x="8.2" y="12" width="2.2" height="4.6" rx="0.6" fill="#c9a227" opacity="0.75" />
          <path d="M12.6,17.6 L19.4,17.6 L18.6,21 L13.4,21 Z" fill="#3a3a3a" />
          <path d="M14,18.2 L14,20.4 M16,18.2 L16,20.4 M18,18.2 L18,20.4" stroke="#8a8f98" strokeWidth="0.4" />
          <line x1="24.2" y1="11" x2="25.6" y2="2" stroke="#8a8f98" strokeWidth="0.5" />
          <circle cx="25.6" cy="1.8" r="0.9" fill="#d33" />
          <path d="M9,5 Q11,3.2 14,3" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" strokeLinecap="round" />
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
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill={color} />
          <path d="M9.6,9.4 L22.4,9.4 L22.4,13.4 L18,13.4 L18,19.8 L14,19.8 L14,13.4 L9.6,13.4 Z" fill="#101014" />
          <path d="M10.4,10.4 Q12,9.9 14,10.1" stroke="white" strokeWidth="0.45" fill="none" opacity="0.3" strokeLinecap="round" />
          <path d="M9.8,15 L12.4,16.6 M22.2,15 L19.6,16.6 M10.6,18 L12.8,19.4 M21.4,18 L19.2,19.4" stroke="#000" strokeWidth="0.35" opacity="0.3" />
          <line x1="16" y1="2.4" x2="16" y2="9" stroke="#000" strokeWidth="0.35" opacity="0.25" />
          <path d="M9,5 Q11,3.2 14,3" stroke="white" strokeWidth="0.5" fill="none" opacity="0.45" strokeLinecap="round" />
        </g>
      );
    case 'sith_lord':
      return (
        <g>
          <path d="M7.4,13 Q6.9,1.6 16,1.6 Q25.1,1.6 24.6,13 L24.6,17.5 Q24.6,22.8 16,22.8 Q7.4,22.8 7.4,17.5 Z" fill={color} />
          <path d="M8,8.2 Q16,5.6 24,8.2 L24,9.6 Q16,7.2 8,9.6 Z" fill="#050505" opacity="0.85" />
          <path d="M9.6,10.2 L14.6,11 L14.2,13.8 Q11.6,14.2 9.8,12.6 Z" fill="#3a0a0a" />
          <path d="M22.4,10.2 L17.4,11 L17.8,13.8 Q20.4,14.2 22.2,12.6 Z" fill="#3a0a0a" />
          <path d="M10.6,11.2 L13.2,11.6" stroke="#ff4a4a" strokeWidth="0.4" opacity="0.7" />
          <path d="M21.4,11.2 L18.8,11.6" stroke="#ff4a4a" strokeWidth="0.4" opacity="0.7" />
          <polygon points="15.2,14.4 16.8,14.4 16,17.2" fill="#4a4a52" />
          <path d="M12.8,17.6 L19.2,17.6 L18.4,21.4 Q16,22 13.6,21.4 Z" fill="#26262c" />
          <path d="M14.2,18.4 L14.2,20.6 M15.4,18.4 L15.4,20.8 M16.6,18.4 L16.6,20.8 M17.8,18.4 L17.8,20.6" stroke="#7a7a86" strokeWidth="0.4" />
          <path d="M9.5,4.6 Q12,2.6 15,2.4" stroke="white" strokeWidth="0.5" fill="none" opacity="0.25" strokeLinecap="round" />
        </g>
      );
    case 'clone_trooper':
      return (
        <g>
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f4f4f4" />
          <path d="M9.4,9.4 L22.6,9.4 L22.6,13.6 L18.2,13.6 L18.2,19.6 L13.8,19.6 L13.8,13.6 L9.4,13.6 Z" fill="#14141a" />
          <rect x="8.2" y="14" width="2.6" height="3" rx="0.6" fill={color} opacity="0.75" />
          <rect x="21.2" y="14" width="2.6" height="3" rx="0.6" fill={color} opacity="0.75" />
          <path d="M11.4,17.8 L12.8,19.6 M20.6,17.8 L19.2,19.6" stroke="#8a8f98" strokeWidth="0.45" />
          <path d="M9,5 Q11,3.2 14,3" stroke="#c7ccd3" strokeWidth="0.5" fill="none" opacity="0.8" strokeLinecap="round" />
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
          <polygon points="8.6,7 10,0.8 12.6,5.2" fill="#2a2a30" />
          <polygon points="23.4,7 22,0.8 19.4,5.2" fill="#2a2a30" />
          <polygon points="14.4,3.4 16,-0.8 17.6,3.4" fill="#2a2a30" />
          <path d="M7.8,13 Q7.3,2.6 16,2.4 Q24.7,2.6 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill={color} />
          <path d="M9.6,9.4 L14.8,11.6 L14,13.8 L9.8,12.2 Z" fill="#15151a" />
          <path d="M22.4,9.4 L17.2,11.6 L18,13.8 L22.2,12.2 Z" fill="#15151a" />
          <path d="M10.8,10.6 L13.8,11.8 L11.2,12 Z" fill="#f4c20d" />
          <path d="M21.2,10.6 L18.2,11.8 L20.8,12 Z" fill="#f4c20d" />
          <path d="M16,3.2 L16,14.2" stroke="#000" strokeWidth="0.4" opacity="0.3" />
          <path d="M14.6,14.6 L17.4,14.6 L16,17" fill="#8d8575" stroke="none" />
          <path d="M12,17.4 L20,17.4 L19.2,21 Q16,21.8 12.8,21 Z" fill="#3b372f" />
          <path d="M13.4,18 L13.4,20.4 M14.7,18 L14.7,20.6 M16,18 L16,20.6 M17.3,18 L17.3,20.6 M18.6,18 L18.6,20.4" stroke="#c9c1ad" strokeWidth="0.4" />
          <path d="M8.4,14 L10.4,19.4 M23.6,14 L21.6,19.4" stroke="#000" strokeWidth="0.4" opacity="0.25" />
          <path d="M9.4,5.4 Q12,3.4 15,3.2" stroke="white" strokeWidth="0.5" fill="none" opacity="0.4" strokeLinecap="round" />
        </g>
      );
    case 'rex_helmet':
      return (
        <g>
          <path d="M7.8,13 Q7.3,2.2 16,2.2 Q24.7,2.2 24.2,13 L24.2,17.5 Q24.2,22.5 16,22.5 Q7.8,22.5 7.8,17.5 Z" fill="#f4f4f4" />
          <rect x="15" y="2.4" width="2" height="6.8" fill={color} />
          <path d="M8.4,12.4 L8.4,6.2 Q8.9,4.4 11.6,3.6 L11.6,12.4 Z" fill={color} />
          <path d="M23.6,12.4 L23.6,6.2 Q23.1,4.4 20.4,3.6 L20.4,12.4 Z" fill={color} />
          <path d="M9.6,9.6 L22.4,9.6 L22.4,13.6 L18.2,13.6 L18.2,19.6 L13.8,19.6 L13.8,13.6 L9.6,13.6 Z" fill="#14141a" />
          <rect x="8.4" y="14.6" width="2.4" height="3.4" rx="0.6" fill={color} />
          <rect x="21.2" y="14.6" width="2.4" height="3.4" rx="0.6" fill={color} />
          <path d="M11.4,18.2 L12.8,19.8 M20.6,18.2 L19.2,19.8" stroke="#8a8f98" strokeWidth="0.45" />
          <path d="M12.4,3.6 Q14,3 15,3" stroke="#c7ccd3" strokeWidth="0.5" fill="none" opacity="0.8" strokeLinecap="round" />
        </g>
      );
    case 'none':
    default:
      return null;
  }
}
