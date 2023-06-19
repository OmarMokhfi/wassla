"use client";

import Image from "next/image";
import { BiCommentDetail, BiLike, BiSend } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsShareFill, BsTwitter } from "react-icons/bs";
import WButton from "src/components/Button";
import WTextArea from "src/components/TextArea";

export default function page() {
  return (
    <div className="w-full max-w-[1176px] mx-auto">
      <Header
        name="Flen ben Flen"
        role="Dr. A L'École Supérieure en Informatique, Sidi Bel Abbès"
        date={new Date().toDateString()}
      />
      <div className="space-y-8 py-4">
        <h1 className="font-bold">5 React Design Patterns You Should Know</h1>
        <div className="overflow-hidden relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article }}></div>
      </div>
      <div className="py-2">
        <hr className="border-2" />
      </div>
      <div className="flex items-center gap-3">
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiLike size={18} />}
        >
          Like
        </WButton>
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiCommentDetail size={18} className="mt-1" />}
        >
          Comment
        </WButton>
        <WButton
          type="text"
          className="!text-[12px] flex items-center justify-center"
          size="large"
          icon={<BiSend size={18} />}
        >
          Send
        </WButton>
        <WButton type="text" className="!text-[12px]" size="large">
          Report
        </WButton>
      </div>
      <NewComment author="Omar Mokhfi" />
      <Comment
        author="Omar Mokhfi"
        content="React is pretty cool! It's a popular JavaScript library for building
          user interfaces. It's easy to learn and has a lot of great features
          that make it a favorite among developers."
      />
    </div>
  );
}

const Comment = ({ content, author }: { content: string; author: string }) => {
  return (
    <section className="mt-6 space-y-3">
      <div className="bg-white py-8 px-8 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-full min-h-[35px] min-w-[35px] h-[35px] w-[35px] relative overflow-hidden">
            <Image
              src="/profile.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="font-bold text-[14px] mb-1">{author}</p>
          </div>
        </div>
        <p className="ml-12 text-xl">{content}</p>
      </div>
    </section>
  );
};

const NewComment = ({ author }: { author: string }) => {
  return (
    <section className="mt-6 space-y-3">
      <div className="bg-white py-8 px-8 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="rounded-full min-h-[35px] min-w-[35px] h-[35px] w-[35px] relative overflow-hidden">
            <Image
              src="/profile.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="font-bold text-[14px] mb-1">{author}</p>
          </div>
        </div>
        <div className="pl-12">
          <WTextArea placeholder="Write Your comment" className="text-xl" />
        </div>
        <div className="flex items-center justify-end gap-2 mt-4">
          <WButton type="default" size="large">
            Cancel
          </WButton>
          <WButton type="primary" size="large">
            Post
          </WButton>
        </div>
      </div>
    </section>
  );
};

const Header = ({
  name,
  role,
  date,
}: {
  name: string;
  role: string;
  date: string;
}) => {
  return (
    <div className="flex items-center justify-between py-16">
      <div className="flex gap-3">
        <div className="rounded-full min-h-[80px] min-w-[80px] h-[80px] w-[80px] relative overflow-hidden">
          <Image
            src="/profile.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p className="font-bold text-[14px] mb-1">{name}</p>
          <p className="text-[12px] max-w-[165px]">{role}</p>
          <p className="text-[12px] text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <WButton
          type="text"
          icon={<BsLinkedin size={22} className="text-gray-500" />}
          className="flex items-center justify-center"
        />
        <WButton
          type="text"
          icon={<BsTwitter size={22} className="text-gray-500" />}
          className="flex items-center justify-center"
        />
        <WButton
          type="text"
          icon={<BsFacebook size={22} className="text-gray-500" />}
          className="flex items-center justify-center"
        />
        <WButton
          type="text"
          icon={<BsShareFill size={22} className="text-gray-500" />}
          className="flex items-center justify-center"
        />
      </div>
    </div>
  );
};

const article = `
<h2 id="interview-prep-series-part-2">Interview Prep Series Part 2</h2>
<p>Securing a job interview in the tech industry is an exciting step towards building a successful career. However, it can also be nerve-wracking, especially for early career professionals eager to make a strong impression. Preparation is key to overcoming interview jitters and presenting your best self. In this article, we will explore essential tips to help you prepare for the big day and boost your chances of completing the interview smoothly.</p>
<h3 id="1-research-the-company-">1. Research the Company:</h3>
<p>Before stepping into the interview room, equip yourself with a thorough understanding of the company. Study their mission, vision, values, and recent projects. Familiarize yourself with their industry position, competitors, and any news or updates. This knowledge will demonstrate your genuine interest and dedication to the role.</p>
<h3 id="2-understand-the-job-description-">2. Understand the Job Description:</h3>
<p>Analyze the job description in detail, highlighting the key skills, qualifications, and responsibilities required for the position. Identify the specific areas where your skills align with their requirements and<a href="https://codelabsacademy.com/blog/job-interview-prep-series"> prepare examples or anecdotes that showcase your relevant experiences</a>. This preparation will help you respond confidently to questions about your suitability for the role.</p>
<h3 id="3-brush-up-on-technical-skills-">3. Brush Up on Technical Skills:</h3>
<p>Tech interviews often involve technical assessments or coding challenges. Review the fundamentals of programming languages, algorithms, and data structures. Practice solving coding problems and explore online coding platforms or websites like <a href="https://leetcode.com/">LeetCode</a> and <a href="https://www.hackerrank.com/">HackerRank</a>. Stay updated with the latest developments and trends in the tech industry to demonstrate your passion for learning and growth.</p>
<h3 id="4-practice-your-responses-">4. Practice your Responses:</h3>
<p>Rehearse your <a href="https://codelabsacademy.com/blog/job-interview-prep-series">prepared responses to common interview questions</a> such as &quot;Tell me about yourself,&quot; &quot;Why are you interested in this role?&quot; or &quot;Describe a challenging situation you faced at work and how you resolved it.&quot; Develop concise, clear, compelling answers highlighting your skills, achievements, and problem-solving abilities. Practising with a friend or <a href="https://codelabsacademy.com/career-services">through mock interviews</a> can improve your confidence and articulation.</p>
<h3 id="5-showcase-your-projects-and-portfolio-">5. Showcase Your Projects and Portfolio:</h3>
<p>Early career tech professionals might have limited work experience but can leverage personal projects, internships, or open-source contributions. Prepare a portfolio showcasing your best work, including relevant projects, GitHub repositories, or technical blog posts. Demonstrate your ability to apply your skills in real-world scenarios and your enthusiasm for continuous learning and growth.</p>
<h3 id="6-dress-professionally-">6. Dress Professionally:</h3>
<p>First impressions matter. Dress professionally and appropriately for the interview, aligning with the company&#39;s dress code and industry norms. It&#39;s better to be slightly overdressed than underdressed. Pay attention to personal grooming, and ensure your appearance is neat and tidy. This also goes for online interviews! </p>
<h3 id="7-prepare-for-an-online-interview-">7. Prepare for an Online Interview:</h3>
<p>If your interview will be through a video call, it’s a good idea to prepare ahead of time and avoid any hiccups on the day of the interview. Plan ahead to ensure you’ll have a quiet and private space with a strong internet connection at least 15 minutes before the scheduled interview. On the day of the interview, ensure your camera and microphone are working correctly, and all configurations are set up for the video conferencing system you’ll be using. Finally, make sure you can open the call link before the scheduled time. You may need to create an account before being able to open the link, don’t let any surprises like this make you late! </p>
<h3 id="8-practice-non-verbal-communication-">8. Practice Non-Verbal Communication:</h3>
<p>Your body language can significantly impact the interviewer&#39;s perception of you. Practice confident posture, maintain eye contact, and offer a firm handshake (if applicable). Avoid fidgeting or crossing your arms, as it may convey nervousness or defensiveness. Radiate positivity and engage in active listening throughout the interview. One psychological trick you can try is to imitate certain interviewer behaviours, such as their level of liveliness or hand gestures. No need to do so to an unnatural level, but keep in mind to adjust yourself responding to the interviewer.</p>
<h3 id="get-1-1-career-support-with-code-labs-academy">Get 1:1 Career Support with Code Labs Academy</h3>
<p>Early career professionals can excel in tech job interviews with the proper preparation and mindset. At Code Labs Academy, we provide you with <a href="https://codelabsacademy.com/career-services">personalized career support</a> throughout your bootcamp and job search. Once you’ve landed an interview for a job or internship, we’ll help prepare your responses and practice in a 1:1 mock interview session. </p>`;
