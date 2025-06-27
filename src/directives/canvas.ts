import type { Directive } from "vue";
import { setupPhysicsSimulation } from "../physics/physics";

export const canvasDirective: Directive = {
  mounted(el: HTMLCanvasElement) {
    el.width = 800;
    el.height = 600;
    const ctx = el.getContext("2d")!;
    setupPhysicsSimulation(ctx);
  },
};
