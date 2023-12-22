import { useState } from "react";
import HyperLink from "../Components/HyperLink";

export default function About(){

    const color = ["sky",  "green", "gray"];
    const [data, setData] = useState("sky");
    const [gambar, setGambar] = useState();
    const picture= [
         "/React-Pertamaku/1.png",
         "/React-Pertamaku/2.jpg",
         "/React-Pertamaku/3.png"
    ];

    return (
        <div>
            <h1>About</h1>
            <HyperLink to="/React-Pertamaku/">
        <p>Go To Home</p>
      </HyperLink>
        
        <div className={"h-20 w-20 bg-" + data + "-500"}></div>
        <button onClick= {() => setData(color[0])}>Sky</button>
        <button onClick= {() => setData(color[1])}>Green</button>
        <button onClick= {() => setData(color[2])}>Gray</button>
        <br />

        <img src={gambar} alt={gambar} className="w-32 h-32" />
        <select onChange={(e) => setGambar(picture[e.target.value])}>

           <option value="">Pilih Gambar</option>
           <option value={0}>Gambar1</option>
           <option value={1}>Gambar2</option>
           <option value={2}>Gambar3</option>

        </select>
        </div>
    )
}