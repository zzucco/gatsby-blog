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
    <div className={header}>
      <p>zachary zucco</p>
      <a href="https://github.com/zzucco">github 1</a>
      <br/>
      <a href="https://github.com/chevreaux">github 2</a>
    </div>
  );
}
