import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import nutritionImg from "../designs/nutrition.jpg";
import concussionImg from "../designs/concussion.jpg";
import hurdleImg from "../designs/hurdle.jpg";

interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  content?: {
    introduction: string;
    keyPoints: {
      title: string;
      description: string;
    }[];
    conclusion: string;
  };
}

// Article data
const articles: Article[] = [
  {
    id: 1,
    image: nutritionImg,
    category: "NUTRITION",
    title: "The Role of Nutrition in Injury Prevention and Recovery",
    excerpt:
      "Proper nutrition helps young athletes prevent injuries, recover faster, and perform at their best by fueling both their bodies and long-term success.",
    date: "February 12, 2025",
    slug: "role-of-nutrition-in-injury-prevention",
    content: {
      introduction: "Nutrition plays a vital role in the overall health and performance of young athletes. Beyond fueling their bodies for training and competition, proper nutrition is essential for preventing injuries and supporting recovery. Here's how a well-balanced diet can make a difference:",
      keyPoints: [
        {
          title: "1. Injury Prevention",
          description: "A nutrient-rich diet strengthens the body and reduces the risk of injuries. Key nutrients include:\n\n• **Protein**: Supports muscle repair and growth, reducing the risk of strains and tears. Sources include lean meats, eggs, beans, and dairy.\n\n• **Calcium and Vitamin D**: Essential for strong bones, helping to prevent fractures and stress injuries. Found in milk, leafy greens, and fortified foods.\n\n• **Omega-3 Fatty Acids**: Reduce inflammation and support joint health. Sources include fish, flaxseeds, and walnuts.\n\n• **Antioxidants**: Protect cells from damage caused by intense physical activity. Found in fruits like berries, oranges, and vegetables like spinach and carrots.\n\nBy incorporating these nutrients into their diet, young athletes can build a stronger, more resilient body."
        },
        {
          title: "2. Supporting Recovery",
          description: "When injuries occur, nutrition becomes even more critical for healing. Key strategies include:\n\n• **Increased Protein Intake**: Helps repair damaged tissues and rebuild muscle. Athletes should consume protein-rich foods like chicken, fish, tofu, and legumes.\n\n• **Hydration**: Proper fluid intake is essential for recovery. Water helps transport nutrients to injured areas and removes waste products.\n\n• **Anti-Inflammatory Foods**: Foods like turmeric, ginger, and fatty fish can reduce inflammation and speed up recovery.\n\n• **Vitamins and Minerals**: Vitamin C (found in citrus fruits) supports collagen production, while zinc (found in nuts and seeds) aids in tissue repair."
        },
        {
          title: "3. Practical Tips for Athletes",
          description: "• **Eat a Balanced Diet**: Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in every meal.\n\n• **Timing Matters**: Eat a meal or snack rich in protein and carbohydrates within 30 minutes of intense activity to support recovery.\n\n• **Stay Hydrated**: Drink water throughout the day and consider electrolyte-rich drinks during prolonged exercise.\n\n• **Avoid Processed Foods**: Limit sugary snacks and processed foods, which can increase inflammation and hinder recovery."
        }
      ],
      conclusion: "Nutrition is a powerful tool for injury prevention and recovery. By fueling their bodies with the right nutrients, young athletes can stay strong, recover faster, and perform at their best. At CASR, we emphasize the importance of nutrition as part of a holistic approach to athlete well-being.\n\nLet's work together to keep young athletes healthy, active, and thriving!"
    }
  },
  {
    id: 2,
    image: concussionImg,
    category: "HEALTH",
    title: "Understanding Concussions: What Every Parent and Coach Should Know",
    excerpt:
      "Concussions are a serious risk in youth sports, making education and early action essential. Recognizing symptoms, responding quickly, and allowing proper recovery can protect young athletes and promote long-term brain health.",
    date: "February 12, 2025",
    slug: "understanding-concussions",
    content: {
      introduction: "Concussions are a serious concern in youth sports, and understanding how to recognize and manage them is crucial for the safety of young athletes. A concussion is a type of traumatic brain injury caused by a blow to the head or body that results in the brain moving rapidly within the skull.",
      keyPoints: [
        {
          title: "Recognizing the Signs:",
          description: "Symptoms of a concussion can vary but often include headaches, dizziness, confusion, memory problems, and sensitivity to light or noise. In some cases, symptoms may not appear immediately, so it's important to monitor athletes closely after any impact."
        },
        {
          title: "Immediate Response:",
          description: "If a concussion is suspected, the athlete should be removed from play immediately. Continuing to play can worsen the injury and lead to long-term consequences. The athlete should not return to sports until cleared by a healthcare professional."
        },
        {
          title: "Recovery and Return to Play:",
          description: "Recovery from a concussion requires time and rest. Both physical and cognitive rest are essential to allow the brain to heal. Returning to play too soon can result in second-impact syndrome, a rare but life-threatening condition."
        },
        {
          title: "Prevention:",
          description: "While not all concussions can be prevented, certain measures can reduce the risk. Ensuring proper technique, using appropriate protective gear, and promoting a culture of safety can help. Educating athletes, parents, and coaches about the dangers of concussions is also vital."
        },
      ],
      conclusion: "By staying informed and vigilant, parents and coaches can help protect young athletes from the serious effects of concussions and ensure a safer sports environment."
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "HEALTH",
    title: "Top 5 Injury Prevention Tips for Young Athletes",
    excerpt:
      "Discover five simple strategies to help young athletes prevent common injuries, stay healthy, and build the foundation they need to safely reach their athletic potential.",
    date: "February 12, 2025",
    slug: "top-5-injury-prevention-tips",
    content: {
      introduction: "Injuries are a common concern in youth sports, but with the right precautions, many can be prevented. Here are five essential tips to help young athletes stay safe and perform at their best:",
      keyPoints: [
        {
          title: "1. Warm-Up Properly",
          description: "A dynamic warm-up is crucial before any physical activity. It prepares the muscles, increases blood flow, and improves flexibility, reducing the risk of strains and sprains. Include exercises like jogging, lunges, and arm circles to get the body ready."
        },
        {
          title: "2. Use Proper Equipment",
          description: "Wearing the right gear is essential for safety. Whether it's helmets, shin guards, or proper footwear, ensure that all equipment fits well and is in good condition. This can prevent injuries like concussions, fractures, and blisters."
        },
        {
          title: "3. Stay Hydrated",
          description: "Dehydration can lead to muscle cramps, fatigue, and even heat-related illnesses. Encourage young athletes to drink water before, during, and after practices and games. For intense activities, sports drinks can help replenish electrolytes."
        },
        {
          title: "4. Listen to Your Body",
          description: "Pain is a signal that something might be wrong. Teach athletes to recognize the difference between normal muscle soreness and potential injury. If they feel persistent pain or discomfort, they should rest and seek medical advice."
        },
        {
          title: "5. Follow a Balanced Training Plan",
          description: "Overtraining is a common cause of injuries. Ensure that young athletes have a balanced schedule that includes rest days and cross-training. This helps prevent overuse injuries and allows the body to recover."
        }
      ],
      conclusion: "By following these tips, young athletes can reduce their risk of injury and enjoy a safer, more rewarding sports experience. Remember, prevention is always better than cure!"
    }
  },
  {
    id: 4,
    image: hurdleImg,
    category: "MENTAL HEALTH",
    title: "The Mental Game: Building Resilience in Youth Sports",
    excerpt:
      "Resilience is just as important as skill in youth sports. By embracing failure, developing a growth mindset, and supporting mental health, young athletes can build the confidence and strength they need to thrive both on and off the field.",
    date: "February 10, 2025",
    slug: "mental-game-building-resilience",
        content: {
      introduction: "In the world of youth sports, physical skills often take the spotlight, but the mental game is just as crucial. Resilience—the ability to bounce back from setbacks—is a key trait that young athletes need to develop to succeed both on and off the field.",
      keyPoints: [
        {
          title: "",
          description: "A dynamic warm-up is crucial before any physical activity. It prepares the muscles, increases blood flow, and improves flexibility, reducing the risk of strains and sprains. Include exercises like jogging, lunges, and arm circles to get the body ready."
        },
        {
          title: "2. Use Proper Equipment",
          description: "Wearing the right gear is essential for safety. Whether it's helmets, shin guards, or proper footwear, ensure that all equipment fits well and is in good condition. This can prevent injuries like concussions, fractures, and blisters."
        },
        {
          title: "3. Stay Hydrated",
          description: "Dehydration can lead to muscle cramps, fatigue, and even heat-related illnesses. Encourage young athletes to drink water before, during, and after practices and games. For intense activities, sports drinks can help replenish electrolytes."
        },
        {
          title: "4. Listen to Your Body",
          description: "Pain is a signal that something might be wrong. Teach athletes to recognize the difference between normal muscle soreness and potential injury. If they feel persistent pain or discomfort, they should rest and seek medical advice."
        },
        {
          title: "5. Follow a Balanced Training Plan",
          description: "Overtraining is a common cause of injuries. Ensure that young athletes have a balanced schedule that includes rest days and cross-training. This helps prevent overuse injuries and allows the body to recover."
        }
      ],
      conclusion: "By following these tips, young athletes can reduce their risk of injury and enjoy a safer, more rewarding sports experience. Remember, prevention is always better than cure!"
    }
  },
];

const ArticlePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = articles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      navigate("/blog");
    }
  }, [slug, navigate]);

  const goBack = () => {
    navigate("/blog");
  };

  if (!article) {
    return null;
  }

  // Function to convert markdown-style bold to HTML
  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Replace **text** with <strong>text</strong>
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} dangerouslySetInnerHTML={{ __html: formattedLine }} />;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Button
            variant="ghost"
            className="flex items-center gap-2 mt-8 text-gray-600 hover:text-gray-900"
            onClick={goBack}
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Button>

          {/* Article Header */}
          <div className="mt-8">
            <div className="aspect-[21/9] w-full overflow-hidden rounded-lg">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto mt-12 mb-20">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-8">{article.title}</h1>

            {/* Article sections */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <div className="text-gray-700">
                    <p>{article.content?.introduction || article.excerpt}</p>
                  </div>
                </section>

                {/* Main Content Sections */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Key Points</h2>
                  <div className="text-gray-700">
                    <ul className="list-none space-y-6">
                      {article.content?.keyPoints.map((point, index) => (
                        <li key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                          <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                          <div className="space-y-2">
                            {renderFormattedText(point.description)}
                          </div>
                        </li>
                      )) || (
                        <ul className="list-disc pl-6 space-y-4">
                          <li>Key point 1</li>
                          <li>Key point 2</li>
                          <li>Key point 3</li>
                        </ul>
                      )}
                    </ul>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <div className="text-gray-700">
                    <p>{article.content?.conclusion || "Conclusion text will go here."}</p>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage; 