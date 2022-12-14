import React from 'react'

function FFCPage() {
<<<<<<< Updated upstream
=======
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };
  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        setPage("pagefive");
        break;
      case "6":
        setPage("pagesix");
        break;
      default:
        setPage("1");
    }
  };
>>>>>>> Stashed changes
  return (
    <div>FFCPage</div>
  )
}

<<<<<<< Updated upstream
export default FFCPage
=======
export default FFCPage;
>>>>>>> Stashed changes
