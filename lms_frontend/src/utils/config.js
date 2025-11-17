const bool = (v, fallback = false) => {
  if (typeof v === 'boolean') return v;
  if (typeof v === 'string') {
    const s = v.trim().toLowerCase();
    if (['true', '1', 'yes', 'on'].includes(s)) return true;
    if (['false', '0', 'no', 'off'].includes(s)) return false;
  }
  return fallback;
};

const safeJsonParse = (v) => {
  try {
    return JSON.parse(v);
  } catch {
    return null;
  }
};

const parseFeatureFlags = (v) => {
  if (!v) return {};
  // Try JSON first
  const asJson = safeJsonParse(v);
  if (asJson && typeof asJson === 'object') return asJson;
  // Try comma separated
  if (typeof v === 'string') {
    const flags = {};
    v.split(',').map(s => s.trim()).filter(Boolean).forEach(k => flags[k] = true);
    return flags;
  }
  return {};
};

// PUBLIC_INTERFACE
export const getConfig = () => {
  /** Returns validated configuration values from process.env (CRA).
   * Note: All values are optional; consumers should handle undefined gracefully.
   */
  const env = process.env || {};
  const cfg = {
    FRONTEND_URL: env.REACT_APP_FRONTEND_URL,
    BACKEND_URL: env.REACT_APP_BACKEND_URL,
    API_BASE: env.REACT_APP_API_BASE,
    WS_URL: env.REACT_APP_WS_URL,
    NODE_ENV: env.REACT_APP_NODE_ENV || env.NODE_ENV,
    ENABLE_SOURCE_MAPS: bool(env.REACT_APP_ENABLE_SOURCE_MAPS, true),
    PORT: env.REACT_APP_PORT,
    TRUST_PROXY: bool(env.REACT_APP_TRUST_PROXY, false),
    LOG_LEVEL: (env.REACT_APP_LOG_LEVEL || 'info').toLowerCase(),
    HEALTHCHECK_PATH: env.REACT_APP_HEALTHCHECK_PATH || '/health',
    SUPABASE_URL: env.REACT_APP_SUPABASE_URL,
    SUPABASE_KEY: env.REACT_APP_SUPABASE_KEY,
    FEATURE_FLAGS_RAW: env.REACT_APP_FEATURE_FLAGS,
    EXPERIMENTS_ENABLED: bool(env.REACT_APP_EXPERIMENTS_ENABLED, false),
  };
  cfg.FEATURE_FLAGS = parseFeatureFlags(cfg.FEATURE_FLAGS_RAW);
  return cfg;
};
