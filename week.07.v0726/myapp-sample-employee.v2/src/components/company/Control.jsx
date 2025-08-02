import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
export default function Control() {
  const modes = useMemo(() => ["register", "upgrade", "delete", "초기화"], []);
  const handleClick = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <div>
      {modes.map((mod, row) => (
        <Link
          key={row}
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleClick(mod);
          }}
        >
          {mod}
        </Link>
      ))}
    </div>
  );
}
