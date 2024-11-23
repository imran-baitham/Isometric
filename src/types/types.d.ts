interface ChildrenProps {
  children: React.ReactNode;
}

interface NavProps {
  name: string;
  link: string;
  slug: string;
}

interface TCtaSection {
  id: number;
  title: string;
  description: string;
  ctaImage: string;
  imagePosition: "left" | "right";
}

interface FeatureProps {
  featureImg: string;
  title: string;
  description: string;
}

export { ChildrenProps, NavProps, TCtaSection, FeatureProps };
