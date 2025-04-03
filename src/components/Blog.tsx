import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import nutritionImg from "../designs/nutrition.jpg";
import concussionImg from "../designs/concussion.jpg";
import hurdleImg from "../designs/hurdle.jpg";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Calculate the posts to show on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80"
                    alt="Featured post"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-blue-600 font-semibold mb-2">
                    FEATURED POST
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Top 5 Injury Prevention Tips for Young Athletes
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.
                  </p>
                  <div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: post.id * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-blue-600 font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button
                      variant="outline"
                      className="text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      Read More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-600"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(1)}
                >
                  Previous
                </Button>
                <Button 
                  variant={currentPage === 1 ? undefined : "outline"}
                  className={currentPage === 1 ? "bg-blue-600 text-white" : "border-gray-300 text-gray-600"}
                  onClick={() => handlePageChange(1)}
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className={currentPage === 2 ? "bg-blue-600 text-white" : "border-gray-300 text-gray-600"}
                  onClick={() => handlePageChange(2)}
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-600"
                  disabled={currentPage === 2}
                  onClick={() => handlePageChange(2)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-8">
                Get the latest news, tips, and stories delivered directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow max-w-md"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: nutritionImg,
    category: "NUTRITION",
    title: "The Role of Nutrition in Injury Prevention and Recovery",
    excerpt:
      "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
    date: "February 12, 2025",
  },
  {
    id: 2,
    image: concussionImg,
    category: "HEALTH",
    title: "Understanding Concussions: What Every Parent and Coach Should Know",
    excerpt:
      "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
    date: "February 12, 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "HEALTH",
    title: "Top 5 Injury Prevention Tips for Young Athletes",
    excerpt:
      "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
    date: "February 12, 2025",
  },
  {
    id: 4,
    image: hurdleImg,
    category: "MENTAL HEALTH",
    title: "The Mental Game: Building Resilience in Youth Sports",
    excerpt:
      "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
    date: "February 10, 2025",
  },
];

export default Blog;
