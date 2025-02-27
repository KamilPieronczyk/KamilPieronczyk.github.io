const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              className="stop-color-light dark:stop-color-dark stop-opacity-light dark:stop-opacity-dark"
            />
            <stop
              offset="100%"
              className="stop-color-light-end dark:stop-color-dark-end stop-opacity-light-end dark:stop-opacity-dark-end"
            />
          </linearGradient>
        </defs>
        <g>
          <rect width="200%" height="100%" fill="url(#grad1)">
            <animate attributeName="x" from="-100%" to="0%" dur="60s" repeatCount="indefinite" />
          </rect>
          <rect width="200%" height="100%" fill="url(#grad1)">
            <animate attributeName="x" from="0%" to="100%" dur="60s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    </div>
  )
}

export default Background

