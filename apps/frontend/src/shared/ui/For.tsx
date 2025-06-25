import React, { memo, useMemo } from "react";

/**
 * Props for the generic `For` component.
 *
 * @template T - The type of items in the `each` array.
 */
export interface ForProps<T> {
  /**
   * An array of items to iterate over.
   */
  each: T[];

  /**
   * A function that receives an item and its index, and returns a React node.
   * @param item - The current item from the `each` array.
   * @param index - The index of the current item.
   * @returns A React node representing the item.
   */
  children: (item: T, index: number) => React.ReactNode;

  /**
   * A function that returns a unique, stable key for the given item.
   * @param item - The current item from the `each` array.
   * @param index - The index of the current item.
   * @returns A unique key used by React for optimal reconciliation.
   */
  getKey: (item: T, index: number) => React.Key;
}

/**
 * Generic, memoized list rendering component that provides fine-grained
 * control over rendering with custom key extraction and avoids unnecessary
 * recomputation via useMemo and React.memo.
 *
 * Optimized for large lists and nested structures.
 *
 * @example
 * ```tsx
 * <For each={users} getKey={(user) => user.id}>
 *   {(user) => <UserCard user={user} />}
 * </For>
 * ```
 *
 * @template T - The type of data to iterate.
 */
function ForInner<T>({ each, children, getKey }: ForProps<T>) {
  const renderedItems = useMemo(() => {
    return each.map((item, index) => (
      <React.Fragment key={getKey(item, index)}>{children(item, index)}</React.Fragment>
    ));
  }, [each, children, getKey]);

  return <>{renderedItems}</>;
}

ForInner.displayName = "For";

export default memo(ForInner) as typeof ForInner;
