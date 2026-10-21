/* ── Face extras ──
   Blush now uses a softer, more natural tint. */

export function renderFaceExtra(style) {
  switch (style) {
    case 'freckles':
      return (
        <g opacity="0.4">
          {[[11, 16], [13, 16.5], [12, 17.5], [19, 16], [21, 16.5], [20, 17.5]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="0.4" fill="#8b4513" />
          ))}
        </g>
      );
    case 'blush':
      return (
        <>
          <ellipse cx="11" cy="16.5" rx="2" ry="1" fill="#e8878a" opacity="0.2" />
          <ellipse cx="21" cy="16.5" rx="2" ry="1" fill="#e8878a" opacity="0.2" />
        </>
      );
    case 'face_paint':
      return (
        <g opacity="0.5">
          <line x1="10" y1="14" x2="13" y2="15" stroke="#e74c3c" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="10" y1="15" x2="13" y2="16" stroke="#3b82f6" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="19" y1="15" x2="22" y2="14" stroke="#e74c3c" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="19" y1="16" x2="22" y2="15" stroke="#3b82f6" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      );
    case 'scar':
      return (
        <g opacity="0.5">
          <line x1="19" y1="11" x2="21" y2="16" stroke="#cc6666" strokeWidth="0.6" strokeLinecap="round" />
          <line x1="19.5" y1="13" x2="21" y2="13" stroke="#cc6666" strokeWidth="0.4" strokeLinecap="round" />
          <line x1="20" y1="14.5" x2="21.3" y2="14.2" stroke="#cc6666" strokeWidth="0.4" strokeLinecap="round" />
        </g>
      );
    case 'bandage':
      return (
        <>
          <rect x="18" y="11" width="4" height="3" rx="0.5" fill="#f5d6b8" />
          <line x1="19" y1="12" x2="21" y2="12" stroke="#cc6666" strokeWidth="0.3" />
          <line x1="19" y1="13" x2="21" y2="13" stroke="#cc6666" strokeWidth="0.3" />
        </>
      );
    case 'stickers':
      return (
        <g opacity="0.7">
          <text x="21" y="12" fill="#f9d71c" fontSize="3" fontFamily="sans-serif">&#9733;</text>
          <circle cx="10.5" cy="16" r="1" fill="#ff6b9d" opacity="0.6" />
        </g>
      );
    case 'sith_eyes':
      return (
        <g>
          <ellipse cx="12" cy="13.5" rx="2.2" ry="1.4" fill="#f4c20d" opacity="0.4" />
          <ellipse cx="20" cy="13.5" rx="2.2" ry="1.4" fill="#f4c20d" opacity="0.4" />
          <path d="M10.5,12 Q9,10 9.5,8.5 M11.5,15 Q9.5,16.5 10,18 M13,15 Q13,17 12,18.5" stroke="#5b2a6e" strokeWidth="0.35" fill="none" opacity="0.65" />
          <path d="M21.5,12 Q23,10 22.5,8.5 M20.5,15 Q22.5,16.5 22,18 M19,15 Q19,17 20,18.5" stroke="#5b2a6e" strokeWidth="0.35" fill="none" opacity="0.65" />
        </g>
      );
    case 'padawan_braid':
      return (
        <g>
          <path d="M23,13 Q26.5,16 25,22 Q24.5,25 25.5,27" stroke="#8b5a2b" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          <path d="M24.2,15.5 L25.8,16.5 M24.8,19 L26.4,20 M24.6,22.5 L26,23.5" stroke="#5a3b1e" strokeWidth="0.35" opacity="0.6" />
          <circle cx="25.5" cy="27.3" r="0.9" fill="#c0392b" />
        </g>
      );
    case 'zabrak_tattoo':
      return (
        <g opacity="0.75" stroke="#8b1a1a" strokeWidth="0.45" fill="none" strokeLinecap="round">
          <path d="M16,8 L16,11.5 M14,8.5 L14,11 M18,8.5 L18,11" />
          <path d="M10.5,15.5 L12.5,17 M10.5,17 L12.5,18.5" />
          <path d="M21.5,15.5 L19.5,17 M21.5,17 L19.5,18.5" />
        </g>
      );
    case 'none':
    default:
      return null;
  }
}
