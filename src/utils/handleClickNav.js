export const handleClickNav = (id) => () => {
    const sectionSelected = document.getElementById(id);
    if (sectionSelected) {
        sectionSelected.scrollIntoView({ behavior: 'smooth' });
    }
};