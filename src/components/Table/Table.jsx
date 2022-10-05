import "./table.css";
import React from "react";
import { Talbe_item } from "./Table-item/Table-item";
export function Table({ elements, setData }) {
  const [byName, setByName] = React.useState(""); // выбор колонки по Название
  const [byArif, setByArif] = React.useState(""); // выбор колонки по Количество
  const [inputVal, setInputVal] = React.useState(""); // ввод
  const [filtered, setFiltered] = React.useState([])
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
          {byName !== "Название" ? (
            <option value="Равно">Равно</option> // знаю знаю что код немного hard (
          ) : null}
          {byName === "Название" ? ( //  тоесть поиск по именам  я именно это спросил в What's App
            <option value="Содержить">Содержить</option>
          ) : null}
          {byName !== "Название" ? (
            <option value="Больше">Больше</option>
          ) : null}
          {byName !== "Название" ? (
            <option value="Меньше">Меньше</option>
          ) : null}
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
          <Talbe_item elements={elements} inputVal={inputVal} setFiltered={setFiltered} filtered={filtered} byArif={byArif} byName={byName} /> 
          {/* отделный компонент для поиска и пагинацию */}
        </tbody>
      </table>
    </>
  );
}
