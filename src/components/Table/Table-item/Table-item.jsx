import React from "react";
import ReactPaginate from "react-paginate";
import "./table-item.css";
export function Talbe_item({
  elements,
  inputVal,
  filtered,
  setFiltered,
  byArif,
  byName,
}) {
  const perPageProducts = 8;
  const [pageNumber, setPageNumber] = React.useState(0);
  const numberPages = Math.ceil(elements.length / perPageProducts);

  const pagesShown = pageNumber * perPageProducts;
  const toDisplay = elements.slice(pagesShown, pagesShown + perPageProducts);
  React.useEffect(() => {
    filterFunction();
  }, [inputVal, byArif, byName]);

  function filterFunction() {
    setFiltered(
      toDisplay.filter((item) => {
        if (byName === "Количество") {
          if (byArif === "Равно") {
            if (parseInt(item.value) === parseInt(inputVal)) {
              return item;
            }
          }
          if (byArif === "Больше") {
            if (parseInt(item.value) > parseInt(inputVal)) {
              return item;
            }
          }
          if (byArif === "Меньше") {
            if (parseInt(item.value) < parseInt(inputVal)) {
              return item;
            }
          }
        } else if (byName === "Расстояние") {
          if (byArif === "Равно") {
            if (parseInt(item.distance) === parseInt(inputVal)) {
              return item;
            }
          }
          if (byArif === "Больше") {
            if (parseInt(item.distance) > parseInt(inputVal)) {
              return item;
            }
          }
          if (byArif === "Меньше") {
            if (parseInt(item.distance) < parseInt(inputVal)) {
              return item;
            }
          }
        } else if (byName === "Название") {
          if (item.name.toLowerCase().trim().includes(inputVal.toLowerCase())) {
            return item;
          }
        }
      })
    );
  }

  const toShow = () =>
    inputVal
      ? filtered.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
            <td>{item.distance}</td>
          </tr>
        ))
      : toDisplay.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.value}</td>
            <td>{item.distance}</td>
          </tr>
        ));
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      {toShow()}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={numberPages}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nextBtn"}
        activeClassName={"activePagination"}
      />
    </>
  );
}
