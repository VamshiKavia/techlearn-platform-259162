const levels = ['error', 'warn', 'info', 'debug', 'trace'];

const noop = () => undefined;

const createLogger = (level = 'info') => {
  const minIdx = levels.indexOf(level);
  const should = (lvl) => levels.indexOf(lvl) <= minIdx;

  // PUBLIC_INTERFACE
  return {
    /** Structured log with level. Avoid logging secrets. */
    error: should('error') ? (...args) => console.error('[ERROR]', ...sanitize(args)) : noop,
    warn: should('warn') ? (...args) => console.warn('[WARN]', ...sanitize(args)) : noop,
    info: should('info') ? (...args) => console.info('[INFO]', ...sanitize(args)) : noop,
    debug: should('debug') ? (...args) => console.debug('[DEBUG]', ...sanitize(args)) : noop,
    trace: should('trace') ? (...args) => console.log('[TRACE]', ...sanitize(args)) : noop,
  };
};

const SECRET_KEYS = ['key', 'token', 'authorization', 'password', 'secret'];

const mask = (s) => typeof s === 'string' && s.length > 6 ? s.slice(0, 3) + '***' + s.slice(-2) : '***';

const sanitize = (args) => {
  try {
    return args.map((a) => {
      if (a && typeof a === 'object') {
        const copy = Array.isArray(a) ? [...a] : { ...a };
        Object.keys(copy).forEach((k) => {
          if (SECRET_KEYS.some(sk => k.toLowerCase().includes(sk))) {
            copy[k] = mask(String(copy[k] ?? ''));
          }
        });
        return copy;
      }
      if (typeof a === 'string') {
        // Avoid logging obvious bearer tokens
        if (a.toLowerCase().includes('bearer ') || a.length > 128) return '[omitted]';
      }
      return a;
    });
  } catch {
    return ['[unloggable]'];
  }
};

// PUBLIC_INTERFACE
export const logger = createLogger((process.env.REACT_APP_LOG_LEVEL || 'info').toLowerCase());
