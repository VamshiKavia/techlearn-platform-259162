import { getConfig } from '../utils/config';
import { logger } from '../utils/logger';

let supabase = null;

const init = () => {
  const { SUPABASE_URL, SUPABASE_KEY } = getConfig();
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    logger.warn('Supabase not configured. Skipping initialization.');
    return null;
  }
  // Lazy import so we don't require dependency if not configured
  try {
    // Dynamically require to avoid bundler error if not installed in some environments
    // eslint-disable-next-line global-require
    const { createClient } = require('@supabase/supabase-js');
    supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    return supabase;
  } catch (e) {
    logger.warn('Supabase library not installed. Provide @supabase/supabase-js to enable.', { message: e?.message });
    return null;
  }
};

// PUBLIC_INTERFACE
export const getSupabase = () => {
  /** Returns supabase client or null if not configured; never throws. */
  if (supabase) return supabase;
  return init();
};
