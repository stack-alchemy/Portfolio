"use client";

import { Experience } from "@/data/experience";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const [expanded, setExpanded] = useState(false);

  const PREVIEW_COUNT = 2;
  const visibleDescriptions = expanded
    ? experience.description
    : experience.description?.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <a
          href={experience.companyUrl}
          className="hover:text-zinc-600 transition-colors flex gap-1 items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={experience.logo}
            alt={experience.company}
            height={16}
            className="mr-2"
          />
          {experience.company}
          <FiExternalLink size={12} />
        </a>
        <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      </div>

      <h3 className="text-base font-serif">{experience.title}</h3>

      <div className="space-y-2">
        {visibleDescriptions?.map((item, key) => (
          <p key={key} className="text-sm text-zinc-600 leading-relaxed">
            {item}
          </p>
        ))}

        <div className="space-y-2 transition-all duration-300 ease-in-out">
          {experience.description &&
            experience.description.length > PREVIEW_COUNT && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline text-sm text-blue-600 hover:underline"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
