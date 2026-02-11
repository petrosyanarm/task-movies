import { IoIosSearch } from "react-icons/io";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaTv,MdLocalMovies,MdVideoLibrary,MdStars,MdPeople,BiWorld } from "@/components/ui/Icons"

export const SEARCH_TYPES = [
  { id: 1, title: "All", icon: IoIosSearch },
  { id: 2, title: "Titles", icon: MdLocalMovies },
  { id: 3, title: "TV episodes", icon: FaTv },
  { id: 4, title: "Celebs", icon: MdPeople },
  { id: 5, title: "Companies", icon: MdLocalMovies },
  { id: 6, title: "Keywords", icon: MdVideoLibrary },
  { id: 7, title: "Advanced Search", icon: MdStars },
];

export const LANGUAGES = [
  {
    id: 1,
    code: "EN",
    title: "English (United States)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 2,
    code: "FR",
    title: "Français (France)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 3,
    code: "DE",
    title: "Deutsch (Deutschland)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 4,
    code: "IT",
    title: "Italiano (Italia)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 5,
    code: "POR",
    title: "Português (Portugal)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 6,
    code: "HI",
    title: "中文（简体）",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 7,
    code: "ES",
    title: "Español (España)",
    icon: MdOutlineRadioButtonUnchecked,
  },
  {
    id: 8,
    code: "EM",
    title: "Español (México)",
    icon: MdOutlineRadioButtonUnchecked,
  },
];
