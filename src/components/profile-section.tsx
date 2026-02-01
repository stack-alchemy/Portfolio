import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { AboutMe } from "@/data/aboutme";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="flex md:flex-col gap-6 md:space-y-4">
      {aboutMe.imageUrl && (
        <div className="w-1/2 md:w-full flex justify-start md:justify-center">
          <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              className="w-full sm:w-3/4 rounded-xl shadow-black shadow-md"
            />
        </div>
      )}
      <div className="w-1/2 md:w-full">
        <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
        </p>

        <div className="flex gap-4">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail size={20} />
          </a>
          <a
            href={`${aboutMe.linkedin}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`${aboutMe.github}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
