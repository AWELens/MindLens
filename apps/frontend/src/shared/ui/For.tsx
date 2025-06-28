/**
 * @author Andrii Volynets
 * @project MidnLens
 * @license APGL
 * @version 1.0.0
 * @file For.tsx
 * @module shared/ui/For
 * @since 1.0.0
 * @date 2025-06-28
  
 */

import React, { memo, useMemo } from "react";

/**
 * Props for the generic `For` component.
 *
 * @template T - The type of items in the `each` array.
 */
interface ForProps<T = unknown> {
  /**
   * An array of items to iterate over.
   */
  each: T[] | null | undefined;

  /**
   * A function that receives an item and its index, and returns a React node.
   * Must be memoized (e.g., with useCallback) to prevent unnecessary re-renders.
   * @param item - The current item from the `each` array.
   * @param index - The index of the current item.
   * @returns A React node representing the item.
   */
  children: (item: T, index: number) => React.ReactNode;

  /**
   * A function that returns a unique, stable key for the given item.
   * Must be memoized (e.g., with useCallback) to prevent unnecessary re-renders.
   * @param item - The current item from the `each` array.
   * @param index - The index of the current item.
   * @returns A unique key used by React for optimal reconciliation.
   */
  getKey: (item: T, index: number) => string | number;

  /**
   * Optional fallback to render when `each` is empty or null/undefined.
   */
  fallback?: React.ReactNode;
}

/**
 * Generic, memoized list rendering component for efficient iteration over arrays.
 * Optimized for large lists with custom key extraction and fallback support.
 *
 * @example
 * ```tsx
 * const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const getKey = useCallback((user) => user.id, []);
 * const renderUser = useCallback((user) => <div>{user.name}</div>, []);
 *
 * <For each={users} getKey={getKey} fallback={<div>No users found</div>}>
 *   {renderUser}
 * </For>
 * ```
 *
 * @template T - The type of data to iterate.
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
