"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_full_access";
const ACCESS_PARAM = "ref";
const ACCESS_VALUE = "p9k2x";

export function useFullAccess() {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(ACCESS_PARAM) === ACCESS_VALUE) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setHasAccess(true);
      // Clean the URL without reload
      const url = new URL(window.location.href);
      url.searchParams.delete(ACCESS_PARAM);
      window.history.replaceState({}, "", url.toString());
    } else if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setHasAccess(true);
    }
  }, []);

  return hasAccess;
}
