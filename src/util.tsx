export function debugLog(obj: any) {
  if (!isProduction()) {
    console.log(obj);
  }
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}
