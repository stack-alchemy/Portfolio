import Monarch from '@/assets/monarch.png'
import MaxMRJ from "@/assets/max_mrj.png"
import MyOna from '@/assets/myona.png'
import OnCall from '@/assets/oncall.png'

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: any;
  projectUrl?: string;
  logoUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Monarch Healthcare Management",
    description:
      "Monarch is a single stop for patients to find registered care centers spread across the nearby area. The platform registers and stores care centers, doctors, and clinic information in nearby areas for patient healthcare.",
    technologies: ["Healthcare"],
    projectUrl: "https://monarchmn.com/",
    imageUrl:
      Monarch,
  },
  {
    title: "MAX MRJ",
    description:
      "MAX MRJ is a revolutionary website enabling hospital staff to track, streamline, and ease the entire patient discharge process. App is standalone and doesn’t need to be connected to hospital systems to work, and entire onboarding process takes about two weeks to get started.",
    technologies: ["Healthcare"],
    projectUrl: "https://maxmrj.com/",
    imageUrl:
      MaxMRJ,
  },
  {
    title: "MyOna Care",
    description:
      "Ona is an intuitive and affordable home caregiving solution that connects care seekers with a network of well-vetted caregivers. With Ona, seniors can register, share their requirements and browse through a list of registered caregivers.",
    technologies: ["Healthcare"],
    projectUrl: "https://www.myonacare.com/",
    imageUrl:
      MyOna,
  },
  {
    title: "On-Call Meal Solutions",
    description:
      "The objective was multifaceted: to automate product accounting, on-hand inventory, and modernize the order acceptance and processing system. These processes required alignment with the company’s proprietary business practices and strict adherence to state-level regulations governing school meals in the US.",
    technologies: ["CRM"],
    projectUrl: "https://ifsmeals.com/",
    imageUrl:
      OnCall,
  },
];
