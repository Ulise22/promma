/** @type {import('next').NextConfig} */

module.exports = {
 async nextConfig() {
    return [
        {
          source: "/(.*).(js|css|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|otf|eot|mp4|webm|ogg|avi|mov)$",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
        {
          source: "/(.*).html",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=0, must-revalidate",
            },
          ],
        },
      ];
},
}

