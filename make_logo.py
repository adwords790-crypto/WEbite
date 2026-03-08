# We'll craft the SVG logo by hand
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 70" width="220" height="70">
  <defs>
    <clipPath id="circleClip">
      <circle cx="35" cy="35" r="26"/>
    </clipPath>
  </defs>

  <!-- Outer rounded rectangle border (dark navy) -->
  <rect x="1" y="1" width="218" height="68" rx="10" ry="10"
        fill="#1a1f3c" stroke="#1a1f3c" stroke-width="1"/>

  <!-- ── GLOBE ICON ── -->
  <!-- White base circle -->
  <circle cx="35" cy="37" r="22" fill="white"/>

  <!-- Orange curved band — bottom arc -->
  <path d="M14 44 Q25 55 56 44 Q48 58 35 59 Q21 58 14 44Z" fill="#f47c20"/>

  <!-- Teal curved band — middle -->
  <path d="M13 34 Q24 26 57 34 Q56 44 14 44 Q13 39 13 34Z" fill="#00a8a8"/>

  <!-- Orange curved band — upper middle -->
  <path d="M15 26 Q26 18 55 26 Q56 30 57 34 Q24 26 13 34 Q13 30 15 26Z" fill="#f47c20"/>

  <!-- Teal curved band — top -->
  <path d="M35 15 Q47 15 55 26 Q26 18 15 26 Q22 15 35 15Z" fill="#00a8a8"/>

  <!-- Clip all globe bands to circle -->
  <g clip-path="url(#circleClip)" transform="translate(0,2)">
    <circle cx="35" cy="35" r="22" fill="white"/>
    <path d="M14 44 Q25 55 56 44 Q48 58 35 59 Q21 58 14 44Z" fill="#f47c20"/>
    <path d="M13 34 Q24 26 57 34 Q56 44 14 44 Q13 39 13 34Z" fill="#00a8a8"/>
    <path d="M15 26 Q26 18 55 26 Q56 30 57 34 Q24 26 13 34 Q13 30 15 26Z" fill="#f47c20"/>
    <path d="M35 15 Q47 15 55 26 Q26 18 15 26 Q22 15 35 15Z" fill="#00a8a8"/>
  </g>

  <!-- Star on top of globe -->
  <polygon points="35,10 36.5,14.5 41,14.5 37.5,17.5 39,22 35,19 31,22 32.5,17.5 29,14.5 33.5,14.5"
           fill="#00a8a8" transform="translate(0,-2)"/>

  <!-- ── TEXT ── -->
  <!-- ZENITH bold -->
  <text x="68" y="42" font-family="Arial Black, sans-serif" font-weight="900"
        font-size="24" fill="white" letter-spacing="1">ZENITH</text>

  <!-- CORPORATION smaller -->
  <text x="69" y="56" font-family="Arial, sans-serif" font-weight="400"
        font-size="11" fill="#cccccc" letter-spacing="3.5">CORPORATION</text>
</svg>'''

with open('/home/claude/zencorp/logo.svg', 'w') as f:
    f.write(svg)
print("SVG written")
