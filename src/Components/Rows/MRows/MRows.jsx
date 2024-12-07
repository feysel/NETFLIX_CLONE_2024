import React from "react";
import SRow from "../SRow/SRow.jsx";
import requests from "../../../requests.jsx";
function MRows() {
  return (
    <>
      <SRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow="true"
      />
      <SRow title="Treanding Now" fetchUrl={requests.fetchTrending} />
      <SRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <SRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <SRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <SRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default MRows;
