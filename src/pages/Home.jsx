import HyperLink from "../Components/HyperLink";

export default function Home() {

     const data = {
        name : "Akbar",
        from : "Jayapura",
     };
     const data2 = ['Main Game', 'Biru', 'Kucing'] ;

     const data3 = [
        {
            name : "Akbar",
            from : "Jayapura",
         },
         {
            name : "Hanif",
            from : "Palembang",
         },
         {
            name : "Thufail",
            from : "Balikpapan",
         }

     ]
     const angka = [1,2,3,4,5,6,7,8,9,10];


  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl text-cyan-300 text-center font-teko">Home Pages</h1>
      <div className="flex gap-8 justify-center my-6">
      <HyperLink to="/about">
        <p>Go To About</p>
      </HyperLink>
      <HyperLink to="/cuaca">
        <p>Go To Cuaca</p>
      </HyperLink>
      <HyperLink to="/portofolio">
      <p>Go To Portofolio</p>
      </HyperLink>
      </div>
      <div className="text-3xl text-center">
        <h2>Nama Saya : <span className="text-blue-300">{data.name}</span></h2>
        <h2>Saya Dari : <span className="text-blue-300">{data.from}</span></h2>
      </div>
      <div className="text-3xl text-center ">
        <p>Hobi : {data2[0]} </p>
        <p>Warna Kesukaan :{data2[1]} </p>
        <p>Hewan Peliharaan : {data2[2]}</p>

      </div>

       {/* <div className="text-3xl bg-green-500">
     {data3.map((bio) => (
        <p key={bio.name}>{bio.name} dari {bio.from}</p>
     ))}
      </div>
      <div className="text-3xl">

      </div>
      <div className="text-3xl bg-sky-500">
     {data3.filter((bio) => bio.from === "Palembang").map((bio) =>(
        <p key={bio.name}>{bio.name} dari {bio.from}</p>
     ))}
      </div>
      <div className="text-3xl">

      </div>
      <div className="text-3xl bg-purple-700">
        {angka.reduce((a,b) => a + b, 0)}

      </div> */}
    </div>
  );
}
