/**
 * SSR or browser
 * @return {Boolean}
 */
const isServer = () => (typeof window === 'undefined') || (typeof navigator === 'undefined');

export default isServer;
