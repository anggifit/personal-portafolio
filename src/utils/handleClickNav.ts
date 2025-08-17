export const handleClickNav = (id: string): (() => void) => {
  return () => {
    const sectionSelected = document.getElementById(id);
    if (sectionSelected) {
      sectionSelected?.scrollIntoView({ behavior: "smooth" });
    }
  };
};
