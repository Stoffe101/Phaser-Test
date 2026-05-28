(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/game/scenes/LandingScene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phaser/dist/phaser.esm.js [app-client] (ecmascript)");
;
class LandingScene extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Scene {
    logo;
    titleText;
    constructor(){
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
            fontFamily: "Arial"
        });
        this.titleText.setOrigin(0.5);
        this.tweens.add({
            targets: this.logo,
            y: centerY - 20,
            duration: 1200,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut"
        });
        this.scale.on("resize", this.handleResize, this);
    }
    handleResize(gameSize) {
        const centerX = gameSize.width / 2;
        const centerY = gameSize.height / 2;
        this.logo?.setPosition(centerX, centerY);
        this.titleText?.setPosition(centerX, centerY + 150);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LandingPhaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPhaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phaser/dist/phaser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$game$2f$scenes$2f$LandingScene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/game/scenes/LandingScene.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LandingPhaser() {
    _s();
    const gameContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPhaser.useEffect": ()=>{
            if (!gameContainerRef.current) return;
            const config = {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AUTO,
                parent: gameContainerRef.current,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: "#111827",
                scene: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$game$2f$scenes$2f$LandingScene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                ],
                scale: {
                    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Scale.RESIZE,
                    autoCenter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Scale.CENTER_BOTH
                }
            };
            const game = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Game(config);
            return ({
                "LandingPhaser.useEffect": ()=>{
                    game.destroy(true);
                }
            })["LandingPhaser.useEffect"];
        }
    }["LandingPhaser.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gameContainerRef,
        className: "phaser-container"
    }, void 0, false, {
        fileName: "[project]/components/LandingPhaser.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(LandingPhaser, "zu0FhIJKmLDY+d3VUXHtBofU0VA=");
_c = LandingPhaser;
var _c;
__turbopack_context__.k.register(_c, "LandingPhaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0a9u_1j._.js.map