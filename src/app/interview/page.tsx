import type { Metadata } from "next";
import InterviewClient from "./client";

export const metadata: Metadata = {
  title: "Mock Interview | IntervueX AI",
  description: "Simulated technical interviews with actionable feedback.",
};

export default function InterviewPage() {
  return <InterviewClient />;
}
