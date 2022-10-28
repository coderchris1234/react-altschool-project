import React from "react";
import "./style.css";
import { Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Accounts from './components/Accounts';
import User from './components/User';
import Fixed from './components/Fixed';
import Current from './components/Current';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://randomuser.me/api/?results=50`);
        if(!res.ok){
          throw new Error("something went wrong")
        }
        const data = await res.json();

        setData(data.results);
        console.log(data.results)
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
      // console.log(data)
    };

    fetchData();
    return () => { };
  }, []);

  const indexOfLastPost = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastPost - userPerPage;
  const currentPages = data.slice(indexOfFirstPost, indexOfLastPost)
  return (
    <div>
              <Routes>
          <Route path='/' element={<Home />} />

          <Route path='accounts' element={<Accounts />}>
            <Route path='fixed' element={<Fixed />} />
            <Route path='current' element={<Current />} />
          </Route>

          <Route path='User' element={<User data={currentPages} loading={loading} />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
    </div>
  );
}
