import SoluLab from "@/assets/solulab.png"
import Piesoft from "@/assets/piesoft.svg"
import Matellio from "@/assets/matellio.png"

export interface Experience {
  date: string;
  title: string;
  company: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any;
  description?: string[];
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Apr, 2022 – Present",
    title: "Senior Full Stack Software Engineer",
    company: "SoluLab",
    logo: SoluLab,
    description: [
      "Delivered HIPAA-compliant clinician and patient portals using React, Next.js, TypeScript, and React Query, improving Core Web Vitals and reducing abandonment across critical healthcare workflows by ~38%.",
      "Owned end-to-end delivery of complex clinical features including prior authorization, medication reconciliation, care plans, and longitudinal records, spanning frontend UX, API contracts, and backend processing.",
      "Led frontend architecture decisions around state management, data-fetching strategies, accessibility, and performance budgets to support sustained clinical usage under load",
      "Built and maintained backend services using Python (FastAPI), Node.js, ASP.NET Core, Java Spring Boot, and Go, supporting eligibility checks, claims workflows, document processing, and EHR-facing APIs.",
      "Implemented asynchronous and event-driven workflows using Kafka, cloud queues, Python background workers, and idempotent retry patterns, reducing failures during peak healthcare traffic by ~35%.",
      "Integrated SMART-on-FHIR workflows with Epic and Cerner, modeling FHIR R4 resources end-to-end from backend ingestion through frontend presentation.",
      "Introduced Redis caching, request coalescing, and pagination strategies across Python and Node services, improving P95 API latency and user-perceived performance by ~41%.",
      "Established frontend and backend testing practices using Jest, React Testing Library, Cypress, Playwright, pytest, and service-level integration tests to protect healthcare-critical paths",
      "Implemented full-stack observability with OpenTelemetry, Datadog, and Sentry, correlating frontend regressions with backend and async job performance and reducing incident resolution time by ~30%.",
      "Deployed containerized services to AWS and GCP using Docker and Terraform, supporting blue-green releases and safe rollbacks.",
      "Collaborated closely with clinicians, compliance partners, and product leadership to translate regulatory requirements into scalable technical solutions.",
      "Mentored engineers on full-stack ownership, healthcare data standards, testing strategies, and performance optimization in regulated environments.",
    ],
    companyUrl: "https://solulab.com",
  },
  {
    date: "Feb, 2018 – Mar, 2022",
    title: "Software Developer",
    company: "Piesoft",
    logo: Piesoft,
    description: [
      "Developed Angular-based telehealth, scheduling, and real-time interaction interfaces supporting healthcare delivery, remote education platforms, and consumer-facing applications.",
      "Built React scheduling and eligibility modules, improving usability and task completion across clinician, student, and end-user workflows.",
      "Integrated Twilio video and messaging services to support secure telehealth visits, virtual classrooms, notifications, and real-time user interactions.",
      "Implemented backend-for-frontend services using Node.js and Python to normalize payloads and simplify frontend data access, reducing API chatter by ~40%.",
      "Built and supported backend services using Python (Django, FastAPI), Spring Boot, .NET, and Ruby on Rails to process healthcare EDI transactions, eligibility checks, and secure messaging workflows.",
      "Implemented HL7 and FHIR data transformations using Python background workers and message queues to ensure reliable, auditable healthcare data exchange.",
      "Introduced GraphQL APIs with resolver batching and persisted queries, eliminating N+1 patterns and stabilizing P95 service latency.",
      "Established frontend and backend testing coverage using Jasmine, Karma, Jest, pytest, and integration tests to validate APIs, background jobs, and real-time workflows.",
      "Automated CI pipelines and infrastructure using Docker, GitHub Actions, Jenkins, and Terraform, improving release stability and recovery objectives.",
      "Worked closely with designers, product managers, and backend engineers to balance healthcare compliance requirements with consumer-grade UX expectations.",
    ],
    companyUrl: "https://piesoft.us",
  },
  {
    date: "Jan, 2015 – Jan, 2018",
    title: "Software Developer",
    company: "Matellio",
    logo: Matellio,
    description: [
      "Delivered React, Angular, and Vue applications supporting healthcare analytics, educational dashboards, and entertainment content discovery platforms.",
      "Built data-heavy dashboards using D3 and Recharts to visualize longitudinal clinical, educational, and media datasets.",
      "Implemented provider search, appointment scheduling, and ICD-10 / LOINC lookup interfaces with optimized rendering and client-side caching.",
      "Collaborated with backend engineers on API design, validation, pagination, and error handling to support complex UI requirements.",
      "Built and supported backend services using Python and Node.js for data normalization, reporting, and early analytics pipelines.",
      "Integrated Elasticsearch-backed search experiences to improve discovery across patient, course, and content catalogs.",
      "Implemented Redis caching and server-driven pagination, improving time-to-first-byte and stabilizing UI responsiveness under load.",
      "Built secure document upload workflows using pre-signed URLs and background processing, reducing submission failures by ~27%.",
      "Established early accessibility and performance standards within frontend workflows, lowering time-to-interactive by ~22%."
    ],
    companyUrl: "https://matellio.com",
  },
];
