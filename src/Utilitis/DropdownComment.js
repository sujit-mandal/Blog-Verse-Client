const toggleDropdown = (dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    }
  };
  

  export default toggleDropdown;