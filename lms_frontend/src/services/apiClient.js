import { getConfig } from '../utils/config';
import { logger } from '../utils/logger';

const { API_BASE } = getConfig();
const DEFAULT_TIMEOUT_MS = 10000;

const uuid = () => 'req-' + Math.random().toString(36).slice(2) + Date.now().toString(36);

// PUBLIC_INTERFACE
export async function apiFetch(path, { method = 'GET', headers = {}, body, timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
  /** Fetch wrapper that targets API_BASE and adds requestId header with timeout. */
  const base = API_BASE || '';
  const url = path.startsWith('http') ? path : `${base}${path}`;
  const controller = new AbortController();
  const requestId = uuid();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  const finalHeaders = {
    'Content-Type': 'application/json',
    'X-Request-Id': requestId,
    ...headers,
  };

  try {
    const resp = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      credentials: 'include',
    });
    clearTimeout(id);

    const contentType = resp.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await resp.json().catch(() => ({})) : await resp.text();

    if (!resp.ok) {
      const err = new Error('API_ERROR');
      err.status = resp.status;
      err.statusText = resp.statusText;
      err.data = data;
      logger.warn('apiFetch non-OK', { path, status: resp.status });
      throw err;
    }

    return data;
  } catch (e) {
    clearTimeout(id);
    if (e.name === 'AbortError') {
      const err = new Error('REQUEST_TIMEOUT');
      err.timeout = true;
      logger.warn('apiFetch timeout', { path, timeoutMs });
      throw err;
    }
    logger.error('apiFetch failed', { path, message: e?.message });
    throw e;
  }
}
