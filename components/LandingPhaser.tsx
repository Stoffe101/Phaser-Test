"use client";

import { useEffect, useRef } from "react";

export default function LandingPhaser() {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let game: any = null;

    async function startGame() {
      if (!gameContainerRef.current) return;

      const Phaser = (await import("phaser")).default;
      const LandingScene = (await import("@/game/scenes/LandingScene")).default;

      const config = {
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

      game = new Phaser.Game(config);
    }

    startGame();

    return () => {
      game?.destroy(true);
    };
  }, []);

  return <div ref={gameContainerRef} className="phaser-container" />;
}