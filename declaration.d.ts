declare module "*.svg" {
  const content: string;

  export default content;
}

// this is for importing images in .webp format
declare module "*.webp" {
  const value: string;

  export default value;
}
