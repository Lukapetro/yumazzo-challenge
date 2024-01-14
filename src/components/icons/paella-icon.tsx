import React from 'react';

interface PaellaIconProps {
  className?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

export const PaellaIcon: React.FC<PaellaIconProps> = ({
  className = '',
  width = '28',
  height = '28',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    className={className}
  >
    <path
      fill="#463C4B"
      d="m20.364 1.98 5.657 5.656.707-.707a3 3 0 0 0 0-4.243l-1.414-1.414a3 3 0 0 0-4.243 0l-.707.707Zm5.243 3.828-3.415-3.415a.5.5 0 0 1 .136-.804 2 2 0 0 1 2.279.39l1.414 1.414a2 2 0 0 1 .39 2.28.5.5 0 0 1-.804.135ZM1.98 20.364l5.656 5.657-.707.707a3 3 0 0 1-4.243 0l-1.414-1.414a3 3 0 0 1 0-4.243l.707-.707Zm3.828 5.243-3.415-3.415a.5.5 0 0 0-.804.136 2 2 0 0 0 .39 2.279l1.414 1.414a2 2 0 0 0 2.28.39.5.5 0 0 0 .135-.804Z"
    />
    <path
      fill="#555A6E"
      d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z"
    />
    <path
      fill="#6E788C"
      d="M.5 14.5A.5.5 0 0 1 0 14c0-3.74 1.456-7.255 4.1-9.9A13.908 13.908 0 0 1 14 0a.5.5 0 0 1 0 1C6.832 1 1 6.832 1 14a.5.5 0 0 1-.5.5Z"
    />
    <path
      fill="#463C4B"
      d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2 2 7.373 2 14s5.373 12 12 12Z"
    />
    <path
      fill="#FFBE28"
      d="M16.667 19.833a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM20.833 15.333a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM21.333 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#FAA019"
      d="M25.12 14.486a.5.5 0 0 0 0-.972.5.5 0 0 0-.085-.967.5.5 0 0 0-.168-.956.5.5 0 0 0-.252-.938.5.5 0 0 0-.332-.912.5.5 0 0 0-.41-.88.5.5 0 0 0-.486-.841.5.5 0 0 0-.556-.796.5.5 0 0 0-.625-.744.5.5 0 0 0-.686-.686.5.5 0 0 0-.744-.624.5.5 0 0 0-.796-.557.5.5 0 0 0-.84-.486.5.5 0 0 0-.88-.41.5.5 0 0 0-.913-.332.5.5 0 0 0-.938-.252.5.5 0 0 0-.956-.168.5.5 0 0 0-.967-.085.5.5 0 0 0-.972 0 .5.5 0 0 0-.967.085.5.5 0 0 0-.956.168.5.5 0 0 0-.938.252.5.5 0 0 0-.912.332.5.5 0 0 0-.88.41.5.5 0 0 0-.841.486.5.5 0 0 0-.796.556.5.5 0 0 0-.744.625.5.5 0 0 0-.686.686.5.5 0 0 0-.624.744.5.5 0 0 0-.557.796.5.5 0 0 0-.486.84.5.5 0 0 0-.41.88.5.5 0 0 0-.332.913.5.5 0 0 0-.251.938.5.5 0 0 0-.17.956.5.5 0 0 0-.084.967.5.5 0 0 0 0 .972.5.5 0 0 0 .085.967.5.5 0 0 0 .168.956.5.5 0 0 0 .252.938.5.5 0 0 0 .332.912.5.5 0 0 0 .41.88.5.5 0 0 0 .486.841.5.5 0 0 0 .557.796.5.5 0 0 0 .624.744.5.5 0 0 0 .686.686.5.5 0 0 0 .744.624.5.5 0 0 0 .796.557.5.5 0 0 0 .84.486.5.5 0 0 0 .88.41.5.5 0 0 0 .913.332.5.5 0 0 0 .938.252.5.5 0 0 0 .956.168.5.5 0 0 0 .967.085.5.5 0 0 0 .972 0 .5.5 0 0 0 .967-.085.5.5 0 0 0 .956-.168.5.5 0 0 0 .938-.252.5.5 0 0 0 .912-.332.5.5 0 0 0 .88-.41.5.5 0 0 0 .841-.486.5.5 0 0 0 .796-.556.5.5 0 0 0 .744-.625.5.5 0 0 0 .686-.686.5.5 0 0 0 .624-.744.5.5 0 0 0 .557-.796.5.5 0 0 0 .486-.84.5.5 0 0 0 .41-.88.5.5 0 0 0 .332-.913.5.5 0 0 0 .252-.938.5.5 0 0 0 .168-.956.5.5 0 0 0 .085-.967Z"
    />
    <path
      fill="#FFBE28"
      d="M12.08 3.167a11.01 11.01 0 0 0-8.913 8.913 7.5 7.5 0 1 0 8.913-8.913Z"
    />
    <path
      fill="#FAA019"
      d="M14.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.833 9.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8 13.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.333 16.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14.167 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM13.333 11.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#F04B37"
      d="M19.667 20.833a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6.667 8.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM16.167 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM23.167 10.833a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#5FAA46"
      d="M11.5 13.167a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.833 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM11.5 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM22.333 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM13.667 24.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14.5 4.333a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path fill="#F04B37" d="M4.833 18a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <path
      fill="#FAA019"
      d="M18 11.667a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM16.167 6.333a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM17.5 8.833a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <path
      fill="#E1322D"
      d="M10.25 6.75a.25.25 0 0 1-.177-.427l.043-.042a1.8 1.8 0 0 1 1.281-.531H12.5a.25.25 0 1 1 0 .5h-1.103c-.35 0-.68.137-.928.384l-.042.043a.25.25 0 0 1-.177.073ZM11 7.5a.25.25 0 0 1-.177-.427l.043-.042a1.8 1.8 0 0 1 1.281-.531h1.103a.25.25 0 1 1 0 .5h-1.103c-.35 0-.68.137-.928.384l-.042.043A.25.25 0 0 1 11 7.5ZM17.5 5a4.5 4.5 0 1 1 0 9v-1a2 2 0 1 0 0-4V5Z"
    />
    <path
      fill="#F04B37"
      d="M17.5 5h-7.25a.25.25 0 1 0 0 .5h.3c.528 0 1 .331 1.176.83A4.002 4.002 0 0 0 15.5 9h2a2 2 0 1 0 0-4Z"
    />
    <path
      fill="#E1322D"
      d="M16 12h.5a1 1 0 0 1 1 1H16a.5.5 0 0 1 0-1ZM16 14h1.5v-1H16a.5.5 0 0 0 0 1Z"
    />
    <path
      fill="#F5826E"
      d="M17.25 5.5h-7a.25.25 0 1 1 0-.5h7a.25.25 0 1 1 0 .5Z"
    />
    <path fill="#463C4B" d="M13.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <path
      fill="#E1322D"
      d="M16.603 22.25H15.5a.25.25 0 1 1 0-.5h1.103c.35 0 .68-.137.928-.384l.042-.043a.25.25 0 0 1 .354.354l-.043.042a1.8 1.8 0 0 1-1.281.531ZM15.853 21.5H14.75a.25.25 0 1 1 0-.5h1.103c.35 0 .68-.137.928-.384l.042-.043a.25.25 0 0 1 .354.354l-.043.042a1.8 1.8 0 0 1-1.281.531ZM10.5 23a4.5 4.5 0 1 1 0-9v1a2 2 0 1 0 0 4v4Z"
    />
    <path
      fill="#F04B37"
      d="M10.5 23h7.25a.25.25 0 1 0 0-.5h-.3a1.247 1.247 0 0 1-1.176-.83A4.002 4.002 0 0 0 12.5 19h-2a2 2 0 1 0 0 4Z"
    />
    <path
      fill="#E1322D"
      d="M12 16h-.5a1 1 0 0 1-1-1H12a.5.5 0 0 1 0 1ZM12 14h-1.5v1H12a.5.5 0 0 0 0-1Z"
    />
    <path
      fill="#F5826E"
      d="M10.75 22.5h7a.25.25 0 1 1 0 .5h-7a.25.25 0 1 1 0-.5Z"
    />
    <path
      fill="#463C4B"
      d="M14.5 23a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM19 15.5a2 2 0 0 0-2 2 .5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5 2 2 0 0 0-2-2Z"
    />
    <path fill="#555A6E" d="M19 15.5a2 2 0 0 0-2 2h1a1 1 0 0 0 1-1v-1Z" />
    <path
      fill="#463C4B"
      d="M24.5 14a2 2 0 0 0-2-2 .5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5 2 2 0 0 0 2-2Z"
    />
    <path fill="#555A6E" d="M24.5 14a2 2 0 0 0-2-2v1a1 1 0 0 0 1 1h1Z" />
    <path
      fill="#463C4B"
      d="M3.5 14a2 2 0 0 1 2-2 .5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5 2 2 0 0 1-2-2Z"
    />
    <path fill="#555A6E" d="M3.5 14a2 2 0 0 1 2-2v1a1 1 0 0 1-1 1h-1Z" />
    <path
      fill="#463C4B"
      d="M9 12a2 2 0 0 1-2-2 .5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5 2 2 0 0 1-2 2Z"
    />
    <path fill="#555A6E" d="M9 12a2 2 0 0 1-2-2h1a1 1 0 0 1 1 1v1Z" />
  </svg>
);
