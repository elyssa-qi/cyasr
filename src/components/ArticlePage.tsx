import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import { ArrowLeft, User, Clock, Tag } from "lucide-react";
import { Button } from "./ui/button";
import nutritionImg from "../designs/nutrition.jpg";
import concussionImg from "../designs/concussion.jpg";
import hurdleImg from "../designs/hurdle.jpg";
import runningImg from "../designs/running.jpg";
import noka from "../designs/noka.jpg";
import nut from "../designs/nutritionn.jpg"
import burnout from "../designs/burnout.jpg"
import hurdles from "../designs/hurdles.jpg"
import studentburnout from "../designs/studentathlete.jpg"

interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  content: React.ReactNode;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const articles = [
    {
      id: 1,
      title: "The Role of Nutrition in Injury Prevention and Recovery",
      author: "Joy Lau",
      date: "February 12, 2025",
      content: (
        <>
          <p>Nutrition plays a vital role in the overall health and performance of young athletes. Beyond fueling their bodies for training and competition, proper nutrition is essential for preventing injuries and supporting recovery. Here's how a well-balanced diet can make a difference:</p>
          
          <h2 className="text-2xl font-bold mt-6 mb-4">1. Injury Prevention</h2>
          <p>A nutrient-rich diet strengthens the body and reduces the risk of injuries. Key nutrients include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Protein</strong>: Supports muscle repair and growth, reducing the risk of strains and tears. Sources include lean meats, eggs, beans, and dairy.</li>
            <li><strong>Calcium and Vitamin D</strong>: Essential for strong bones, helping to prevent fractures and stress injuries. Found in milk, leafy greens, and fortified foods.</li>
            <li><strong>Omega-3 Fatty Acids</strong>: Reduce inflammation and support joint health. Sources include fish, flaxseeds, and walnuts.</li>
            <li><strong>Antioxidants</strong>: Protect cells from damage caused by intense physical activity. Found in fruits like berries, oranges, and vegetables like spinach and carrots.</li>
          </ul>
          <p>By incorporating these nutrients into their diet, young athletes can build a stronger, more resilient body.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">2. Supporting Recovery</h2>
          <p>When injuries occur, nutrition becomes even more critical for healing. Key strategies include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Increased Protein Intake</strong>: Helps repair damaged tissues and rebuild muscle. Athletes should consume protein-rich foods like chicken, fish, tofu, and legumes.</li>
            <li><strong>Hydration</strong>: Proper fluid intake is essential for recovery. Water helps transport nutrients to injured areas and removes waste products.</li>
            <li><strong>Anti-Inflammatory Foods</strong>: Foods like turmeric, ginger, and fatty fish can reduce inflammation and speed up recovery.</li>
            <li><strong>Vitamins and Minerals</strong>: Vitamin C (found in citrus fruits) supports collagen production, while zinc (found in nuts and seeds) aids in tissue repair.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">3. Practical Tips for Athletes</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Eat a Balanced Diet</strong>: Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in every meal.</li>
            <li><strong>Timing Matters</strong>: Eat a meal or snack rich in protein and carbohydrates within 30 minutes of intense activity to support recovery.</li>
            <li><strong>Stay Hydrated</strong>: Drink water throughout the day and consider electrolyte-rich drinks during prolonged exercise.</li>
            <li><strong>Avoid Processed Foods</strong>: Limit sugary snacks and processed foods, which can increase inflammation and hinder recovery.</li>
          </ul>

          <p className="mt-6">Nutrition is a powerful tool for injury prevention and recovery. By fueling their bodies with the right nutrients, young athletes can stay strong, recover faster, and perform at their best. At CYASR, we emphasize the importance of nutrition as part of a holistic approach to athlete well-being.</p>
          <p>Let's work together to keep young athletes healthy, active, and thriving!</p>
        </>
      ),
      image: nutritionImg,
      category: "Nutrition",
      readTime: "5 min read",
      slug: "role-of-nutrition-in-injury-prevention"
    },
    {
      id: 2,
      title: "Understanding Concussions: What Every Parent and Coach Should Know",
      author: "Joy Lau",
      date: "February 12, 2025",
      content: (
        <>
          <p>Concussions are a serious concern in youth sports, and understanding how to recognize and manage them is crucial for the safety of young athletes. A concussion is a type of traumatic brain injury caused by a blow to the head or body that results in the brain moving rapidly within the skull.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Recognizing the Signs</h2>
          <p>Symptoms of a concussion can vary but often include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Headaches</li>
            <li>Dizziness</li>
            <li>Confusion</li>
            <li>Memory problems</li>
            <li>Sensitivity to light or noise</li>
          </ul>
          <p>In some cases, symptoms may not appear immediately, so it's important to monitor athletes closely after any impact.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Immediate Response</h2>
          <p>If a concussion is suspected, the athlete should be removed from play immediately. Continuing to play can worsen the injury and lead to long-term consequences. The athlete should not return to sports until cleared by a healthcare professional.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Recovery and Return to Play</h2>
          <p>Recovery from a concussion requires time and rest. Both physical and cognitive rest are essential to allow the brain to heal. Returning to play too soon can result in second-impact syndrome, a rare but life-threatening condition.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Prevention</h2>
          <p>While not all concussions can be prevented, certain measures can reduce the risk:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensuring proper technique</li>
            <li>Using appropriate protective gear</li>
            <li>Promoting a culture of safety</li>
            <li>Educating athletes, parents, and coaches about the dangers of concussions</li>
          </ul>

          <p className="mt-6">By staying informed and vigilant, parents and coaches can help protect young athletes from the serious effects of concussions and ensure a safer sports environment.</p>
        </>
      ),
      image: concussionImg,
      category: "Health",
      readTime: "5 min read",
      slug: "understanding-concussions"
    },
    {
      id: 3,
      title: "Top 5 Injury Prevention Tips for Young Athletes",
      author: "Joy Lau",
      date: "February 12, 2025",
      content: (
        <>
          <p>Injuries are a common concern in youth sports, but with the right precautions, many can be prevented. Here are five essential tips to help young athletes stay safe and perform at their best:</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">1. Warm-Up Properly</h2>
          <p>A dynamic warm-up is crucial before any physical activity. It prepares the muscles, increases blood flow, and improves flexibility, reducing the risk of strains and sprains. Include exercises like jogging, lunges, and arm circles to get the body ready.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">2. Use Proper Equipment</h2>
          <p>Wearing the right gear is essential for safety. Whether it's helmets, shin guards, or proper footwear, ensure that all equipment fits well and is in good condition. This can prevent injuries like concussions, fractures, and blisters.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">3. Stay Hydrated</h2>
          <p>Dehydration can lead to muscle cramps, fatigue, and even heat-related illnesses. Encourage young athletes to drink water before, during, and after practices and games. For intense activities, sports drinks can help replenish electrolytes.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">4. Listen to Your Body</h2>
          <p>Pain is a signal that something might be wrong. Teach athletes to recognize the difference between normal muscle soreness and potential injury. If they feel persistent pain or discomfort, they should rest and seek medical advice.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">5. Follow a Balanced Training Plan</h2>
          <p>Overtraining is a common cause of injuries. Ensure that young athletes have a balanced schedule that includes rest days and cross-training. This helps prevent overuse injuries and allows the body to recover.</p>

          <p className="mt-6">By following these tips, young athletes can reduce their risk of injury and enjoy a safer, more rewarding sports experience. Remember, prevention is always better than cure!</p>
        </>
      ),
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&q=80',
      category: "Health",
      readTime: "6 min read",
      slug: "top-5-injury-prevention-tips"
    },
    {
      id: 4,
      title: "The Mental Game: Building Resilience in Youth Sports",
      author: "Joy Lau",
      date: "February 10, 2025",
      content: (
        <>
          <p>In the world of youth sports, physical skills often take the spotlight, but the mental game is just as crucial. Resilience—the ability to bounce back from setbacks—is a key trait that young athletes need to develop to succeed both on and off the field.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Understanding Resilience</h2>
          <p>Resilience in sports isn't just about handling losses or mistakes—it's about developing the mental toughness to face challenges head-on and come back stronger. This skill is valuable not only in sports but in all aspects of life.</p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Building Mental Strength</h2>
          <p>Here are some ways to help young athletes build mental resilience:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encourage a growth mindset</li>
            <li>Teach stress management techniques</li>
            <li>Promote positive self-talk</li>
            <li>Set realistic goals</li>
            <li>Celebrate effort, not just results</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">The Role of Coaches and Parents</h2>
          <p>Coaches and parents play a crucial role in developing mental resilience:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Model positive behavior and attitudes</li>
            <li>Provide constructive feedback</li>
            <li>Create a supportive environment</li>
            <li>Help athletes learn from setbacks</li>
          </ul>

          <p className="mt-6">By focusing on mental resilience, we can help young athletes develop the skills they need to handle challenges, both in sports and in life. This investment in their mental well-being will pay dividends throughout their athletic careers and beyond.</p>
        </>
      ),
      image: hurdleImg,
      category: "Mental Health",
      readTime: "5 min read",
      slug: "mental-game-building-resilience"
    },
    {
      id: 5,
      title: "The Importance of Proper Sports Shoes",
      author: "Jessica Song",
      date: "April 22, 2025",
      content: (
        <>
          <p>
            Whether you're sprinting down a track, cutting sharply on a field, or jumping to catch a ball on the court, your feet are at the core of every movement. Yet, many athletes, and even casual players, often overlook one of the most essential pieces of gear in their sports bag: the right pair of shoes.
          </p>
          <p>
            Wearing proper sports shoes goes beyond comfort. It directly impacts performance, safety, and long-term health. Each sport involves a different set of movements. For example, this may include running forward, jumping, pivoting, or stopping suddenly, and wearing shoes designed for those specific actions can help optimize movement while minimizing the risk of injury.
          </p>
          <p>
            As someone who plays table tennis and badminton for fun, I've noticed how much of a difference proper footwear makes. Playing in regular running shoes used to leave me with sore ankles and reduced grip, especially during fast rallies or sudden direction changes when the ball or birdie didn't go in the way I expected. Switching to court shoes specifically designed for indoor movement drastically improved not only my comfort but also my confidence in safety on the court.
          </p>
          <p>
            In fact, improper footwear can lead to many severe consequences, such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Sprains or strains</li>
            <li>Fractures</li>
            <li>Blisters or calluses</li>
            <li>Joint or knee pain</li>
            <li>Shin splints</li>
            <li>Stress fractures</li>
            <li>Plantar fasciitis</li>
            <li>Achilles tendonitis</li>
            <li>...and more!</li>
          </ul>
          <p>
            The right shoes help absorb impact, offer stability, support your arches, and ensure better control. Just as you wouldn't wear swimming goggles to play tennis, wearing running shoes for badminton or cleats for table tennis just doesn't work. Each shoe is engineered for a reason, and using the wrong type can hurt your body in the long run. Additionally, don't risk your safety by wearing worn-out shoes or those that just don't fit you anymore. They all risk the above consequences, and that price is way more expensive than buying some new shoes.
          </p>
          <p>
            Now that you know all this, you might be wondering how to apply it to your daily life, and that's a great place to start!
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>First of all, you should visit a sports store to have your foot measured and gait analyzed.</li>
            <li>Next, with the staff's help, choose shoes specific to the sport you play. Running shoes, cleats, and court shoes are all built differently. Make sure your footwear aligns with your activity. If you play indoor racquet sports like me, for example, lightweight shoes with lateral support and a gum rubber sole are ideal.</li>
            <li>Now, once you start wearing your shoes, a general rule is to replace them every 6-12 months, depending on how frequently you play and the wear on the soles and cushioning. Furthermore, combining them with a proper warm-up and stretching routine ensures better overall protection.</li>
            <li>Finally, once these shoes become part of your exercise routine, listen to your body at all times. Pain or discomfort during or after exercise could be a sign that your shoes aren't right for you, or that they've reached the end of their life cycle. You can never be too careful, so if something doesn't seem right, then investigate immediately.</li>
          </ul>
          <p>
            From what I've seen among my friends and family, the importance of the right sports shoes often flies under the radar until pain or injury brings it to attention. This should not be the case for any of us. By proactively choosing the right footwear beforehand, athletes and recreational players alike can protect their bodies, perform better, and enjoy their sport longer. After all, strong performance starts from the ground up!
          </p>
        </>
      ),
      image: noka,
      category: "Physical Health",
      readTime: "5 min read",
      slug: "the-right-sports-shoes-matter"
    },
    {
      id: 6,
      title: "The Importance of Nutrition in Recovery",
      author: "Evelyn Su",
      date: "April 22, 2025",
      content: (
        <>
          <p>
            Whether you're coming back from a tough workout or healing from an injury, one thing is always true: what you eat matters. A healthy diet plays a crucial role in speeding up recovery, it reduces inflammation, and gives your body the nutrients it needs to repair and rebuild. To put it simply, a good diet is the best medicine.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">The Role of Protein in Recovery</h2>
          <p>
            When you're recovering, your body's working overtime to heal tissue, fight off infection, and restore energy levels. To do that efficiently, it needs the right materials and nutrients—especially protein, vitamins, and minerals. Protein is essential for repairing muscle and tissue. Without enough of it, recovery can be slower and incomplete. Lean meats, fish, eggs, vegetables and nuts are all great sources.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Essential Vitamins and Minerals</h2>
          <p>
            Vitamins and minerals also play a key role. Vitamin C supports immune function and collagen production, which is critical for healing wounds. You'll find it in fruits like oranges, strawberries, and kiwi. Zinc is another important nutrient that helps wounds close and cells regenerate—foods like seeds, shellfish, and whole grains can help you recover faster by providing you with these necessary nutrients.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Managing Inflammation</h2>
          <p>
            Then there's inflammation. While a bit of inflammation is part of the natural healing process, too much can delay recovery and cause more pain. Anti-inflammatory foods like berries, leafy greens, fatty fish (like salmon), and olive oil can help keep your inflammation in check.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">The Importance of Hydration</h2>
          <p>
            Hydration is just as important. Water helps transport nutrients throughout your body and keeps your joints lubricated, which is particularly helpful when healing from an injury. Dehydration can severely slow down the repair and recovery process of your body.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Foods to Avoid</h2>
          <p>
            In the same way that healthy food can help you, processed foods and sugary snacks, can all work against your recovery. They promote inflammation, do not provide you with the necessary nutrients, and can weaken your immune system—definitely not what you want when your body is trying to heal.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
          <p>
            Eating healthy is about giving your body the tools it needs to bounce back stronger. Whether it's through colorful vegetables, lean proteins, or whole grains, your diet is critical to fast recoveries. So the next time you're recovering—whether it's from a tough workout or an injury—remember that your diet can be one of the easiest and efficient ways to help your body work hard to recover. Food isn't just fuel. It can also be medicine.
          </p>
        </>
      ),
      image: nut,
      category: "Nutrition",
      readTime: "5 min read",
      slug: "importance-of-nutrition-in-recovery"
    },
    {
      id: 7,
      title: "Athlete Burnout: What It Is and How to Treat It",
      author: "Eason",
      date: "April 21, 2025",
      content: (
        <>
          <p>
            Sports and physical activity offer many benefits, such as improved cardiovascular health, elevated dopamine levels, and increased attention span. However, too much of a good thing can be harmful. In the athletic world, where athletes begin training at 5 a.m., work to improve even through the off-season, and live by the principle of "The Best Never Rests," athletes often face a powerful mental opponent: burnout.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Definition</h2>
          <p>
            Athlete burnout is a psychological and physical syndrome caused by constant, high-level stress related to sports performance. Characterized by emotional exhaustion, physical fatigue, and detachment from the sport, this condition can affect athletes at every level—from student-athletes balancing academic and athletic endeavours to amateur sport hobbyists pushing too far past their limits. Mentally, burnout may lead to a lack of motivation, anxiety, depression, and reduced self-esteem. Physically, it can cause chronic fatigue, insomnia, and declines in performance. Burnout could end up creating a vicious cycle in which:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The athlete faces burnouts and experiences a lack of motivation as well as chronic fatigue.</li>
            <li>The athlete experiences a decline in performance.</li>
            <li>The athlete is unsatisfied with their results and works harder to improve.</li>
            <li>The athlete sinks deeper into burnout.</li>
          </ul>
          <p>
            If ignored, it can have as severe an impact as a career-ending injury like a torn ACL. Thus, it's important to recognize the symptoms of burnout, help the athlete recover, and address the problem at its root.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Causes</h2>
          <p>
            While the exact cause of burnout varies for each athlete, it typically stems from prolonged exposure to stress without adequate recovery. Common factors include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Overtraining and inadequate recovery:</strong> The widely accepted mantra of "more is better" pushes athletes to train intensely without allowing time for rest, often ignoring their body's messages. This drains both the body and mind, increasing the risk of injury and fatigue.</li>
            <li><strong>External pressure:</strong> Expectations from coaches, parents, peers, or the athletes themselves can become overwhelming. Young athletes especially face challenges from high expectations in their quests for athletic scholarships or even professional careers.</li>
            <li><strong>Loss of enjoyment:</strong> Repetitive and high-pressure training can make a sport feel more like a chore than a passion, leaving athletes tired and unmotivated.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Symptoms</h2>
          <p>Symptoms of burnout include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Flatlining or declining athletic performance</li>
            <li>Emotional fluctuations like mood swings and general irritability</li>
            <li>A sense of mental and physical exhaustion</li>
            <li>Reduced fulfillment and detachment from the sport</li>
            <li>Avoidance of games and practices</li>
            <li>Lower self-esteem caused by falling short of expectations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Prevention & Recovery Strategies</h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Scheduled rest</h3>
          <p>
            Planning recovery days into the training schedule and resting during the off-season allows athletes to recharge physically and mentally. While there is no magic cure, rest and time away from the sport are the best ways for an athlete to recover from burnout. Many athletes, from their intense training schedules that often begin before dawn, don't get enough sleep to maintain a high standard of performance, causing fatigue that can even hamper other activities like learning. An average of at least 8 hours a day is recommended for athletes. Athletes could also take short breaks away from the sport to recharge and attend to other aspects of life, so they can achieve their best level of performance once they return.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Communication</h3>
          <p>
            Encouraging dialogue with coaches, family, and peers helps build a supportive environment. Athletes should maintain open communication with coaches to prevent overtraining and injury risk. Student-athletes may also benefit from discussing with teachers to alleviate academic workloads and create healthy school-sport-life balances.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Goal-setting</h3>
          <p>
            Allowing athletes to set small, attainable goals for themselves helps maintain motivation and gives them a sense of direction and fulfillment, regardless of where they aim.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Varied training</h3>
          <p>
            Incorporating cross-training, games, or just mixing up the routine each day keeps practices interesting and helps athletes redevelop their passion for the sport.
          </p>

          <p className="mt-6">
            Athletic burnout is often overlooked in the sports world, despite its serious impact on athletes at all levels. By recognizing the early signs of burnout, understanding its underlying causes, and addressing it directly, we can help prevent the issue from escalating and potentially derailing an athlete's career. This proactive approach is crucial to maintaining long-term physical and mental well-being in athletes.
          </p>
        </>
      ),
      image: burnout,
      category: "Mental Health",
      readTime: "8 min read",
      slug: "athlete-burnout"
    },
    {
      id: 8,
      title: "How Being a Student-Athlete Shapes My Identity",
      author: "Lucas Hu",
      date: "April 20, 2025",
      content: (
        <>
          <p>
            Sports play a big role in student-athletes. They create a new community where individuals face challenges beyond those found in school. Being an athlete will not only affect your physicality but also your mentality, and it is important to understand how these impacts shape your identity.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Positive Impacts</h2>
          <p>
            Sports provide students with new challenges and opportunities where they can discover innovative solutions. This process shapes a big part of who you are not just in your athletic abilities, but in your overall identity as well.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Physical</h3>
          <p>
            The constant exercise required of these student athletes allows them to build the strength and stamina needed for their sport. Not only that, but athletes must persevere in their training to improve on their abilities and reach success. Overall, student-athletes push through long hours of training which builds their perseverance.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Mentality</h3>
          <p>
            As the student-athletes face challenges in their sports careers, they find ways to adapt to these obstacles accordingly. Each athlete has their own ways to solve their mental challenges. Some may be calmer or more methodical, while others may be bolder and take more risks. Despite the differences in approach, the ways to combat mental barriers all aim to overcome their challenges. As these student athletes encounter more hurdles challenging their mental fortitude, they develop their own way to overcome their obstacles. Overall, playing a sport provides students with an opportunity to find their approach in overcoming mental hardships and building a strong growth mindset.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Negative Impacts</h2>
          <p>
            Although being a student athlete comes with many positive impacts, there are also some negative impacts that individuals should be aware of and mitigate.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Physical Impacts</h3>
          <p>
            The constant harsh challenges for the physical body of a student-athlete can lead to soreness or exhaustion. To remain active, they need to sleep to allow their bodies to recharge and be at their fullest. Because of the intense workload from school, it is hard to get at least 8 hours of sleep every day or to ensure proper recovery. This causes the body's energy to deplete very fast and can cause muscle loss or tiredness. Thus, it is important to ensure that student athletes are able to balance their schedules and ensure sleep and recovery.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Mental Impacts</h3>
          <p>
            The long hours of training students need to succeed in their sport consume most of their time for studying. Because of the high pressure and need to juggle multiple responsibilities, student athletes experience increased levels of stress. The need to perform well in not only sports but also their academics can cause "burnout." These burnouts can affect one's mental capacity and their ability to learn and can also lead to more severe mental issues, such as depression or anxiety. Therefore, student athletes must learn how to manage their time to avoid stress and mitigate negative mental health impacts.
          </p>
        </>
      ),
      image: studentburnout,
      category: "Personal",
      readTime: "6 min read",
      slug: "how-being-a-student-athlete-shapes-my-identity"
    },
    {
      id: 9,
      title: "Mental Blocks in Sports—the 'What Ifs'",
      author: "Jessica Lee",
      date: "April 19, 2025",
      content: (
        <>
          <p>
            Almost everyone who plays a sport has experienced a mental challenge, a fight in your head. As a female volleyball and tackle football player, no doubt this has happened to me. In this article, I'm going to talk about a couple of scenarios that have happened again and again for me and some ways I cope with them.
          </p>

          <blockquote className="border-l-4 border-gray-200 pl-4 italic my-6">
            "It just sucks when you're fighting with your own head." — Simone Biles
          </blockquote>

          <p>
            Serve. Pass, set*, swing. Block*. Your opponents just hit a really hard swing, thankfully into your blocker's hands. Dig*, set, swing. TWEET! The whistle blows, the ref signals a point to the other team. You nervously peek at the score to find out it's match point*. 14:13 them.
          </p>

          <p>
            Your heart starts pounding, your mind starts racing. What if I miss my hit? What if my set is too close to the net? What if I get blocked? What if I pass and it's too far off. What if I shank* the ball? What if WE LOSE?
          </p>

          <p>
            A million questions come to mind. Then suddenly, TWEET, the ref signals for your opponents to serve.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg my-6">
            <p className="text-sm text-gray-600">
              *set - a set refers to the second contact of a ball to set up the best attack opportunity for your teammates
            </p>
            <p className="text-sm text-gray-600">
              *block - a defensive move used to deflect the ball from the hitter using your hands (done at the net)
            </p>
            <p className="text-sm text-gray-600">
              *dig - a defensive move used to prevent the ball from hitting the ground
            </p>
            <p className="text-sm text-gray-600">
              *match point - in volleyball, we usually play best out of 5 sets or best out of 3 sets. When both teams are tied in sets, the tiebreaker game (3rd or 5th) set goes up to 15 points. It's typically the most intense set
            </p>
            <p className="text-sm text-gray-600">
              *shank - when you shank a ball, the ball hits your arm and moves opposite the direction you intended it to go
            </p>
          </div>

          <p>
            Any competitive athlete can tell you, this has happened to them at least once before. This actually happens to me quite often. Not once, not twice, but typically more than 3 or 4 times every game!
          </p>

          <p>
            There's nothing bad about it. It's just something everyone has to deal with.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Understanding the Causes</h2>
          <p>
            To start off, let's first briefly talk about why this happens... Typically, these what-ifs start popping in your head because of fear. There are many different reasons for why this fear happens. The biggest two, are:
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Fear of Error</h3>
          <p>
            Fear of Error often happens when your mind is "time travelling," when it's actively imagining what could go wrong, "worrying about what we're not doing, what we think we 'should' be doing, what just happened, or what might happen in the future." (Stanford Report) It could also be caused by the many expectations you have set.
          </p>

          <p>
            All athletes who perform at a top level want to get better. Therefore, they set goals for themselves. (This is beneficial and normal! :P) These are what we work on in practices. During practice, we are usually relaxed and having fun resulting in better results. These results are often what we think could and should be done in games. However, this is generally not the case.
          </p>

          <p>
            As Stanford Report puts it, "the intensity of the circumstances surrounding them that demand increased emotional resilience to handle the thrilling victories and devastating losses." There's just so must pressure when coming to the game point, the free throw that can catch you up, or the winning field goal. We often think of what is going to happen once we lose that game and get on the track of fear. To further reiterate, Accelerate Sport tells us, "For a young athlete, the fear of failure can be a significant barrier to achieving success in sports." Once we make one error, we think about it, leading to another error.
          </p>

          <p>
            It's impossible not to make an error, it's just what we decide to do with it.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Fear of Judgement</h3>
          <p>
            Fear of Judgement is a build on to fear of failure. You're scared of what's going to happen after the error has been made. You're scared of what others think of you.
          </p>

          <p>
            The fear factor has always been the root of my errors. Fear is unavoidable. We just have to find a way to cope with it.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Coping Strategies</h2>
          <p>
            There's a couple of specific things that we can do to cope with the 2 main types of failure we feel.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Positive Self-Talk</h3>
          <p>
            Think positive! During breaks, timeouts, even the few seconds between rallies or points, we can think of the good things we have done in the last point. This really helps me during games.
          </p>

          <p>
            By thinking positively, you're telling your brain that you can do it and you're giving your brain a mental note of what you will be doing. For example, as a setter, I might say, I'm going to set that ball perfectly, nice and high to the outside and then go cover for my blocker. Positive self talk changes my game completely. It helps me refocus on the game at hand and helps me stay calm resulting in better play.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Stay in the Moment</h3>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic my-6">
            "When they're at their best, athletes are focused on just being in the moment and executing their job. They're not worrying about outcomes, how important a particular moment is, or what could go wrong." — Stanford Report
          </blockquote>

          <p>
            We have to make sure that our minds aren't wandering everywhere. At first, this could be hard. But all you really have to do is just focus on thinking about the good things you did last play. Additionally, if any bad plays come to mind, instead of thinking about how it was so bad and impacted the game a lot, you can think about how you can correct it. For me, I'm not the best at passing. So before every serve, I think to myself, i will pass the ball right there, — maybe even point at where — , it will be nice and high and good for my teammates. This drastically helped me improve my passing and getting the balls up.
          </p>

          <p>
            It also helps to know all other elite athletes feel this way too. Even the best players get nervous and make mistakes, so it's totally normal!
          </p>

          <blockquote className="border-l-4 border-gray-200 pl-4 italic my-6">
            "I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed." — Michael Jordan
          </blockquote>

          <h3 className="text-xl font-bold mt-4 mb-2">Deep Breathing</h3>
          <p>
            "When a person is under stress, their breathing pattern changes. Typically, an anxious person takes small, shallow breaths, using their shoulders rather than their diaphragm to move air in and out of their lungs." (Better Health, 2015) Compared to when people are relaxed, "... they breathe through their nose in a slow, even and gentle way." (Better Health, 2015) We can try to copy what a relaxed breath looks like.
          </p>

          <p>
            By controlling our breathing, we can:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>lower blood pressure and heart rate</li>
            <li>reduce stress hormones</li>
            <li>increase calm feelings</li>
          </ul>

          <p>
            These are all extremely helpful when you're performing under pressure. Under stress, your brain spins at a million miles which is why when I'm nervous, these deep breaths are what undoubtedly helps calm me down and refocus. Normally, I take deep breaths before I go serve as well as between plays and I'm able to do well.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Focus on Yourself</h3>
          <blockquote className="border-l-4 border-gray-200 pl-4 italic my-6">
            "What other people think of me is none of my business. One of the highest places you can get to is being independent of the good opinions of other people." — Dr. Wayne Dyer
          </blockquote>

          <p>
            When you play your game, just try your best. It's completely understandable if you make a mistake. There's nothing to worry about. Just think of what you can do to fix it. Coming back from a negative mindset to a positive is what people will notice and admire. So live in the moment, play your game, and don't worry about others.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4">Conclusion</h2>
          <p>
            To close off, remember everyone makes mistakes, there's nothing to worry about. In order to cope, we can think affirmatively, stay in the moment, take deep breaths, and solely focus on worrying about yourself. One long face on the court can lead to your whole team being down.
          </p>

          <p>
            So next time you're in a game under immense pressure, I want to challenge you to give positive self-talk. And remember to take a deep breath.
          </p>

          <p className="text-center text-xl font-bold mt-6">
            INHA — LE, EXHA — LE!
          </p>
        </>
      ),
      image: hurdles,
      category: "Mental Health",
      readTime: "8 min read",
      slug: "mental-blocks-in-sports"
    }
  ];

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-4 w-4 mr-2" />
                <span>{article.category}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
            <div className="prose max-w-none text-lg">
              {article.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage; 