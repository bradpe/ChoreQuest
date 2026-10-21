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
          <path d="M8.5,13 Q8,3 16,3 Q24,3 23.5,13 L21,13 L21,9.5 L11,9.5 L11,13 Z" fill="#e8e8e8" />
          <rect x="10" y="7" width="12" height="2.5" rx="0.8" fill="#2b2b2b" opacity="0.75" />
          <rect x="14" y="3.5" width="4" height="2.5" rx="0.6" fill={color} />
          <path d="M11,5 Q13,3.5 16,3.5" stroke="white" strokeWidth="0.4" fill="none" opacity="0.4" />
        </g>
      );
    case 'trooper':
      return (
        <g>
          <path d="M8.5,14 Q8,2.5 16,2.5 Q24,2.5 23.5,14 L21,14 L21,11 L11,11 L11,14 Z" fill="white" />
          <path d="M10,7.5 L14.5,7.5 L14,10.5 L10.5,10.5 Z" fill="#1a1a1a" />
          <path d="M22,7.5 L17.5,7.5 L18,10.5 L21.5,10.5 Z" fill="#1a1a1a" />
          <rect x="15.2" y="10.5" width="1.6" height="3" rx="0.4" fill="#1a1a1a" opacity="0.7" />
          <path d="M11,4.5 Q13,3 16,3" stroke={color} strokeWidth="0.4" fill="none" opacity="0.3" />
        </g>
      );
    case 'bounty_hunter':
      return (
        <g>
          <path d="M8.5,14 Q8,2.5 16,2.5 Q24,2.5 23.5,14 L21,14 L21,11 L11,11 L11,14 Z" fill={color} />
          <path d="M10.5,8 L21.5,8 L21,10.5 L11,10.5 Z" fill="#1a1a1a" opacity="0.85" />
          <line x1="16" y1="2.5" x2="16" y2="8" stroke="#c9a227" strokeWidth="0.8" />
          <rect x="8.5" y="10" width="2" height="3" fill="#c9a227" opacity="0.7" />
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
          <path d="M8.5,14 Q8,2.5 16,2.5 Q24,2.5 23.5,14 L21,14 L21,11 L11,11 L11,14 Z" fill={color} />
          <rect x="10.5" y="7" width="11" height="2.2" rx="0.5" fill="#15151a" />
          <rect x="15" y="7" width="2" height="6" rx="0.5" fill="#15151a" />
          <path d="M11,4.5 Q13,3 16,3" stroke="white" strokeWidth="0.4" fill="none" opacity="0.4" />
          <line x1="16" y1="2.7" x2="16" y2="6.5" stroke="#000" strokeWidth="0.3" opacity="0.2" />
        </g>
      );
    case 'sith_lord':
      return (
        <g>
          <path d="M8,14 Q7.5,1.5 16,1.5 Q24.5,1.5 24,14 L21,14 L21,10.5 L11,10.5 L11,14 Z" fill={color} />
          <path d="M8.5,7.5 Q16,5.5 23.5,7.5 L23.5,8.8 Q16,7 8.5,8.8 Z" fill="#0a0a0a" opacity="0.8" />
          <ellipse cx="12.7" cy="9.3" rx="2" ry="1.1" transform="rotate(15 12.7 9.3)" fill="#3a0a0a" />
          <ellipse cx="19.3" cy="9.3" rx="2" ry="1.1" transform="rotate(-15 19.3 9.3)" fill="#3a0a0a" />
          <polygon points="15,10 17,10 16,12.5" fill="#4a4a52" />
          <path d="M11,3.5 Q13.5,2.2 16,2.2" stroke="white" strokeWidth="0.4" fill="none" opacity="0.25" />
        </g>
      );
    case 'clone_trooper':
      return (
        <g>
          <path d="M8.5,14 Q8,2.5 16,2.5 Q24,2.5 23.5,14 L21,14 L21,11 L11,11 L11,14 Z" fill="#f2f2f2" />
          <rect x="10.5" y="7" width="11" height="2.2" rx="0.5" fill="#15151a" />
          <rect x="15" y="7" width="2" height="5.5" rx="0.5" fill="#15151a" />
          <rect x="10.5" y="10" width="2" height="1.4" fill={color} opacity="0.7" />
          <rect x="19.5" y="10" width="2" height="1.4" fill={color} opacity="0.7" />
          <path d="M11,4.5 Q13,3 16,3" stroke="#9aa5b1" strokeWidth="0.4" fill="none" opacity="0.5" />
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
          <polygon points="9,6 10.5,0.5 13,5" fill="#2a2a30" />
          <polygon points="23,6 21.5,0.5 19,5" fill="#2a2a30" />
          <polygon points="14.5,4 16,-0.5 17.5,4" fill="#2a2a30" />
          <path d="M9,11.5 Q8.5,3 16,2.5 Q23.5,3 23,11.5 Q16,10 9,11.5 Z" fill={color} />
          <path d="M11.5,7 L14,8.6 L11.8,9.2 Z" fill="#f4c20d" />
          <path d="M20.5,7 L18,8.6 L20.2,9.2 Z" fill="#f4c20d" />
          <line x1="16" y1="3" x2="16" y2="9.5" stroke="#000" strokeWidth="0.35" opacity="0.3" />
          <path d="M10.5,5 Q13,3.5 16,3.5" stroke="white" strokeWidth="0.4" fill="none" opacity="0.35" />
        </g>
      );
    case 'rex_helmet':
      return (
        <g>
          <path d="M8.5,14 Q8,2.5 16,2.5 Q24,2.5 23.5,14 L21,14 L21,11 L11,11 L11,14 Z" fill="#f2f2f2" />
          <rect x="15" y="2.8" width="2" height="4.4" fill={color} />
          <path d="M10.3,10 L10.3,5.5 Q10.8,4.5 12,4.2 L12,10 Z" fill={color} />
          <path d="M21.7,10 L21.7,5.5 Q21.2,4.5 20,4.2 L20,10 Z" fill={color} />
          <rect x="10.5" y="7.2" width="11" height="2" rx="0.5" fill="#15151a" />
          <rect x="15" y="7.2" width="2" height="5.3" rx="0.5" fill="#15151a" />
          <path d="M13,3.6 Q14.5,3 16,3" stroke="#9aa5b1" strokeWidth="0.35" fill="none" opacity="0.5" />
        </g>
      );
    case 'none':
    default:
      return null;
  }
}
