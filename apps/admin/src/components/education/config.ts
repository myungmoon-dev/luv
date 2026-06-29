import type { EducationType } from "@/api/education";

export const EDUCATION_TYPE_OPTIONS: { value: EducationType; label: string; slug: string }[] = [
  { value: "infants", label: "영아부", slug: "infants" },
  { value: "toddlers", label: "유치부", slug: "toddlers" },
  { value: "elementary", label: "유초등부", slug: "elementary" },
  { value: "high", label: "중고등부", slug: "high" },
  { value: "youth", label: "청년부", slug: "youth" },
  { value: "bridge", label: "브릿지", slug: "bridge" },
];
