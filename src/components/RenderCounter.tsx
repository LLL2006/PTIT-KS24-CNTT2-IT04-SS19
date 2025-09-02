import React, { useRef, useState, useEffect } from 'react'

export default function RenderCounter() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Component Render Counter</h2>
      <div style={{ margin: "20px 0" }}>
        <label>
          Input:&nbsp;
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            style={{ padding: "6px", fontSize: "1rem" }}
          />
        </label>
      </div>
      <div>
        Component đã render: <b>{renderCount.current} lần</b>
      </div>
    </div>
  )
}
