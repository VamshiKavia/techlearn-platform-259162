import { useMemo } from 'react';
import { getConfig } from '../utils/config';

// PUBLIC_INTERFACE
export function useFeatureFlag(flagName) {
  /** Returns boolean for a given feature flag considering experiments enablement. */
  const cfg = getConfig();
  return useMemo(() => {
    if (!flagName) return false;
    const flags = cfg.FEATURE_FLAGS || {};
    const base = !!flags[flagName];
    const experiments = !!cfg.EXPERIMENTS_ENABLED;
    // If experiments enabled, allow experimental-* flags
    if (flagName.startsWith('experimental-')) {
      return experiments && (flags[flagName] !== false);
    }
    return base;
  }, [cfg, flagName]);
}
