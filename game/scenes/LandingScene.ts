import Phaser from "phaser";

export default class LandingScene extends Phaser.Scene {
  private logo?: Phaser.GameObjects.Sprite;
  private titleText?: Phaser.GameObjects.Text;

  constructor() {
    super("LandingScene");
  }

  preload() {
    this.load.image("logo", "/logo.png");
  }

  create() {
  const centerX = this.scale.width / 2;
  const centerY = this.scale.height / 2;

  const logo = this.add.sprite(centerX, centerY, "logo");

  logo.setOrigin(0.5);
  logo.setScale(0.5);

  // Gör loggan klickbar
  logo.setInteractive({ cursor: "pointer" });

  // När man klickar
  logo.on("pointerdown", () => {
    window.location.href = "/login";
  });

  // Hover-effekt
  logo.on("pointerover", () => {
    logo.setScale(0.51);
  });

  logo.on("pointerout", () => {
    logo.setScale(0.5);
  });


    this.logo = this.add.sprite(centerX, centerY, "logo");
    this.logo.setOrigin(0.5);
    this.logo.setScale(0.5);

    this.titleText = this.add.text(centerX, centerY + 150, "DevGuild", {
      fontSize: "40px",
      color: "#ffffff",
      fontFamily: "Arial",
    });

    this.titleText.setOrigin(0.5);

    this.scale.on("resize", this.handleResize, this);
  }

  private handleResize(gameSize: Phaser.Structs.Size) {
    const centerX = gameSize.width / 2;
    const centerY = gameSize.height / 2;

    this.logo?.setPosition(centerX, centerY);
    this.titleText?.setPosition(centerX, centerY + 150);
  }
}
