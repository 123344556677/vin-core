import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Essential Tips for Buying a Used Car",
    paragraph:
      "Discover key steps to inspect, test, and verify a used car's history to make a smart purchase.",
    image: "/images/blog/blog-04.webp",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Tips"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Electric vs. Gasoline Cars: Which to Choose?",
    paragraph:
      "Compare costs, sustainability, and convenience to find the right car for your lifestyle.",
    image: "/images/blog/blog-05.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Electric vs Gasoline"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "How to Read a Vehicle History Report",
    paragraph:
      "Learn to decode history reports and identify red flags for a transparent car-buying experience.",
    image: "/images/blog/blog-06.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Report"],
    publishDate: "2024",
  },
];
export default blogData;
