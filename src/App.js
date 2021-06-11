import "./styles.css";
import React from "react";
import { useState } from "react";

const places = {
  India: [
    { name: "goa", rating: "5/5" },
    { name: "kashmir", rating: "5/5" },
    { name: "west india", rating: "4/5" }
  ],

  Iceland: [
    { name: "Gullfoss falls", rating: "4.8/5" },
    { name: "Blue lagoon Iceland", rating: "4.6/5" }
  ],
  switzerland: [
    { name: "Mount pilatus", rating: "4.8/5" },
    { name: "Titlis", rating: "4.7/5" }
  ]
};

const placesweknow = Object.keys(places);

export default function App() {
  const [selectedplace, setplace] = useState("India");

  function ClickHandler(site) {
    setplace(site);
  }

  return (
    <div className="App">
      <h1>traveling places</h1>
      <span>this are my favroite places to visit</span>
      <div>
        {placesweknow.map((site) => (
          <button
            onClick={() => ClickHandler(site)}
            style={{
              backgroundColor: "yellow",
              padding: "5px  5px",
              border: "2px solid black",
              borderRadius: "5px",
              marginTop: "4px",
              marginRight: "5px",
              cursor: "pointer"
            }}
          >
            {site}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul>
          {places[selectedplace].map(function (site) {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid black",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
                key={site.name}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {site.name} </div>
                <div style={{ fontSize: "smaller" }}> {site.rating} </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
