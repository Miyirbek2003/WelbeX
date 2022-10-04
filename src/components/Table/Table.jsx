import "./table.css";
import React from "react";
export function Table({ elements, setData }) {
  const [byName, setByName] = React.useState("");     // выбор колонки по Название	
  const [byArif, setByArif] = React.useState("");     // выбор колонки по Количество	
  const [inputVal, setInputVal] = React.useState(""); // ввод

  const [filtered, setFiltered] = React.useState([]);
  function filterFunction() {
    setFiltered(
      elements.filter((item) => {
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
  React.useEffect(() => {
    filterFunction();
  }, [inputVal, byArif, byName]);
  return (
    <>
      <div className="sort">
        <select
          value={byName}
          className="byName"
          onChange={(e) => setByName(e.target.value)}
        >
          <option hidden>Выбор колонки</option>
          <option value="Название">Название</option>
          <option value="Количество">Количество</option>
          <option value="Расстояние">Расстояние</option>
        </select>
        <select
          value={byArif}
          onChange={(e) => setByArif(e.target.value)}
          className="byArif"
        >
          <option hidden>Выбор условия</option>
          {
            byName !== "Название"?
            <option value="Равно">Равно</option>        // знаю знаю что код немного hard (
            :
            null
          }
          {
            byName === "Название"?  //  тоесть поиск по именам 
            <option value="Содержить">Содержить</option>
            :
            null
          }
          {
            byName !== "Название"?
            <option value="Больше">Больше</option>
            :
            null
          }
          {
            byName !== "Название"?
            <option value="Меньше">Меньше</option>
            :
            null
          }
        </select>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Значения для фильтрации"
          type="text"
        />
      </div>
      <table>
        <tbody>
          <tr>
            <td>Дата</td>
            <td>Название</td>
            <td>Количество</td>
            <td>Расстояние</td>
          </tr>
          {inputVal
            ? filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                  <td>{item.distance}</td>
                </tr>
              ))
            : elements.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                  <td>{item.distance}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
}
