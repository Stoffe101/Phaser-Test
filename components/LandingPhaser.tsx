"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";
import LandingScene from "@/game/scenes/LandingScene";

export default function LandingPhaser() {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: gameContainerRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: "#111827",
      scene: [LandingScene],
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainerRef} className="phaser-container" />;
}
