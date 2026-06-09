const stripTrailingSlash = (value?: string) => value?.replace(/\/$/, "") ?? "";

/** 빌드 시 next.config rewrites · SSR 절대 URL용 백엔드 origin */
export function getBackendApiOrigin(): string {
  const explicitBase = stripTrailingSlash(process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_BASE);
  if (explicitBase) {
    return explicitBase.replace(/\/api$/i, "");
  }

  return (
    stripTrailingSlash(process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_ORIGIN) ||
    stripTrailingSlash(process.env.NEXT_PUBLIC_AXIOS_DEFAULT_BASEURL) ||
    "http://localhost:8080"
  );
}

export function getBackendApiBase(): string {
  const explicitBase = stripTrailingSlash(process.env.NEXT_PUBLIC_CLIENT_RENEWAL_API_BASE);
  if (explicitBase) return explicitBase;
  return `${getBackendApiOrigin()}/api`;
}

/** 상대 경로 에셋(팝업 이미지 등) — 브라우저에서는 현재 페이지 프로토콜에 맞춤 */
export function resolveAssetOrigin(): string {
  const backend = getBackendApiOrigin();
  if (typeof window === "undefined") return backend;
  if (!backend) return window.location.origin;

  try {
    const parsed = new URL(backend.includes("://") ? backend : `http://${backend}`);
    return `${window.location.protocol}//${parsed.host}`;
  } catch {
    return backend;
  }
}
