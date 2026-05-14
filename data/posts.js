 const posts = [
  {
    slug: "my-first-trip",
    title: "My First Trip",
    date: "January 2025",
    location: "Your Location Here",
    coverImage: "/images/cover.jpg",
    excerpt: "A short description of your trip that shows on the home page.",
    content: [
      {
        type: "text",
        value: "Write your first paragraph here. Describe what you saw, felt, experienced.",
      },
      {
        type: "image",
        src: "/images/photo1.jpg",
        caption: "Your photo caption here.",
      },
      {
        type: "text",
        value: "Write another paragraph here.",
      },
    ],
  },
];

export default posts;
