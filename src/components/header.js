import * as React from "react";
import { header } from "./header.module.css";
export default function Header() {
  const logo = String.raw`
   ______     __  __     ______     __   ___  ______     ______     ______     __  __    
  /\  ___\   /\ \_\ \   /\  ___\   /\ \ /  / /\  __ \   /\  ___\   /\  __ \   /\ \/\ \   
  \ \ \____  \ \  __ \  \ \  __\   \ \ V  /  \ \  __<   \ \  __\   \ \  __ \  \ \ \_\ \  
   \ \_____\  \ \_\ \_\  \ \_____\  \ \__/    \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\ 
    \/_____/   \/_/\/_/   \/_____/   \/_/      \/_/ /_/   \/_____/   \/_/\/_/   \/_____/ `;
  return (
    <div>
      <pre className={header}>{logo}</pre>
    </div>
  );
}
