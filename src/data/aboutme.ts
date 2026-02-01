import Selfie from "@/assets/selfie.png"

export interface AboutMe {
  name: string;
  title: string;
  description: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageUrl?: any;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  telegram?: string;
  github?: string;
  linkedin?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Joseph A. Staley",
  title: "Senior Full Stack Software Engineer",
  description:
    "Senior Full-Stack Software Engineer with 10+ years of experience building and evolving scalable digital platforms across healthcare, education, and consumer domains. <br />Strong frontend foundation using React, Next.js, Angular, and Vue, paired with hands-on backend ownership across Python, Node.js, .NET, Java, Go, and Ruby. <br />Deep experience delivering regulated healthcare systems involving HIPAA compliance, EHR integrations, and interoperable clinical data standards. <br />Known for end-to-end ownership, pragmatic architecture, and close collaboration with product, clinical, and engineering teams.",
  email: "joseph.aaron.staley@gmail.com",
  linkedin: "https://www.linkedin.com/in/joseph-s-544231375",
  github: "https://github.com/stack-alchemy",
  imageUrl:
    Selfie,
};
