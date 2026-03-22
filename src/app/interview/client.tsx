"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChatArea, Message } from "@/components/ChatArea";
import { InsightPanel } from "@/components/InsightPanel";

export default function InterviewClient() {
  const [isBrutal, setIsBrutal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  const [scoreData, setScoreData] = useState<{
    isVisible: boolean;
    score: number | null;
    strengths: string[];
    weaknesses: string[];
    tips: string[];
  }>({
    isVisible: false,
    score: null,
    strengths: [],
    weaknesses: [],
    tips: [],
  });

  const getAiResponse = async (userMsg: string, isBrutalMode: boolean, qCount: number) => {
    // Mock logic simulating a structured AI interviewer
    await new Promise(res => setTimeout(res, 1500 + Math.random() * 1000));

    let content = "";
    if (qCount === 0) {
      content = `Great to meet you. Let's get started. Tell me about a challenging project you worked on recently and the technical decisions you had to make.`;
    } else if (qCount === 1) {
      content = isBrutalMode 
        ? `That answer is too vague. You need to focus more on YOUR specific contributions rather than what the team did. Let's move on: Explain how you would design a URL shortening service like bit.ly. What are the key scalability bottlenecks?`
        : `That's a good overview. For future answers, try to highlight your personal contributions more clearly. Next question: Can you walk me through your approach to designing a URL shortening service like bit.ly?`;
    } else if (qCount === 2) {
      content = isBrutalMode 
        ? `You missed discussing database sharding and caching mechanisms, which are critical for read-heavy systems. Final question: How do you handle deadlocks in a relational database?`
        : `Nice attempt! Remember to consider caching strategies for read-heavy components. One last question: How would you identify and resolve deadlocks in a relational database?`;
    } else {
      content = isBrutalMode
        ? `Your explanation of deadlocks lacks depth. You clearly need to brush up on database transaction isolations. I've compiled your feedback on the right. We are done here.`
        : `Thanks for sharing. That concludes our mock interview. I've prepared a scorecard with some feedback to help you improve. Great effort!`;
    }
    return content;
  };

  const handleSendMessage = async () => {
    if (!inputVal.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: inputVal };
    setMessages(prev => [...prev, userMessage]);
    setInputVal("");
    setIsThinking(true);

    const aiRes = await getAiResponse(inputVal, isBrutal, questionCount);

    const aiMessage: Message = { id: (Date.now() + 1).toString(), role: "ai", content: aiRes };
    setMessages(prev => [...prev, aiMessage]);
    setIsThinking(false);
    
    setQuestionCount(prev => prev + 1);

    // Show scorecard after 3 answers (question count reaches 3)
    if (questionCount === 2) {
      setTimeout(() => {
        setScoreData({
          isVisible: true,
          score: isBrutal ? 5.5 : 7.2,
          strengths: [
            "Good communication flow",
            "Understands basic system design concepts",
            "Maintains composure under pressure"
          ],
          weaknesses: [
            "Answers lack technical depth",
            "Missed key scalability factors (sharding/caching)",
            "Vague about personal contributions"
          ],
          tips: [
            "Use the STAR method for behavioral answers",
            "Always state trade-offs in system design",
            "Practice explaining database deadlocks with examples"
          ]
        });
      }, 1000);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden bg-[#0B0F19] text-white">
      <Sidebar isBrutal={isBrutal} setIsBrutal={setIsBrutal} />
      
      <ChatArea 
        messages={messages} 
        isThinking={isThinking} 
        value={inputVal} 
        onChange={setInputVal} 
        onSubmit={handleSendMessage}
        isBrutal={isBrutal}
      />
      
      <InsightPanel 
        isVisible={scoreData.isVisible}
        score={scoreData.score}
        strengths={scoreData.strengths}
        weaknesses={scoreData.weaknesses}
        tips={scoreData.tips}
      />
    </div>
  );
}
