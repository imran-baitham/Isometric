interface ChildrenProps {
  children: React.ReactNode;
}

interface NavProps {
  name: string;
  link: string;
  slug: string;
}

export interface TCtaSection {
  id: number;
  title: string;
  description: string;
  ctaImage: string;
  imagePosition: "left" | "right";
}

export { ChildrenProps, NavProps, TCtaSection };
