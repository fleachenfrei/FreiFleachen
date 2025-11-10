interface ZigzagDividerProps {
  color?: string;
  position?: 'top' | 'bottom';
}

export default function ZigzagDivider({ color = 'white', position = 'bottom' }: ZigzagDividerProps) {
  const rotation = position === 'top' ? 'rotate-180' : '';
  
  return (
    <div className={`relative w-full overflow-hidden ${rotation}`}>
      <svg
        className="w-full h-6 md:h-8"
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L30,30 L60,0 L90,30 L120,0 L150,30 L180,0 L210,30 L240,0 L270,30 L300,0 L330,30 L360,0 L390,30 L420,0 L450,30 L480,0 L510,30 L540,0 L570,30 L600,0 L630,30 L660,0 L690,30 L720,0 L750,30 L780,0 L810,30 L840,0 L870,30 L900,0 L930,30 L960,0 L990,30 L1020,0 L1050,30 L1080,0 L1110,30 L1140,0 L1170,30 L1200,0 L1200,30 L0,30 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
