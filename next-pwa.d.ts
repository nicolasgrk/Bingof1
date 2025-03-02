declare module '@ducanh2912/next-pwa' {
  interface PWAOptions {
    dest: string;
    register: boolean;
    disable?: boolean;
    workbox?: {
      skipWaiting: boolean;
      clientsClaim: boolean;
    };
  }

  function withPWA(options: PWAOptions): (config: any) => any;
  export default withPWA;
} 