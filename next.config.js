/** @type {import('next').NextConfig} */
module.exports = {
  // Configuración para optimizar imágenes
  images: {
    formats: ['image/avif', 'image/webp'], // Soporte para formatos modernos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fullmma.org', // Dominio de tu sitio
        pathname: '/**', // Permite todas las rutas de tu dominio
      },
    ],
  },

  // Configuración de headers para caché
  async headers() {
    return [
      {
        source: '/(.*).(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|otf|eot|mp4|webm|ogg|avi|mov)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};