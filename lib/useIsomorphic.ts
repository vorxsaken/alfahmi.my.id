import { useEffect, useLayoutEffect } from "react";

const useIsomorphic = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export { useIsomorphic }
