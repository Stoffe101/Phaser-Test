module.exports = [
"[project]/game/scenes/LandingScene.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phaser/dist/phaser.esm.js [app-ssr] (ecmascript)");
;
class LandingScene extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Scene {
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
}),
"[project]/components/LandingPhaser.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPhaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/phaser/dist/phaser.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$game$2f$scenes$2f$LandingScene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/game/scenes/LandingScene.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LandingPhaser() {
    const gameContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gameContainerRef.current) return;
        const config = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].AUTO,
            parent: gameContainerRef.current,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: "#111827",
            scene: [
                __TURBOPACK__imported__module__$5b$project$5d2f$game$2f$scenes$2f$LandingScene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            ],
            scale: {
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Scale.RESIZE,
                autoCenter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Scale.CENTER_BOTH
            }
        };
        const game = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phaser$2f$dist$2f$phaser$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Game(config);
        return ()=>{
            game.destroy(true);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: gameContainerRef,
        className: "phaser-container"
    }, void 0, false, {
        fileName: "[project]/components/LandingPhaser.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_0p45e2g._.js.map