export type TIDE = {
  typewriterTexts: {
    classNames: Record<"h3" | "primaryTextBold" | "contentWrapper" | "iconsWrapper" | "iconsItems", { text: string }>;
    textsValues: Record<"primaryText" | "secondaryText" | "h3" | "primaryTextBold", string>;
  };
};
