declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (to: To, options?: { replace?: boolean; state?: any }): void;
  (delta: number): void;
}
