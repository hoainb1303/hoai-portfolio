import { Skillset } from "@/types";
import { browserSvg, phoneSvg, brushSvg, techSvg } from "@/assets";
import { squareHolderSvg, javaScriptSvg } from "@/assets";

export const skillsetList: Skillset[] = [
  {
    id: "front-end",
    title: "Front-end Development",
    description:
      "I enjoy building clean, responsive, and user-friendly web applications with a focus on simple but practical solutions, smooth interactions, and thoughtful UI experiences.",
    icon: browserSvg,
    skillList: [
      {
        id: "html5",
        name: "HTML5",
        icon: squareHolderSvg,
      },
      {
        id: "css3",
        name: "CSS3",
        icon: squareHolderSvg,
      },
      {
        id: "react",
        name: "reactJS",
        icon: squareHolderSvg,
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: javaScriptSvg,
      },
    ],
  },

  {
    id: "flutter-mobile",
    title: "Flutter Mobile Development",
    description:
      "Experienced in building cross-platform mobile applications with Flutter, focusing on responsive interfaces, smooth interactions, and practical user experiences.",
    icon: phoneSvg,
    skillList: [
      {
        id: "flutter",
        name: "Flutter",
        icon: squareHolderSvg,
      },
      {
        id: "dart",
        name: "Dart",
        icon: squareHolderSvg,
      },
      {
        id: "java",
        name: "Java",
        icon: squareHolderSvg,
      },
    ],
  },
  {
    id: "design",
    title: "UI/UX, Label Design",
    description:
      "I enjoy designing clean and intuitive user interfaces with a focus on clarity, usability, and creating thoughtful experiences that feel both simple and engaging.",
    icon: brushSvg,
    skillList: [
      {
        id: "adobe-illustrator",
        name: "Illustrator",
        icon: squareHolderSvg,
      },
      {
        id: "adobe-photoshop",
        name: "Photoshop",
        icon: squareHolderSvg,
      },
    ],
  },
  {
    id: "mix-tech",
    title: "Additional Technical Background",
    description:
      "Backed by hands-on experience in system troubleshooting, thermal label printer solutions, and real-world technical workflows, helping me approach problems with a practical and structured mindset.",
    icon: techSvg,
    skillList: [
      {
        id: "adobe-illustrator",
        name: "Illustrator",
        icon: squareHolderSvg,
      },
      {
        id: "adobe-photoshop",
        name: "Photoshop",
        icon: squareHolderSvg,
      },
    ],
  },
];
