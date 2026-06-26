function PricingCard({ plan = "standard", position = "center" }) {
  const planStyles = {
    free: "bg-white text-secondary",
    standard: "bg-primary text-secondary",
    premium: "bg-white text-secondary",
  };

  const positionStyles = {
    left: "md:rounded-r-none md:border-r-0",
    center: "",
    right: "md:rounded-l-none md:border-l-0",
  };
  const content = {
    free: {
      title: "Free Plan",
      price: "$0",
      features: [
        "Basic AI meal planning",
        "Limited recipe access",
        "Manual grocery list creation",
      ],
      bestFor:
        "Those who want to explore the platform's basic functionalities.",
      cta: " Start For Free",
    },
    standard: {
      title: "Standard Plan",
      price: "$9.99",
      features: [
        "Comprehensive AI meal planning",
        "Full recipe library access",
        "Automated grocery lists",
        "Grocery delivery integration",
      ],
      bestFor:
        "Individuals or families looking for full meal planning support and convenience.",
      cta: "Subscribe Now",
    },
    premium: {
      title: "Premium Plan",
      price: "$19.99",
      features: [
        "All Standard features",
        "Exclusive gourmet recipes",
        "Nutritional consultations",
        "Advanced customization options",
      ],
      bestFor:
        "Users seeking a premium culinary experience with added personalization and expert guidance.",
      cta: "Go Premium",
    },
  };

  const { title, price, features, bestFor, cta } = content[plan];
  const isStandard = plan === "standard";

  return (
    <div
      className={`md:max-w-[480px]   rounded-[50px] border-2 border-secondary flex flex-col  py-8 px-6 md:py-16 md:px-12
          ${planStyles[plan]}
          ${positionStyles[position]}`}
    >
      <div className="flex flex-col items-center gap-6 flex-1">
        <h3>{title}</h3>
        <div className="flex flex-col  items-center gap-1.5">
          <h2 className="">{price}</h2>
          <p className="text-body">per month</p>
        </div>
        <ul className="max-w-[300px] md:min-h-[220px] text-start flex flex-col gap-6">
          {features.map((feature) => (
            <li key={feature} className="text-body">
              • {feature}
            </li>
          ))}
        </ul>
        <div className="border-b-2 border-secondary w-full"></div>
        <p className="text-body">
          <strong>Best For:</strong> {bestFor}
        </p>
        <button
          className={`mt-auto  text-xl md:text-2xl py-5 rounded-full px-14 md:px-24
              ${
                isStandard
                  ? "bg-secondary text-background"
                  : "bg-white border-2 border-secondary text-secondary"
              }`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
