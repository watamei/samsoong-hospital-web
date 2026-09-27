/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  async redirects() {
    return [
      // ITA yearly redirects
      {
        source: "/ita-:year(\\d{4})",
        destination: "/about/ita?year=:year",
        permanent: true,
      },
      // ITA MOIT redirects
      {
        source: "/ita-:year(\\d{4})/moit-:moit(\\d+)",
        destination: "/about/ita?year=:year&moit=:moit",
        permanent: true,
      },
      // General ITA
      {
        source: "/ita",
        destination: "/about/ita",
        permanent: true,
      },
      // Contact
      {
        source: "/contact",
        destination: "/about/contact",
        permanent: true,
      },
      // Procurement
      {
        source: "/procurement",
        destination: "/news/procurement",
        permanent: true,
      },
      // Jobs
      {
        source: "/jobs",
        destination: "/news/jobs",
        permanent: true,
      },
      // Rights to Coverage rename
      {
        source: "/services/rights",
        destination: "/services/coverage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
