import FaqCard from "../_components/FaqCard";
import Header from "../_components/Header";
import QuestionCard from "../_components/QuestionCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const faqCards = [
  {
    title: "How does the AI create personalized meal plans?",
    description:
      "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time.",
  },
  {
    title: "Can I integrate special dietary requirements into my meal plan?",
    description:
      "Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly.",
  },
];

const questions = [
  "How does the grocery delivery service work?",
  "How does the platform accommodate allergies and food sensitivities?",
  "Are there options for budget-conscious users?",
  "Can I adjust my meal plans after they've been created?",
  "How can I access nutrition education and healthy eating tips?",
  "What makes your AI-driven meal planning different from other meal planning services?",
];

function Faq() {
  return (
    <div className="w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title="Frequently Asked Questions"
          sub="Meal planning made easy: your questions, answered"
        />
      </div>
      <main className="flex flex-col gap-10 w-full">
        <section className="md:hidden w-full">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className={" h-full"}>
              {faqCards.map((card, index) => (
                <CarouselItem key={index} className="basis-[90%] flex">
                  <FaqCard title={card.title} description={card.description} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="hidden md:flex justify-center gap-10">
          {faqCards.map((card, index) => (
            <FaqCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>

        <section className="md:hidden w-full">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full"
          >
            <CarouselContent className="h-[420px]">
              {questions.map((q, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <QuestionCard title={q} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>
        <section className="hidden md:grid grid-cols-2 grid-rows-3 self-center-safe gap-y-6 gap-x-36">
          {questions.map((q, index) => (
            <QuestionCard key={index} title={q} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Faq;
