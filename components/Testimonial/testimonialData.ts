import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Brad Venner",
    designation: "Statestician at USEPA",
    image: image1,
    content: "I guess it works??",
  },
  {
    id: 2,
    name: "Bryan Murray",
    designation: "Data Scientist at SwitchBox",
    image: image2,
    content: "Looks Useful.",
  },
  {
    id: 3,
    name: "Juan-Puablo Valez",
    designation: "Founder at Switchbox",
    image: image1,
    content: "Wow, you guys spent a lot of time on this.",
  },
];
