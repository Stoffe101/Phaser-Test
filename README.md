# Next.js + Phaser Landing Starter

Detta är ett enkelt startpaket för en landing page där Phaser visar en logga/sprite i mitten.

## Kom igång

Installera dependencies:

```bash
npm install
```

Starta projektet:

```bash
npm run dev
```

Öppna sedan:

```text
http://localhost:3000
```

## Viktigt

Phaser laddar just nu `/logo.png`.

Om man vill använda SVG-loggan som finns i paketet kan ni antingen:
1. Byta filnamn i `LandingScene.ts` från `/logo.png` till `/logo.svg`
2. Eller lägga in er egen `logo.png` i `/public`

## Mappstruktur

```text
/app
  layout.tsx
  page.tsx
  globals.css

/components
  LandingPhaser.tsx

/game
  /scenes
    LandingScene.ts

/public
  logo.svg
```
