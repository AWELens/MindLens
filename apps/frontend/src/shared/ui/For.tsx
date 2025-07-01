/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file For.tsx
 * @module shared\ui
 * @since 0.0.0
 * @date 2025-07-01
 */

import React, { memo, useMemo } from "react";

/**
 * Props for the For component.
 * @template T - The type of items in the array.
 */
interface ForProps<T = unknown> {
  /**
   * An array of items to render.
   * Can be null or undefined, in which case no items will be rendered.
   */
  each: T[] | null | undefined;
  /**
   * A function that takes an item and its index and returns a React node to render.
   */
  children: (item: T, index: number) => React.ReactNode;
  /**
   * A function that returns a unique key for each item.
   * This is used to optimize rendering and should be stable across renders.
   */
  getKey: (item: T, index: number) => string | number;
  /**
   * A fallback component to render when the array is empty or null.
   * If not provided, nothing will be rendered in this case.
   */
  fallback?: React.ReactNode;
}
/**
 * A React component that renders a list of items.
 * It takes an array of items and a render function to display each item.
 * If the array is empty or null, it can render a fallback component.
 *
 * @param {ForProps<T>} props - The properties for the For component.
 * @returns {React.ReactNode} The rendered items or fallback.
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
