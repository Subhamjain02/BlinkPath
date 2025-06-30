const CircleArrow = ({ color = "#f44336", size = 200, arrowShift = 10 }) => {
  // Calculate shifted coordinates
  const tipX = 55 + arrowShift;
  const baseX = 40 + arrowShift;
  const endX = 25 + arrowShift;
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 100 100"
    >
      <defs>
        <mask id="arrow-mask">
          <rect width="100" height="100" fill="white"/>
          <path 
            d={`M${tipX},50 L${baseX},60 L${baseX},55 L${endX},55 L${endX},45 L${baseX},45 L${baseX},40 Z`} 
            fill="black" 
          />
        </mask>
      </defs>
      
      <circle 
        cx="50" 
        cy="50" 
        r="35" 
        fill={color} 
        mask="url(#arrow-mask)" 
      />
    </svg>
  );
};

export default CircleArrow;