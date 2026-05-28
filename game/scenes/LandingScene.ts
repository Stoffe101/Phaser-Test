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

    this.logo = this.add.sprite(centerX, centerY, "logo");
    this.logo.setOrigin(0.5);
    this.logo.setScale(0.5);

    this.titleText = this.add.text(centerX, centerY + 150, "DevGuild", {
      fontSize: "40px",
      color: "#ffffff",
      fontFamily: "Arial",
    });

    this.titleText.setOrigin(0.5);

    this.tweens.add({
      targets: this.logo,
      y: centerY - 20,
      duration: 1200,
      yoyo: true,
      repeat: -1,
      ease: "Sine.easeInOut",
    });

    this.scale.on("resize", this.handleResize, this);
  }

  private handleResize(gameSize: Phaser.Structs.Size) {
    const centerX = gameSize.width / 2;
    const centerY = gameSize.height / 2;

    this.logo?.setPosition(centerX, centerY);
    this.titleText?.setPosition(centerX, centerY + 150);
  }
}
