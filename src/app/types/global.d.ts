declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png';

declare module '*.jpeg';

declare module '*.jpeg';

declare const __IS_DEV__: boolean;
