import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import nutritionImg from "../designs/nutrition.jpg";
import concussionImg from "../designs/concussion.jpg";
import hurdleImg from "../designs/hurdle.jpg";
import noka from "../designs/noka.jpg";
import nut from "../designs/nutritionn.jpg"
import burnout from "../designs/burnout.jpg"
import studentburnout from "../designs/studentathlete.jpg"
import hurdles from "../designs/hurdles.jpg"
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const Blog = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const navigateToArticle = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

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
                  <span className="text-sm text-[#4e73b2] font-semibold mb-2">
                    FEATURED POST
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Top 5 Injury Prevention Tips for Young Athletes
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.
                  </p>
                  <div>
                    <Button 
                      className="bg-[#4e73b2] hover:bg-[#3b5a8e] text-white"
                      onClick={() => navigateToArticle("top-5-injury-prevention-tips")}
                    >
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
                      <span className="text-xs text-[#4e73b2] font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button
                      variant="outline"
                      className="text-[#4e73b2] border-[#4e73b2] hover:bg-[#4e73b2]/10"
                      onClick={() => navigateToArticle(post.slug)}
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
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                <Button 
                  variant={currentPage === 1 ? undefined : "outline"}
                  className={currentPage === 1 ? "bg-[#4e73b2] text-white" : "border-gray-300 text-gray-600"}
                  onClick={() => handlePageChange(1)}
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className={currentPage === 2 ? "bg-[#4e73b2] text-white" : "border-gray-300 text-gray-600"}
                  onClick={() => handlePageChange(2)}
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className={currentPage === 3 ? "bg-[#4e73b2] text-white" : "border-gray-300 text-gray-600"}
                  onClick={() => handlePageChange(3)}
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-600"
                  disabled={currentPage === 3}
                  onClick={() => handlePageChange(currentPage + 1)}
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
                <Button className="bg-[#4e73b2] hover:bg-[#3b5a8e] text-white px-6">
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
    slug: "role-of-nutrition-in-injury-prevention"
  },
  {
    id: 2,
    image: concussionImg,
    category: "HEALTH",
    title: "Understanding Concussions: What Every Parent and Coach Should Know",
    excerpt:
      "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
    date: "February 12, 2025",
    slug: "understanding-concussions"
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
    slug: "top-5-injury-prevention-tips"
  },
  {
    id: 4,
    image: hurdleImg,
    category: "MENTAL HEALTH",
    title: "The Mental Game: Building Resilience in Youth Sports",
    excerpt:
      "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
    date: "February 10, 2025",
    slug: "mental-game-building-resilience"
  },
  {
    id: 5,
    image: noka,
    category: "HEALTH & SAFETY",
    title: "Why the Right Sports Shoes Matter More Than You Think",
    excerpt:
      "The right sports shoes do more than provide comfort — they protect your body, boost performance, and prevent injuries. Whether you're a competitive athlete or a casual player, choosing footwear designed for your sport is essential for staying safe, confident, and at your best.",
    date: "April 22, 2025",
    slug: "the-right-sports-shoes-matter"
  },
  {
    id: 6,
    image: nut,
    category: "NUTRITION",
    title: "The Importance of Nutrition in Recovery",
    excerpt:
      "A healthy diet is crucial for recovery, providing the nutrients your body needs to heal, reduce inflammation, and rebuild strength.",
    date: "April 22, 2025",
    slug: "importance-of-nutrition-in-recovery"
  },
  {
    id: 7,
    image: burnout,
    category: "MENTAL HEALTH",
    title: "Athlete Burnout: What It Is and How to Treat It",
    excerpt:
      "Athlete burnout is a physical and psychological condition caused by prolonged, intense sports-related stress, leading to exhaustion, detachment, and declining performance. Without proper recovery and support, it can be as damaging as a serious injury, making early recognition and prevention essential for long-term athletic health.",
    date: "April 21, 2025",
    slug: "athlete-burnout"
  },
  {
    id: 8,
    image: studentburnout,
    category: "PERSONAL",
    title: "How Being a Student-Athlete Shapes My Identity",
    excerpt:
      "Sports play a very important role in shaping student athletes, as they can boost their physical ability and can increase their overall adaptability to challenging situations. Although sports provide many benefits to student athletes, they can also impact their amount of rest,and can cause ongoing stress from balancing their education with their sports.",
    date: "April 21, 2025",
    slug: "how-being-a-student-athlete-shapes-my-identity"
  },
  {
    id: 9,
    image: hurdles,
    category: "MENTAL HEALTH",
    title: "Mental Blocks in Sports—the “What Ifs”",
    excerpt:
      "Many athletes face mental challenges during high-pressure moments, driven by fear of failure and judgment. This article explores common in-game anxieties and offers practical strategies—like positive self-talk, staying present, and deep breathing—to stay focused and perform with confidence.",
    date: "April 21, 2025",
    slug: "mental-blocks-in-sports"
  },
];

export default Blog;
