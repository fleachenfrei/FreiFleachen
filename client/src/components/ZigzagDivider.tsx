interface ZigzagDividerProps {
  color?: string;
  position?: 'top' | 'bottom';
}

export default function ZigzagDivider({ color = 'white', position = 'bottom' }: ZigzagDividerProps) {
  const rotation = position === 'top' ? 'rotate-180' : '';
  
  return (
    <div className={`relative w-full overflow-hidden ${rotation}`}>
      <svg
        className="w-full h-3"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L10,12 L20,0 L30,12 L40,0 L50,12 L60,0 L70,12 L80,0 L90,12 L100,0 L110,12 L120,0 L130,12 L140,0 L150,12 L160,0 L170,12 L180,0 L190,12 L200,0 L210,12 L220,0 L230,12 L240,0 L250,12 L260,0 L270,12 L280,0 L290,12 L300,0 L310,12 L320,0 L330,12 L340,0 L350,12 L360,0 L370,12 L380,0 L390,12 L400,0 L410,12 L420,0 L430,12 L440,0 L450,12 L460,0 L470,12 L480,0 L490,12 L500,0 L510,12 L520,0 L530,12 L540,0 L550,12 L560,0 L570,12 L580,0 L590,12 L600,0 L610,12 L620,0 L630,12 L640,0 L650,12 L660,0 L670,12 L680,0 L690,12 L700,0 L710,12 L720,0 L730,12 L740,0 L750,12 L760,0 L770,12 L780,0 L790,12 L800,0 L810,12 L820,0 L830,12 L840,0 L850,12 L860,0 L870,12 L880,0 L890,12 L900,0 L910,12 L920,0 L930,12 L940,0 L950,12 L960,0 L970,12 L980,0 L990,12 L1000,0 L1010,12 L1020,0 L1030,12 L1040,0 L1050,12 L1060,0 L1070,12 L1080,0 L1090,12 L1100,0 L1110,12 L1120,0 L1130,12 L1140,0 L1150,12 L1160,0 L1170,12 L1180,0 L1190,12 L1200,0 L1200,12 L0,12 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
