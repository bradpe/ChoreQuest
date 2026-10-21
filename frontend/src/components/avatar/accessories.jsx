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
    case 'none':
    default:
      return null;
  }
}
