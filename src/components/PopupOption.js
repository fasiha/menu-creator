import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import produce from "immer";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import "./Popup.css";
import { flushSync } from "react-dom";

function PopupOption(props) {
  const { index, index2, index3, menu, setMenu, group } = props;
  const [show, setShow] = useState(false);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const drop = (e) => {
    e.stopPropagation();
    console.log("Dropped");

    // all three methods will work
    let METHOD = "FLUSH_SYNC";
    METHOD = "READ_BEFORE";
    METHOD = "CLONE_DIRECT_SET";

    if (METHOD === "FLUSH_SYNC") {
      // see https://github.com/reactwg/react-18/discussions/21 especially "What if I don’t want to batch?"
      // flushSync ensures that setMenu runs synchronously and doesn't batch
      flushSync(() => {
        setMenu(
          produce((draft) => {
            const [startIdx, endIdx] = [dragItem.current, dragOverItem.current];
            console.log("in draft (flush sync)", startIdx, endIdx);
            const arr = draft[index].items[index2].groups[index3].options;
            const [start, end] = [arr[startIdx], arr[endIdx]];
            arr[endIdx] = start;
            arr[startIdx] = end;
          })
        );
      });
    } else if (METHOD === "READ_BEFORE") {
      // Read the refs BEFORE calling setMenu. Then setMenu can be batched.
      const [startIdx, endIdx] = [dragItem.current, dragOverItem.current];
      setMenu(
        produce((draft) => {
          console.log("in draft (read before)", startIdx, endIdx);
          const arr = draft[index].items[index2].groups[index3].options;
          const [start, end] = [arr[startIdx], arr[endIdx]];
          arr[endIdx] = start;
          arr[startIdx] = end;
        })
      );
    } else {
      // Don't use the function form of the setter. Deep-clone `menu` directly
      // (via JSON.parse/JSON.stringify) and then give setMenu the mutated
      // clone. This is the worst method: JSON.parse+JSON.stringify is going to
      // be slow (though you can use lodash `cloneDeep`).
      const [startIdx, endIdx] = [dragItem.current, dragOverItem.current];
      console.log("in draft (deep clone+direct set)", startIdx, endIdx);

      const clone = JSON.parse(JSON.stringify(menu)); // deep clone
      console.log("MENU", menu, clone);
      const arr = clone[index].items[index2].groups[index3].options;
      const [start, end] = [arr[startIdx], arr[endIdx]];
      arr[endIdx] = start;
      arr[startIdx] = end;
      setMenu(clone);
    }

    console.log("NULLING REFS");
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    let newOption = { name: "New Option", price: 0 };
    setMenu(
      produce((draft) => {
        draft[index].items[index2].groups[index3].options.push(newOption);
      })
    );
  };

  const handleDelete = () => {
    setMenu(
      produce((draft) => {
        draft[index].items[index2].groups.splice(index3, 1);
      })
    );
    handleClose();
  };

  const saveProcess = (e) => {
    let n = e.target.name.replace(/[0-9]/g, "");
    const i = parseInt(e.target.name.replace(/[^0-9]/g, ""));
    if (n == "optionName") {
      setMenu(
        produce((draft) => {
          draft[index].items[index2].groups[index3].options[i]["name"] =
            e.target.value;
        })
      );
    } else {
      setMenu(
        produce((draft) => {
          draft[index].items[index2].groups[index3].options[i]["price"] =
            e.target.value;
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = e.target.elements;
    const name = data.name.value;
    const required = data.group.value == "1" ? true : false;
    const optionLen = menu[index].items[index2].groups[index3].options.length;
    let options = [];
    for (var i = 0; i < optionLen; i++) {
      let option = {
        name: data[`optionName${i}`].value,
        price: data[`optionPrice${i}`].value,
      };
      options.push(option);
    }
    let newData = { name, required, options };
    setMenu(
      produce((draft) => {
        draft[index].items[index2].groups[index3] = newData;
      })
    );
    handleClose();
  };

  const SelectOption = (props) => {
    const { group } = props;
    let number = group.required ? "1" : "2";

    return (
      <InputGroup className="mb-3">
        <Form.Select
          defaultValue={number}
          name="group"
          aria-label="Default select example"
        >
          <option value="1">Required</option>
          <option value="2">Optional</option>)
        </Form.Select>
      </InputGroup>
    );
  };
  const deleteOption = (e) => {
    setMenu(
      produce((draft) => {
        draft[index].items[index2].groups[index3].options.splice(
          parseInt(e.target.id),
          1
        );
      })
    );
  };

  const OptionSection = (props) => {
    const { name, price, index4 } = props;
    return (
      <div
        className="option-section"
        key={index4}
        onDragStart={(e) => dragStart(e, index4)}
        onDragEnter={(e) => dragEnter(e, index4)}
        onDragEnd={drop}
        draggable
      >
        <Form.Label>Option Name</Form.Label>
        <Form.Control
          type="text"
          name={`optionName${index4}`}
          required
          className="mb-4"
          defaultValue={name}
          onBlur={saveProcess}
        ></Form.Control>

        <Form.Label>Price $</Form.Label>
        <Form.Control
          type="number"
          step="0.1"
          name={`optionPrice${index4}`}
          defaultValue={price}
          onBlur={saveProcess}
          required
        />
        <Button
          variant="outline-danger mt-3"
          id={index4}
          onClick={deleteOption}
        >
          Delete
        </Button>
      </div>
    );
  };

  return (
    <>
      <Button variant="outline-secondary" className="mt-3" onClick={handleShow}>
        Edit {group.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {group.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="option-form" onSubmit={handleSubmit}>
            <Form.Label>Option Group Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              className="mb-4"
              defaultValue={group.name}
            />
            <Form.Label>Type</Form.Label>
            <SelectOption group={group} />
            <Form.Label>
              Options{" "}
              <Button variant="outline-info" onClick={handleAdd}>
                + Add
              </Button>
            </Form.Label>
            {group.options.map((option, i) => (
              <OptionSection
                key={i}
                index4={i}
                name={option.name}
                price={option.price}
              />
            ))}
            <Button variant="outline-info" className="m-3" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete the Option Group
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopupOption;
