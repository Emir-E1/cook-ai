import FaqCard from "../_components/FaqCard";
import Header from "../_components/Header";
import QuestionCard from "../_components/QuestionCard";

function Faq() {
  return (
    <div className="w-full bg-white relative flex flex-col gap-10 md:gap-14 items-center p-5 md:p-16">
      <div className="flex items-center w-full justify-start">
        <Header
          title="Frequently Asked Questions"
          sub="Meal planning made easy: your questions, answered"
        />
      </div>
      <main className="flex flex-col gap-10">
        <section className="flex gap-10">
          <FaqCard
            title={"How does the AI create personalized meal plans?"}
            description={
              "Our AI system analyzes your dietary preferences, health goals, and budget to curate meal plans that are unique to you. It continually learns from your feedback and choices to improve its suggestions over time."
            }
          />
          <FaqCard
            title={
              "Can I integrate special dietary requirements into my meal plan?"
            }
            description={
              "Absolutely! Our platform is designed to accommodate a range of dietary needs, including vegetarian, vegan, gluten-free, and keto options. Just specify your requirements in your profile, and your meal plans will be adjusted accordingly."
            }
          />
        </section>

        <section className="grid grid-cols-2 grid-rows-3 gap-y-6 gap-x-36">
          <QuestionCard title="How does the grocery delivery service work?" />
          <QuestionCard title="How does the platform accommodate allergies and food sensitivities?" />

          <QuestionCard title="Are there options for budget-conscious users?" />
          <QuestionCard title="Can I adjust my meal plans after they've been created?" />

          <QuestionCard title="How can I access nutrition education and healthy eating tips?" />
          <QuestionCard title="What makes your AI-driven meal planning different from other meal planning services?" />
        </section>
      </main>
    </div>
  );
}

export default Faq;
