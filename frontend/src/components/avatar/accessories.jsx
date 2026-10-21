/* ── Accessories ──
   Enhanced with subtle detail/shading. */

export function renderAccessory(style, color) {
  switch (style) {
    case 'scarf':
      return (
        <g>
          <rect x="9" y="20" width="14" height="3" rx="1" fill={color} />
          <rect x="9" y="20" width="3" height="6" rx="1" fill={color} />
          <line x1="10" y1="22" x2="11" y2="22" stroke="white" strokeWidth="0.3" opacity="0.15" />
        </g>
      );
    case 'necklace':
      return (
        <g>
          <path d="M12,22 Q16,25 20,22" stroke={color} strokeWidth="0.6" fill="none" />
          <circle cx="16" cy="24" r="1" fill={color} />
          <circle cx="15.7" cy="23.7" r="0.3" fill="white" opacity="0.3" />
        </g>
      );
    case 'bow_tie':
      return (
        <g>
          <polygon points="14,22 16,23 14,24" fill={color} />
          <polygon points="18,22 16,23 18,24" fill={color} />
          <circle cx="16" cy="23" r="0.5" fill={color} />
        </g>
      );
    case 'cape':
      return (
        <g opacity="0.7">
          {/* Cape drapes from shoulder seams and tapers outward */}
          <path d="M11,21 Q9,26 8,32 L24,32 Q23,26 21,21" fill={color} />
          {/* Subtle fabric folds */}
          <path d="M13,22 Q12,27 10,31" stroke="white" strokeWidth="0.3" fill="none" opacity="0.12" />
          <path d="M19,22 Q20,27 22,31" stroke="black" strokeWidth="0.3" fill="none" opacity="0.06" />
        </g>
      );
    case 'wings':
      return (
        <g opacity="0.6">
          <path d="M9,24 Q4,20 5,26 Q6,29 9,28" fill={color} />
          <path d="M23,24 Q28,20 27,26 Q26,29 23,28" fill={color} />
          <path d="M8,24 Q5,21 6,25" stroke="white" strokeWidth="0.3" fill="none" opacity="0.15" />
          <path d="M24,24 Q27,21 26,25" stroke="white" strokeWidth="0.3" fill="none" opacity="0.15" />
        </g>
      );
    case 'shield':
      return (
        <g>
          {/* Heater shield held on left arm */}
          <path d="M8,21 L14,21 L14,26 Q11,31 8,26 Z" fill={color} />
          <line x1="11" y1="22" x2="11" y2="28" stroke="white" strokeWidth="0.5" opacity="0.35" />
          <circle cx="11" cy="24.5" r="1.2" fill="white" opacity="0.15" />
        </g>
      );
    case 'sword':
      return (
        <g transform="rotate(30, 20, 25)">
          {/* Blade — upper part visible, lower hidden behind body */}
          <rect x="19.4" y="17" width="1.2" height="14" rx="0.3" fill="#c0c0c0" />
          <line x1="19.7" y1="18" x2="19.7" y2="30" stroke="white" strokeWidth="0.2" opacity="0.3" />
          {/* Crossguard */}
          <rect x="17.5" y="16" width="5" height="1.5" rx="0.5" fill={color} />
          {/* Grip */}
          <rect x="19.4" y="11.5" width="1.2" height="5" rx="0.3" fill={color} />
          {/* Pommel */}
          <circle cx="20" cy="11.5" r="1" fill={color} />
        </g>
      );
    case 'saber_blue':
      return (
        <g transform="rotate(25, 22, 26)">
          <rect x="21.2" y="10" width="1.6" height="15" rx="0.8" fill="#4aa8ff" opacity="0.35" />
          <rect x="21.5" y="10.5" width="1" height="14" rx="0.5" fill="#4aa8ff" />
          <rect x="21.8" y="11" width="0.4" height="13" rx="0.2" fill="white" opacity="0.85" />
          <rect x="21" y="25" width="2" height="4.5" rx="0.4" fill="#8a8f98" />
          <rect x="21" y="26" width="2" height="0.6" fill="#444" />
          <rect x="21" y="28" width="2" height="0.6" fill="#444" />
        </g>
      );
    case 'saber_red':
      return (
        <g transform="rotate(25, 22, 26)">
          <rect x="21.2" y="10" width="1.6" height="15" rx="0.8" fill="#ff3b3b" opacity="0.35" />
          <rect x="21.5" y="10.5" width="1" height="14" rx="0.5" fill="#ff3b3b" />
          <rect x="21.8" y="11" width="0.4" height="13" rx="0.2" fill="white" opacity="0.85" />
          <rect x="21" y="25" width="2" height="4.5" rx="0.4" fill="#8a8f98" />
          <rect x="21" y="26" width="2" height="0.6" fill="#444" />
          <rect x="21" y="28" width="2" height="0.6" fill="#444" />
        </g>
      );
    case 'saber_green':
      return (
        <g transform="rotate(25, 22, 26)">
          <rect x="21.2" y="10" width="1.6" height="15" rx="0.8" fill="#4cd964" opacity="0.35" />
          <rect x="21.5" y="10.5" width="1" height="14" rx="0.5" fill="#4cd964" />
          <rect x="21.8" y="11" width="0.4" height="13" rx="0.2" fill="white" opacity="0.85" />
          <rect x="21" y="25" width="2" height="4.5" rx="0.4" fill="#8a8f98" />
          <rect x="21" y="26" width="2" height="0.6" fill="#444" />
          <rect x="21" y="28" width="2" height="0.6" fill="#444" />
        </g>
      );
    case 'blaster':
      return (
        <g transform="rotate(-10, 22, 26)">
          <rect x="19" y="24" width="9" height="3" rx="0.8" fill="#4a4f57" />
          <rect x="26" y="24.6" width="3.5" height="1.2" rx="0.4" fill="#2b2f35" />
          <path d="M20,27 L21.5,27 L21,30.5 L19.3,30.5 Z" fill="#2b2f35" />
          <rect x="22" y="23" width="3" height="1" rx="0.3" fill={color} />
          <line x1="19.5" y1="24.8" x2="27" y2="24.8" stroke="white" strokeWidth="0.3" opacity="0.25" />
        </g>
      );
    case 'jedi_robe':
      return (
        <g>
          <path d="M9,20 L16,26 L23,20 L25,31 L7,31 Z" fill={color} opacity="0.9" />
          <path d="M11,20.5 L16,25 L21,20.5" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.25" />
          <path d="M9,20 L16,26 L23,20" stroke="white" strokeWidth="0.3" fill="none" opacity="0.2" />
          <rect x="12.5" y="26.5" width="7" height="1.4" rx="0.4" fill="#5a3b1e" />
        </g>
      );
    case 'saber_purple':
      return (
        <g transform="rotate(25, 22, 26)">
          <rect x="21.2" y="10" width="1.6" height="15" rx="0.8" fill="#a855f7" opacity="0.35" />
          <rect x="21.5" y="10.5" width="1" height="14" rx="0.5" fill="#a855f7" />
          <rect x="21.8" y="11" width="0.4" height="13" rx="0.2" fill="white" opacity="0.85" />
          <rect x="21" y="25" width="2" height="4.5" rx="0.4" fill="#8a8f98" />
          <rect x="21" y="26" width="2" height="0.6" fill="#444" />
          <rect x="21" y="28" width="2" height="0.6" fill="#444" />
        </g>
      );
    case 'saber_double':
      return (
        <g transform="rotate(25, 22, 22)">
          <rect x="21.2" y="5" width="1.6" height="13" rx="0.8" fill="#ff3b3b" opacity="0.35" />
          <rect x="21.5" y="5.5" width="1" height="12" rx="0.5" fill="#ff3b3b" />
          <rect x="21.8" y="6" width="0.4" height="11" rx="0.2" fill="white" opacity="0.85" />
          <rect x="21" y="18" width="2" height="4.5" rx="0.4" fill="#8a8f98" />
          <rect x="21" y="19.2" width="2" height="0.6" fill="#444" />
          <rect x="21" y="21" width="2" height="0.6" fill="#444" />
          <rect x="21.2" y="22.5" width="1.6" height="9" rx="0.8" fill="#ff3b3b" opacity="0.35" />
          <rect x="21.5" y="22.5" width="1" height="8.5" rx="0.5" fill="#ff3b3b" />
          <rect x="21.8" y="23" width="0.4" height="7.5" rx="0.2" fill="white" opacity="0.85" />
        </g>
      );
    case 'bandolier':
      return (
        <g>
          <path d="M10,20.5 L23,30" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          {[[12, 22], [14.5, 23.8], [17, 25.6], [19.5, 27.4]].map(([x, y], i) => (
            <rect key={i} x={x - 0.6} y={y - 0.9} width="1.2" height="1.8" rx="0.3" fill="#c9a227" transform={`rotate(36 ${x} ${y})`} />
          ))}
          <path d="M10,20 L23,29.4" stroke="white" strokeWidth="0.3" opacity="0.2" />
        </g>
      );
    case 'mando_jetpack':
      return (
        <g>
          <rect x="8" y="21" width="3.5" height="8" rx="1.5" fill={color} />
          <rect x="20.5" y="21" width="3.5" height="8" rx="1.5" fill={color} />
          <path d="M8.5,29 Q9.75,33 11,29 Z" fill="#f39c12" opacity="0.85" />
          <path d="M21,29 Q22.25,33 23.5,29 Z" fill="#f39c12" opacity="0.85" />
          <rect x="8.7" y="22" width="2" height="1.2" rx="0.4" fill="white" opacity="0.25" />
          <rect x="21.2" y="22" width="2" height="1.2" rx="0.4" fill="white" opacity="0.25" />
          <rect x="8" y="24.5" width="3.5" height="0.8" fill="#000" opacity="0.2" />
          <rect x="20.5" y="24.5" width="3.5" height="0.8" fill="#000" opacity="0.2" />
        </g>
      );
    case 'holocron':
      return (
        <g>
          <circle cx="25" cy="21" r="3.6" fill={color} opacity="0.2" />
          <rect x="23.4" y="19.4" width="3.2" height="3.2" rx="0.3" transform="rotate(45 25 21)" fill={color} />
          <path d="M25,19.2 L25,22.8 M23.2,21 L26.8,21" stroke="white" strokeWidth="0.35" opacity="0.7" />
          <circle cx="25" cy="21" r="0.5" fill="white" opacity="0.9" />
        </g>
      );
    case 'grievous_cloak':
      return (
        <g>
          <path d="M9,20 L7,31 L9.5,29.5 L11.5,31.7 L14,29.8 L16,31.8 L18,29.8 L20.5,31.7 L22.5,29.5 L25,31 L23,20 Z" fill={color} opacity="0.9" />
          <path d="M9.5,21 L8.4,28 M22.5,21 L23.6,28" stroke="white" strokeWidth="0.3" opacity="0.15" />
          <circle cx="16" cy="20.8" r="0.8" fill="#c9a227" />
        </g>
      );
    case 'rex_blasters':
      return (
        <g>
          <g transform="rotate(8 7 26)">
            <rect x="3" y="25" width="6.5" height="2.4" rx="0.6" fill="#4a4f57" />
            <rect x="8.5" y="25.5" width="2.6" height="1.1" rx="0.3" fill="#2b2f35" />
            <rect x="3.5" y="25.3" width="3" height="0.7" fill={color} />
            <path d="M4,27.3 L5.3,27.3 L5,30 L3.7,30 Z" fill="#2b2f35" />
          </g>
          <g transform="rotate(-8 25 26) translate(32,0) scale(-1,1)">
            <rect x="3" y="25" width="6.5" height="2.4" rx="0.6" fill="#4a4f57" />
            <rect x="8.5" y="25.5" width="2.6" height="1.1" rx="0.3" fill="#2b2f35" />
            <rect x="3.5" y="25.3" width="3" height="0.7" fill={color} />
            <path d="M4,27.3 L5.3,27.3 L5,30 L3.7,30 Z" fill="#2b2f35" />
          </g>
        </g>
      );
    case 'none':
    default:
      return null;
  }
}
