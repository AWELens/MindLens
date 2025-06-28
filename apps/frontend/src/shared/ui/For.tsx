/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */

import React, { memo, useMemo } from "react";

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
interface ForProps<T = unknown> {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
  each: T[] | null | undefined;

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
  children: (item: T, index: number) => React.ReactNode;

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
  getKey: (item: T, index: number) => string | number;

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
  fallback?: React.ReactNode;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-06-28
 */
const For: React.FC<ForProps> = memo(<T,>({ each, children, getKey, fallback }: ForProps<T>) => {
  const renderedItems = useMemo(() => {
    if (!each || each.length === 0) {
      return fallback ?? null;
    }

    return each.map((item, index) => {
      const key = getKey(item, index);

      return <React.Fragment key={key}>{children(item, index)}</React.Fragment>;
    });
  }, [each, fallback, children, getKey]);

  return <>{renderedItems}</>;
});

For.displayName = "For";

export default For;
