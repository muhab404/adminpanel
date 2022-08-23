import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [searchedTerm, setSearchedTerm] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const search = async () => {
    if (checked) {
      navigate(`/search/${searchedTerm}`);
      setSearchedTerm("");
    }
    setChecked(!checked);
  };

  return <></>;
};

export default Search;
