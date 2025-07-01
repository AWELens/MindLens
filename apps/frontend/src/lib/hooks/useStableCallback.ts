/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file useStableCallback.ts
 * @module lib\hooks
 * @since 0.0.0
 * @date 2025-07-01
 */

import { useCallback, useLayoutEffect, useRef } from 'react';

const NO_DEPS = [] as const;

/**
 * A custom hook that returns a stable function reference, which always calls
 * the latest version of the provided callback — conceptually similar to `useEvent` in React 19+.
 *
 * @param callback The latest version of the function to be called.
 * @returns A stable callback that never changes between renders.
 */
export function useStableCallback<T extends AnyFn>(callback: T): T {
    const ref = useRef(callback);

    // Always update the latest callback before next paint
    useLayoutEffect(() => {
        ref.current = callback;
    });

    const stableFn = useCallback((...args: Parameters<T>): ReturnType<T> => {
        return ref.current(...args);
    }, NO_DEPS);

    return stableFn as T;
}

export default useStableCallback;
