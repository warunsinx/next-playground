import React, { useState } from "react";
import {
  EventInput,
  FunctionInput,
  parseEvents,
  parseFunctions,
} from "../../utils/abiUtil";

export default function ABIFormView() {
  const [abi, setAbi] = useState<string>("");
  const [functions, setFunctions] = useState<FunctionInput[]>([]);
  const [events, setEvents] = useState<EventInput[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valFunctions = parseFunctions(abi);
    setFunctions(valFunctions);
    const valEvents = parseEvents(abi);
    setEvents(valEvents);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={abi}
        onChange={(event) => {
          setAbi(event.target.value);
        }}
        name="abi"
        id="abi"
        cols={30}
        rows={10}
      ></textarea>
      <br />
      <button type="submit">Submit</button>
      <hr />
      <p>Functions</p>
      {functions.map((func) => (
        <div key={func.name}>
          <p>{func.name}</p>
        </div>
      ))}
      <hr />
      <p>Events</p>
      {events.map((e) => (
        <div key={e.name}>
          <p>{e.name}</p>
        </div>
      ))}
      <hr />
    </form>
  );
}
