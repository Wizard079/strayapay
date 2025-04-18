
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export function QrCodesSection() {
  const testimonials = [
    {
      quote:
        "With PayPal, transactions feel effortless. Their reliability and speed empower our global operations like never before.",
      name: "Paypal",
      src: "./assets/paypal.png",
    },
    {
      quote:
        "Google Pay's integration was flawless — secure, smart, and always a step ahead in innovation.",
      name: "Google Pay",
      src: "./assets/googlepay.png",
    },
    {
      quote:
        "Amazon Pay delivers the ultimate checkout experience — fast, trusted, and customer-centric from start to finish.",
      name: "Amazon Pay",
      src: "./assets/amazonpay.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
