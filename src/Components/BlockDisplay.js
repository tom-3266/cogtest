import React , {useState,useEffect} from 'react'
import { Row, Col,Input,Button } from "antd";

import "./BlockDisplay.css"

const BlockDisplay = () => {
  const [rows, setRows] = useState(0)
  const [columns, setColumns] = useState(0)
  const [displayArray, setDisplayArray] = useState([])
  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0);;

  const arrayFn = (rows, columns) => {
    console.log(rows, columns);
    let num = 0;
    let arr1 = [];
    for (let i = 0; i < rows; i++){
      arr1[i] = [];
      for (let j = 1; j <= columns; j++){
        arr1[i][j-1] = j + num;
      }
      num += columns
    }
    console.log(arr1)
    setDisplayArray(arr1);
  }

  return (
    <div className="displayBlock">
      <Row className="displayBlock--container">
        <Col span={18} className="displayBlock--left p-20">
          <div className="displayArea">
            {displayArray.length === 0 && (
              <p>
                Nothing to show, input value in row and column and click
                generate
              </p>
            )}
            {displayArray.map((val) => {
              return (
                <div className="flex">
                  {val.map((item) => {
                    return (
                      <div className="square" onClick={() => setNum(item)}>
                        {item}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="total">Total blocks: {total}</div>
        </Col>
        <Col span={6} className="displayBlock--right p-20">
          <Row className="header">Block Config</Row>

          <Row className="mb-5">
            <Col span={10}>Row :</Col>
            <Col span={14}>
              <Input
                type="number"
                className="rowsInput"
                value={rows}
                onChange={(e) => {
                  setRows(e.target.value);
                }}
              />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col span={10}>Column :</Col>
            <Col span={14}>
              <Input
                type="number"
                className="rowsInput"
                value={columns}
                onChange={(e) => {
                  setColumns(e.target.value);
                }}
              />
            </Col>
          </Row>

          <Row className="buttonRow mb-5">
            <Col>
              <Button
                type="primary"
                onClick={() => {
                  arrayFn(parseInt(rows), parseInt(columns));
                  setTotal(rows * columns);
                }}
              >
                Generate
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                onClick={() => {
                  setColumns(0);
                  setRows(0);
                  setDisplayArray([]);
                  setNum(0);
                  setTotal(0);
                }}
              >
                Clear
              </Button>
            </Col>
          </Row>
          <Row className="selectedBlock p-28">
            <div className="header">Selected Block</div>
            <div>
              {num > 0 && <div className="square">{num}</div>}
              {num === 0 && <p>Nothing to show</p>}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BlockDisplay
