import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import { useState } from "react";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleChangeSelectedGenre = (id: number) => {
    setSelectedGenreId(id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleChangeSelectedGenre={handleChangeSelectedGenre}
        selectedGenreId={selectedGenreId}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
